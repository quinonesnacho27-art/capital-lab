window.DATOS = {
 "generado": "2026-10-05 19:53 UTC",
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
  "desde": "2011-10",
  "hasta": "2026-09",
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
     "p10_clp": 4031818,
     "p50_clp": 4252184,
     "p90_clp": 4489039,
     "p10_pct": 0.008,
     "p50_pct": 0.063,
     "p90_pct": 0.1223,
     "prob_perdida": 0.0714
    },
    "36": {
     "p10_clp": 4401035,
     "p50_clp": 4817026,
     "p90_clp": 5295260,
     "p10_pct": 0.1003,
     "p50_pct": 0.2043,
     "p90_pct": 0.3238,
     "prob_perdida": 0.0046
    },
    "60": {
     "p10_clp": 4847342,
     "p50_clp": 5453825,
     "p90_clp": 6139039,
     "p10_pct": 0.2118,
     "p50_pct": 0.3635,
     "p90_pct": 0.5348,
     "prob_perdida": 0.0008
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
     "p10_clp": 4056166,
     "p50_clp": 4484349,
     "p90_clp": 4974425,
     "p10_pct": 0.014,
     "p50_pct": 0.1211,
     "p90_pct": 0.2436,
     "prob_perdida": 0.0734
    },
    "36": {
     "p10_clp": 4724987,
     "p50_clp": 5652610,
     "p90_clp": 6746369,
     "p10_pct": 0.1812,
     "p50_pct": 0.4132,
     "p90_pct": 0.6866,
     "prob_perdida": 0.0046
    },
    "60": {
     "p10_clp": 5677998,
     "p50_clp": 7103071,
     "p90_clp": 8930611,
     "p10_pct": 0.4195,
     "p50_pct": 0.7758,
     "p90_pct": 1.2327,
     "prob_perdida": 0.0008
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
     "p10_clp": 4156624,
     "p50_clp": 4905680,
     "p90_clp": 5760764,
     "p10_pct": 0.0392,
     "p50_pct": 0.2264,
     "p90_pct": 0.4402,
     "prob_perdida": 0.0614
    },
    "36": {
     "p10_clp": 5530204,
     "p50_clp": 7329157,
     "p90_clp": 9725069,
     "p10_pct": 0.3826,
     "p50_pct": 0.8323,
     "p90_pct": 1.4313,
     "prob_perdida": 0.0032
    },
    "60": {
     "p10_clp": 7562154,
     "p50_clp": 11048279,
     "p90_clp": 15829873,
     "p10_pct": 0.8905,
     "p50_pct": 1.7621,
     "p90_pct": 2.9575,
     "prob_perdida": 0.0008
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
      "costo_clp": 281563
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 1271083
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 3638203
     }
    ]
   },
   {
    "meses": 6,
    "colchon_clp": 4000000,
    "por_mezcla": [
     {
      "mezcla": "Conservadora",
      "costo_clp": 469272
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 2118472
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 6063672
     }
    ]
   }
  ],
  "riesgo_liquidacion_12m": [
   {
    "mezcla": "Conservadora",
    "p10_12m_clp": 4031818,
    "p10_12m_pct": 0.008
   },
   {
    "mezcla": "Moderada",
    "p10_12m_clp": 4056166,
    "p10_12m_pct": 0.014
   },
   {
    "mezcla": "Agresiva",
    "p10_12m_clp": 4156624,
    "p10_12m_pct": 0.0392
   }
  ]
 },
 "paper_trading": null
};
