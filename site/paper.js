window.PAPER = {
 "generado": "2026-09-11 00:19 UTC",
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
   "sesiones": 26,
   "n_trades": 2,
   "sharpe": -2.05,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.0074,
   "resultado_clp": -7369
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-11",
  "hasta": "2026-09-11",
  "equity": [
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
    "equity_clp": 941016
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
    "equity_clp": 1050583
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
    "equity_clp": 1049788
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
    "equity_clp": 1038753
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
    "equity_clp": 1027656
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
    "equity_clp": 988740
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
    "equity_clp": 1223678
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
    "equity_clp": 1223772
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
    "equity_clp": 1221762
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
    "invertido_clp": 413604,
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
    "invertido_clp": 264345,
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
    "invertido_clp": 181529,
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
   "retorno_total": 0.2114,
   "resultado_clp": 211370
  },
  "buy_hold": [
   {
    "fecha": "2024-09-11",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1000297
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 997064
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 993286
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 986770
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 991374
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1009202
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1007577
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1007424
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1004220
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 992141
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 994045
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 986102
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 983875
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 972525
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 979787
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 986048
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1005076
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 999734
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1011396
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1026453
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1024228
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1026816
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1035403
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1023546
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1042622
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1040092
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1053875
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1035291
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1058077
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1044884
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1043038
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1044476
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1035815
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1049378
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1056495
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1041843
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1045805
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1028865
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1048389
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1076958
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1093072
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1091241
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1079264
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1101947
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1121546
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1107550
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1088530
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1078321
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1093914
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1092529
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1100612
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1104409
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1098360
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1116929
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1114994
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1122460
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1105507
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1125937
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1125679
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1126983
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1123270
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1103836
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1113436
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1128168
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1122620
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1124343
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1116276
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1132761
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1097370
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1110225
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1120428
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1108187
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1138321
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1137028
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1124888
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1101268
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1113285
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1110549
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1136637
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1150301
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1137523
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1132151
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1116786
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1121708
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1122216
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1140464
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1137581
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1157653
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1161607
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1163649
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1155285
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1147541
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1107890
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1140798
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1143947
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1146928
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1132158
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1129260
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1133671
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1122727
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1124914
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1105253
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1096267
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1112819
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1108818
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1114660
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1110455
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1107541
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1112270
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1109732
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1081034
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1062885
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1071945
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1070769
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1053812
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1081960
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1050026
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1048061
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1055903
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1028442
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1022576
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 980610
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1001533
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1001633
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 989704
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1009190
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 994300
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 986991
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 994150
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 990843
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1002268
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1008298
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1024248
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1002533
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1004047
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 994069
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 983152
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1012122
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1024320
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 983424
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 919766
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 923913
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 943218
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1053134
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 987064
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1012726
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1004321
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 996012
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 976917
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 978261
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 954975
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 971984
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 977670
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 987354
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 989323
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 988127
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1003112
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1005318
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1018377
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1029722
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1024541
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1006728
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1010144
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1025300
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1018560
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1044751
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1064662
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1059385
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1065386
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1070071
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1074596
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1069528
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1053517
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1054850
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1046817
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1066517
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1057901
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1062598
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1060855
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1047880
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1073178
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1073975
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1066556
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1069016
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1070934
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1082361
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1081547
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1081121
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1064453
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1056434
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1072493
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1082896
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1075277
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1084651
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1106427
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1092506
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1102808
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1100977
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1092399
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1106346
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1107769
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1113648
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1110412
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1122859
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1132341
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1142409
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1139137
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1127182
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1158479
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1160983
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1168800
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1164347
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1165272
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1153620
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1159298
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1157034
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1163993
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1147959
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1171397
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1171973
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1193342
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1162743
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1149715
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1167281
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1176307
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1185052
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1188752
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1183893
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1197622
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1186413
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1181896
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1195084
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1192460
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1186101
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1182152
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1180747
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1204664
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1185879
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1194083
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1201680
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1208582
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1200940
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1190982
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1205089
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1208630
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1209898
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1206593
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1213548
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1212828
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1216227
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1204375
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1194835
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1207508
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1201176
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1212369
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1222752
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1228382
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1222783
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1209073
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1208471
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1224484
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1228412
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1240017
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1239497
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1238718
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1241178
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1227318
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1240959
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1245347
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1230553
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1197281
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1211265
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1221947
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1232889
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1222288
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1223908
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1243992
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1230895
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1225011
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1230720
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1237107
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1230571
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1245696
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1249212
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1233388
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1239420
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1224307
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1222481
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1236991
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1219879
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1219242
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1222487
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1235094
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1233395
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1205007
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1204629
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1179123
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1175732
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1191177
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1173084
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1182481
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1210747
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1224830
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1225839
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1221878
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1217205
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1221734
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1218261
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1212537
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1213227
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1215055
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1215732
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1227760
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1227493
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1201696
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1194628
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1196707
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1183034
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1197161
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1199084
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1205891
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1210351
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1211898
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1207140
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1204901
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1215193
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1187310
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1189090
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1205552
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1209322
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1191962
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1193722
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1203832
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1203221
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1186104
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1182785
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1180368
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1180945
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1163171
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1173041
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1165492
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1161781
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1166059
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1163371
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1156742
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1158059
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1150214
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1165040
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1154096
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1141774
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1125115
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1157390
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1155156
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1141371
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1144842
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1125811
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1129862
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1139229
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1149482
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1140982
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1153808
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1143848
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1152162
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1154187
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1142268
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1148250
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1159513
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1161784
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1192873
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1178919
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1178154
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1195324
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1198552
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1162857
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1155830
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1173326
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1186574
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1180234
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1160554
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1168187
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1148118
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1179321
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1153986
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1168928
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1147214
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1141614
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1131275
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1173621
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1177239
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1160932
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1175253
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1171422
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1201900
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1183469
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1175291
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1190530
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1205643
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1203397
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1204612
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1220782
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1224116
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1203672
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1230652
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1222839
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1238880
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1243290
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1233691
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1230160
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1261012
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1258912
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1252601
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1280159
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1288129
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1271832
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1274247
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1279602
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1284881
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1314737
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1286884
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1282417
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1286430
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1281804
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1301456
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1293518
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1299486
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1305739
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1301320
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1308792
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1307562
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1309106
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1314332
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1301978
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1314477
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1281509
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1311128
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1319662
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1289723
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1309855
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1303758
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1316630
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1295476
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1272528
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1287341
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1304805
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1292620
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1302745
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1311413
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1304212
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1328812
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1338825
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1336739
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1340038
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1345566
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1348974
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1343226
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1366542
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1361126
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1350574
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1360677
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1358069
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1349878
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1336012
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1348073
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1359026
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1358013
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1343784
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1353701
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1359888
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1354570
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1325697
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1348687
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1344072
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1360120
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1387207
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1369166
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1365573
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1376721
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1371982
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1371330
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1372556
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1382995
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1380121
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1372244
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1365497
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1380552
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1366315
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1373559
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1367830
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1358883
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1360049
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1378635
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1380669
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1389730
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1383915
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1392452
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1409976
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1397111
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1391301
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1370806
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.2,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -2.05,
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
