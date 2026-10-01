window.PAPER = {
 "generado": "2026-10-01 01:23 UTC",
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
   "sesiones": 40,
   "n_trades": 2,
   "sharpe": 0.79,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0171,
   "resultado_clp": 17124
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-10-01",
  "hasta": "2026-10-01",
  "equity": [
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
    "equity_clp": 1011190
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
    "equity_clp": 1030923
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
    "equity_clp": 1032612
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
    "equity_clp": 1049886
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
    "equity_clp": 1025946
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
    "equity_clp": 1033949
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
    "equity_clp": 1053152
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1066594
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1030314
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1030314
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1030314
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1030314
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1030314
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
    "equity_clp": 1016214
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1019556
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1019725
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1026631
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1027850
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1032180
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1021134
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1006782
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
    "equity_clp": 944859
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
    "equity_clp": 945510
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 943326
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
    "equity_clp": 895564
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 891251
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 894792
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 893271
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
    "equity_clp": 884939
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
    "equity_clp": 871358
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
    "equity_clp": 878255
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
    "equity_clp": 931013
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
    "equity_clp": 961877
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 950390
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
    "equity_clp": 966628
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
    "equity_clp": 971658
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 978738
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 982850
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
    "equity_clp": 989492
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 982011
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
    "equity_clp": 998892
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1001580
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 999589
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1005385
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1005003
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1007228
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
    "equity_clp": 1008800
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1017210
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1022697
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1018010
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
    "equity_clp": 1019054
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
    "equity_clp": 1025566
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
    "equity_clp": 1029880
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 998286
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1007318
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1009694
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
    "equity_clp": 1023238
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1013951
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1004540
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1013000
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
    "equity_clp": 1009873
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1029611
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
    "equity_clp": 1005347
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
    "equity_clp": 995224
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
    "equity_clp": 965844
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
    "equity_clp": 937221
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
    "equity_clp": 927176
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
    "equity_clp": 923798
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
    "equity_clp": 1074558
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
    "equity_clp": 1138216
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
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1140847
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1140847
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
    "equity_clp": 1145863
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
    "equity_clp": 1143578
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
    "equity_clp": 1145922
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
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1166708
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
    "invertido_clp": 481094,
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
    "invertido_clp": 195986,
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
    "resultado_clp": -17503,
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
    "invertido_clp": 244662,
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
    "precio_entrada_usd": 478.33,
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
    "invertido_clp": 168081,
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
    "invertido_clp": 292774,
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
    "invertido_clp": 270303,
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
   "sharpe": 0.29,
   "max_drawdown": -0.206,
   "win_rate": 0.4186,
   "retorno_total": 0.1667,
   "resultado_clp": 166708
  },
  "buy_hold": [
   {
    "fecha": "2024-10-01",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1007468
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1013904
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1033471
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1027978
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1039969
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1055451
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1053164
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1055825
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1064654
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1052462
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1072077
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1069476
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1083648
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1064540
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1087970
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1074404
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1072505
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1073984
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1065078
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1079025
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1086342
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1071276
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1075350
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1057931
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1078007
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1107384
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1123953
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1122069
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1109754
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1133078
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1153231
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1138839
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1119282
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1108784
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1124818
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1123394
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1131705
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1135610
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1129390
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1148484
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1146494
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1154171
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1136738
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1157746
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1157481
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1158822
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1155003
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1135021
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1144892
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1160040
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1154335
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1156107
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1147813
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1164763
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1128372
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1141590
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1152082
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1139495
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1170480
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1169150
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1156668
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1132380
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1144736
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1141923
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1168749
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1182798
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1169659
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1164135
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1148336
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1153398
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1153920
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1172684
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1169719
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1190358
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1194423
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1196523
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1187923
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1179961
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1139189
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1173027
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1176265
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1179330
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1164143
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1161164
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1165699
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1154446
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1156694
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1136478
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1127238
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1144257
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1140144
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1146151
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1141826
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1138830
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1143693
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1141084
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1111575
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1092913
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1102229
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1101020
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1083584
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1112527
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1079690
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1077670
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1085733
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1057497
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1051465
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1008313
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1029828
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1029930
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1017664
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1037700
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1022390
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1014875
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1022236
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1018836
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1030584
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1036784
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1053185
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1030855
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1032412
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1022153
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1010927
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1040716
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1053258
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1011208
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 945750
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 950014
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 969865
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1082886
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1014950
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1041337
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1032694
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1024150
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1004516
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1005898
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 981955
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 999444
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1005290
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1015248
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1017273
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1016042
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1031451
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1033719
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1047147
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1058813
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1053486
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1035169
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1038682
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1054266
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1047335
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1074267
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1094740
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1089314
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1095484
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1100302
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1104955
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1099743
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1083281
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1084651
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1076391
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1096648
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1087788
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1092617
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1090826
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1077484
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1103496
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1104316
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1096687
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1099217
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1101189
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1112939
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1112102
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1111663
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1094525
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1086279
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1102792
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1113489
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1105655
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1115294
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1137685
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1123371
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1133963
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1132080
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1123261
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1137602
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1139064
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1145110
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1141783
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1154581
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1164331
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1174684
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1171319
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1159026
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1191207
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1193782
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1201820
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1197241
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1198193
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1186211
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1192050
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1189722
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1196877
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1180390
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1204491
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1205082
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1227055
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1195592
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1182195
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1200258
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1209539
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1218531
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1222336
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1217340
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1231456
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1219931
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1215286
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1228846
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1226148
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1219610
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1215549
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1214105
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1238698
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1219381
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1227818
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1235629
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1242726
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1234868
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1224628
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1239135
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1242775
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1244080
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1240680
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1247832
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1247092
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1250587
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1238400
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1228590
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1241621
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1235111
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1246619
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1257296
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1263086
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1257328
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1243231
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1242612
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1259077
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1263116
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1275049
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1274515
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1273713
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1276243
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1261991
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1276018
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1280529
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1265318
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1231106
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1245485
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1256468
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1267720
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1256819
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1258485
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1279137
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1265669
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1259619
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1265489
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1272057
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1265336
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1280889
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1284503
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1268233
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1274435
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1258895
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1257018
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1271937
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1254342
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1253687
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1257024
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1269987
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1268240
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1239050
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1238661
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1212435
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1208947
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1224829
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1206225
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1215887
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1244952
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1259433
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1260470
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1256398
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1251593
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1256250
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1252678
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1246793
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1247502
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1249381
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1250078
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1262446
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1262172
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1235646
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1228378
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1230516
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1216456
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1230982
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1232959
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1239959
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1244545
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1246135
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1241244
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1238941
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1249524
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1220853
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1222683
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1239610
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1243487
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1225636
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1227446
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1237842
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1237214
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1219613
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1216200
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1213715
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1214308
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1196031
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1206181
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1198418
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1194602
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1199001
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1196238
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1189422
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1190775
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1182709
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1197954
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1186700
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1174031
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1156901
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1190087
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1187791
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1173616
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1177185
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1157617
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1161782
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1171414
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1181957
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1173216
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1186405
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1176163
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1184712
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1186794
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1174539
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1180690
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1192271
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1194606
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1226573
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1212225
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1211438
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1229094
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1232413
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1195709
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1188484
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1206474
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1220096
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1213578
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1193341
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1201190
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1180554
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1212639
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1186587
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1201952
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1179624
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1173866
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1163235
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1206777
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1210497
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1193730
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1208455
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1204516
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1235855
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1216903
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1208494
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1224164
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1239704
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1237395
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1238644
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1255271
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1258698
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1237677
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1265419
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1257385
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1273880
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1278414
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1268545
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1264914
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1296637
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1294478
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1287988
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1316325
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1324520
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1307763
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1310246
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1315752
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1321180
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1351880
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1323240
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1318647
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1322773
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1318017
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1338223
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1330062
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1336198
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1342628
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1338084
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1345767
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1344502
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1346090
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1351464
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1338761
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1351612
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1317714
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1348169
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1356944
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1326159
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1346860
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1340591
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1353826
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1332075
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1308478
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1323710
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1341667
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1329138
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1339549
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1348462
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1341058
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1366352
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1376649
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1374503
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1377895
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1383580
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1387085
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1381174
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1405149
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1399579
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1388729
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1399118
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1396436
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1388014
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1373756
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1386157
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1397420
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1396378
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1381747
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1391944
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1398306
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1392839
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1363149
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1386789
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1382043
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1398546
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1426398
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1407847
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1404152
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1415615
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1410742
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1410072
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1411332
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1422067
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1419111
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1411012
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1404073
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1419554
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1404915
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1412363
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1406472
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1397273
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1398472
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1417583
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1419674
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1428991
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1423013
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1431790
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1449809
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1436582
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1430606
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1409533
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1403751
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1437316
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1424070
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1446500
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1438055
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1455124
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1466144
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1488644
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1469108
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1457419
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1480957
   },
   {
    "fecha": "2026-09-25",
    "equity_clp": 1488558
   },
   {
    "fecha": "2026-09-28",
    "equity_clp": 1475194
   },
   {
    "fecha": "2026-09-29",
    "equity_clp": 1481976
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.9,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 0.79,
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
