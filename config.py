# Parámetros del usuario. Todo lo que se ajusta a mano vive en este archivo.

# ── Capital y horizonte ──────────────────────────────────────────────
MONTO_CLP = 4_000_000          # capital disponible para asignar
HORIZONTES_MESES = [12, 36, 60]

# Tolerancia: pérdida máxima aceptable en un mal escenario (p10 a 1 año
# o peor año histórico). Es una bandera informativa, no un veto.
PERDIDA_MAX_ACEPTABLE = -0.15

# ── Instrumentos chilenos (sin API histórica gratuita) ───────────────
# Tasa vigente de depósito a plazo en CLP, anual. Actualizarla con la
# tasa real que ofrezca el banco al momento de decidir.
TASA_DEPOSITO_ANUAL = 0.045

# ── Fondo de emergencia ──────────────────────────────────────────────
# Cuánto queda FUERA del portafolio como colchón líquido. Si es 0, el
# reporte muestra explícitamente el costo de esa decisión.
FONDO_EMERGENCIA_CLP = 0
GASTO_MENSUAL_CLP = 800_000    # para medir el colchón en meses de gasto

# ── Motor de simulación ──────────────────────────────────────────────
N_SIMULACIONES = 5_000
BLOQUE_MESES = 6               # bootstrap por bloques: preserva rachas y correlaciones
ANIOS_HISTORIA = 15            # ventana máxima de datos históricos
SEMILLA = 42                   # reproducibilidad

# ── Módulo 2: paper trading (100% simulado, sin bróker) ──────────────
PAPER_CAPITAL_INICIAL_CLP = 1_000_000  # capital ficticio
PAPER_RIESGO_DIARIO_CLP = 10_000       # riesgo asignado por operación nueva
PAPER_RIESGO_MAX_PCT = 0.01            # tope duro: 1% del equity simulado por operación
PAPER_TICKERS = ["SPY", "QQQ", "SOXX"]
PAPER_BENCHMARK = "SPY"                # comparación buy-and-hold
PAPER_BACKTEST_MESES = 24              # validación histórica de las estrategias

# Criterio de graduación para pasar a dinero real. Se define AQUÍ, antes
# de empezar, no después. El monto real inicial debe poder perderse por
# completo sin impacto.
GRADUACION = {
    "min_meses": 6,
    "sharpe_min": 1.0,
    "drawdown_max": -0.15,
    "monto_real_maximo_clp": 200_000,
}
