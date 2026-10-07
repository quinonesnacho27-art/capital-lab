window.PAPER = {
 "generado": "2026-10-07 01:42 UTC",
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
   "sesiones": 45,
   "n_trades": 3,
   "sharpe": 1.87,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0373,
   "resultado_clp": 37252
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-10-07",
  "hasta": "2026-10-07",
  "equity": [
   {
    "fecha": "2024-10-07",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 998957
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1000170
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1004195
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 984308
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 998431
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 996579
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1008883
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 994926
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1014273
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1001103
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1001767
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1005333
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 997108
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1011261
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1015426
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1001278
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1001278
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1001278
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1001278
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1001278
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1016282
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1013767
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1004155
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1021792
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1035988
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1025206
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1006859
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1000157
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1013048
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1011679
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1017151
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1019483
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1014285
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1028321
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1025119
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1031650
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1022121
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1038501
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1040543
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1041116
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1040886
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1025154
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1032332
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1047250
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1042534
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1046769
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1044357
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1057759
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1021781
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1021781
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1021781
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1021781
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1021781
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1019090
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1015913
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1006650
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1006607
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1007681
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1011022
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1011191
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1018097
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1019316
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1023646
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1012689
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 998418
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 940217
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 952271
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 953425
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 954516
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 949106
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 944199
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 944199
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 940429
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 941182
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 934410
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 931314
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 937016
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 935638
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 937650
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 936345
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 934317
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 937662
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 935496
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 910181
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 893513
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 896634
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 896229
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 891741
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 885755
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 894750
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 888130
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 883853
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 887365
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 885856
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 891295
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 894614
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 902090
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 891534
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 891625
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 886203
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 880340
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 893644
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 899036
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 881878
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 881878
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 881878
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 881878
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 881878
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 856676
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 861367
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 859422
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 858871
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 853678
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 853328
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 847801
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 849337
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 847090
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 839873
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 842432
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 849034
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 847713
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 862898
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 874402
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 873302
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 875538
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 877593
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 880191
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 876333
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 863969
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 864125
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 855493
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 874246
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 867739
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 870965
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 866632
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 858095
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 882606
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 886556
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 879634
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 880967
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 886173
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 898468
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 897539
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 896231
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 879606
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 877738
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 890777
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 900089
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 892529
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 899863
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 923699
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 914144
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 923285
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 920248
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 912752
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 920912
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 925325
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 930413
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 925762
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 939842
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 947676
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 955836
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 953893
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 942501
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 973069
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 973250
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 980108
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 976566
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 978355
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 964184
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 964984
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 963330
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 967727
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 958604
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 979358
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 982281
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 994459
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 968577
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 963593
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 970614
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 974692
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 980104
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 982023
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 979755
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 987047
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 977784
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 973931
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 983316
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 981279
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 973860
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 969800
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 968441
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 988684
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 973678
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 980641
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 986713
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 993002
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 984405
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 975908
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 987462
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 990600
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 993266
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 991292
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 997040
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 996661
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 998867
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 990216
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 983188
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 994061
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 988747
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1000426
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1008766
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1014207
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1009560
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 998261
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 997903
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1010595
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1014089
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1023689
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1024424
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1025427
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1026212
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1017053
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1026934
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1033345
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1021331
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 989999
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 998956
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1001313
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1008067
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1004814
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1005213
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1014744
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1005508
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 996136
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1004562
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1010966
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1010922
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1024070
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1032152
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1017455
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1022887
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1012106
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1001490
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1021110
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1001224
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 993656
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 997021
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 999951
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 999782
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 985623
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 985493
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 974198
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 971141
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 978918
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 967567
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 971111
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 986982
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 992018
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 994008
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 993589
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 992123
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 996398
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 995733
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 989844
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 992460
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 997190
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 997975
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1007203
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1005244
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 980502
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 975286
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 976222
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 971196
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 981412
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 984587
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 988071
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 990355
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 991458
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 987564
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 985408
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 993478
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 970135
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 972718
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 987009
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 992560
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 979138
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 977881
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 988520
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 987989
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 974762
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 970327
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 969425
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 970926
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 956390
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 963387
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 957808
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 953022
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 953241
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 957822
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 960831
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 961140
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 940465
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 956896
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 941461
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 919829
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 911552
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 930763
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 930893
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 923111
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 925630
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 919962
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 921572
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 923878
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 926997
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 924510
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 928134
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 925655
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 928366
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 929436
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 918586
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 919237
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 919685
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 917181
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 919677
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 918568
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 916655
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 919475
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 920223
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 918973
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 917321
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 918842
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 920168
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 920153
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 919599
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 920553
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 923274
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 916125
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 922758
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 920996
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 944341
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 936523
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 933657
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 947022
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 961663
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 960403
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 963118
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 974219
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 976797
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 968213
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 996088
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 992907
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1018731
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1019031
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1002758
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1007656
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1035246
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1038574
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1033634
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1065809
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1083148
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1065633
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1085576
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1094772
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1088992
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1120979
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1095845
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1084440
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1080986
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1078991
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1106422
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1100908
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1110194
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1133411
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1126702
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1135875
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1134866
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1138738
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1157535
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1155047
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1154896
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1093986
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1129090
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1128762
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1103450
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1135855
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1134370
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1155789
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1124614
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1116336
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1143503
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1162201
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1131455
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1136271
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1153105
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1134100
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1158821
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1177076
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1155143
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1139032
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1143562
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1140470
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1139726
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1153647
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1150627
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1141670
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1149068
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1145546
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1137897
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1129611
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1132342
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1134823
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1134594
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1131371
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1139555
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1134104
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1133019
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1136387
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1134955
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1134758
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1135128
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1138283
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1137007
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1133898
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1127670
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1134102
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1127298
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1128589
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1125309
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1125309
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1125309
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1132306
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1131361
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1134792
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1131324
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1132686
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1137489
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1136271
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1136446
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1131955
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1128959
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1137142
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1132727
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1137444
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1137034
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1143231
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1147698
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1157956
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1147695
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1137863
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1156648
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1162069
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1149644
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1157204
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1164478
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1163680
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1180796
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1184699
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1182260
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
    "invertido_clp": 151524,
    "resultado_clp": -8074,
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
    "fecha_entrada": "2024-10-09",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 564.12,
    "precio_salida_usd": 555.81,
    "riesgo_clp": 10000,
    "invertido_clp": 481097,
    "resultado_clp": 7213,
    "resultado_pct": 0.015
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
    "invertido_clp": 187190,
    "resultado_clp": -5563,
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
    "invertido_clp": 464179,
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
    "invertido_clp": 182859,
    "resultado_clp": -13506,
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
    "invertido_clp": 426237,
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
    "riesgo_clp": 9377,
    "invertido_clp": 311045,
    "resultado_clp": -17358,
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
    "riesgo_clp": 9343,
    "invertido_clp": 242630,
    "resultado_clp": -8943,
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
    "riesgo_clp": 9442,
    "invertido_clp": 390525,
    "resultado_clp": -26157,
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
    "riesgo_clp": 8917,
    "invertido_clp": 247093,
    "resultado_clp": -4318,
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
    "riesgo_clp": 8917,
    "invertido_clp": 183565,
    "resultado_clp": -5545,
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
    "riesgo_clp": 8819,
    "invertido_clp": 128277,
    "resultado_clp": -11182,
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
    "riesgo_clp": 8819,
    "invertido_clp": 109460,
    "resultado_clp": -12030,
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
    "riesgo_clp": 8819,
    "invertido_clp": 72976,
    "resultado_clp": -10866,
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
    "riesgo_clp": 8478,
    "invertido_clp": 137846,
    "resultado_clp": 24424,
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
    "riesgo_clp": 8493,
    "invertido_clp": 166686,
    "resultado_clp": 21533,
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
    "riesgo_clp": 8493,
    "invertido_clp": 97294,
    "resultado_clp": 27642,
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
    "riesgo_clp": 9870,
    "invertido_clp": 475425,
    "resultado_clp": -135,
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
    "invertido_clp": 277361,
    "resultado_clp": -7232,
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
    "riesgo_clp": 8744,
    "invertido_clp": 179823,
    "resultado_clp": 33315,
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
    "riesgo_clp": 9957,
    "invertido_clp": 157050,
    "resultado_clp": -8031,
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
    "riesgo_clp": 9925,
    "invertido_clp": 308099,
    "resultado_clp": -4195,
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
    "riesgo_clp": 9904,
    "invertido_clp": 366054,
    "resultado_clp": -14269,
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
    "riesgo_clp": 9578,
    "invertido_clp": 152733,
    "resultado_clp": -3780,
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
    "riesgo_clp": 9634,
    "invertido_clp": 199051,
    "resultado_clp": -14895,
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
    "riesgo_clp": 9712,
    "invertido_clp": 300008,
    "resultado_clp": -14533,
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
    "riesgo_clp": 9294,
    "invertido_clp": 170734,
    "resultado_clp": -8916,
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
    "riesgo_clp": 8733,
    "invertido_clp": 224152,
    "resultado_clp": 21186,
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
    "riesgo_clp": 8755,
    "invertido_clp": 42000,
    "resultado_clp": 23547,
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
    "riesgo_clp": 9206,
    "invertido_clp": 234664,
    "resultado_clp": 12229,
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
    "riesgo_clp": 9206,
    "invertido_clp": 282872,
    "resultado_clp": 7470,
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
    "riesgo_clp": 9604,
    "invertido_clp": 246893,
    "resultado_clp": 29104,
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
    "riesgo_clp": 9210,
    "invertido_clp": 134958,
    "resultado_clp": 87105,
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
    "riesgo_clp": 9682,
    "invertido_clp": 290342,
    "resultado_clp": 38599,
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
    "riesgo_clp": 9365,
    "invertido_clp": 268058,
    "resultado_clp": 36312,
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
    "invertido_clp": 238988
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
   "sharpe": 0.33,
   "max_drawdown": -0.206,
   "win_rate": 0.3864,
   "retorno_total": 0.1823,
   "resultado_clp": 182260
  },
  "buy_hold": [
   {
    "fecha": "2024-10-07",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1011664
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1026726
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1024500
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1027089
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1035678
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1023818
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1042899
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1040368
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1054155
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1035566
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1058359
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1045162
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1043315
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1044754
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1036090
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1049657
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1056776
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1042120
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1046082
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1029138
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1048667
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1077244
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1093363
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1091531
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1079550
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1102240
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1121844
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1107844
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1088819
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1078607
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1094205
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1092819
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1100904
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1104702
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1098652
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1117226
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1115290
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1122758
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1105800
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1126237
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1125978
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1127282
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1123568
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1104130
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1113732
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1128468
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1122918
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1124642
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1116573
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1133062
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1097661
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1110520
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1120726
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1108482
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1138623
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1137330
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1125187
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1101561
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1113580
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1110844
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1136940
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1150606
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1137825
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1132451
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1117083
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1122006
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1122514
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1140767
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1137883
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1157960
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1161915
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1163958
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1155592
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1147846
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1108184
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1141101
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1144251
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1147233
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1132459
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1129561
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1133972
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1123025
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1125212
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1105547
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1096558
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1113114
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1109113
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1114956
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1110750
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1107835
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1112566
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1110027
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1081321
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1063168
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1072230
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1071054
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1054092
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1082248
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1050305
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1048340
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1056183
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1028715
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1022848
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 980870
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1001800
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1001899
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 989967
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1009458
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 994564
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 987253
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 994415
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 991106
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1002535
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1008566
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1024521
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1002799
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1004314
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 994333
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 983413
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1012391
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1024592
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 983686
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 920010
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 924158
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 943469
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1053413
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 987327
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1012995
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1004588
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 996276
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 977177
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 978520
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 955229
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 972243
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 977929
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 987616
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 989586
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 988389
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1003378
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1005585
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1018647
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1029995
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1024813
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1006995
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1010412
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1025572
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1018830
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1045029
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1064945
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1059666
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1065669
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1070356
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1074882
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1069812
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1053797
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1055131
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1047095
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1066801
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1058182
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1062880
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1061137
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1048158
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1073463
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1074261
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1066839
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1069300
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1071218
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1082649
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1081834
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1081408
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1064736
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1056714
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1072777
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1083184
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1075563
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1084939
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1106721
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1092797
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1103101
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1101269
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1092689
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1106640
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1108063
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1113944
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1110707
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1123157
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1132642
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1142713
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1139439
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1127482
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1158786
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1161291
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1169111
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1164656
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1165582
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1153927
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1159606
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1157342
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1164302
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1148264
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1171709
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1172284
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1193659
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1163052
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1150020
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1167591
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1176619
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1185366
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1189068
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1184208
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1197940
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1186728
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1182210
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1195401
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1192777
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1186417
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1182466
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1181061
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1204984
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1186194
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1194401
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1202000
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1208903
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1201259
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1191298
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1205410
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1208951
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1210220
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1206913
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1213870
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1213150
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1216550
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1204695
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1195152
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1207828
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1201495
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1212691
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1223077
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1228709
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1223108
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1209394
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1208792
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1224810
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1228738
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1240347
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1239827
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1239047
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1241508
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1227644
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1241289
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1245678
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1230880
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1197599
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1211587
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1222272
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1233217
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1222613
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1224233
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1244323
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1231222
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1225336
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1231047
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1237436
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1230898
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1246027
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1249544
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1233716
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1239749
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1224632
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1222806
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1237320
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1220203
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1219566
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1222812
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1235422
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1233723
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1205328
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1204949
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1179436
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1176044
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1191493
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1173395
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1182795
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1211068
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1225156
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1226165
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1222203
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1217529
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1222059
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1218584
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1212859
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1213549
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1215377
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1216055
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1228087
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1227820
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1202016
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1194946
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1197025
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1183348
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1197479
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1199402
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1206212
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1210673
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1212220
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1207461
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1205221
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1215516
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1187626
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1189406
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1205872
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1209643
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1192279
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1194039
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1204152
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1203541
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1186419
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1183100
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1180682
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1181258
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1163480
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1173353
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1165801
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1162089
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1166369
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1163680
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1157050
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1158367
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1150519
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1165350
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1154402
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1142078
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1125414
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1157697
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1155463
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1141674
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1145146
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1126110
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1130163
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1139532
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1149788
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1141285
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1154115
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1144152
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1152468
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1154493
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1142572
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1148555
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1159821
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1162093
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1193190
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1179233
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1178467
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1195642
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1198871
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1163166
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1156137
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1173638
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1186889
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1180548
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1160862
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1168497
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1148423
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1179635
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1154292
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1169239
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1147519
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1141917
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1131575
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1173933
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1177552
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1161241
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1175565
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1171733
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1202219
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1183783
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1175603
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1190846
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1205963
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1203717
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1204932
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1221107
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1224441
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1203992
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1230979
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1223163
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1239209
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1243620
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1234019
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1230487
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1261347
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1259246
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1252933
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1280499
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1288471
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1272170
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1274586
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1279942
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1285222
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1315086
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1287226
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1282758
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1286772
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1282145
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1301801
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1293862
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1299831
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1306086
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1301666
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1309140
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1307909
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1309454
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1314681
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1302324
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1314826
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1281850
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1311476
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1320013
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1290066
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1310203
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1304105
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1316980
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1295820
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1272866
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1287683
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1305152
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1292963
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1303091
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1311761
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1304559
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1329165
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1339181
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1337094
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1340394
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1345924
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1349333
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1343583
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1366905
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1361488
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1350933
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1361039
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1358430
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1350237
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1336367
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1348431
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1359387
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1358374
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1344141
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1354060
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1360249
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1354930
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1326049
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1349046
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1344429
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1360482
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1387576
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1369530
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1365936
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1377087
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1372346
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1371694
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1372921
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1383363
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1380488
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1372609
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1365859
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1380919
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1366678
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1373923
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1368193
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1359244
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1360410
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1379001
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1381035
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1390099
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1384283
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1392822
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1410351
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1397483
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1391670
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1371170
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1365546
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1398197
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1385312
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1407132
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1398916
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1415520
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1426240
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1448128
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1429124
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1417753
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1440650
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1448044
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1435044
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1441642
   },
   {
    "fecha": "2026-09-30",
    "equity_clp": 1447233
   },
   {
    "fecha": "2026-10-01",
    "equity_clp": 1449337
   },
   {
    "fecha": "2026-10-02",
    "equity_clp": 1472859
   },
   {
    "fecha": "2026-10-05",
    "equity_clp": 1479467
   },
   {
    "fecha": "2026-10-06",
    "equity_clp": 1477906
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 2.1,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 1.87,
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
