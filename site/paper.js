window.PAPER = {
 "generado": "2026-10-10 01:50 UTC",
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
    "equity_clp": 1025055
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
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 576.33,
    "stop_usd": 543.47,
    "invertido_clp": 175376
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
   "sesiones": 48,
   "n_trades": 3,
   "sharpe": 1.01,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0251,
   "resultado_clp": 25055
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
    "equity_clp": 1067048
   }
  ]
 },
 "backtest": {
  "desde": "2024-10-10",
  "hasta": "2026-10-10",
  "equity": [
   {
    "fecha": "2024-10-10",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1004257
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 985539
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1000180
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 998258
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1010936
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 996475
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1016440
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1002913
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1003526
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1007132
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 998671
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1013192
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1017550
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1003005
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1003005
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1003005
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1003005
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1003005
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1018009
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1015494
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1005881
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1023519
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1037715
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1026933
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1008586
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1001884
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1014775
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1013406
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1018878
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1021209
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1016012
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1030048
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1026846
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1033377
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1023848
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1040228
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1042270
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1042843
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1042613
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1026881
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1034059
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1048977
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1044260
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1048496
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1046084
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1059494
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1023456
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1023456
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1023456
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1023456
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1023456
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1020765
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1017588
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1008326
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1008283
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1009356
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1012697
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1012867
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1019773
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1020991
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1025322
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1014347
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1000060
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 941769
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 953823
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 954976
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 956068
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 950658
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 945751
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 945751
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 941975
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 942729
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 935946
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 932845
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 938556
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 937176
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 939191
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 937883
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 935852
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 939203
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 937033
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 911677
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 894982
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 898108
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 897702
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 893206
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 887211
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 896221
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 889590
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 885305
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 888823
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 887312
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 892760
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 896084
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 903572
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 892999
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 893090
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 887659
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 881787
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 895113
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 900513
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 883328
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 883328
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 883328
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 883328
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 883328
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 858084
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 862782
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 860835
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 860282
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 855081
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 854731
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 849194
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 850732
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 848482
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 841253
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 843816
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 850430
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 849107
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 864316
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 875839
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 874737
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 876977
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 879035
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 881638
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 877773
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 865389
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 865545
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 856899
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 875683
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 869166
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 872396
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 868056
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 859505
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 884056
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 888013
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 881079
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 882414
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 887629
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 899944
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 899014
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 897704
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 881052
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 879180
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 892241
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 901568
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 893996
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 901342
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 925217
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 915646
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 924802
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 921760
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 914252
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 922426
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 926846
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 931943
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 927284
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 941387
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 949233
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 957407
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 955460
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 944050
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 974668
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 974850
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 981718
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 978171
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 979963
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 965769
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 966569
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 964913
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 969318
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 960180
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 980967
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 983896
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 996093
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 970169
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 965176
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 972209
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 976293
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 981715
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 983636
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 981365
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 988669
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 979391
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 975532
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 984932
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 982891
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 975460
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 971393
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 970033
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 990309
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 975278
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 982253
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 988334
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 994634
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 986022
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 977512
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 989085
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 992228
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 994898
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 992921
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 998678
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 998299
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1000509
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 991843
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 984803
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 995694
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 990372
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1002070
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1010424
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1015874
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1011219
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 999901
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 999543
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1012256
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1015756
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1025371
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1026107
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1027112
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1027898
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1018724
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1028622
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1035043
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1023010
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 991626
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1000598
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1002958
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1009724
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1006465
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1006864
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1016412
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1007165
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 997786
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1006219
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1012628
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1012580
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1025750
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1033840
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1019120
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1024560
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1013761
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1003136
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1022779
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1002865
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 995285
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 998655
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1001590
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1001422
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 987239
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 987109
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 975795
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 972733
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 980523
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 969154
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 972703
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 988600
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 993645
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 995638
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 995218
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 993750
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 998032
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 997366
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 991467
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 994088
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 998825
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 999611
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1008854
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1006892
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 982110
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 976885
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 977822
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 972788
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 983021
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 986201
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 989692
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 991979
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 993084
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 989184
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 987024
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 995107
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 971726
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 974312
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 988627
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 994188
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 980743
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 979484
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 990140
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 989609
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 976360
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 971918
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 971014
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 972518
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 957958
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 964966
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 959379
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 954585
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 954804
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 959392
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 962407
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 962716
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 942007
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 958465
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 943004
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 921337
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 913046
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 932290
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 932419
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 924625
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 927148
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 921471
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 923083
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 925393
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 928517
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 926026
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 929656
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 927173
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 929888
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 930960
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 920092
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 920745
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 921193
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 918685
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 921185
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 920074
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 918158
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 920983
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 921732
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 920480
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 918825
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 920349
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 921677
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 921662
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 921107
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 922062
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 924788
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 917627
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 924271
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 922506
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 945889
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 938058
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 935188
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 948574
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 963240
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 961978
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 964697
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 975816
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 978399
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 969801
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 997721
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 994535
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1020401
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1020701
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1004403
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1009308
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1036943
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1040277
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1035329
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1067556
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1084924
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1067380
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1087356
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1096567
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1090778
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1122817
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1097642
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1086218
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1082758
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1080761
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1108236
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1102714
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1112014
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1135269
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1128550
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1137737
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1136727
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1140605
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1159433
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1156941
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1156789
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1095780
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1130942
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1130613
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1105259
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1137718
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1136230
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1157684
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1126458
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1118167
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1145378
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1164107
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1133311
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1138134
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1154996
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1135960
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1160721
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1179006
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1157037
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1140899
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1145437
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1142340
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1141594
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1155539
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1152514
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1143542
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1150952
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1147425
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1139763
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1131463
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1134199
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1136684
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1136454
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1133226
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1141411
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1135959
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1134874
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1138242
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1136810
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1136613
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1136984
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1140138
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1138862
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1135753
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1129525
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1135957
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1129153
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1130444
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1127164
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1127164
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1127164
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1134162
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1133216
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1136647
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1133179
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1134541
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1139344
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1138126
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1138301
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1133810
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1130815
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1138997
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1134582
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1139299
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1138889
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1145086
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1149553
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1159811
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1149540
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1139692
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1158508
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1163937
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1151489
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1159065
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1166354
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1165561
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1182713
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1186629
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1184185
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1179983
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1168690
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1170728
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
    "invertido_clp": 123555,
    "resultado_clp": -6584,
    "resultado_pct": -0.0533
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
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-10-11",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 566.51,
    "precio_salida_usd": 555.81,
    "riesgo_clp": 10000,
    "invertido_clp": 509067,
    "resultado_clp": 7450,
    "resultado_pct": 0.0146
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
    "invertido_clp": 188918,
    "resultado_clp": -5615,
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
    "resultado_clp": 8797,
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
    "invertido_clp": 184535,
    "resultado_clp": -13630,
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
    "riesgo_clp": 9392,
    "invertido_clp": 311555,
    "resultado_clp": -17387,
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
    "riesgo_clp": 9359,
    "invertido_clp": 243029,
    "resultado_clp": -8958,
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
    "riesgo_clp": 9458,
    "invertido_clp": 391166,
    "resultado_clp": -26200,
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
    "riesgo_clp": 8932,
    "invertido_clp": 247499,
    "resultado_clp": -4325,
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
    "riesgo_clp": 8932,
    "invertido_clp": 183867,
    "resultado_clp": -5554,
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
    "riesgo_clp": 8833,
    "invertido_clp": 128488,
    "resultado_clp": -11200,
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
    "riesgo_clp": 8833,
    "invertido_clp": 109640,
    "resultado_clp": -12049,
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
    "riesgo_clp": 8833,
    "invertido_clp": 73096,
    "resultado_clp": -10883,
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
    "riesgo_clp": 8492,
    "invertido_clp": 138073,
    "resultado_clp": 24464,
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
    "riesgo_clp": 8507,
    "invertido_clp": 166960,
    "resultado_clp": 21568,
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
    "riesgo_clp": 8507,
    "invertido_clp": 97454,
    "resultado_clp": 27688,
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
    "riesgo_clp": 9887,
    "invertido_clp": 476207,
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
    "invertido_clp": 278142,
    "resultado_clp": -7253,
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
    "resultado_clp": -2909,
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
    "riesgo_clp": 8758,
    "invertido_clp": 180119,
    "resultado_clp": 33370,
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
    "riesgo_clp": 9974,
    "invertido_clp": 157308,
    "resultado_clp": -8044,
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
    "riesgo_clp": 9941,
    "invertido_clp": 308602,
    "resultado_clp": -4202,
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
    "riesgo_clp": 9920,
    "invertido_clp": 366653,
    "resultado_clp": -14293,
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
    "riesgo_clp": 9594,
    "invertido_clp": 152983,
    "resultado_clp": -3786,
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
    "riesgo_clp": 9650,
    "invertido_clp": 199378,
    "resultado_clp": -14919,
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
    "riesgo_clp": 9728,
    "invertido_clp": 300500,
    "resultado_clp": -14557,
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
    "riesgo_clp": 9310,
    "invertido_clp": 171014,
    "resultado_clp": -8930,
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
    "riesgo_clp": 8747,
    "invertido_clp": 224520,
    "resultado_clp": 21221,
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
    "riesgo_clp": 8770,
    "invertido_clp": 42069,
    "resultado_clp": 23586,
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
    "riesgo_clp": 9221,
    "invertido_clp": 235049,
    "resultado_clp": 12249,
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
    "riesgo_clp": 9221,
    "invertido_clp": 283336,
    "resultado_clp": 7482,
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
    "riesgo_clp": 9620,
    "invertido_clp": 247298,
    "resultado_clp": 29152,
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
    "riesgo_clp": 9225,
    "invertido_clp": 135179,
    "resultado_clp": 87248,
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
    "riesgo_clp": 9698,
    "invertido_clp": 290818,
    "resultado_clp": 38662,
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
    "riesgo_clp": 9381,
    "invertido_clp": 268498,
    "resultado_clp": 36371,
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
    "invertido_clp": 240843
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-10-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 576.33,
    "stop_usd": 543.47,
    "invertido_clp": 175376
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
   "sesiones": 501,
   "n_trades": 44,
   "sharpe": 0.3,
   "max_drawdown": -0.206,
   "win_rate": 0.3864,
   "retorno_total": 0.1707,
   "resultado_clp": 170728
  },
  "buy_hold": [
   {
    "fecha": "2024-10-10",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1002526
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1010910
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 999334
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1017958
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1015488
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1028945
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1010801
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1033048
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1020167
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1018364
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1019769
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1011312
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1024555
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1031503
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1017198
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1021066
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1004526
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1023589
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1051482
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1067215
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1065427
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1053733
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1075880
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1095016
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1081350
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1062780
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1052813
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1068037
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1066685
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1074576
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1078284
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1072378
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1090508
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1088619
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1095908
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1079355
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1099303
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1099051
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1100324
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1096698
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1077725
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1087098
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1101481
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1096064
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1097747
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1089871
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1105965
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1071411
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1083962
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1093924
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1081973
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1111393
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1110131
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1098279
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1075217
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1086949
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1084279
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1109750
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1123090
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1110614
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1105369
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1090368
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1095174
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1095670
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1113486
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1110671
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1130268
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1134128
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1136122
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1127956
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1120396
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1081682
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1113812
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1116886
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1119797
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1105377
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1102548
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1106854
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1096169
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1098303
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1079108
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1070334
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1086495
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1082589
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1088292
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1084186
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1081341
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1085959
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1083481
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1055462
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1037742
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1046588
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1045440
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1028884
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1056366
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1025187
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1023269
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1030925
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1004114
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 998387
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 957413
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 977842
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 977939
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 966292
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 985317
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 970780
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 963643
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 970633
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 967404
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 978559
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 984447
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1000019
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 978817
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 980296
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 970554
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 959895
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 988180
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1000090
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 960161
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 898008
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 902057
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 920906
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1028221
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 963715
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 988770
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 980563
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 972451
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 953808
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 955120
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 932385
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 948992
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 954543
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 963998
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 965921
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 964752
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 979383
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 981537
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 994287
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1005363
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1000305
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 982913
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 986249
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1001046
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 994465
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1020037
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1039477
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1034325
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1040184
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1044758
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1049176
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1044228
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1028596
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1029897
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1022054
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1041289
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1032876
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1037462
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1035760
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1023092
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1047791
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1048570
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1041326
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1043728
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1045601
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1056758
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1055962
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1055546
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1039273
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1031443
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1047122
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1057280
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1049841
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1058993
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1080254
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1066663
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1076720
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1074932
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1066558
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1080175
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1081564
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1087305
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1084145
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1096297
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1105556
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1115385
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1112190
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1100518
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1131074
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1133519
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1141152
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1136804
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1137707
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1126331
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1131875
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1129664
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1136458
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1120804
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1143688
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1144249
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1165113
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1135238
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1122518
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1139668
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1148481
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1157019
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1160631
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1155888
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1169292
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1158348
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1153938
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1166814
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1164252
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1158044
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1154188
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1152816
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1176168
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1157826
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1165837
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1173254
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1179993
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1172532
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1162809
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1176583
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1180040
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1181278
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1178050
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1184841
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1184138
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1187457
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1175885
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1166571
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1178944
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1172762
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1183690
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1193827
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1199325
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1193858
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1180472
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1179884
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1195519
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1199354
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1210684
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1210177
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1209415
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1211817
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1198285
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1211604
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1215888
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1201444
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1168959
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1182613
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1193041
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1203725
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1193375
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1194956
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1214565
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1201778
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1196033
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1201607
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1207843
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1201462
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1216229
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1219661
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1204212
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1210101
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1195345
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1193563
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1207730
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1191022
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1190400
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1193569
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1205877
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1204219
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1176503
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1176133
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1151231
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1147919
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1162999
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1145334
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1154509
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1182106
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1195856
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1196841
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1192975
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1188412
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1192834
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1189442
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1183854
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1184527
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1186312
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1186973
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1198717
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1198457
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1173270
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1166369
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1168399
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1155049
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1168842
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1170719
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1177366
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1181720
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1183230
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1178585
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1176399
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1186447
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1159224
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1160962
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1177034
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1180715
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1163766
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1165484
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1175355
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1174759
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1158047
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1154806
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1152446
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1153009
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1135655
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1145292
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1137922
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1134298
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1138475
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1135851
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1129379
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1130665
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1123005
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1137481
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1126795
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1114765
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1098500
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1130011
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1127831
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1114371
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1117761
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1099180
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1103135
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1112280
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1122291
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1113991
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1126514
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1116790
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1124907
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1126884
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1115247
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1121088
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1132085
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1134302
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1164655
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1151032
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1150284
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1167049
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1170200
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1135349
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1128488
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1145571
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1158505
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1152316
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1133101
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1140553
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1120959
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1151424
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1126688
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1141277
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1120076
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1114609
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1104514
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1145858
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1149391
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1133470
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1147452
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1143711
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1173469
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1155474
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1147489
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1162368
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1177123
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1174930
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1176116
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1191904
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1195159
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1175198
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1201540
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1193912
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1209574
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1213879
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1204508
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1201060
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1231183
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1229132
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1222970
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1249876
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1257658
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1241746
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1244104
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1249332
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1254487
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1283636
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1256443
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1252081
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1255999
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1251483
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1270669
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1262920
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1268746
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1274852
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1270537
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1277832
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1276631
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1278139
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1283241
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1271179
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1283382
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1251195
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1280113
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1288445
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1259214
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1278870
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1272917
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1285484
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1264831
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1242426
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1256889
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1273940
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1262042
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1271928
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1280391
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1273361
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1297378
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1307155
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1305118
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1308339
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1313737
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1317064
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1311452
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1334216
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1328928
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1318625
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1328490
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1325944
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1317946
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1304408
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1316183
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1326878
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1325889
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1311996
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1321678
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1327719
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1322528
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1294337
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1316784
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1312277
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1327946
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1354392
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1336778
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1333270
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1344155
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1339527
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1338891
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1340088
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1350280
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1347474
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1339784
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1333195
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1347895
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1333995
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1341067
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1335473
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1326738
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1327877
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1346023
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1348008
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1356855
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1351178
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1359513
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1376622
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1364062
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1358389
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1338379
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1332889
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1364759
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1352183
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1373480
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1365462
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1381669
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1392132
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1413496
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1394947
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1383848
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1406197
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1413415
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1400725
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1407165
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1412622
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1414676
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1437636
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1444086
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1442563
   },
   {
    "fecha": "2026-10-07",
    "equity_clp": 1439485
   },
   {
    "fecha": "2026-10-08",
    "equity_clp": 1439152
   },
   {
    "fecha": "2026-10-09",
    "equity_clp": 1445201
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 2.2,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 1.01,
    "umbral": 1.0,
    "cumple": true
   },
   "drawdown": {
    "valor": -0.0178,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
