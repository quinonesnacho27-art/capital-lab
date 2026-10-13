window.PAPER = {
 "generado": "2026-10-13 03:06 UTC",
 "inicio": {
  "fecha_inicio": "2026-08-04",
  "monto_real_maximo_clp": 200000,
  "nota": "Definido antes de empezar. El monto real inicial debe poder perderse por completo sin impacto."
 },
 "parametros": {
  "capital_inicial_clp": 1000000,
  "riesgo_diario_clp": 10000,
  "riesgo_max_pct": 0.01,
  "tickers": [
   "SPY",
   "QQQ",
   "SOXX"
  ],
  "benchmark": "SPY"
 },
 "live": {
  "equity": [
   {
    "fecha": "2026-08-04",
    "equity_clp": 1000000
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 994821
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 993789
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 996990
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 995629
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 995442
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 995794
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 998791
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 997559
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 994569
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 988448
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 994651
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 988064
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 989354
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 986078
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 986078
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 986078
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 992978
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 992045
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 995429
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 992009
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 993352
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 998088
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 996888
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 997060
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 992631
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 989678
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 997746
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 993392
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 998044
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 997640
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1003750
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1008155
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1018270
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1008707
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1000142
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1016609
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1021430
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1010726
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1017124
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1023213
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1022031
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1036451
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1039406
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1037252
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1033384
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1023474
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1028293
   },
   {
    "fecha": "2026-10-12",
    "equity_clp": 1019831
   }
  ],
  "trades": [
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-04",
    "fecha_salida": "2026-08-20",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 769.42,
    "precio_salida_usd": 760.71,
    "riesgo_clp": 10000,
    "invertido_clp": 398247,
    "resultado_clp": -5998,
    "resultado_pct": -0.0151
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-13",
    "fecha_salida": "2026-08-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 705.03 USD",
    "precio_entrada_usd": 731.31,
    "precio_salida_usd": 705.03,
    "riesgo_clp": 9988,
    "invertido_clp": 277908,
    "resultado_clp": -7924,
    "resultado_pct": -0.0285
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "fecha_salida": "2026-10-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 759.46 USD",
    "precio_entrada_usd": 773.5,
    "precio_salida_usd": 759.46,
    "riesgo_clp": 10000,
    "invertido_clp": 550778,
    "resultado_clp": -2812,
    "resultado_pct": -0.0051
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-01",
    "fecha_salida": "2026-10-12",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 543.47 USD",
    "precio_entrada_usd": 576.33,
    "precio_salida_usd": 543.47,
    "riesgo_clp": 10000,
    "invertido_clp": 175376,
    "resultado_clp": -9072,
    "resultado_pct": -0.0517
   }
  ],
  "abiertas": [
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-08-26",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "precio_entrada_usd": 710.63,
    "stop_usd": 689.45,
    "invertido_clp": 330871
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 741.47,
    "stop_usd": 721.02,
    "invertido_clp": 104429
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-06",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 779.09,
    "stop_usd": 765.57,
    "invertido_clp": 372591
   }
  ],
  "metricas": {
   "sesiones": 49,
   "n_trades": 4,
   "sharpe": 0.68,
   "max_drawdown": -0.0188,
   "win_rate": 0.0,
   "retorno_total": 0.0198,
   "resultado_clp": 19831
  },
  "buy_hold": [
   {
    "fecha": "2026-08-04",
    "equity_clp": 1000000
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 986994
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 984404
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 992441
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 989024
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 988554
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 989438
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 996964
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 994892
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 989214
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 984349
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 995202
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 984940
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 990161
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 986031
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 979582
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 980422
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 993820
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 995286
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1001818
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 997627
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1003781
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1016413
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1007140
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1002951
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 988177
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 984124
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1007654
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 998368
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1014093
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1008173
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1020139
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1027865
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1043639
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1029943
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1021748
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1038249
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1043578
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1034209
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1038964
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1042993
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1044510
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1061462
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1066224
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1065099
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1062827
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1062581
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1070418
   },
   {
    "fecha": "2026-10-12",
    "equity_clp": 1069772
   }
  ]
 },
 "backtest": {
  "desde": "2024-10-13",
  "hasta": "2026-10-13",
  "equity": [
   {
    "fecha": "2024-10-14",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 981506
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 996145
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 994224
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1006900
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 992441
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1012404
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 998878
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 999491
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1003097
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 994637
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1009157
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1013514
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1002871
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1002871
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1002871
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1002871
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1002871
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1017875
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1015360
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1005748
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1023385
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1037581
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1026799
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1008452
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1001750
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1014641
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1013272
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1018744
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1021075
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1015878
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1029914
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1026712
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1033243
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1023714
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1040094
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1042136
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1042709
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1042479
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1026747
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1033925
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1048843
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1044127
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1048362
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1045950
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1059359
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1023326
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1023326
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1023326
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1023326
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1023326
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1020635
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1017458
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1008196
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1008153
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1009226
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1012568
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1012737
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1019643
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1020861
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1025192
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1014219
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 999933
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 941649
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 953703
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 954856
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 955948
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 950538
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 945631
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 945631
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 941855
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 942609
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 935827
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 932726
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 938437
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 937056
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 939072
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 937764
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 935733
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 939083
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 936914
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 911561
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 894868
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 897994
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 897588
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 893093
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 887098
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 896107
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 889477
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 885193
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 888710
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 887199
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 892647
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 895970
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 903457
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 892886
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 892977
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 887546
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 881675
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 894999
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 900399
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 883215
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 883215
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 883215
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 883215
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 883215
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 857975
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 862673
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 860725
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 860173
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 854972
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 854622
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 849086
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 850624
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 848374
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 841146
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 843709
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 850321
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 848999
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 864206
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 875727
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 874625
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 876866
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 878924
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 881526
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 877662
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 865279
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 865435
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 856790
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 875571
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 869055
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 872285
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 867945
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 859396
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 883944
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 887900
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 880967
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 882302
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 887517
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 899830
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 898900
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 897589
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 880939
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 879068
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 892128
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 901453
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 893882
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 901227
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 925099
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 915529
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 924685
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 921643
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 914136
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 922308
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 926728
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 931824
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 927166
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 941267
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 949112
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 957285
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 955339
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 943930
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 974544
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 974726
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 981593
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 978046
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 979838
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 965646
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 966446
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 964790
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 969194
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 960058
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 980843
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 983771
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 995966
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 970046
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 965053
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 972085
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 976169
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 981590
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 983511
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 981240
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 988543
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 979267
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 975408
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 984807
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 982766
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 975336
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 971270
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 969909
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 990183
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 975154
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 982128
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 988208
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 994507
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 985897
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 977388
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 988959
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 992102
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 994772
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 992794
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 998551
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 998172
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1000382
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 991717
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 984678
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 995568
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 990246
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1001943
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1010296
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1015744
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1011090
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 999774
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 999416
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1012127
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1015627
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1025241
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1025977
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1026981
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1027768
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1018595
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1028491
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1034912
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1022880
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 991500
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1000471
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1002831
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1009595
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1006337
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1006736
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1016283
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1007037
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 997658
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1006090
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1012500
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1012451
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1025620
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1033709
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1018991
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1024431
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1013632
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1003008
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1022649
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1002738
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 995159
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 998529
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1001463
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1001295
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 987114
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 986984
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 975671
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 972610
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 980398
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 969031
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 972580
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 988475
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 993518
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 995511
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 995092
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 993624
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 997906
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 997239
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 991341
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 993961
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 998698
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 999484
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1008726
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1006764
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 981986
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 976761
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 977698
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 972665
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 982896
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 986076
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 989566
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 991853
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 992958
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 989058
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 986899
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 994981
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 971603
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 974189
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 988502
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 994062
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 980619
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 979360
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 990015
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 989483
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 976236
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 971795
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 970891
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 972395
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 957837
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 964844
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 959257
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 954464
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 954683
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 959271
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 962285
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 962594
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 941888
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 958344
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 942885
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 921220
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 912931
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 932171
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 932301
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 924507
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 927030
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 921354
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 922966
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 925276
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 928399
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 925908
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 929538
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 927055
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 929770
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 930842
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 919975
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 920628
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 921076
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 918568
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 921069
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 919957
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 918041
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 920866
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 921615
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 920363
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 918709
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 920232
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 921560
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 921545
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 920990
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 921945
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 924671
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 917511
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 924154
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 922389
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 945769
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 937939
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 935069
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 948454
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 963118
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 961856
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 964575
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 975693
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 978275
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 969677
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 997595
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 994409
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1020272
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1020572
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1004275
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1009180
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1036812
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1040145
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1035198
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1067421
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1084786
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1067245
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1087218
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1096428
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1090639
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1122674
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1097503
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1086080
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1082621
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1080623
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1108095
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1102574
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1111873
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1135125
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1128407
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1137593
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1136583
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1140460
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1159286
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1156794
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1156643
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1095641
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1130798
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1130469
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1105119
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1137574
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1136086
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1157538
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1126315
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1118025
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1145232
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1163959
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1133167
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1137990
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1154849
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1135816
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1160574
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1178857
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1156890
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1140755
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1145292
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1142195
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1141450
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1155392
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1152368
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1143397
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1150806
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1147279
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1139618
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1131320
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1134055
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1136540
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1136310
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1133082
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1141267
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1135816
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1134730
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1138098
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1136666
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1136469
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1136840
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1139994
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1138718
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1135609
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1129382
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1135813
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1129009
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1130300
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1127020
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1127020
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1127020
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1134018
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1133072
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1136504
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1133035
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1134398
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1139200
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1137983
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1138157
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1133666
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1130671
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1138853
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1134438
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1139155
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1138745
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1144942
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1149409
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1159667
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1149397
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1139550
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1158364
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1163792
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1151346
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1158921
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1166209
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1165416
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1182564
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1186480
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1184036
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1179834
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1168543
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1174278
   },
   {
    "fecha": "2026-10-12",
    "equity_clp": 1164800
   }
  ],
  "trades": [
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-10-14",
    "fecha_salida": "2024-10-15",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 225.52 USD",
    "precio_entrada_usd": 237.33,
    "precio_salida_usd": 225.52,
    "riesgo_clp": 10000,
    "invertido_clp": 119375,
    "resultado_clp": -6361,
    "resultado_pct": -0.0533
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-10-14",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 560.01 USD",
    "precio_entrada_usd": 571.14,
    "precio_salida_usd": 560.01,
    "riesgo_clp": 10000,
    "invertido_clp": 513247,
    "resultado_clp": 7093,
    "resultado_pct": 0.0138
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-10-14",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 479.11 USD",
    "precio_entrada_usd": 492.52,
    "precio_salida_usd": 479.11,
    "riesgo_clp": 10000,
    "invertido_clp": 367378,
    "resultado_clp": 2139,
    "resultado_pct": 0.0058
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-12-16",
    "fecha_salida": "2024-12-18",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 214.66 USD",
    "precio_entrada_usd": 225.1,
    "precio_salida_usd": 214.66,
    "riesgo_clp": 10000,
    "invertido_clp": 188783,
    "resultado_clp": -5611,
    "resultado_pct": -0.0297
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-11-06",
    "fecha_salida": "2024-12-18",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 577.71,
    "precio_salida_usd": 573.06,
    "riesgo_clp": 10000,
    "invertido_clp": 464178,
    "resultado_clp": 8798,
    "resultado_pct": 0.019
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-11-06",
    "fecha_salida": "2024-12-18",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 500.51,
    "precio_salida_usd": 511.3,
    "riesgo_clp": 10000,
    "invertido_clp": 349909,
    "resultado_clp": 17269,
    "resultado_pct": 0.0494
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-06",
    "fecha_salida": "2025-01-10",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 215.58 USD",
    "precio_entrada_usd": 226.91,
    "precio_salida_usd": 215.58,
    "riesgo_clp": 10000,
    "invertido_clp": 200291,
    "resultado_clp": -10812,
    "resultado_pct": -0.054
   },
   {
    "ticker": "SOXX",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-01-08",
    "fecha_salida": "2025-01-27",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "Stop loss tocado en 210.19 USD",
    "precio_entrada_usd": 221.59,
    "precio_salida_usd": 210.19,
    "riesgo_clp": 10000,
    "invertido_clp": 194460,
    "resultado_clp": -16928,
    "resultado_pct": -0.0871
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-21",
    "fecha_salida": "2025-01-27",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss (gap de apertura bajo 219.31 USD)",
    "precio_entrada_usd": 230.42,
    "precio_salida_usd": 217.09,
    "riesgo_clp": 10000,
    "invertido_clp": 207413,
    "resultado_clp": -19894,
    "resultado_pct": -0.0959
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-22",
    "fecha_salida": "2025-01-27",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss (gap de apertura bajo 509.76 USD)",
    "precio_entrada_usd": 527.03,
    "precio_salida_usd": 506.7,
    "riesgo_clp": 10000,
    "invertido_clp": 184405,
    "resultado_clp": -13620,
    "resultado_pct": -0.0739
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-22",
    "fecha_salida": "2025-02-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 580.80 USD",
    "precio_entrada_usd": 594.76,
    "precio_salida_usd": 580.8,
    "riesgo_clp": 10000,
    "invertido_clp": 426236,
    "resultado_clp": -16442,
    "resultado_pct": -0.0386
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-02-13",
    "fecha_salida": "2025-02-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 515.37 USD",
    "precio_entrada_usd": 531.39,
    "precio_salida_usd": 515.37,
    "riesgo_clp": 9391,
    "invertido_clp": 311516,
    "resultado_clp": -17385,
    "resultado_pct": -0.0558
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-02-18",
    "fecha_salida": "2025-02-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 587.81 USD",
    "precio_entrada_usd": 599.71,
    "precio_salida_usd": 587.81,
    "riesgo_clp": 9357,
    "invertido_clp": 242998,
    "resultado_clp": -8957,
    "resultado_pct": -0.0369
   },
   {
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-02-04",
    "fecha_salida": "2025-02-27",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "Stop loss tocado en 575.92 USD",
    "precio_entrada_usd": 590.19,
    "precio_salida_usd": 575.92,
    "riesgo_clp": 9456,
    "invertido_clp": 391116,
    "resultado_clp": -26196,
    "resultado_pct": -0.067
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-03-12",
    "fecha_salida": "2025-04-03",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 528.32 USD",
    "precio_entrada_usd": 548.1,
    "precio_salida_usd": 528.32,
    "riesgo_clp": 8931,
    "invertido_clp": 247468,
    "resultado_clp": -4324,
    "resultado_pct": -0.0175
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-03-12",
    "fecha_salida": "2025-04-03",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 449.93 USD",
    "precio_entrada_usd": 472.9,
    "precio_salida_usd": 449.93,
    "riesgo_clp": 8931,
    "invertido_clp": 183843,
    "resultado_clp": -5553,
    "resultado_pct": -0.0302
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-10",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 502.57 USD",
    "precio_entrada_usd": 539.67,
    "precio_salida_usd": 502.57,
    "riesgo_clp": 8832,
    "invertido_clp": 128471,
    "resultado_clp": -11199,
    "resultado_pct": -0.0872
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-21",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 425.48 USD",
    "precio_entrada_usd": 462.76,
    "precio_salida_usd": 425.48,
    "riesgo_clp": 8832,
    "invertido_clp": 109626,
    "resultado_clp": -12048,
    "resultado_pct": -0.1099
   },
   {
    "ticker": "SOXX",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-21",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 160.22 USD",
    "precio_entrada_usd": 182.25,
    "precio_salida_usd": 160.22,
    "riesgo_clp": 8832,
    "invertido_clp": 73086,
    "resultado_clp": -10882,
    "resultado_pct": -0.1489
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-01",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 478.34,
    "precio_salida_usd": 550.65,
    "riesgo_clp": 8491,
    "invertido_clp": 138055,
    "resultado_clp": 24461,
    "resultado_pct": 0.1772
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-02",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 557.51,
    "precio_salida_usd": 613.38,
    "riesgo_clp": 8506,
    "invertido_clp": 166939,
    "resultado_clp": 21566,
    "resultado_pct": 0.1292
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-02",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 188.61,
    "precio_salida_usd": 235.98,
    "riesgo_clp": 8506,
    "invertido_clp": 97441,
    "resultado_clp": 27684,
    "resultado_pct": 0.2841
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-08-12",
    "fecha_salida": "2025-10-10",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 634.07,
    "precio_salida_usd": 646.05,
    "riesgo_clp": 9885,
    "invertido_clp": 476146,
    "resultado_clp": -136,
    "resultado_pct": -0.0003
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-10-24",
    "fecha_salida": "2025-11-07",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 655.97 USD",
    "precio_entrada_usd": 670.02,
    "precio_salida_usd": 655.97,
    "riesgo_clp": 10000,
    "invertido_clp": 278082,
    "resultado_clp": -7251,
    "resultado_pct": -0.0261
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-10-20",
    "fecha_salida": "2025-11-07",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 292.03,
    "precio_salida_usd": 293.44,
    "riesgo_clp": 10000,
    "invertido_clp": 197929,
    "resultado_clp": -2908,
    "resultado_pct": -0.0147
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-05-13",
    "fecha_salida": "2025-12-09",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 512.01,
    "precio_salida_usd": 622.13,
    "riesgo_clp": 8757,
    "invertido_clp": 180096,
    "resultado_clp": 33366,
    "resultado_pct": 0.1853
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-12-03",
    "fecha_salida": "2025-12-16",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 308.37,
    "precio_salida_usd": 295.68,
    "riesgo_clp": 9972,
    "invertido_clp": 157288,
    "resultado_clp": -8043,
    "resultado_pct": -0.0511
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-12-05",
    "fecha_salida": "2025-12-16",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 678.37,
    "precio_salida_usd": 671.62,
    "riesgo_clp": 9940,
    "invertido_clp": 308563,
    "resultado_clp": -4201,
    "resultado_pct": -0.0136
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-12-23",
    "fecha_salida": "2026-01-20",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 682.63,
    "precio_salida_usd": 672.33,
    "riesgo_clp": 9919,
    "invertido_clp": 366606,
    "resultado_clp": -14291,
    "resultado_pct": -0.039
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-01-27",
    "fecha_salida": "2026-02-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 613.05 USD",
    "precio_entrada_usd": 628.99,
    "precio_salida_usd": 613.05,
    "riesgo_clp": 9593,
    "invertido_clp": 152963,
    "resultado_clp": -3785,
    "resultado_pct": -0.0247
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-01-21",
    "fecha_salida": "2026-02-04",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 330.71 USD",
    "precio_entrada_usd": 347.53,
    "precio_salida_usd": 330.71,
    "riesgo_clp": 9648,
    "invertido_clp": 199352,
    "resultado_clp": -14917,
    "resultado_pct": -0.0748
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-12-17",
    "fecha_salida": "2026-02-10",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 597.6,
    "precio_salida_usd": 609.39,
    "riesgo_clp": 9727,
    "invertido_clp": 300461,
    "resultado_clp": -14555,
    "resultado_pct": -0.0484
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-02-25",
    "fecha_salida": "2026-03-02",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss (gap de apertura bajo 347.36 USD)",
    "precio_entrada_usd": 367.36,
    "precio_salida_usd": 343.19,
    "riesgo_clp": 9308,
    "invertido_clp": 170992,
    "resultado_clp": -8929,
    "resultado_pct": -0.0522
   },
   {
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-05-14",
    "fecha_salida": "2026-03-02",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 578.0,
    "precio_salida_usd": 681.06,
    "riesgo_clp": 8746,
    "invertido_clp": 224492,
    "resultado_clp": 21218,
    "resultado_pct": 0.0945
   },
   {
    "ticker": "SOXX",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-05-15",
    "fecha_salida": "2026-03-19",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 211.82,
    "precio_salida_usd": 339.82,
    "riesgo_clp": 8769,
    "invertido_clp": 42064,
    "resultado_clp": 23583,
    "resultado_pct": 0.5606
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2026-03-31",
    "fecha_salida": "2026-04-15",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "RSI14 llegó a 70 (sobrecompra)",
    "precio_entrada_usd": 575.95,
    "precio_salida_usd": 636.04,
    "riesgo_clp": 9219,
    "invertido_clp": 235019,
    "resultado_clp": 12247,
    "resultado_pct": 0.0521
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2026-03-31",
    "fecha_salida": "2026-04-16",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "RSI14 llegó a 70 (sobrecompra)",
    "precio_entrada_usd": 647.06,
    "precio_salida_usd": 698.12,
    "riesgo_clp": 9219,
    "invertido_clp": 283300,
    "resultado_clp": 7481,
    "resultado_pct": 0.0264
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-15",
    "fecha_salida": "2026-06-05",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 636.04,
    "precio_salida_usd": 703.55,
    "riesgo_clp": 9619,
    "invertido_clp": 247267,
    "resultado_clp": 29148,
    "resultado_pct": 0.1179
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-07",
    "fecha_salida": "2026-07-02",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 347.37,
    "precio_salida_usd": 565.95,
    "riesgo_clp": 9224,
    "invertido_clp": 135162,
    "resultado_clp": 87237,
    "resultado_pct": 0.6454
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-04-21",
    "fecha_salida": "2026-07-17",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 642.95,
    "precio_salida_usd": 694.61,
    "riesgo_clp": 9697,
    "invertido_clp": 290781,
    "resultado_clp": 38658,
    "resultado_pct": 0.1329
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-09",
    "fecha_salida": "2026-07-23",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 676.48,
    "precio_salida_usd": 736.35,
    "riesgo_clp": 9379,
    "invertido_clp": 268464,
    "resultado_clp": 36367,
    "resultado_pct": 0.1355
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-03",
    "fecha_salida": "2026-08-20",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 755.79,
    "precio_salida_usd": 760.71,
    "riesgo_clp": 10000,
    "invertido_clp": 410963,
    "resultado_clp": 1872,
    "resultado_pct": 0.0046
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-13",
    "fecha_salida": "2026-08-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 705.03 USD",
    "precio_entrada_usd": 731.31,
    "precio_salida_usd": 705.03,
    "riesgo_clp": 10000,
    "invertido_clp": 278244,
    "resultado_clp": -7934,
    "resultado_pct": -0.0285
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "fecha_salida": "2026-10-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 759.46 USD",
    "precio_entrada_usd": 773.5,
    "precio_salida_usd": 759.46,
    "riesgo_clp": 10000,
    "invertido_clp": 550778,
    "resultado_clp": -2812,
    "resultado_pct": -0.0051
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-01",
    "fecha_salida": "2026-10-12",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 543.47 USD",
    "precio_entrada_usd": 576.33,
    "precio_salida_usd": 543.47,
    "riesgo_clp": 10000,
    "invertido_clp": 175376,
    "resultado_clp": -9072,
    "resultado_pct": -0.0517
   }
  ],
  "abiertas": [
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-08-26",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "precio_entrada_usd": 710.63,
    "stop_usd": 689.45,
    "invertido_clp": 335542
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 741.47,
    "stop_usd": 721.02,
    "invertido_clp": 240700
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-06",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 779.09,
    "stop_usd": 765.57,
    "invertido_clp": 372591
   }
  ],
  "metricas": {
   "sesiones": 500,
   "n_trades": 45,
   "sharpe": 0.28,
   "max_drawdown": -0.206,
   "win_rate": 0.3778,
   "retorno_total": 0.1648,
   "resultado_clp": 164800
  },
  "buy_hold": [
   {
    "fecha": "2024-10-14",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 988549
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1006972
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1004529
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1017840
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 999892
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1021899
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1009157
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1007374
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1008763
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1000398
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1013498
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1020371
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1006220
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1010046
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 993685
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1012542
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1040134
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1055698
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1053928
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1042361
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1064269
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1083198
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1069680
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1051311
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1041450
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1056510
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1055173
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1062979
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1066646
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1060805
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1078739
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1076870
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1084081
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1067707
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1087439
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1087190
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1088449
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1084862
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1066094
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1075365
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1089594
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1084235
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1085899
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1078108
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1094030
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1059848
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1072264
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1082118
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1070296
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1099399
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1098150
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1086426
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1063613
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1075219
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1072577
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1097773
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1110969
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1098628
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1093440
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1078600
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1083354
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1083845
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1101469
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1098684
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1118070
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1121888
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1123861
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1115783
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1108304
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1070009
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1101792
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1104833
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1107712
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1093447
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1090649
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1094908
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1084339
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1086450
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1067462
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1058783
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1074769
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1070905
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1076547
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1072486
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1069671
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1074239
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1071788
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1044071
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1026543
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1035293
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1034157
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1017780
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1044966
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1014123
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1012226
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1019799
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 993277
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 987612
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 947081
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 967289
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 967385
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 955864
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 974683
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 960303
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 953243
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 960158
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 956964
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 967998
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 973822
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 989227
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 968254
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 969716
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 960079
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 949536
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 977515
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 989296
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 949799
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 888317
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 892322
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 910967
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1017125
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 953314
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 978098
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 969981
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 961956
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 943514
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 944812
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 922323
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 938750
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 944241
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 953594
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 955496
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 954340
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 968813
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 970944
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 983556
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 994513
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 989510
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 972306
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 975605
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 990243
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 983733
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1009029
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1028259
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1023162
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1028958
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1033483
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1037853
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1032958
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1017495
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1018783
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1011024
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1030051
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1021729
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1026265
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1024582
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1012050
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1036483
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1037254
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1030088
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1032464
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1034316
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1045353
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1044566
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1044155
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1028057
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1020312
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1035821
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1045869
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1038511
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1047564
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1068595
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1055151
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1065100
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1063332
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1055047
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1068517
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1069892
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1075570
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1072444
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1084466
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1093624
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1103348
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1100187
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1088641
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1118867
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1121286
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1128836
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1124535
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1125429
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1114175
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1119659
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1117472
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1124193
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1108708
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1131345
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1131900
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1152539
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1122987
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1110403
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1127369
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1136086
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1144532
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1148106
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1143413
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1156673
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1145847
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1141484
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1154221
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1151687
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1145546
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1141731
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1140375
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1163474
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1145331
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1153255
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1160592
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1167258
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1159877
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1150260
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1163885
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1167304
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1168529
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1165336
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1172054
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1171358
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1174642
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1163195
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1153981
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1166220
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1160105
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1170915
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1180943
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1186381
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1180973
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1167732
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1167151
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1182616
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1186410
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1197618
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1197116
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1196363
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1198739
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1185353
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1198528
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1202765
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1188477
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1156343
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1169849
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1180166
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1190734
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1180496
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1182059
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1201457
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1188808
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1183125
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1188639
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1194808
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1188495
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1203103
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1206498
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1191215
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1197042
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1182445
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1180682
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1194696
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1178168
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1177553
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1180688
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1192863
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1191223
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1163805
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1163440
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1138806
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1135531
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1150448
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1132973
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1142049
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1169349
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1182951
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1183925
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1180100
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1175586
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1179960
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1176606
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1171078
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1171744
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1173509
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1174163
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1185781
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1185523
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1160608
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1153781
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1155789
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1142583
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1156227
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1158084
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1164659
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1168967
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1170460
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1165865
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1163703
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1173643
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1146713
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1148432
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1164331
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1167972
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1151206
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1152906
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1162670
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1162080
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1145549
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1142343
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1140009
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1140565
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1123399
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1132932
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1125641
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1122057
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1126189
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1123593
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1117191
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1118462
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1110885
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1125205
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1114634
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1102734
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1086645
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1117816
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1115659
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1102345
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1105697
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1087317
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1091230
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1100276
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1110179
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1101969
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1114357
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1104737
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1112767
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1114723
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1103211
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1108989
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1119867
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1122060
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1152086
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1138609
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1137870
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1154454
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1157571
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1123096
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1116310
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1133207
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1146002
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1139880
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1120872
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1128244
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1108862
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1138998
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1114528
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1128960
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1107988
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1102580
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1092594
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1133492
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1136987
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1121237
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1135068
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1131368
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1160804
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1143003
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1135105
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1149823
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1164419
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1162250
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1163423
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1179041
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1182260
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1162515
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1188573
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1181027
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1196520
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1200779
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1191509
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1188098
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1217895
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1215867
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1209771
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1236387
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1244085
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1228345
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1230678
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1235849
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1240948
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1269783
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1242883
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1238568
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1242444
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1237976
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1256956
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1249290
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1255054
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1261093
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1256825
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1264041
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1262853
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1264345
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1269392
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1257460
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1269532
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1237692
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1266298
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1274540
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1245625
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1265068
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1259180
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1271611
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1251181
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1229017
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1243324
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1260191
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1248422
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1258201
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1266572
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1259618
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1283377
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1293048
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1291033
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1294219
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1299558
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1302850
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1297298
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1319817
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1314586
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1304395
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1314153
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1311634
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1303723
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1290331
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1301979
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1312558
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1311579
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1297837
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1307414
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1313390
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1308254
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1280368
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1302573
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1298115
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1313615
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1339776
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1322351
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1318881
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1329648
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1325071
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1324441
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1325625
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1335708
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1332932
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1325324
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1318807
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1333348
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1319598
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1326593
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1321060
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1312420
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1313546
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1331496
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1333460
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1342212
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1336596
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1344841
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1361766
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1349341
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1343729
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1323935
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1318505
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1350031
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1337590
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1358657
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1350725
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1366757
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1377108
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1398242
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1379893
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1368913
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1391021
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1398161
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1385608
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1391979
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1397377
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1399409
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1422121
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1428501
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1426994
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1423949
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1423620
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1434120
   },
   {
    "fecha": "2026-10-12",
    "equity_clp": 1433254
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 2.3,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 0.68,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0188,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
