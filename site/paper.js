window.PAPER = {
 "generado": "2026-09-04 00:14 UTC",
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
    "precio_entrada_usd": 771.33,
    "precio_salida_usd": 762.6,
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
    "razon_salida": "Stop loss tocado en 705.76 USD",
    "precio_entrada_usd": 732.07,
    "precio_salida_usd": 705.76,
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
    "precio_entrada_usd": 711.37,
    "stop_usd": 690.17,
    "invertido_clp": 330871
   }
  ],
  "metricas": {
   "sesiones": 22,
   "n_trades": 2,
   "sharpe": -2.11,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.0066,
   "resultado_clp": -6648
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
    "equity_clp": 984939
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
    "equity_clp": 1003780
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-04",
  "hasta": "2026-09-04",
  "equity": [
   {
    "fecha": "2024-09-04",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 998275
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 999151
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1006149
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1005059
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1005003
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1003483
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 996584
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 998766
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 987718
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 984143
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 969065
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 977451
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 984565
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1005410
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 999380
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1014256
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1030088
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1027969
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1028030
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1037252
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1019827
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1036078
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1034297
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1049510
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1033139
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1056725
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1039748
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1041663
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1047522
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1036940
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1056529
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1059251
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1040911
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1042892
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1038049
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1043569
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1052036
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1072521
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1068832
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1056193
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1079176
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1097281
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1083270
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1058021
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1049754
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1066840
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1064946
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1071770
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1074574
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1067615
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1085753
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1080941
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1089726
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1078685
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1100215
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1103723
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1104303
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1105005
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1084270
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1093516
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1114260
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1107963
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1114573
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1112886
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1129138
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1089845
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1092172
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1094018
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1091749
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1100990
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1100387
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1096085
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1088864
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1090711
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1090103
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1098589
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1104251
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1095843
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1090756
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1077071
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1076912
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1077402
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1087299
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1085052
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1099693
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1100959
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1108163
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1096128
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1080911
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1018868
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1040208
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1042897
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1044315
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1036784
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1031346
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1034305
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1027414
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1029366
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1015627
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1011458
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1021149
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1019756
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1024703
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1023453
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1020356
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1023431
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1021043
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 992409
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 971395
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 974935
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 974746
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 961803
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 969550
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 959547
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 961558
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 964367
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 953998
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 953998
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 953998
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 953998
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 953998
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 947595
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 957218
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 950136
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 945560
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 949317
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 947703
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 953522
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 957072
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 965070
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 953777
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 953874
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 948074
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 941802
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 956035
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 961803
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 943448
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 943448
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 943448
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 943448
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 943448
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 916486
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 921504
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 919424
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 918834
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 913279
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 912904
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 906991
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 908634
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 906230
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 898509
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 901247
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 908310
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 906897
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 923141
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 935449
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 934272
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 936665
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 938863
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 941643
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 937515
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 924288
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 924455
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 915220
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 935282
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 928321
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 931772
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 927136
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 918004
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 944226
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 948452
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 941046
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 942472
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 948042
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 961195
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 960202
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 958802
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 941016
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 939018
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 952967
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 962929
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 954842
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 962688
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 988188
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 977965
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 987745
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 984496
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 976477
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 985206
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 989928
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 995371
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 990395
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1005458
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1013838
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1022569
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1020490
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1008302
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1041004
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1041198
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1048535
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1044745
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1046660
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1031500
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1032355
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1030585
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1035290
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1025530
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1047732
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1050860
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1063888
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1036199
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1030867
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1038378
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1042741
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1048531
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1050583
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1048157
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1055958
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1046049
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1041927
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1051967
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1049787
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1041850
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1037507
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1036054
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1057710
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1041656
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1049106
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1055601
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1062329
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1053132
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1044042
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1056403
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1059760
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1062612
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1060499
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1066649
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1066243
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1068604
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1059349
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1051830
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1063462
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1057777
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1070272
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1079194
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1085015
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1080043
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1067955
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1067573
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1081150
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1084889
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1095159
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1095945
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1097018
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1097858
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1088059
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1098630
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1105489
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1092636
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1059117
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1068699
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1071220
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1078446
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1074966
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1075392
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1085590
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1075930
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1066234
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1074942
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1081610
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1081347
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1095431
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1103846
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1088164
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1093967
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1082380
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1071413
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1092022
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1070971
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1062872
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1066471
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1069606
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1069426
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1054278
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1054139
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1042055
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1038785
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1047104
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1034962
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1038752
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1055731
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1061119
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1063248
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1062800
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1061232
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1065806
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1065094
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1058951
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1061661
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1066578
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1067428
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1077228
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1075217
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1049137
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1043588
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1044609
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1039232
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1049933
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1053262
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1056937
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1059333
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1060520
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1056355
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1054064
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1062710
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1037751
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1040559
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1055832
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1061736
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1047326
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1046050
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1057390
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1056831
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1042676
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1038002
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1037027
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1038633
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1023094
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1030455
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1024604
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1019582
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1019818
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1024582
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1027656
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1027937
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1006009
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1023514
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1006993
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 984413
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 975748
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 995955
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 996083
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 987920
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 990615
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 984551
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 986273
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 988740
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 992077
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 989416
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 993294
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 990642
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 993542
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 994687
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 983076
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 983773
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 984251
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 981572
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 984243
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 983056
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 981009
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 984026
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 984826
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 983490
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 981722
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 983350
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 984768
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 984752
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 984160
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 985180
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 988092
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 980441
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 987539
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 985654
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1010637
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1002271
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 999204
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1013506
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1029176
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1027828
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1030733
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1042613
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1045373
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1036186
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1065988
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1062592
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1090217
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1090539
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1073130
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1078365
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1107892
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1111446
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1106158
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1140585
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1159134
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1140388
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1161714
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1171555
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1165377
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1199602
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1172706
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1160504
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1156811
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1154676
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1184024
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1178124
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1188061
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1212895
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1205717
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1215530
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1214448
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1218588
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1238701
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1236034
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1235881
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1170724
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1208276
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1207934
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1180851
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1215512
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1213923
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1236829
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1203481
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1194622
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1223677
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1243686
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1210805
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1215962
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1233970
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1213639
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1240085
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1259610
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1236153
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1218930
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1223771
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1220478
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1219675
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1234563
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1231333
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1221761
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1229669
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1225908
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1217735
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1208874
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1211807
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1214471
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1214225
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1210764
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1210772
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1210777
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1210773
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1210749
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1210768
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1210764
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1210777
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1218984
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1213518
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1212429
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1215807
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1214371
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1214173
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1214545
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1217708
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1216430
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1213314
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1207081
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1213525
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1206709
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1208006
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1204721
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1204714
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1204715
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1211728
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1210784
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1214223
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1210750
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1212119
   }
  ],
  "trades": [
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-26",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 219.88 USD",
    "precio_entrada_usd": 234.15,
    "precio_salida_usd": 219.88,
    "riesgo_clp": 9988,
    "invertido_clp": 47729,
    "resultado_clp": -451,
    "resultado_pct": -0.0094
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-19",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 557.78,
    "precio_salida_usd": 557.19,
    "riesgo_clp": 10000,
    "invertido_clp": 372695,
    "resultado_clp": 12054,
    "resultado_pct": 0.0323
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-26",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 485.07,
    "precio_salida_usd": 479.5,
    "riesgo_clp": 9988,
    "invertido_clp": 311740,
    "resultado_clp": 13317,
    "resultado_pct": 0.0427
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-11-06",
    "fecha_salida": "2024-12-18",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 579.14,
    "precio_salida_usd": 574.48,
    "riesgo_clp": 10000,
    "invertido_clp": 464180,
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
    "precio_entrada_usd": 501.04,
    "precio_salida_usd": 511.83,
    "riesgo_clp": 10000,
    "invertido_clp": 292903,
    "resultado_clp": 14455,
    "resultado_pct": 0.0494
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-06",
    "fecha_salida": "2025-01-10",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 215.72 USD",
    "precio_entrada_usd": 227.06,
    "precio_salida_usd": 215.72,
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
    "razon_salida": "Stop loss tocado en 210.33 USD",
    "precio_entrada_usd": 221.73,
    "precio_salida_usd": 210.33,
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
    "razon_salida": "Stop loss (gap de apertura bajo 219.45 USD)",
    "precio_entrada_usd": 230.57,
    "precio_salida_usd": 217.23,
    "riesgo_clp": 10000,
    "invertido_clp": 207413,
    "resultado_clp": -19893,
    "resultado_pct": -0.0959
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-22",
    "fecha_salida": "2025-02-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 582.24 USD",
    "precio_entrada_usd": 596.23,
    "precio_salida_usd": 582.24,
    "riesgo_clp": 10000,
    "invertido_clp": 367651,
    "resultado_clp": -14182,
    "resultado_pct": -0.0386
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-02-13",
    "fecha_salida": "2025-02-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 515.90 USD",
    "precio_entrada_usd": 531.94,
    "precio_salida_usd": 515.9,
    "riesgo_clp": 10000,
    "invertido_clp": 304916,
    "resultado_clp": -17016,
    "resultado_pct": -0.0558
   },
   {
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-02-04",
    "fecha_salida": "2025-02-27",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "Stop loss tocado en 577.35 USD",
    "precio_entrada_usd": 591.65,
    "precio_salida_usd": 577.35,
    "riesgo_clp": 10000,
    "invertido_clp": 413605,
    "resultado_clp": -27703,
    "resultado_pct": -0.067
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2024-09-16",
    "fecha_salida": "2025-03-06",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 468.33,
    "precio_salida_usd": 484.59,
    "riesgo_clp": 10000,
    "invertido_clp": 267837,
    "resultado_clp": 12360,
    "resultado_pct": 0.0461
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-03-12",
    "fecha_salida": "2025-04-03",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 529.63 USD",
    "precio_entrada_usd": 549.46,
    "precio_salida_usd": 529.63,
    "riesgo_clp": 9540,
    "invertido_clp": 264344,
    "resultado_clp": -4619,
    "resultado_pct": -0.0175
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-03-12",
    "fecha_salida": "2025-04-03",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 450.40 USD",
    "precio_entrada_usd": 473.4,
    "precio_salida_usd": 450.4,
    "riesgo_clp": 9540,
    "invertido_clp": 196381,
    "resultado_clp": -5932,
    "resultado_pct": -0.0302
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-10",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 503.82 USD",
    "precio_entrada_usd": 541.01,
    "precio_salida_usd": 503.82,
    "riesgo_clp": 9434,
    "invertido_clp": 137233,
    "resultado_clp": -11963,
    "resultado_pct": -0.0872
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-21",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 425.92 USD",
    "precio_entrada_usd": 463.25,
    "precio_salida_usd": 425.92,
    "riesgo_clp": 9434,
    "invertido_clp": 117102,
    "resultado_clp": -12869,
    "resultado_pct": -0.1099
   },
   {
    "ticker": "SOXX",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2025-04-09",
    "fecha_salida": "2025-04-21",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "Stop loss tocado en 160.33 USD",
    "precio_entrada_usd": 182.37,
    "precio_salida_usd": 160.33,
    "riesgo_clp": 9434,
    "invertido_clp": 78071,
    "resultado_clp": -11624,
    "resultado_pct": -0.1489
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-01",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 478.83,
    "precio_salida_usd": 551.23,
    "riesgo_clp": 9070,
    "invertido_clp": 147470,
    "resultado_clp": 26129,
    "resultado_pct": 0.1772
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-02",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 558.9,
    "precio_salida_usd": 614.91,
    "riesgo_clp": 9086,
    "invertido_clp": 178324,
    "resultado_clp": 23036,
    "resultado_pct": 0.1292
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-02",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 188.73,
    "precio_salida_usd": 236.14,
    "riesgo_clp": 9086,
    "invertido_clp": 104087,
    "resultado_clp": 29572,
    "resultado_pct": 0.2841
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-08-12",
    "fecha_salida": "2025-10-10",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 635.65,
    "precio_salida_usd": 647.65,
    "riesgo_clp": 10000,
    "invertido_clp": 508618,
    "resultado_clp": -145,
    "resultado_pct": -0.0003
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-10-24",
    "fecha_salida": "2025-11-07",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 657.60 USD",
    "precio_entrada_usd": 671.69,
    "precio_salida_usd": 657.6,
    "riesgo_clp": 10000,
    "invertido_clp": 310544,
    "resultado_clp": -8098,
    "resultado_pct": -0.0261
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-10-20",
    "fecha_salida": "2025-11-07",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 292.22,
    "precio_salida_usd": 293.63,
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
    "precio_entrada_usd": 512.54,
    "precio_salida_usd": 622.78,
    "riesgo_clp": 9354,
    "invertido_clp": 192378,
    "resultado_clp": 35641,
    "resultado_pct": 0.1853
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-12-03",
    "fecha_salida": "2025-12-16",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 308.57,
    "precio_salida_usd": 295.88,
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
    "precio_entrada_usd": 680.06,
    "precio_salida_usd": 673.29,
    "riesgo_clp": 10000,
    "invertido_clp": 339743,
    "resultado_clp": -4626,
    "resultado_pct": -0.0136
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-12-23",
    "fecha_salida": "2026-01-20",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 684.32,
    "precio_salida_usd": 674.0,
    "riesgo_clp": 10000,
    "invertido_clp": 403889,
    "resultado_clp": -15744,
    "resultado_pct": -0.039
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-01-27",
    "fecha_salida": "2026-02-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 613.69 USD",
    "precio_entrada_usd": 629.64,
    "precio_salida_usd": 613.69,
    "riesgo_clp": 10000,
    "invertido_clp": 181528,
    "resultado_clp": -4492,
    "resultado_pct": -0.0247
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-01-21",
    "fecha_salida": "2026-02-04",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 330.93 USD",
    "precio_entrada_usd": 347.76,
    "precio_salida_usd": 330.93,
    "riesgo_clp": 10000,
    "invertido_clp": 206616,
    "resultado_clp": -15461,
    "resultado_pct": -0.0748
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-12-17",
    "fecha_salida": "2026-02-10",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 598.22,
    "precio_salida_usd": 610.03,
    "riesgo_clp": 10000,
    "invertido_clp": 308905,
    "resultado_clp": -14964,
    "resultado_pct": -0.0484
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-02-25",
    "fecha_salida": "2026-03-02",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss (gap de apertura bajo 347.59 USD)",
    "precio_entrada_usd": 367.6,
    "precio_salida_usd": 343.42,
    "riesgo_clp": 9947,
    "invertido_clp": 182720,
    "resultado_clp": -9542,
    "resultado_pct": -0.0522
   },
   {
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-05-14",
    "fecha_salida": "2026-03-02",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 579.44,
    "precio_salida_usd": 682.75,
    "riesgo_clp": 9343,
    "invertido_clp": 239801,
    "resultado_clp": 22665,
    "resultado_pct": 0.0945
   },
   {
    "ticker": "SOXX",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2025-05-15",
    "fecha_salida": "2026-03-19",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 211.95,
    "precio_salida_usd": 340.04,
    "riesgo_clp": 9367,
    "invertido_clp": 44932,
    "resultado_clp": 25191,
    "resultado_pct": 0.5606
   },
   {
    "ticker": "QQQ",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2026-03-31",
    "fecha_salida": "2026-04-15",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "RSI14 llegó a 70 (sobrecompra)",
    "precio_entrada_usd": 576.55,
    "precio_salida_usd": 636.7,
    "riesgo_clp": 9852,
    "invertido_clp": 251139,
    "resultado_clp": 13087,
    "resultado_pct": 0.0521
   },
   {
    "ticker": "SPY",
    "estrategia": "Rebote RSI 30/70",
    "fecha_entrada": "2026-03-31",
    "fecha_salida": "2026-04-16",
    "razon_entrada": "RSI14 recuperó el nivel 30 desde sobreventa",
    "razon_salida": "RSI14 llegó a 70 (sobrecompra)",
    "precio_entrada_usd": 648.67,
    "precio_salida_usd": 699.86,
    "riesgo_clp": 9852,
    "invertido_clp": 302731,
    "resultado_clp": 7994,
    "resultado_pct": 0.0264
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-15",
    "fecha_salida": "2026-06-05",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 636.7,
    "precio_salida_usd": 704.29,
    "riesgo_clp": 10000,
    "invertido_clp": 264226,
    "resultado_clp": 31148,
    "resultado_pct": 0.1179
   },
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-07",
    "fecha_salida": "2026-07-02",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 347.59,
    "precio_salida_usd": 566.32,
    "riesgo_clp": 9857,
    "invertido_clp": 144433,
    "resultado_clp": 93220,
    "resultado_pct": 0.6454
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-04-21",
    "fecha_salida": "2026-07-17",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 643.62,
    "precio_salida_usd": 695.33,
    "riesgo_clp": 10000,
    "invertido_clp": 309718,
    "resultado_clp": 41175,
    "resultado_pct": 0.1329
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-04-09",
    "fecha_salida": "2026-07-23",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 678.16,
    "precio_salida_usd": 738.18,
    "riesgo_clp": 10000,
    "invertido_clp": 286877,
    "resultado_clp": 38861,
    "resultado_pct": 0.1355
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-03",
    "fecha_salida": "2026-08-20",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 757.67,
    "precio_salida_usd": 762.6,
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
    "razon_salida": "Stop loss tocado en 705.76 USD",
    "precio_entrada_usd": 732.07,
    "precio_salida_usd": 705.76,
    "riesgo_clp": 10000,
    "invertido_clp": 278244,
    "resultado_clp": -7934,
    "resultado_pct": -0.0285
   }
  ],
  "abiertas": [
   {
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-04-23",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "precio_entrada_usd": 706.63,
    "stop_usd": 688.99,
    "invertido_clp": 1007
   },
   {
    "ticker": "QQQ",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2026-08-26",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "precio_entrada_usd": 711.37,
    "stop_usd": 690.17,
    "invertido_clp": 335542
   }
  ],
  "metricas": {
   "sesiones": 501,
   "n_trades": 41,
   "sharpe": 0.39,
   "max_drawdown": -0.2043,
   "win_rate": 0.439,
   "retorno_total": 0.2121,
   "resultado_clp": 212119
  },
  "buy_hold": [
   {
    "fecha": "2024-09-04",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1013182
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 995422
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1007689
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1012282
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1029063
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1029368
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1026041
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1022153
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1015448
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1020186
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1038532
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1036860
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1036702
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1033405
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1020975
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1022935
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1014760
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1012469
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1000789
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1008262
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1014705
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1034287
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1028789
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1040790
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1056284
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1053995
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1056658
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1065494
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1053293
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1072923
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1070319
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1084503
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1065379
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1088828
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1075251
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1073351
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1074831
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1065918
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1079876
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1087200
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1072122
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1076198
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1058766
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1078857
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1108257
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1124840
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1122955
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1110630
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1133972
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1154141
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1139738
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1120165
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1109659
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1125706
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1124281
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1132598
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1136506
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1130281
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1149390
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1147399
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1155081
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1137635
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1158660
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1158394
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1159736
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1155915
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1135917
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1145796
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1160956
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1155246
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1157020
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1148718
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1165682
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1129262
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1142491
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1152991
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1140394
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1171403
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1170073
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1157580
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1133274
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1145639
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1142825
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1169671
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1183731
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1170582
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1165054
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1149242
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1154308
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1154831
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1173609
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1170642
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1191297
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1195366
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1197467
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1188861
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1180892
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1140088
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1173953
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1177193
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1180261
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1165062
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1162080
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1166618
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1155356
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1157606
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1137375
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1128127
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1145160
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1141043
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1147055
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1142727
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1139729
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1144596
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1141984
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1112452
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1093776
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1103098
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1101889
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1084438
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1113405
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1080542
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1078521
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1086590
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1058331
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1052295
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1009109
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1030641
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1030743
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1018468
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1038519
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1023197
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1015675
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1023043
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1019639
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1031397
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1037602
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1054016
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1031669
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1033227
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1022959
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1011725
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1041537
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1054090
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1012005
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 946496
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 950764
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 970630
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1083740
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1015751
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1042158
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1033509
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1024958
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1005309
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1006691
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 982729
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 1000232
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1006083
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1016049
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1018076
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1016844
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1032265
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1034535
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1047973
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1059648
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1054317
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1035986
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1039501
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1055098
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1048162
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1075114
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1095604
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1090173
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1096349
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1101170
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1105826
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1100611
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1084135
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1085507
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1077240
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1097513
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1088646
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1093479
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1091686
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1078334
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1104367
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1105188
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1097552
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1100084
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1102058
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1113818
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1112979
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1112540
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1095389
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1087136
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1103662
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1114368
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1106527
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1116174
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1138582
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1124257
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1134858
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1132974
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1124147
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1138499
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1139963
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1146014
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1142683
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1155492
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1165250
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1175610
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1172243
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1159941
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1192147
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1194724
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1202769
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1198185
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1199138
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1187147
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1192991
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1190660
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1197822
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1181322
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1205441
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1206033
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1228023
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1196536
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1183128
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1201205
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1210493
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1219492
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1223300
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1218300
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1232428
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1220893
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1216245
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1229816
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1227116
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1220573
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1216508
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1215063
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1239675
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1220344
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1228786
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1236604
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1243707
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1235843
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1225595
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1240112
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1243756
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1245061
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1241659
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1248817
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1248076
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1251574
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1239377
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1229560
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1242601
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1236085
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1247603
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1258288
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1264082
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1258320
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1244212
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1243592
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1260071
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1264113
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1276055
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1275520
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1274718
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1277250
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1262987
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1277025
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1281540
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1266316
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1232077
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1246468
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1257460
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1268720
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1257811
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1259478
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1280146
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1266668
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1260613
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1266488
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1273061
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1266335
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1281899
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1285517
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1269233
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1275441
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1259888
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1258009
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1272941
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1255331
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1254676
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1258016
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1270989
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1269241
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1240028
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1239638
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1213392
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1209901
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1225796
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1207176
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1216846
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1245934
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1260427
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1261465
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1257389
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1252580
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1257241
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1253666
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1247777
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1248486
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1250367
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1251064
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1263442
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1263167
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1236621
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1229347
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1231486
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1217416
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1231953
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1233932
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1240938
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1245527
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1247118
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1242223
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1239919
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1250510
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1221817
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1223648
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1240588
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1244468
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1226603
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1228415
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1238819
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1238190
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1220575
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1217160
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1214672
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1215266
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1196975
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1207133
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1199364
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1195545
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1199947
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1197182
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1190360
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1191715
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1183642
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1198899
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1187636
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1174957
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1157814
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1191026
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1188728
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1174542
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1178114
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1158530
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1162699
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1172338
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1182889
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1174141
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1187341
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1177091
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1185647
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1187730
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1175465
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1181621
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1193212
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1195549
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1227541
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1213182
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1212394
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1230064
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1233385
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1196652
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1189421
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1207426
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1221059
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1214535
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1194282
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1202137
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1181486
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1213596
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1187523
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1202900
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1180555
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1174792
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1164152
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1207729
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1211453
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1194672
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1209409
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1205466
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1236830
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1217864
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1209448
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1225130
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1240682
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1238371
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1239621
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1256261
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1259692
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1238653
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1266418
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1258377
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1274885
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1279423
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1269546
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1265912
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1297660
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1295499
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1289004
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1317363
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1325565
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1308794
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1311280
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1316790
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1322223
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1352946
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1324284
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1319687
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1323817
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1319057
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1339279
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1331111
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1337252
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1343687
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1339140
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1346829
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1345563
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1347152
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1352530
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1339817
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1352679
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1318753
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1349233
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1358015
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1327206
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1347923
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1341649
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1354894
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1333126
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1309511
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1324755
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1342726
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1330187
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1340606
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1349526
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1342116
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1367431
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1377735
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1375588
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1378983
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1384672
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1388179
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1382264
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1406257
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1400684
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1389825
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1400222
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1397538
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1389109
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1374840
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1387251
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1398523
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1397480
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1382837
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1393042
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1399409
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1393938
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1364225
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1387884
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1383134
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1399649
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1427523
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1408957
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1405260
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1416732
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1411855
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1411184
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1412446
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1423189
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1420231
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1412125
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1405181
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1420674
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1406024
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1413478
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1407582
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1398376
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1399576
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1418701
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1420794
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1430119
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1424135
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1432920
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.0,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -2.11,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0139,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
