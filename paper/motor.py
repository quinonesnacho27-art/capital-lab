# Motor de paper trading: recorre día a día los precios históricos y ejecuta
# operaciones SIMULADAS con gestión de riesgo obligatoria.
#
# El motor es determinístico: con los mismos datos y fechas produce el mismo
# journal. Por eso el modo "live" recalcula todo desde la fecha de inicio en
# cada corrida — no hay estado incremental que se pueda corromper.
#
# Reglas de riesgo (no opcionales):
#  - Tamaño de posición: el riesgo por operación (distancia al stop) es
#    min(riesgo_diario_asignado, 1% del equity simulado).
#  - Toda posición nace con stop loss a 2×ATR14 bajo el precio de entrada.
#  - Una posición máximo por par (estrategia, ticker). Solo largos.

from __future__ import annotations

import pandas as pd

from paper.estrategias import DIAS_CALENTAMIENTO, ESTRATEGIAS, preparar_indicadores

STOP_ATR = 2.0


def simular(precios_usd: dict[str, pd.DataFrame], fx_diario: pd.Series,
            desde: pd.Timestamp, hasta: pd.Timestamp, capital_inicial: float,
            riesgo_diario: float, riesgo_max_pct: float) -> dict:
    """Simula todas las estrategias sobre todos los tickers en [desde, hasta]."""
    indicadores = {t: preparar_indicadores(df) for t, df in precios_usd.items()}
    fx = fx_diario.reindex(
        sorted(set().union(*[df.index for df in precios_usd.values()]))
    ).ffill()

    cash = float(capital_inicial)
    abiertas: dict[tuple[str, str], dict] = {}
    trades: list[dict] = []
    equity: list[dict] = []

    calendario = sorted(set().union(*[df.index for df in indicadores.values()]))
    calendario = [d for d in calendario if desde <= d <= hasta]

    def cerrar(clave, fecha, precio_usd, razon):
        nonlocal cash
        pos = abiertas.pop(clave)
        tc = float(fx.loc[fecha])
        bruto = pos["unidades"] * precio_usd * tc
        cash += bruto
        invertido = pos["invertido_clp"]
        trades.append({
            "ticker": clave[1],
            "estrategia": ESTRATEGIAS[clave[0]]["nombre"],
            "fecha_entrada": str(pos["fecha"].date()),
            "fecha_salida": str(fecha.date()),
            "razon_entrada": pos["razon"],
            "razon_salida": razon,
            "precio_entrada_usd": round(pos["precio_usd"], 2),
            "precio_salida_usd": round(precio_usd, 2),
            "riesgo_clp": round(pos["riesgo_clp"]),
            "invertido_clp": round(invertido),
            "resultado_clp": round(bruto - invertido),
            "resultado_pct": round(bruto / invertido - 1, 4),
        })

    for fecha in calendario:
        tc = float(fx.loc[fecha])

        # 1) Stops intradía: se revisan antes que cualquier señal de cierre.
        for clave in list(abiertas):
            estrategia, ticker = clave
            d = indicadores[ticker]
            if fecha not in d.index:
                continue
            fila = d.loc[fecha]
            stop = abiertas[clave]["stop_usd"]
            if fila["Open"] <= stop:
                cerrar(clave, fecha, float(fila["Open"]),
                       f"Stop loss (gap de apertura bajo {stop:.2f} USD)")
            elif fila["Low"] <= stop:
                cerrar(clave, fecha, stop, f"Stop loss tocado en {stop:.2f} USD")

        # 2) Señales de salida al cierre.
        for clave in list(abiertas):
            estrategia, ticker = clave
            d = indicadores[ticker]
            if fecha not in d.index:
                continue
            i = d.index.get_loc(fecha)
            razon = ESTRATEGIAS[estrategia]["salida"](d, i)
            if razon:
                cerrar(clave, fecha, float(d.iloc[i]["Close"]), razon)

        # 3) Señales de entrada al cierre.
        valor_posiciones = sum(
            pos["unidades"] * float(indicadores[t].loc[:fecha].iloc[-1]["Close"]) * tc
            for (e, t), pos in abiertas.items()
        )
        for ticker, d in indicadores.items():
            if fecha not in d.index:
                continue
            i = d.index.get_loc(fecha)
            if i < DIAS_CALENTAMIENTO:
                continue
            fila = d.iloc[i]
            for estrategia, spec in ESTRATEGIAS.items():
                clave = (estrategia, ticker)
                if clave in abiertas:
                    continue
                razon = spec["entrada"](d, i)
                if not razon:
                    continue
                equity_actual = cash + valor_posiciones
                riesgo_clp = min(riesgo_diario, riesgo_max_pct * equity_actual)
                stop_usd = float(fila["Close"]) - STOP_ATR * float(fila["atr14"])
                riesgo_unidad_clp = (float(fila["Close"]) - stop_usd) * tc
                if riesgo_unidad_clp <= 0 or riesgo_clp <= 0:
                    continue
                unidades = riesgo_clp / riesgo_unidad_clp
                costo = unidades * float(fila["Close"]) * tc
                if costo > cash:  # sin apalancamiento: se compra lo que alcanza
                    unidades = cash / (float(fila["Close"]) * tc)
                    costo = unidades * float(fila["Close"]) * tc
                if costo < 1000:  # no vale la pena una posición de menos de $1.000
                    continue
                cash -= costo
                valor_posiciones += costo
                abiertas[clave] = {
                    "fecha": fecha, "razon": razon,
                    "precio_usd": float(fila["Close"]), "stop_usd": stop_usd,
                    "unidades": unidades, "invertido_clp": costo,
                    "riesgo_clp": riesgo_clp,
                }

        # 4) Equity del día a precios de cierre.
        valor = sum(
            pos["unidades"] * float(indicadores[t].loc[:fecha].iloc[-1]["Close"]) * tc
            for (e, t), pos in abiertas.items()
        )
        equity.append({"fecha": str(fecha.date()), "equity_clp": round(cash + valor)})

    posiciones_abiertas = [
        {
            "ticker": t, "estrategia": ESTRATEGIAS[e]["nombre"],
            "fecha_entrada": str(pos["fecha"].date()), "razon_entrada": pos["razon"],
            "precio_entrada_usd": round(pos["precio_usd"], 2),
            "stop_usd": round(pos["stop_usd"], 2),
            "invertido_clp": round(pos["invertido_clp"]),
        }
        for (e, t), pos in abiertas.items()
    ]
    return {"equity": equity, "trades": trades, "abiertas": posiciones_abiertas}
