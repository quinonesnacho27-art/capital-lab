# Módulo 2 — Laboratorio de paper trading. 100% SIMULADO.
#
# No se conecta a ningún bróker ni ejecuta órdenes reales. Cada corrida:
#  1. Recalcula el período "live" desde la fecha de inicio registrada
#     (determinístico: mismo dato, mismo journal — sin estado corruptible).
#  2. Corre además un backtest de validación de las estrategias (24 meses).
#  3. Evalúa el criterio de graduación definido en config.GRADUACION.
#  4. Escribe paper/registro/journal.json (el registro) y site/paper.js
#     (el dashboard).

from __future__ import annotations

import json
import sys
from datetime import date, datetime, timezone
from pathlib import Path

import pandas as pd

import config
from paper.metricas import buy_and_hold, calcular
from paper.motor import simular
from portafolio.datos import precios_diarios

RAIZ = Path(__file__).resolve().parent
DIR_REGISTRO = RAIZ / "paper" / "registro"
RUTA_INICIO = DIR_REGISTRO / "inicio.json"
RUTA_JOURNAL = DIR_REGISTRO / "journal.json"
RUTA_PAPER_JS = RAIZ / "site" / "paper.js"

if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")


def clp(valor: float) -> str:
    return "$" + f"{round(valor):,}".replace(",", ".")


def obtener_inicio() -> dict:
    """La fecha de inicio y el tope de dinero real se fijan UNA vez, al
    empezar. El reloj de graduación corre desde aquí; no se resetea."""
    if RUTA_INICIO.exists():
        return json.loads(RUTA_INICIO.read_text(encoding="utf-8"))
    inicio = {
        "fecha_inicio": str(date.today()),
        "monto_real_maximo_clp": config.GRADUACION["monto_real_maximo_clp"],
        "nota": "Definido antes de empezar. El monto real inicial debe poder "
                "perderse por completo sin impacto.",
    }
    DIR_REGISTRO.mkdir(parents=True, exist_ok=True)
    RUTA_INICIO.write_text(json.dumps(inicio, ensure_ascii=False, indent=1),
                           encoding="utf-8")
    return inicio


def evaluar_graduacion(inicio: dict, metricas: dict) -> dict:
    g = config.GRADUACION
    meses = round((date.today() - date.fromisoformat(inicio["fecha_inicio"])).days / 30.44, 1)
    chequeos = {
        "meses": {"valor": meses, "umbral": g["min_meses"],
                  "cumple": meses >= g["min_meses"]},
        "sharpe": {"valor": metricas["sharpe"], "umbral": g["sharpe_min"],
                   "cumple": metricas["sharpe"] is not None
                   and metricas["sharpe"] >= g["sharpe_min"]},
        "drawdown": {"valor": metricas["max_drawdown"], "umbral": g["drawdown_max"],
                     "cumple": metricas["max_drawdown"] is not None
                     and metricas["max_drawdown"] >= g["drawdown_max"]},
    }
    return {
        "chequeos": chequeos,
        "graduado": all(c["cumple"] for c in chequeos.values()),
        "monto_real_maximo_clp": inicio["monto_real_maximo_clp"],
    }


def main() -> None:
    inicio = obtener_inicio()
    hoy = pd.Timestamp(date.today())

    print("Descargando precios diarios…")
    precios = {t: precios_diarios(t) for t in config.PAPER_TICKERS}
    fx = precios_diarios("CLP=X")["Close"]

    comun = {
        "capital_inicial": config.PAPER_CAPITAL_INICIAL_CLP,
        "riesgo_diario": config.PAPER_RIESGO_DIARIO_CLP,
        "riesgo_max_pct": config.PAPER_RIESGO_MAX_PCT,
    }

    # ── Período live: desde la fecha de inicio registrada ────────────
    desde_live = pd.Timestamp(inicio["fecha_inicio"])
    live = simular(precios, fx, desde_live, hoy, **comun)
    m_live = calcular(live["equity"], live["trades"], config.TASA_DEPOSITO_ANUAL)
    bh_live = buy_and_hold(precios[config.PAPER_BENCHMARK], fx,
                           [e["fecha"] for e in live["equity"]],
                           config.PAPER_CAPITAL_INICIAL_CLP)

    # ── Backtest de validación de las estrategias ────────────────────
    desde_bt = hoy - pd.DateOffset(months=config.PAPER_BACKTEST_MESES)
    bt = simular(precios, fx, desde_bt, hoy, **comun)
    m_bt = calcular(bt["equity"], bt["trades"], config.TASA_DEPOSITO_ANUAL)
    bh_bt = buy_and_hold(precios[config.PAPER_BENCHMARK], fx,
                         [e["fecha"] for e in bt["equity"]],
                         config.PAPER_CAPITAL_INICIAL_CLP)

    graduacion = evaluar_graduacion(inicio, m_live)

    # ── Registro y dashboard ─────────────────────────────────────────
    DIR_REGISTRO.mkdir(parents=True, exist_ok=True)
    RUTA_JOURNAL.write_text(json.dumps({
        "inicio": inicio,
        "trades": live["trades"],
        "posiciones_abiertas": live["abiertas"],
        "metricas": m_live,
    }, ensure_ascii=False, indent=1), encoding="utf-8")

    paper = {
        "generado": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "inicio": inicio,
        "parametros": {
            "capital_inicial_clp": config.PAPER_CAPITAL_INICIAL_CLP,
            "riesgo_diario_clp": config.PAPER_RIESGO_DIARIO_CLP,
            "riesgo_max_pct": config.PAPER_RIESGO_MAX_PCT,
            "tickers": config.PAPER_TICKERS,
            "benchmark": config.PAPER_BENCHMARK,
        },
        "live": {**live, "metricas": m_live, "buy_hold": bh_live},
        "backtest": {
            "desde": str(desde_bt.date()), "hasta": str(hoy.date()),
            **bt, "metricas": m_bt, "buy_hold": bh_bt,
        },
        "graduacion": graduacion,
    }
    RUTA_PAPER_JS.write_text(
        "window.PAPER = " + json.dumps(paper, ensure_ascii=False, indent=1) + ";\n",
        encoding="utf-8")

    # ── Resumen en consola ───────────────────────────────────────────
    print(f"\nPaper trading desde {inicio['fecha_inicio']} "
          f"({m_live['sesiones']} sesiones, {m_live['n_trades']} operaciones cerradas, "
          f"{len(live['abiertas'])} abiertas)")
    if m_live["retorno_total"] is not None:
        print(f"  Equity: {clp(config.PAPER_CAPITAL_INICIAL_CLP)} → "
              f"{clp(live['equity'][-1]['equity_clp'])} ({m_live['retorno_total'] * 100:+.1f}%)")
    print(f"\nBacktest de validación ({config.PAPER_BACKTEST_MESES} meses): "
          f"{m_bt['n_trades']} operaciones, win rate "
          f"{(m_bt['win_rate'] or 0) * 100:.0f}%, Sharpe {m_bt['sharpe']}, "
          f"drawdown {(m_bt['max_drawdown'] or 0) * 100:.1f}%")
    bh_fin = bh_bt[-1]["equity_clp"] if bh_bt else 0
    bt_fin = bt["equity"][-1]["equity_clp"] if bt["equity"] else 0
    print(f"  Estrategias: {clp(bt_fin)} vs buy-and-hold {config.PAPER_BENCHMARK}: {clp(bh_fin)}")

    print("\nCriterio de graduación (definido antes de empezar):")
    for nombre, c in graduacion["chequeos"].items():
        estado = "✔" if c["cumple"] else "✘"
        print(f"  {estado} {nombre}: {c['valor']} (umbral {c['umbral']})")
    print(f"  Tope de dinero real si algún día se gradúa: "
          f"{clp(graduacion['monto_real_maximo_clp'])} — 100% perdible por diseño.")
    print(f"\nDashboard actualizado: {RUTA_PAPER_JS}")
    print("100% simulado. Sin bróker. Sin órdenes reales.")


if __name__ == "__main__":
    main()
