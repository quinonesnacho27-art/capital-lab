window.PAPER = {
 "generado": "2026-09-29 02:08 UTC",
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
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 773.5,
    "stop_usd": 759.46,
    "invertido_clp": 550778
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 741.47,
    "stop_usd": 721.02,
    "invertido_clp": 104429
   }
  ],
  "metricas": {
   "sesiones": 39,
   "n_trades": 2,
   "sharpe": 0.35,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0107,
   "resultado_clp": 10726
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-29",
  "hasta": "2026-09-29",
  "equity": [
   {
    "fecha": "2024-09-30",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1003924
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1004096
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1006121
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1009254
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1006925
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1008984
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1016224
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 994877
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1011191
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1010260
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1024113
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1007274
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1029483
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1014446
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1015333
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1020798
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1010870
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1030924
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1030530
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1010946
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1012636
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1009333
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1012375
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1017644
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1037501
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1032613
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1016597
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1036427
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1049887
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1037971
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1015655
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1008953
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1021844
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1020474
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1025947
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1028278
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1023080
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1037116
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1033914
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1040446
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1030916
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1047296
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1049339
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1049912
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1049682
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1033950
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1041128
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1056045
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1051329
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1055564
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1053153
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1066595
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1030315
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1030315
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1030315
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1030315
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1030315
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1027624
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1024447
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1015184
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1015141
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1016215
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1019556
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1019726
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1026632
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1027850
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1032181
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1021134
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1006783
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 948121
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 960175
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 961328
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 962420
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 957010
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 952103
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 952103
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 948301
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 949061
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 942232
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 939110
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 944860
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 943470
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 945499
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 944182
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 942138
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 945511
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 943327
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 917800
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 900993
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 904140
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 903731
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 899205
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 893170
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 902240
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 895565
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 891252
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 894793
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 893272
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 898756
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 902102
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 909641
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 898997
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 899088
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 893621
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 887709
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 901125
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 906561
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 889260
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 889260
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 889260
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 889260
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 889260
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 863847
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 868577
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 866616
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 866060
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 860824
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 860471
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 854898
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 856446
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 854181
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 846903
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 849483
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 856141
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 854809
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 870121
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 881721
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 880612
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 882867
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 884940
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 887559
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 883669
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 871201
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 871359
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 862654
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 881564
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 875003
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 878256
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 873886
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 865278
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 889994
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 893978
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 886997
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 888341
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 893591
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 905988
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 905052
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 903733
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 886969
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 885085
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 898234
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 907623
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 900000
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 907396
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 931431
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 921796
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 931014
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 927951
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 920392
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 928621
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 933071
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 938202
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 933512
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 947709
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 955608
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 963837
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 961878
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 950391
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 981214
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 981397
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 988312
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 984740
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 986544
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 972255
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 973061
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 971393
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 975828
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 966629
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 987556
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 990504
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1002783
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 976685
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 971659
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 978739
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 982851
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 988308
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 990243
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 987956
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 995309
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 985969
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 982084
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 991547
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 989493
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 982012
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 977918
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 976548
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 996960
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 981828
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 988850
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 994972
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1001314
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 992645
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 984077
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 995728
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 998893
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1001580
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 999590
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1005386
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1005004
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1007229
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 998505
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 991418
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1002382
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 997023
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1008801
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1017211
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1022697
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1018011
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1006617
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1006256
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1019055
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1022578
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1032258
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1032999
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1034010
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1034802
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1025567
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1035530
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1041995
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1029881
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 998287
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1007318
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1009695
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1016505
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1013225
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1013627
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1023239
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1013951
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1004541
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1013001
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1019436
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1019366
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1032626
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1040748
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1025933
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1031409
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1020532
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1009874
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1029612
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1009586
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1001955
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1005348
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1008302
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1008132
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 993855
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 993724
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 982334
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 979251
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 987093
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 975648
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 979221
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 995225
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1000303
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1002310
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1001887
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1000409
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1004720
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1004049
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 998120
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1000753
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1005514
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1006306
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1015606
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1013636
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 988712
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 983454
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 984399
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 979331
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 989632
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 992834
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 996348
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 998651
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 999763
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 995836
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 993662
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1001800
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 978261
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 980865
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 995276
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1000874
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 987339
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 986072
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 996800
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 996264
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 982927
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 978454
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 977545
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 979059
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 964401
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 971456
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 965831
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 961005
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 961225
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 965845
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 968879
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 969191
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 948343
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 964911
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 949346
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 927533
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 919187
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 938560
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 938690
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 930843
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 933383
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 927668
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 929291
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 931617
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 934761
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 932254
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 935908
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 933409
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 936142
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 937222
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 926280
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 926937
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 927389
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 924863
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 927381
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 926262
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 924333
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 927177
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 927931
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 926671
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 925005
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 926539
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 927876
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 927861
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 927302
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 928263
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 931008
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 923799
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 930487
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 928710
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 952251
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 944367
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 941477
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 954954
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 969718
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 968448
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 971185
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 982379
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 984979
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 976323
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1004431
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1001223
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1027264
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1027566
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1011158
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1016096
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1043917
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1047273
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1042292
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1074736
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1092220
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1074559
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1094669
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1103942
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1098113
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1130368
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1105024
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1093523
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1090040
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1088029
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1115689
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1110130
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1119493
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1142904
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1136140
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1145389
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1144372
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1148276
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1167230
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1164721
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1164569
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1103149
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1138548
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1138217
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1112692
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1145369
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1143872
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1165470
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1134034
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1125687
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1153081
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1171936
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1140933
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1145788
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1162763
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1143600
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1168528
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1186936
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1164819
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1148572
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1153141
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1150023
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1149272
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1163310
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1160265
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1151233
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1158693
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1155141
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1147428
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1139072
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1141827
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1144329
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1144097
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1140848
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1149032
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1143581
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1142495
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1145864
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1144431
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1144234
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1144605
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1147759
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1146483
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1143374
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1137147
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1143579
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1136774
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1138065
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1134785
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1134785
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1134785
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1141783
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1140837
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1144269
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1140800
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1142163
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1146965
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1145748
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1145923
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1141431
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1138436
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1146618
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1142203
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1146920
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1146510
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1152707
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1157174
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1167432
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1157124
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1147206
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1166149
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1171610
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1159069
   }
  ],
  "trades": [
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
    "invertido_clp": 355023,
    "resultado_clp": 2067,
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
    "invertido_clp": 481095,
    "resultado_clp": 7213,
    "resultado_pct": 0.015
   },
   {
    "ticker": "SOXX",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2024-10-03",
    "fecha_salida": "2024-11-15",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "Stop loss tocado en 211.85 USD",
    "precio_entrada_usd": 225.61,
    "precio_salida_usd": 211.85,
    "riesgo_clp": 10000,
    "invertido_clp": 163882,
    "resultado_clp": 793,
    "resultado_pct": 0.0048
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
    "invertido_clp": 195987,
    "resultado_clp": -5825,
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
    "invertido_clp": 464177,
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
    "invertido_clp": 191394,
    "resultado_clp": -14136,
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
    "riesgo_clp": 9455,
    "invertido_clp": 313648,
    "resultado_clp": -17504,
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
    "riesgo_clp": 9421,
    "invertido_clp": 244661,
    "resultado_clp": -9018,
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
    "riesgo_clp": 9521,
    "invertido_clp": 393793,
    "resultado_clp": -26376,
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
    "riesgo_clp": 8992,
    "invertido_clp": 249162,
    "resultado_clp": -4354,
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
    "riesgo_clp": 8992,
    "invertido_clp": 185102,
    "resultado_clp": -5591,
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
    "riesgo_clp": 8893,
    "invertido_clp": 129351,
    "resultado_clp": -11276,
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
    "riesgo_clp": 8893,
    "invertido_clp": 110376,
    "resultado_clp": -12130,
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
    "riesgo_clp": 8893,
    "invertido_clp": 73587,
    "resultado_clp": -10957,
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
    "riesgo_clp": 8549,
    "invertido_clp": 139000,
    "resultado_clp": 24628,
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
    "riesgo_clp": 8564,
    "invertido_clp": 168082,
    "resultado_clp": 21713,
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
    "riesgo_clp": 8564,
    "invertido_clp": 98108,
    "resultado_clp": 27874,
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
    "riesgo_clp": 9953,
    "invertido_clp": 479405,
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
    "invertido_clp": 281340,
    "resultado_clp": -7336,
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
    "riesgo_clp": 8817,
    "invertido_clp": 181328,
    "resultado_clp": 33594,
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
    "riesgo_clp": 10000,
    "invertido_clp": 157723,
    "resultado_clp": -8065,
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
    "riesgo_clp": 10000,
    "invertido_clp": 311301,
    "resultado_clp": -4239,
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
    "riesgo_clp": 9987,
    "invertido_clp": 369122,
    "resultado_clp": -14389,
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
    "riesgo_clp": 9658,
    "invertido_clp": 154015,
    "resultado_clp": -3811,
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
    "riesgo_clp": 9715,
    "invertido_clp": 200718,
    "resultado_clp": -15020,
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
    "riesgo_clp": 9793,
    "invertido_clp": 302521,
    "resultado_clp": -14655,
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
    "riesgo_clp": 9372,
    "invertido_clp": 172164,
    "resultado_clp": -8990,
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
    "riesgo_clp": 8806,
    "invertido_clp": 226028,
    "resultado_clp": 21363,
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
    "riesgo_clp": 8829,
    "invertido_clp": 42351,
    "resultado_clp": 23744,
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
    "riesgo_clp": 9283,
    "invertido_clp": 236630,
    "resultado_clp": 12331,
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
    "riesgo_clp": 9283,
    "invertido_clp": 285241,
    "resultado_clp": 7532,
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
    "riesgo_clp": 9684,
    "invertido_clp": 248961,
    "resultado_clp": 29348,
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
    "riesgo_clp": 9287,
    "invertido_clp": 136089,
    "resultado_clp": 87834,
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
    "riesgo_clp": 9763,
    "invertido_clp": 292773,
    "resultado_clp": 38922,
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
    "riesgo_clp": 9444,
    "invertido_clp": 270304,
    "resultado_clp": 36616,
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
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 773.5,
    "stop_usd": 759.46,
    "invertido_clp": 550778
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-09-21",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 741.47,
    "stop_usd": 721.02,
    "invertido_clp": 248465
   }
  ],
  "metricas": {
   "sesiones": 500,
   "n_trades": 43,
   "sharpe": 0.27,
   "max_drawdown": -0.206,
   "win_rate": 0.4186,
   "retorno_total": 0.1591,
   "resultado_clp": 159069
  },
  "buy_hold": [
   {
    "fecha": "2024-09-30",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 988464
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 995845
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1002208
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1021549
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1016119
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1027972
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1043276
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1041015
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1043645
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1052373
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1040321
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1059710
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1057138
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1071147
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1052259
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1075419
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1062009
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1060132
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1061594
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1052791
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1066577
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1073811
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1058918
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1062945
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1045727
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1065571
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1094609
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1110987
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1109125
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1096952
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1120007
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1139928
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1125702
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1106370
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1095994
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1111842
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1110435
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1118650
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1122509
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1116362
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1135235
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1133268
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1140857
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1123625
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1144391
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1144128
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1145454
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1141679
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1121928
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1131685
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1146658
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1141019
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1142771
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1134572
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1151327
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1115355
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1128421
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1138791
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1126350
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1156977
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1155663
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1143325
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1119317
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1131531
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1128750
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1155266
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1169153
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1156166
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1150706
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1135089
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1140092
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1140609
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1159156
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1156225
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1176626
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1180645
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1182720
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1174219
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1166349
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1126048
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1159495
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1162696
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1165725
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1150714
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1147768
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1152251
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1141128
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1143350
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1123368
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1114234
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1131057
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1126991
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1132929
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1128654
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1125693
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1130500
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1127920
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1098752
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1080305
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1089514
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1088319
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1071083
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1099693
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1067235
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1065239
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1073209
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1045298
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1039336
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 996681
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1017948
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1018049
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1005925
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1025729
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1010596
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1003167
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1010444
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1007082
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1018695
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1024824
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1041035
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1018964
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1020503
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1010361
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 999265
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1028710
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1041108
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 999542
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 934840
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 939055
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 958677
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1070394
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1003242
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1029324
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1020781
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1012336
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 992928
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 994294
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 970627
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 987915
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 993693
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1003536
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1005538
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1004321
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1019552
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1021795
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1035067
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1046598
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1041333
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1023228
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1026700
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1042104
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1035253
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1061874
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1082111
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1076748
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1082847
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1087609
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1092208
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1087057
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1070784
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1072139
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1063974
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1083997
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1075239
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1080013
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1078242
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1065054
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1090766
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1091577
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1084036
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1086536
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1088486
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1100101
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1099273
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1098840
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1081899
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1073748
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1090070
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1100644
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1092900
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1102428
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1124561
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1110412
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1120882
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1119021
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1110303
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1124478
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1125924
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1131901
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1128611
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1141262
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1150900
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1161133
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1157807
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1145656
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1177465
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1180011
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1187956
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1183430
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1184370
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1172527
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1178299
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1175997
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1183070
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1166774
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1190596
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1191181
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1212900
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1181800
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1168558
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1186412
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1195586
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1204474
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1208235
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1203297
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1217250
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1205858
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1201266
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1214670
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1212004
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1205541
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1201527
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1200099
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1224408
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1205315
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1213654
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1221375
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1228390
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1220623
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1210501
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1224840
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1228439
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1229728
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1226368
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1233437
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1232705
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1236160
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1224114
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1214418
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1227298
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1220863
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1232239
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1242792
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1248515
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1242824
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1228889
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1228277
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1244553
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1248545
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1260340
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1259812
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1259019
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1261520
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1247433
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1261298
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1265757
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1250721
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1216904
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1231117
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1241974
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1253096
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1242321
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1243967
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1264381
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1251069
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1245088
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1250891
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1257383
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1250739
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1266112
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1269686
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1253602
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1259734
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1244372
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1242517
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1257265
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1239872
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1239224
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1242523
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1255337
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1253610
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1224757
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1224372
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1198448
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1195001
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1210700
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1192310
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1201861
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1230590
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1244905
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1245930
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1241904
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1237155
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1241758
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1238227
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1232410
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1233111
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1234969
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1235657
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1247883
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1247611
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1221392
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1214208
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1216321
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1202423
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1216782
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1218736
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1225655
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1230188
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1231760
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1226925
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1224649
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1235109
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1206770
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1208579
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1225310
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1229142
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1211498
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1213286
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1223562
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1222941
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1205544
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1202170
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1199714
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1200300
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1182234
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1192267
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1184593
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1180822
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1185170
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1182438
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1175701
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1177039
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1169065
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1184135
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1173010
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1160487
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1143555
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1176359
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1174089
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1160077
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1163605
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1144263
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1148380
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1157900
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1168322
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1159682
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1172718
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1162595
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1171045
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1173103
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1160989
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1167069
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1178517
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1180825
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1212423
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1198241
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1197463
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1214915
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1218196
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1181915
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1174774
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1192556
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1206021
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1199578
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1179575
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1187333
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1166935
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1198650
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1172899
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1188086
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1166016
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1160324
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1149816
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1192856
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1196533
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1179959
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1194514
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1190621
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1221599
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1202865
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1194553
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1210042
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1225402
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1223120
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1224355
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1240790
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1244178
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1223399
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1250822
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1242880
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1259184
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1263666
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1253911
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1250322
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1281680
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1279545
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1273130
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1301140
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1309241
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1292676
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1295131
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1300574
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1305939
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1336284
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1307976
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1303435
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1307514
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1302812
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1322786
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1314718
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1320784
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1327140
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1322648
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1330242
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1328992
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1330562
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1335873
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1323317
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1336020
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1302513
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1332617
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1341291
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1310861
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1331323
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1325126
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1338209
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1316708
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1293384
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1308440
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1326190
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1313805
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1324097
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1332906
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1325587
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1350590
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1360768
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1358647
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1362000
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1367619
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1371083
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1365241
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1388939
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1383434
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1372709
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1382978
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1380327
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1372002
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1357909
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1370167
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1381300
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1380270
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1365808
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1375887
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1382175
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1376771
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1347424
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1370792
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1366100
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1382412
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1409943
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1391606
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1387954
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1399285
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1394468
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1393805
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1395051
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1405662
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1402741
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1394735
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1387876
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1403178
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1388709
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1396070
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1390247
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1381155
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1382340
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1401230
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1403297
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1412506
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1406597
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1415273
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1433085
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1420009
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1414103
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1393273
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1387558
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1420735
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1407642
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1429814
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1421466
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1438338
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1449231
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1471471
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1452161
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1440607
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1463872
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1471386
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1458176
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.8,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 0.35,
    "umbral": 1.0,
    "cumple": false
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
