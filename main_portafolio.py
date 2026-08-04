# Módulo 1 — Simulador de asignación de portafolio.
#
# Herramienta de DECISIÓN, no de ejecución: no se conecta a ningún bróker,
# no ejecuta órdenes y no emite una recomendación final. Muestra rangos de
# resultados históricos simulados para que el usuario decida.

import sys

import numpy as np

import config

# En Windows, al redirigir la salida la consola cae a cp1252 y los símbolos
# (⚠, ═) rompen el print. UTF-8 con reemplazo evita el crash en cualquier caso.
if hasattr(sys.stdout, "reconfigure"):
    sys.stdout.reconfigure(encoding="utf-8", errors="replace")
from portafolio.activos import ACTIVOS
from portafolio.datos import retornos_mensuales_clp
from portafolio.mezclas import MEZCLAS
from portafolio.reporte import armar_datos, bloque_emergencia, escribir_data_js
from portafolio.simulador import evaluar_mezcla


def clp(valor: float) -> str:
    return "$" + f"{round(valor):,}".replace(",", ".")


def pct(valor: float) -> str:
    return f"{valor * 100:+.1f}%"


def main() -> None:
    claves_usadas = sorted({c for pesos in MEZCLAS.values() for c in pesos})
    retornos = retornos_mensuales_clp(claves_usadas, config.ANIOS_HISTORIA)
    rango = {
        "desde": str(retornos.index.min()),
        "hasta": str(retornos.index.max()),
        "meses": int(len(retornos)),
    }
    print(f"Datos históricos en CLP: {rango['desde']} a {rango['hasta']} "
          f"({rango['meses']} meses, riesgo cambiario incluido)\n")

    rng = np.random.default_rng(config.SEMILLA)
    resultados = [
        evaluar_mezcla(
            nombre, pesos, retornos, config.TASA_DEPOSITO_ANUAL,
            config.MONTO_CLP, config.HORIZONTES_MESES, config.N_SIMULACIONES,
            config.BLOQUE_MESES, config.PERDIDA_MAX_ACEPTABLE, rng,
        )
        for nombre, pesos in MEZCLAS.items()
    ]

    print(f"Monto simulado: {clp(config.MONTO_CLP)} | "
          f"{config.N_SIMULACIONES:,} trayectorias por mezcla | "
          f"tolerancia: {pct(config.PERDIDA_MAX_ACEPTABLE)} en mal escenario\n")

    for r in resultados:
        composicion = ", ".join(
            f"{ACTIVOS[c].nombre} {p * 100:.0f}%" for c, p in r["pesos"].items()
        )
        print(f"═══ {r['nombre']} ═══")
        print(f"  {composicion}")
        for h in config.HORIZONTES_MESES:
            d = r["horizontes"][str(h)]
            print(f"  {h // 12} año(s): p10 {clp(d['p10_clp'])} ({pct(d['p10_pct'])}) | "
                  f"p50 {clp(d['p50_clp'])} ({pct(d['p50_pct'])}) | "
                  f"p90 {clp(d['p90_clp'])} ({pct(d['p90_pct'])}) | "
                  f"prob. pérdida {d['prob_perdida'] * 100:.0f}%")
        print(f"  Peor año histórico:  {r['peor_anio']['anio']} ({pct(r['peor_anio']['retorno'])})")
        print(f"  Mejor año histórico: {r['mejor_anio']['anio']} ({pct(r['mejor_anio']['retorno'])})")
        print(f"  Drawdown máximo histórico: {pct(r['max_drawdown'])}")
        if r["alerta_tolerancia"]:
            print("  ⚠ Excede tu pérdida máxima aceptable en un mal escenario.")
        print()

    emergencia = bloque_emergencia(
        resultados, config.MONTO_CLP, config.FONDO_EMERGENCIA_CLP,
        config.GASTO_MENSUAL_CLP, config.TASA_DEPOSITO_ANUAL,
    )
    print("═══ Fondo de emergencia ═══")
    print(f"  Colchón actual fuera del portafolio: {clp(emergencia['fondo_actual_clp'])} "
          f"({emergencia['meses_cubiertos']} meses de gasto)")
    if emergencia["fondo_actual_clp"] == 0:
        print("  Sin colchón, una urgencia obliga a liquidar en el momento que toque.")
        print("  Valor p10 a 12 meses si eso ocurre en un mal año:")
        for l in emergencia["riesgo_liquidacion_12m"]:
            print(f"    {l['mezcla']}: {clp(l['p10_12m_clp'])} ({pct(l['p10_12m_pct'])})")
    print("  Costo (p50 a 5 años) de apartar un colchón al depósito en vez de invertirlo:")
    for e in emergencia["escenarios"]:
        costos = ", ".join(f"{c['mezcla']}: {clp(c['costo_clp'])}" for c in e["por_mezcla"])
        print(f"    {e['meses']} meses de gasto ({clp(e['colchon_clp'])}): {costos}")
    print()

    parametros = {
        "monto_clp": config.MONTO_CLP,
        "perdida_max_aceptable": config.PERDIDA_MAX_ACEPTABLE,
        "tasa_deposito_anual": config.TASA_DEPOSITO_ANUAL,
        "n_simulaciones": config.N_SIMULACIONES,
        "bloque_meses": config.BLOQUE_MESES,
        "activos": {c: {"nombre": ACTIVOS[c].nombre, "nota": ACTIVOS[c].nota}
                    for c in claves_usadas},
    }
    ruta = escribir_data_js(armar_datos(resultados, emergencia, rango, parametros))
    print(f"Dashboard actualizado: {ruta}")
    print("Herramienta informativa. No es recomendación de inversión. No ejecuta órdenes.")


if __name__ == "__main__":
    main()
