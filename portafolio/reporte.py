# Arma el resumen comparativo y lo escribe como site/data.js para el dashboard.
# El dashboard es estático: leyendo data.js funciona igual con doble clic
# (file://) que publicado en GitHub Pages.

from __future__ import annotations

import json
from datetime import datetime, timezone
from pathlib import Path

RAIZ = Path(__file__).resolve().parent.parent
RUTA_DATA_JS = RAIZ / "site" / "data.js"


def bloque_emergencia(resultados: list[dict], monto: float, fondo_actual: float,
                      gasto_mensual: float, tasa_deposito_anual: float,
                      horizonte_costo: int = 60) -> dict:
    """Costo de oportunidad de apartar (o no) un fondo de emergencia.

    Compara, con el p50 de cada mezcla, invertir todo el monto versus dejar
    3 y 6 meses de gastos en depósito líquido. También muestra el riesgo de
    la alternativa: sin colchón, una urgencia obliga a liquidar la mezcla,
    y el p10 a 12 meses es el valor que podrías encontrarte.
    """
    factor_deposito = (1 + tasa_deposito_anual) ** (horizonte_costo / 12)
    escenarios = []
    for meses in (3, 6):
        # El colchón no puede superar el capital disponible: si el gasto de
        # esos meses excede el monto, todo el monto queda como colchón.
        colchon = min(meses * gasto_mensual, monto)
        invertible = monto - colchon
        por_mezcla = []
        for r in resultados:
            factor_p50 = 1 + r["horizontes"][str(horizonte_costo)]["p50_pct"]
            final_todo = monto * factor_p50
            final_con_colchon = invertible * factor_p50 + colchon * factor_deposito
            por_mezcla.append({
                "mezcla": r["nombre"],
                "costo_clp": round(final_todo - final_con_colchon),
            })
        escenarios.append({
            "meses": meses,
            "colchon_clp": round(colchon),
            "por_mezcla": por_mezcla,
        })

    liquidacion = [
        {
            "mezcla": r["nombre"],
            "p10_12m_clp": r["horizontes"]["12"]["p10_clp"],
            "p10_12m_pct": r["horizontes"]["12"]["p10_pct"],
        }
        for r in resultados
    ]

    return {
        "fondo_actual_clp": round(fondo_actual),
        "meses_cubiertos": round(fondo_actual / gasto_mensual, 1),
        "gasto_mensual_clp": round(gasto_mensual),
        "horizonte_costo_meses": horizonte_costo,
        "escenarios": escenarios,
        "riesgo_liquidacion_12m": liquidacion,
    }


def armar_datos(resultados: list[dict], emergencia: dict, rango_datos: dict,
                parametros: dict) -> dict:
    return {
        "generado": datetime.now(timezone.utc).strftime("%Y-%m-%d %H:%M UTC"),
        "parametros": parametros,
        "rango_datos": rango_datos,
        "mezclas": resultados,
        "emergencia": emergencia,
        # El Módulo 2 escribirá aquí sus métricas cuando exista.
        "paper_trading": None,
    }


def escribir_data_js(datos: dict) -> Path:
    RUTA_DATA_JS.parent.mkdir(parents=True, exist_ok=True)
    contenido = "window.DATOS = " + json.dumps(datos, ensure_ascii=False, indent=1) + ";\n"
    RUTA_DATA_JS.write_text(contenido, encoding="utf-8")
    return RUTA_DATA_JS
