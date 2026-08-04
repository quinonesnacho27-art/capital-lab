# capital-lab

Laboratorio personal de decisiones de inversión. Dos módulos independientes
que comparten un dashboard estático (GitHub Pages).

**Qué NO es esto:**
- No se conecta a ninguna cuenta de bróker ni ejecuta órdenes reales.
- No emite recomendaciones de inversión: presenta trade-offs con datos
  históricos para que el usuario decida.
- Los resultados son CLP **nominales** (no descuentan inflación/UF).

## Módulo 1 — Simulador de asignación de portafolio (`portafolio/`)

Compara mezclas de activos simulando con datos históricos reales (~15 años,
yfinance) qué rango de resultados habrían tenido. Nunca muestra un único
"retorno esperado": siempre percentiles 10/50/90 a 1, 3 y 5 años, peor y
mejor año calendario histórico, drawdown máximo y probabilidad de pérdida.

- **Riesgo cambiario incluido**: los activos en USD se convierten mes a mes
  con el histórico USD/CLP (`CLP=X`), así los resultados son en pesos reales.
- **Bootstrap por bloques** (6 meses): las trayectorias se arman con bloques
  de meses consecutivos reales, preservando rachas y correlaciones entre
  activos y con el dólar.
- **Instrumentos chilenos**: depósito a plazo = tasa fija configurable;
  fondos mutuos = ETF proxy menos comisión anual típica (configurable).
- **Fondo de emergencia**: el reporte muestra explícitamente el costo de
  oportunidad de apartar 3/6 meses de gastos vs. el riesgo de liquidar la
  inversión en un mal momento si no hay colchón.

```
pip install -r requirements.txt
python main_portafolio.py
```

Parámetros (monto, tolerancia, tasa de depósito, gasto mensual, mezclas) en
`config.py` y `portafolio/mezclas.py`. La corrida imprime la tabla
comparativa y regenera `site/data.js` para el dashboard.

## Módulo 2 — Laboratorio de paper trading (`paper/`)

Simulación 100% ficticia para aprender trading sin arriesgar nada:

- **Estrategias explícitas** (`paper/estrategias.py`): cruce de medias 20/50,
  rebote RSI 30/70 y ruptura de 20 días, sobre SPY/QQQ/SOXX.
- **Gestión de riesgo obligatoria**: riesgo por operación = min($10.000, 1%
  del equity simulado); todo entra con stop loss a 2×ATR14; sin apalancamiento.
- **Journal automático** (`paper/registro/journal.json`): cada operación con
  su razón de entrada y salida en texto.
- **Métricas**: Sharpe (sobre la tasa del depósito), drawdown máximo, win
  rate y comparación contra buy-and-hold del benchmark.
- **Determinístico**: el período "live" se recalcula completo desde la fecha
  de inicio en cada corrida — no hay estado que se pueda corromper. Además
  corre un backtest de validación de 24 meses.
- **Criterio de graduación** (`config.GRADUACION`, definido ANTES de empezar):
  mínimo 6 meses, Sharpe ≥ 1,0, drawdown ≥ −15%. Y aun cumpliéndolo, el
  monto real inicial tiene tope ($200.000, 100% perdible por diseño).

```
python main_paper.py
```

## Dashboard (`site/`)

`site/index.html` es estático y lee `site/data.js` (Módulo 1) y
`site/paper.js` (Módulo 2); funciona con doble clic y publicado en GitHub
Pages. Los workflows en `.github/workflows/` siguen el patrón de
parcelas-radar: `actualizar.yml` re-simula el portafolio cada lunes,
`paper-diario.yml` corre el paper trading de martes a sábado tras el cierre
de EEUU, y `publicar.yml` publica `site/` en Pages ante cada cambio.
