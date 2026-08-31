window.DATOS = {
 "generado": "2026-08-31 18:15 UTC",
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
  "desde": "2011-08",
  "hasta": "2026-07",
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
     "p10_clp": 4031412,
     "p50_clp": 4254974,
     "p90_clp": 4493659,
     "p10_pct": 0.0079,
     "p50_pct": 0.0637,
     "p90_pct": 0.1234,
     "prob_perdida": 0.0714
    },
    "36": {
     "p10_clp": 4385224,
     "p50_clp": 4828196,
     "p90_clp": 5286071,
     "p10_pct": 0.0963,
     "p50_pct": 0.207,
     "p90_pct": 0.3215,
     "prob_perdida": 0.005
    },
    "60": {
     "p10_clp": 4833494,
     "p50_clp": 5451294,
     "p90_clp": 6144686,
     "p10_pct": 0.2084,
     "p50_pct": 0.3628,
     "p90_pct": 0.5362,
     "prob_perdida": 0.0
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
     "p10_clp": 4047512,
     "p50_clp": 4483677,
     "p90_clp": 4951088,
     "p10_pct": 0.0119,
     "p50_pct": 0.1209,
     "p90_pct": 0.2378,
     "prob_perdida": 0.071
    },
    "36": {
     "p10_clp": 4718965,
     "p50_clp": 5630096,
     "p90_clp": 6723120,
     "p10_pct": 0.1797,
     "p50_pct": 0.4075,
     "p90_pct": 0.6808,
     "prob_perdida": 0.0066
    },
    "60": {
     "p10_clp": 5627133,
     "p50_clp": 7070021,
     "p90_clp": 8943006,
     "p10_pct": 0.4068,
     "p50_pct": 0.7675,
     "p90_pct": 1.2358,
     "prob_perdida": 0.0006
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
     "p10_clp": 4192156,
     "p50_clp": 4886672,
     "p90_clp": 5737974,
     "p10_pct": 0.048,
     "p50_pct": 0.2217,
     "p90_pct": 0.4345,
     "prob_perdida": 0.0496
    },
    "36": {
     "p10_clp": 5508745,
     "p50_clp": 7219245,
     "p90_clp": 9556256,
     "p10_pct": 0.3772,
     "p50_pct": 0.8048,
     "p90_pct": 1.3891,
     "prob_perdida": 0.0028
    },
    "60": {
     "p10_clp": 7496900,
     "p50_clp": 10835217,
     "p90_clp": 15619561,
     "p10_pct": 0.8742,
     "p50_pct": 1.7088,
     "p90_pct": 2.9049,
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
      "costo_clp": 279883
     },
     {
      "mezcla": "Moderada",
      "costo_clp": 1251163
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 3510283
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
      "costo_clp": 2085272
     },
     {
      "mezcla": "Agresiva",
      "costo_clp": 5850472
     }
    ]
   }
  ],
  "riesgo_liquidacion_12m": [
   {
    "mezcla": "Conservadora",
    "p10_12m_clp": 4031412,
    "p10_12m_pct": 0.0079
   },
   {
    "mezcla": "Moderada",
    "p10_12m_clp": 4047512,
    "p10_12m_pct": 0.0119
   },
   {
    "mezcla": "Agresiva",
    "p10_12m_clp": 4192156,
    "p10_12m_pct": 0.048
   }
  ]
 },
 "paper_trading": null
};
