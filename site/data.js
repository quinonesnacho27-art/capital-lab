window.DATOS = {
 "generado": "2026-09-14 17:05 UTC",
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
  "desde": "2011-09",
  "hasta": "2026-08",
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
     "p10_clp": 4032299,
     "p50_clp": 4254200,
     "p90_clp": 4491997,
     "p10_pct": 0.0081,
     "p50_pct": 0.0636,
     "p90_pct": 0.123,
     "prob_perdida": 0.0702
    },
    "36": {
     "p10_clp": 4402596,
     "p50_clp": 4815937,
     "p90_clp": 5299697,
     "p10_pct": 0.1006,
     "p50_pct": 0.204,
     "p90_pct": 0.3249,
     "prob_perdida": 0.0056
    },
    "60": {
     "p10_clp": 4844953,
     "p50_clp": 5451006,
     "p90_clp": 6155007,
     "p10_pct": 0.2112,
     "p50_pct": 0.3628,
     "p90_pct": 0.5388,
     "prob_perdida": 0.0006
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
     "p10_clp": 4046944,
     "p50_clp": 4487430,
     "p90_clp": 4964995,
     "p10_pct": 0.0117,
     "p50_pct": 0.1219,
     "p90_pct": 0.2412,
     "prob_perdida": 0.0734
    },
    "36": {
     "p10_clp": 4737518,
     "p50_clp": 5640023,
     "p90_clp": 6708361,
     "p10_pct": 0.1844,
     "p50_pct": 0.41,
     "p90_pct": 0.6771,
     "prob_perdida": 0.0072
    },
    "60": {
     "p10_clp": 5662644,
     "p50_clp": 7079216,
     "p90_clp": 8849962,
     "p10_pct": 0.4157,
     "p50_pct": 0.7698,
     "p90_pct": 1.2125,
     "prob_perdida": 0.001
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
     "p10_clp": 4148332,
     "p50_clp": 4895018,
     "p90_clp": 5745118,
     "p10_pct": 0.0371,
     "p50_pct": 0.2238,
     "p90_pct": 0.4363,
     "prob_perdida": 0.0582
    },
    "36": {
     "p10_clp": 5492231,
     "p50_clp": 7286175,
     "p90_clp": 9625906,
     "p10_pct": 0.3731,
     "p50_pct": 0.8215,
     "p90_pct": 1.4065,
     "prob_perdida": 0.0042
    },
    "60": {
     "p10_clp": 7545652,
     "p50_clp": 10899649,
     "p90_clp": 15844845,
     "p10_pct": 0.8864,
     "p50_pct": 1.7249,
     "p90_pct": 2.9612,
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
      "costo_clp": 279883
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 1256683
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 3548923
     }
    ]
   },
   {
    "meses": 6,
    "colchon_clp": 4000000,
    "por_mezcla": [
     {
      "mezcla": "Conservadora",
      "costo_clp": 466472
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 2094472
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 5914872
     }
    ]
   }
  ],
  "riesgo_liquidacion_12m": [
   {
    "mezcla": "Conservadora",
    "p10_12m_clp": 4032299,
    "p10_12m_pct": 0.0081
   },
   {
    "mezcla": "Moderada",
    "p10_12m_clp": 4046944,
    "p10_12m_pct": 0.0117
   },
   {
    "mezcla": "Agresiva",
    "p10_12m_clp": 4148332,
    "p10_12m_pct": 0.0371
   }
  ]
 },
 "paper_trading": null
};
