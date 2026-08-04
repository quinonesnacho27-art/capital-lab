# Métricas del paper trading: Sharpe, drawdown, win rate y comparación
# contra buy-and-hold del benchmark. Con pocas sesiones las métricas de
# riesgo aún no son significativas y se reportan como None.

from __future__ import annotations

import numpy as np
import pandas as pd

MIN_SESIONES_METRICAS = 20


def calcular(equity: list[dict], trades: list[dict],
             tasa_libre_riesgo_anual: float) -> dict:
    serie = pd.Series(
        [e["equity_clp"] for e in equity],
        index=pd.to_datetime([e["fecha"] for e in equity]), dtype=float,
    )
    m: dict = {
        "sesiones": int(len(serie)),
        "n_trades": len(trades),
        "sharpe": None, "max_drawdown": None, "win_rate": None,
        "retorno_total": None, "resultado_clp": None,
    }
    if len(serie) >= 2:
        m["retorno_total"] = round(float(serie.iloc[-1] / serie.iloc[0] - 1), 4)
        m["resultado_clp"] = round(float(serie.iloc[-1] - serie.iloc[0]))
        caida = serie / serie.cummax() - 1
        m["max_drawdown"] = round(float(caida.min()), 4)
    if len(serie) >= MIN_SESIONES_METRICAS:
        r = serie.pct_change().dropna()
        rf_diaria = (1 + tasa_libre_riesgo_anual) ** (1 / 252) - 1
        if float(r.std()) > 0:
            m["sharpe"] = round(float((r.mean() - rf_diaria) / r.std() * np.sqrt(252)), 2)
    if trades:
        ganadores = sum(1 for t in trades if t["resultado_clp"] > 0)
        m["win_rate"] = round(ganadores / len(trades), 4)
    return m


def buy_and_hold(precios_benchmark: pd.DataFrame, fx_diario: pd.Series,
                 fechas: list[str], capital_inicial: float) -> list[dict]:
    """Equity de invertir todo el capital en el benchmark (en CLP) el día 1."""
    if not fechas:
        return []
    idx = pd.to_datetime(fechas)
    cierre = precios_benchmark["Close"].reindex(idx).ffill()
    fx = fx_diario.reindex(idx).ffill()
    valor_clp = cierre * fx
    unidades = capital_inicial / float(valor_clp.iloc[0])
    return [
        {"fecha": str(f.date()), "equity_clp": round(unidades * float(v))}
        for f, v in valor_clp.items()
    ]
