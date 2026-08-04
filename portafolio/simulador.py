# Motor de simulación: bootstrap por bloques sobre retornos históricos.
#
# Con rebalanceo mensual a pesos objetivo, el retorno del portafolio en cada
# mes es la suma ponderada de los retornos de sus activos ese mes. Por eso
# basta con construir UNA serie histórica de retornos del portafolio y
# bootstrapear bloques de esa serie: al muestrear filas completas (mismas
# fechas para todos los activos) las correlaciones entre activos y con el
# dólar quedan preservadas por construcción.

from __future__ import annotations

import math

import numpy as np
import pandas as pd


def retornos_portafolio(retornos_clp: pd.DataFrame, pesos: dict[str, float],
                        tasa_deposito_anual: float) -> pd.Series:
    """Serie histórica mensual del portafolio rebalanceado a `pesos`."""
    total = sum(pesos.values())
    if not math.isclose(total, 1.0, abs_tol=1e-6):
        raise ValueError(f"Los pesos deben sumar 1.0 (suman {total})")

    r_deposito = (1 + tasa_deposito_anual) ** (1 / 12) - 1
    r = pd.Series(0.0, index=retornos_clp.index)
    for clave, peso in pesos.items():
        if clave == "deposito":
            r += peso * r_deposito
        else:
            r += peso * retornos_clp[clave]
    return r


def simular_trayectorias(r_hist: pd.Series, n_sims: int, horizonte_max: int,
                         bloque: int, rng: np.random.Generator) -> np.ndarray:
    """Matriz (n_sims, horizonte_max) de factores de crecimiento acumulado.

    Cada trayectoria se arma concatenando bloques de `bloque` meses
    consecutivos elegidos al azar de la historia (bootstrap por bloques).
    """
    valores = np.asarray(r_hist, dtype=float)
    n = len(valores)
    if n < bloque:
        raise ValueError("Historia demasiado corta para el tamaño de bloque")

    n_bloques = math.ceil(horizonte_max / bloque)
    inicios = rng.integers(0, n - bloque + 1, size=(n_sims, n_bloques))
    indices = (inicios[:, :, None] + np.arange(bloque)[None, None, :])
    indices = indices.reshape(n_sims, -1)[:, :horizonte_max]
    return np.cumprod(1 + valores[indices], axis=1)


def resumen_horizontes(crecimiento: np.ndarray, horizontes: list[int],
                       monto: float) -> dict:
    """Percentiles 10/50/90 y probabilidad de pérdida por horizonte."""
    resumen = {}
    for h in horizontes:
        finales = crecimiento[:, h - 1]
        p10, p50, p90 = np.percentile(finales, [10, 50, 90])
        resumen[str(h)] = {
            "p10_clp": round(monto * p10),
            "p50_clp": round(monto * p50),
            "p90_clp": round(monto * p90),
            "p10_pct": round(p10 - 1, 4),
            "p50_pct": round(p50 - 1, 4),
            "p90_pct": round(p90 - 1, 4),
            "prob_perdida": round(float(np.mean(finales < 1.0)), 4),
        }
    return resumen


def anios_extremos(r_hist: pd.Series) -> tuple[dict, dict]:
    """Peor y mejor año calendario de la serie histórica (solo años completos)."""
    por_anio = (1 + r_hist).groupby(r_hist.index.year).agg(["prod", "count"])
    completos = por_anio[por_anio["count"] == 12]["prod"] - 1
    if completos.empty:
        raise ValueError("No hay años calendario completos en la historia")
    return (
        {"anio": int(completos.idxmin()), "retorno": round(float(completos.min()), 4)},
        {"anio": int(completos.idxmax()), "retorno": round(float(completos.max()), 4)},
    )


def max_drawdown_historico(r_hist: pd.Series) -> float:
    """Caída máxima desde un peak en la serie histórica del portafolio."""
    acumulado = (1 + r_hist).cumprod()
    caida = acumulado / acumulado.cummax() - 1
    return round(float(caida.min()), 4)


def evaluar_mezcla(nombre: str, pesos: dict[str, float],
                   retornos_clp: pd.DataFrame, tasa_deposito_anual: float,
                   monto: float, horizontes: list[int], n_sims: int,
                   bloque: int, perdida_max: float,
                   rng: np.random.Generator) -> dict:
    """Evalúa una mezcla completa: simulación + métricas históricas."""
    r_hist = retornos_portafolio(retornos_clp, pesos, tasa_deposito_anual)
    crecimiento = simular_trayectorias(r_hist, n_sims, max(horizontes), bloque, rng)
    peor, mejor = anios_extremos(r_hist)
    horizontes_res = resumen_horizontes(crecimiento, horizontes, monto)

    p10_1a = horizontes_res[str(min(horizontes))]["p10_pct"]
    alerta = p10_1a < perdida_max or peor["retorno"] < perdida_max

    return {
        "nombre": nombre,
        "pesos": pesos,
        "horizontes": horizontes_res,
        "peor_anio": peor,
        "mejor_anio": mejor,
        "max_drawdown": max_drawdown_historico(r_hist),
        "alerta_tolerancia": bool(alerta),
    }
