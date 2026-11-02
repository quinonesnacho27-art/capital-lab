window.DATOS = {
 "generado": "2026-11-02 20:54 UTC",
 "parametros": {
  "monto_clp": 4000000,
  "perdida_max_aceptable": -0.15,
  "tasa_deposito_anual": 0.045,
  "n_simulaciones": 5000,
  "bloque_meses": 6,
  "activos": {
   "deposito": {
    "nombre": "Depósito a plazo CLP",
    "nota": "Tasa fija configurable, sin volatilidad ni riesgo cambiario."
   },
   "dividendos": {
    "nombre": "Acciones de dividendos",
    "nota": "Proxy: VYM (canasta de acciones de dividendos USA)."
   },
   "fm_deuda": {
    "nombre": "Fondo mutuo deuda",
    "nota": "Proxy: AGG (bonos USA) menos 1,2% anual de comisión."
   },
   "sp500": {
    "nombre": "ETF S&P 500",
    "nota": "SPY, retorno total con dividendos."
   },
   "tech": {
    "nombre": "ETF tech/semiconductores",
    "nota": "SOXX, retorno total con dividendos."
   }
  }
 },
 "rango_datos": {
  "desde": "2011-11",
  "hasta": "2026-10",
  "meses": 180
 },
 "mezclas": [
  {
   "nombre": "Conservadora",
   "pesos": {
    "deposito": 0.6,
    "fm_deuda": 0.3,
    "sp500": 0.1
   },
   "horizontes": {
    "12": {
     "p10_clp": 4030648,
     "p50_clp": 4254893,
     "p90_clp": 4491268,
     "p10_pct": 0.0077,
     "p50_pct": 0.0637,
     "p90_pct": 0.1228,
     "prob_perdida": 0.073
    },
    "36": {
     "p10_clp": 4405215,
     "p50_clp": 4828964,
     "p90_clp": 5302906,
     "p10_pct": 0.1013,
     "p50_pct": 0.2072,
     "p90_pct": 0.3257,
     "prob_perdida": 0.006
    },
    "60": {
     "p10_clp": 4857643,
     "p50_clp": 5467913,
     "p90_clp": 6168826,
     "p10_pct": 0.2144,
     "p50_pct": 0.367,
     "p90_pct": 0.5422,
     "prob_perdida": 0.0002
    }
   },
   "peor_anio": {
    "anio": 2022,
    "retorno": -0.0354
   },
   "mejor_anio": {
    "anio": 2021,
    "retorno": 0.1237
   },
   "max_drawdown": -0.0543,
   "alerta_tolerancia": false
  },
  {
   "nombre": "Moderada",
   "pesos": {
    "deposito": 0.25,
    "fm_deuda": 0.25,
    "sp500": 0.35,
    "dividendos": 0.15
   },
   "horizontes": {
    "12": {
     "p10_clp": 4050522,
     "p50_clp": 4481846,
     "p90_clp": 4979578,
     "p10_pct": 0.0126,
     "p50_pct": 0.1205,
     "p90_pct": 0.2449,
     "prob_perdida": 0.076
    },
    "36": {
     "p10_clp": 4719287,
     "p50_clp": 5651271,
     "p90_clp": 6747523,
     "p10_pct": 0.1798,
     "p50_pct": 0.4128,
     "p90_pct": 0.6869,
     "prob_perdida": 0.0052
    },
    "60": {
     "p10_clp": 5640494,
     "p50_clp": 7109759,
     "p90_clp": 8845359,
     "p10_pct": 0.4101,
     "p50_pct": 0.7774,
     "p90_pct": 1.2113,
     "prob_perdida": 0.0004
    }
   },
   "peor_anio": {
    "anio": 2022,
    "retorno": -0.0906
   },
   "mejor_anio": {
    "anio": 2021,
    "retorno": 0.3034
   },
   "max_drawdown": -0.11,
   "alerta_tolerancia": false
  },
  {
   "nombre": "Agresiva",
   "pesos": {
    "deposito": 0.1,
    "sp500": 0.45,
    "tech": 0.3,
    "dividendos": 0.15
   },
   "horizontes": {
    "12": {
     "p10_clp": 4157049,
     "p50_clp": 4898304,
     "p90_clp": 5780578,
     "p10_pct": 0.0393,
     "p50_pct": 0.2246,
     "p90_pct": 0.4451,
     "prob_perdida": 0.0566
    },
    "36": {
     "p10_clp": 5541016,
     "p50_clp": 7326660,
     "p90_clp": 9745634,
     "p10_pct": 0.3853,
     "p50_pct": 0.8317,
     "p90_pct": 1.4364,
     "prob_perdida": 0.002
    },
    "60": {
     "p10_clp": 7643014,
     "p50_clp": 10996136,
     "p90_clp": 15965692,
     "p10_pct": 0.9108,
     "p50_pct": 1.749,
     "p90_pct": 2.9914,
     "prob_perdida": 0.0002
    }
   },
   "peor_anio": {
    "anio": 2022,
    "retorno": -0.1897
   },
   "mejor_anio": {
    "anio": 2021,
    "retorno": 0.5348
   },
   "max_drawdown": -0.1897,
   "alerta_tolerancia": true
  }
 ],
 "emergencia": {
  "fondo_actual_clp": 0,
  "meses_cubiertos": 0.0,
  "gasto_mensual_clp": 800000,
  "horizonte_costo_meses": 60,
  "escenarios": [
   {
    "meses": 3,
    "colchon_clp": 2400000,
    "por_mezcla": [
     {
      "mezcla": "Conservadora",
      "costo_clp": 289963
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 1274923
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 3606763
     }
    ]
   },
   {
    "meses": 6,
    "colchon_clp": 4000000,
    "por_mezcla": [
     {
      "mezcla": "Conservadora",
      "costo_clp": 483272
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 2124872
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 6011272
     }
    ]
   }
  ],
  "riesgo_liquidacion_12m": [
   {
    "mezcla": "Conservadora",
    "p10_12m_clp": 4030648,
    "p10_12m_pct": 0.0077
   },
   {
    "mezcla": "Moderada",
    "p10_12m_clp": 4050522,
    "p10_12m_pct": 0.0126
   },
   {
    "mezcla": "Agresiva",
    "p10_12m_clp": 4157049,
    "p10_12m_pct": 0.0393
   }
  ]
 },
 "paper_trading": null
};
