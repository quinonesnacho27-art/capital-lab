window.PAPER = {
 "generado": "2026-09-08 00:34 UTC",
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
   "sesiones": 24,
   "n_trades": 2,
   "sharpe": -1.32,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.0031,
   "resultado_clp": -3112
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
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1016413
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1007140
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-08",
  "hasta": "2026-09-08",
  "equity": [
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
    "equity_clp": 1027970
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
    "equity_clp": 1041664
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
    "equity_clp": 1052035
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
    "equity_clp": 1088865
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1090711
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1090104
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1098590
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
    "equity_clp": 1090757
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
    "equity_clp": 1036785
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
    "equity_clp": 1011459
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
    "equity_clp": 961804
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 969551
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
    "equity_clp": 953999
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 953999
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 953999
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 953999
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 953999
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
    "equity_clp": 953778
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
    "equity_clp": 923142
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
    "equity_clp": 928322
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
    "equity_clp": 941017
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 939018
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 952968
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
    "equity_clp": 985207
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
    "equity_clp": 1013839
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
    "equity_clp": 1008303
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1041004
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1041199
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1048535
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1044746
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
    "equity_clp": 1047733
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
    "equity_clp": 1036200
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
    "equity_clp": 1050584
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1048157
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1055959
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
    "equity_clp": 1066244
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
    "equity_clp": 1081151
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
    "equity_clp": 1088060
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
    "equity_clp": 1047105
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
    "equity_clp": 1077229
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
    "equity_clp": 1047327
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
    "equity_clp": 1027657
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1027938
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
    "equity_clp": 988741
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 992077
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 989417
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
    "equity_clp": 984252
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
    "equity_clp": 981010
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 984026
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 984827
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
    "equity_clp": 1010638
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
    "equity_clp": 1013507
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
    "equity_clp": 1065989
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1062592
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1090218
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
    "equity_clp": 1172707
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
    "equity_clp": 1178125
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
    "equity_clp": 1214449
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1218589
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
    "equity_clp": 1235882
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
    "equity_clp": 1203482
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1194622
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1223678
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1243687
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
    "equity_clp": 1236154
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1218930
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1223772
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1220479
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
    "equity_clp": 1221762
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1229670
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1225908
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1217736
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
    "equity_clp": 1212430
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
    "equity_clp": 1214174
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
    "equity_clp": 1204722
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
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1216936
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1215708
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
    "invertido_clp": 372694,
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
    "invertido_clp": 311739,
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
    "precio_entrada_usd": 501.04,
    "precio_salida_usd": 511.83,
    "riesgo_clp": 10000,
    "invertido_clp": 292906,
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
    "invertido_clp": 178323,
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
   "sesiones": 500,
   "n_trades": 41,
   "sharpe": 0.4,
   "max_drawdown": -0.2043,
   "win_rate": 0.439,
   "retorno_total": 0.2157,
   "resultado_clp": 215708
  },
  "buy_hold": [
   {
    "fecha": "2024-09-09",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1004558
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1021210
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1021514
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1018212
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1014354
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1007700
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1012401
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1030608
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1028948
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1028792
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1025520
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1013184
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1015130
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1007017
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1004743
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 993153
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1000569
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1006962
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1026394
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1020939
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1032848
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1048224
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1045953
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1048595
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1057364
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1045256
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1064736
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1062153
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1076228
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1057250
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1080520
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1067047
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1065161
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1066630
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1057785
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1071636
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1078904
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1063941
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1067987
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1050687
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1070626
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1099801
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1116257
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1114386
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1102155
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1125320
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1145335
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1131041
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1111618
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1101192
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1117116
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1115702
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1123956
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1127834
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1121657
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1140620
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1138643
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1146268
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1128955
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1149819
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1149555
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1150887
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1147095
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1127249
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1137053
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1152097
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1146432
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1148191
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1139953
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1156788
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1120646
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1133773
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1144193
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1131693
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1162465
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1161145
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1148748
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1124627
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1136898
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1134105
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1160746
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1174699
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1161650
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1156164
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1140473
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1145500
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1146019
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1164654
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1161710
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1182207
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1186245
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1188330
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1179789
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1171881
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1131389
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1164995
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1168211
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1171255
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1156172
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1153213
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1157717
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1146541
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1148773
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1128696
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1119520
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1136422
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1132337
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1138302
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1134008
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1131032
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1135862
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1133270
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1103963
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1085430
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1094682
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1093481
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1076164
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1104910
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1072298
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1070291
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1078299
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1050255
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1044266
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1001409
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1022777
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1022878
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1010696
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1030595
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1015390
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1007925
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1015237
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1011859
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1023527
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1029685
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1045973
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1023797
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1025343
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1015154
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1004005
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1033590
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1046047
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1004284
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 939274
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 943509
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 963224
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1075471
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1008001
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1034206
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1025623
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1017138
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 997638
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 999010
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 975231
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 992601
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 998406
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1008296
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1010307
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1009085
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1024388
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1026641
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1039977
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1051563
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1046272
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1028081
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1031570
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1047047
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1040164
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1066911
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1087244
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1081855
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1087983
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1092768
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1097389
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1092213
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1075863
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1077224
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1069021
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1089139
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1080340
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1085136
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1083357
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1070106
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1095940
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1096755
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1089178
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1091690
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1093649
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1105319
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1104487
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1104051
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1087031
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1078841
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1095241
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1105865
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1098084
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1107657
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1129895
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1115679
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1126199
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1124329
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1115569
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1129812
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1131265
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1137269
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1133964
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1146675
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1156359
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1166640
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1163299
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1151090
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1183050
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1185608
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1193591
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1189043
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1189988
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1178089
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1183888
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1181575
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1188682
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1172308
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1196243
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1196831
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1218653
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1187406
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1174101
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1192039
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1201257
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1210187
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1213966
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1209004
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1223024
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1211578
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1206964
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1220432
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1217753
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1211259
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1207226
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1205791
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1230216
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1211032
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1219411
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1227169
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1234217
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1226413
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1216243
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1230650
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1234266
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1235561
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1232185
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1239288
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1238553
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1242024
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1229921
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1220178
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1233119
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1226654
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1238084
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1248687
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1254437
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1248719
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1234718
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1234103
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1250456
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1254467
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1266319
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1265788
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1264991
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1267504
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1253350
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1267281
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1271761
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1256654
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1222676
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1236957
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1247865
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1259040
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1248214
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1249867
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1270378
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1257003
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1250994
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1256824
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1263347
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1256672
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1272118
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1275708
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1259548
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1265709
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1250275
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1248411
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1263228
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1245753
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1245103
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1248417
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1261291
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1259556
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1230566
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1230180
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1204133
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1200669
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1216442
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1197965
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1207562
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1236427
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1250810
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1251840
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1247795
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1243023
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1247648
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1244101
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1238256
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1238960
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1240826
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1241518
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1253802
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1253529
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1227185
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1219967
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1222090
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1208127
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1222553
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1224517
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1231469
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1236024
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1237603
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1232744
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1230458
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1240968
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1212494
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1214311
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1231122
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1234972
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1217244
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1219042
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1229366
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1228742
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1211262
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1207873
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1205404
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1205993
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1187842
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1197922
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1190212
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1186423
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1190792
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1188047
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1181277
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1182622
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1174610
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1189751
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1178574
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1165992
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1148980
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1181939
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1179658
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1165580
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1169125
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1149690
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1153827
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1163393
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1173864
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1165182
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1178281
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1168110
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1176600
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1178668
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1166496
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1172605
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1184107
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1186426
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1218174
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1203925
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1203143
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1220678
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1223974
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1187522
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1180346
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1198213
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1211742
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1205268
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1185170
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1192965
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1172471
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1204335
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1178462
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1193722
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1171547
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1165828
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1155270
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1198514
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1202209
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1185556
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1200181
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1196268
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1227393
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1208571
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1200219
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1215782
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1231215
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1228922
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1230162
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1246676
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1250080
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1229202
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1256755
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1248776
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1265157
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1269660
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1259859
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1256252
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1287759
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1285614
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1279169
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1307311
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1315451
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1298808
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1301275
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1306743
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1312134
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1342623
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1314180
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1309618
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1313716
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1308992
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1329060
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1320954
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1327049
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1333435
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1328922
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1336552
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1335296
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1336873
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1342210
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1329594
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1342357
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1308691
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1338938
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1347653
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1317079
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1337638
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1331412
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1344556
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1322954
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1299519
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1314647
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1332481
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1320037
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1330377
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1339228
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1331875
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1356997
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1367222
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1365092
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1368461
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1374107
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1377587
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1371717
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1395527
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1389996
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1379220
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1389538
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1386875
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1378510
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1364350
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1376666
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1387852
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1386817
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1372286
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1382413
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1388731
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1383302
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1353815
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1377294
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1372580
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1388969
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1416631
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1398207
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1394538
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1405922
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1401082
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1400416
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1401669
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1412329
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1409394
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1401350
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1394459
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1409834
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1395296
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1402692
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1396842
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1387706
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1388897
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1407876
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1409953
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1419206
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1413269
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1421986
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1439882
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1426745
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.1,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -1.32,
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
