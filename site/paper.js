window.PAPER = {
 "generado": "2026-09-12 00:26 UTC",
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
    "equity_clp": 989677
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
   "sesiones": 27,
   "n_trades": 2,
   "sharpe": -2.53,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.0103,
   "resultado_clp": -10323
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
    "equity_clp": 984123
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-12",
  "hasta": "2026-09-12",
  "equity": [
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
    "equity_clp": 987719
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
    "equity_clp": 1066841
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
    "equity_clp": 1100216
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
    "equity_clp": 1114574
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
    "equity_clp": 1077403
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1087300
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
    "equity_clp": 1080912
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
    "equity_clp": 1041851
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
    "equity_clp": 1060500
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
    "equity_clp": 1079195
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
    "equity_clp": 1092637
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
    "equity_clp": 1038753
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1055732
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1061120
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
    "equity_clp": 1075218
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
    "equity_clp": 1062711
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
    "equity_clp": 1038003
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
    "equity_clp": 984414
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
    "equity_clp": 984027
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
    "equity_clp": 981723
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
    "equity_clp": 1106159
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
    "equity_clp": 1188062
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
    "equity_clp": 1213640
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
    "equity_clp": 1210778
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
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1215878
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1211370
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1208370
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
    "precio_entrada_usd": 501.04,
    "precio_salida_usd": 511.83,
    "riesgo_clp": 10000,
    "invertido_clp": 292905,
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
    "resultado_clp": -19894,
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
    "invertido_clp": 367652,
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
    "invertido_clp": 304918,
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
    "invertido_clp": 413603,
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
    "invertido_clp": 192377,
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
   "sharpe": 0.39,
   "max_drawdown": -0.2043,
   "win_rate": 0.439,
   "retorno_total": 0.2084,
   "resultado_clp": 208370
  },
  "buy_hold": [
   {
    "fecha": "2024-09-12",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 996768
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 992991
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 986477
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 991079
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1008903
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1007278
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1007125
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1003922
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 991846
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 993750
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 985809
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 983583
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 972236
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 979496
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 985755
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1004778
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 999437
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1011096
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1026148
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1023924
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1026511
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1035095
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1023242
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1042312
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1039783
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1053562
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1034984
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1057763
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1044574
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1042728
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1044166
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1035507
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1049067
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1056182
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1041533
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1045494
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1028559
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1048077
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1076638
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1092748
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1090917
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1078943
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1101620
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1121213
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1107221
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1088207
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1078000
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1093589
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1092204
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1100285
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1104081
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1098034
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1116597
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1114663
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1122127
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1105178
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1125603
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1125345
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1126649
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1122936
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1103508
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1113106
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1127833
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1122287
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1124010
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1115945
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1132425
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1097044
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1109895
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1120096
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1107858
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1137983
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1136690
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1124554
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1100941
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1112954
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1110219
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1136300
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1149959
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1137185
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1131814
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1116454
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1121375
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1121883
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1140126
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1137243
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1157309
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1161262
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1163303
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1154942
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1147200
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1107561
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1140459
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1143607
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1146587
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1131822
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1128925
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1133335
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1122394
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1124579
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1104925
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1095941
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1112488
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1108489
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1114329
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1110125
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1107212
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1111940
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1109403
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1080713
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1062570
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1071627
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1070451
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1053499
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1081639
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1049714
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1047750
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1055589
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1028136
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1022273
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 980319
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1001236
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1001335
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 989410
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1008890
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 994005
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 986698
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 993855
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 990549
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1001971
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1007999
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1023944
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1002235
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1003749
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 993774
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 982860
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1011822
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1024016
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 983132
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 919493
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 923638
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 942938
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1052821
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 986771
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1012425
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1004023
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 995716
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 976627
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 977970
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 954692
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 971696
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 977379
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 987061
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 989030
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 987833
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1002814
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1005019
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1018074
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1029416
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1024237
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1006429
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1009844
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1024995
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1018257
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1044441
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1064346
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1059070
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1065069
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1069753
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1074277
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1069210
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1053205
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1054537
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1046506
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1066201
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1057587
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1062282
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1060540
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1047569
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1072859
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1073656
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1066239
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1068699
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1070616
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1082040
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1081225
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1080800
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1064137
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1056120
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1072174
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1082574
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1074958
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1084329
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1106098
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1092182
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1102480
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1100650
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1092075
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1106017
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1107440
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1113318
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1110082
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1122526
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1132005
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1142070
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1138799
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1126847
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1158134
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1160638
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1168453
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1164001
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1164926
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1153278
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1158954
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1156690
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1163647
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1147618
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1171050
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1171625
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1192987
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1162398
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1149373
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1166934
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1175958
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1184700
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1188399
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1183542
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1197266
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1186061
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1181545
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1194729
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1192106
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1185749
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1181801
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1180397
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1204307
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1185527
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1193729
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1201323
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1208223
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1200584
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1190628
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1204732
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1208271
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1209539
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1206234
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1213187
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1212468
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1215866
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1204018
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1194480
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1207149
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1200819
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1212009
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1222389
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1228018
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1222420
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1208714
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1208112
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1224121
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1228047
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1239649
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1239130
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1238350
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1240809
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1226954
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1240591
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1244977
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1230188
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1196926
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1210906
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1221584
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1232523
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1221925
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1223544
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1243623
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1230529
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1224647
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1230355
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1236740
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1230206
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1245326
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1248841
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1233021
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1239052
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1223943
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1222118
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1236624
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1219516
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1218880
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1222124
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1234727
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1233029
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1204650
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1204271
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1178773
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1175382
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1190823
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1172735
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1182129
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1210387
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1224467
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1225475
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1221516
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1216844
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1221371
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1217899
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1212177
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1212866
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1214694
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1215371
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1227396
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1227129
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1201340
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1194274
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1196352
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1182683
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1196806
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1198728
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1205534
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1209992
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1211538
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1206782
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1204544
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1214832
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1186958
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1188737
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1205194
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1208963
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1191608
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1193368
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1203475
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1202864
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1185752
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1182434
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1180018
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1180594
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1162825
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1172693
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1165146
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1161436
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1165712
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1163026
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1156399
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1157715
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1149872
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1164694
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1153753
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1141435
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1124781
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1157046
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1154813
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1141032
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1144502
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1125477
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1129527
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1138891
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1149141
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1140643
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1153466
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1143508
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1151820
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1153844
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1141929
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1147909
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1159169
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1161439
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1192519
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1178569
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1177804
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1194970
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1198196
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1162511
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1155487
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1172978
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1186222
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1179884
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1160209
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1167840
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1147777
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1178971
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1153643
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1168581
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1146874
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1141275
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1130939
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1173272
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1176889
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1160587
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1174904
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1171074
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1201543
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1183118
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1174942
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1190176
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1205285
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1203040
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1204254
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1220420
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1223752
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1203314
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1230286
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1222475
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1238512
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1242920
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1233325
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1229795
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1260638
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1258538
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1252229
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1279778
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1287746
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1271454
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1273869
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1279222
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1284499
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1314346
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1286502
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1282036
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1286048
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1281424
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1301069
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1293134
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1299100
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1305352
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1300934
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1308403
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1307173
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1308718
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1313942
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1301591
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1314086
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1281129
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1310739
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1319270
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1289340
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1309466
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1303371
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1316239
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1295091
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1272150
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1286959
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1304418
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1292236
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1302358
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1311023
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1303825
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1328417
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1338428
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1336342
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1339640
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1345167
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1348574
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1342828
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1366137
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1360722
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1350173
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1360273
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1357666
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1349477
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1335616
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1347672
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1358623
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1357610
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1343385
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1353299
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1359484
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1354168
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1325303
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1348287
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1343672
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1359717
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1386795
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1368759
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1365168
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1376313
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1371574
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1370923
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1372148
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1382585
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1379712
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1371837
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1365091
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1380142
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1365910
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1373151
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1367423
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1358480
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1359645
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1378225
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1380259
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1389317
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1383504
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1392038
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1409557
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1396697
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1390887
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1370399
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1364778
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.3,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -2.53,
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
