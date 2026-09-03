window.PAPER = {
 "generado": "2026-09-03 00:27 UTC",
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
   "sesiones": 21,
   "n_trades": 2,
   "sharpe": -2.42,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.008,
   "resultado_clp": -7991
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-03",
  "hasta": "2026-09-03",
  "equity": [
   {
    "fecha": "2024-09-03",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 1004420
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1009196
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 1002761
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1007206
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1008870
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1014950
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1015061
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1013856
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1012447
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1008292
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1010885
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1024530
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1022835
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1022721
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1020007
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1008604
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1011496
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1002295
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 999684
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 986815
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 994448
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1001094
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1021178
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1015288
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1028631
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1044209
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1042119
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1043509
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1052295
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1038662
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1056824
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1054431
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1069176
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1051330
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1074938
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1059748
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1059559
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1062861
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1053214
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1069305
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1075227
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1058663
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1062122
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1050962
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1063762
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1082881
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1101464
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1098669
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1086155
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1109377
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1128562
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1114319
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1091848
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1082438
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1099048
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1097383
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1104973
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1108337
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1101728
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1120398
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1116987
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1125242
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1110965
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1132297
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1133924
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1134887
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1133326
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1112907
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1122494
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1140494
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1134475
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1138680
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1133676
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1150326
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1112371
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1119491
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1125142
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1118309
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1138786
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1137701
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1128872
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1112844
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1119171
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1117544
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1135758
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1146514
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1133341
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1126252
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1106860
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1108537
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1109211
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1119090
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1116841
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1131445
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1132704
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1139896
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1127641
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1112233
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1049178
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1071446
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1074225
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1075727
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1067779
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1061962
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1064921
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1058030
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1059982
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1046244
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1042075
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1051765
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1050372
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1055320
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1054081
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1050896
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1054046
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1051586
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1022066
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1000375
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1003915
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1003726
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 990783
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 998530
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 988527
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 990537
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 993347
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 982978
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 982978
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 982978
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 982978
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 982978
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 976380
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 986296
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 978998
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 974283
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 978154
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 976492
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 982487
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 986145
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 994386
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 982750
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 982850
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 976874
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 970411
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 985077
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 991020
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 972107
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 972107
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 972107
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 972107
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 972107
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 944326
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 949496
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 947353
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 946745
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 941021
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 940636
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 934543
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 936236
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 933759
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 925803
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 928624
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 935902
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 934446
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 951184
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 963865
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 962652
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 965118
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 967383
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 970247
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 965994
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 952365
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 952537
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 943022
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 963694
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 956521
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 960077
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 955300
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 945890
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 972909
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 977264
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 969633
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 971102
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 976841
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 990393
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 989370
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 987928
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 969602
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 967542
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 981916
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 992180
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 983847
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 991932
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1018206
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1007673
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1017750
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1014402
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1006139
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1015134
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1019999
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1025608
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1020481
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1036001
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1044636
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1053631
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1051489
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1038932
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1072627
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1072827
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1080386
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1076482
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1078454
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1062834
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1063715
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1061892
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1066739
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1056683
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1079560
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1082783
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1096206
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1067676
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1062181
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1069921
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1074416
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1080382
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1082497
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1079997
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1088036
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1077825
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1073578
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1083923
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1081677
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1073499
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1069024
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1067526
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1089840
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1073299
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1080975
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1087667
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1094600
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1085123
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1075757
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1088493
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1091952
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1094891
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1092714
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1099051
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1098633
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1101065
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1091529
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1083781
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1095767
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1089909
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1102784
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1111977
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1117974
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1112852
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1100396
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1100003
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1113993
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1117845
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1128427
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1129237
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1130342
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1131208
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1121112
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1132004
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1139071
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1125828
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1091290
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1101163
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1103761
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1111206
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1107621
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1108060
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1118567
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1108710
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1098864
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1107703
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1114494
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1114128
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1128648
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1137218
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1121077
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1127053
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1115091
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1103961
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1125031
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1103436
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1095090
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1098799
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1102029
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1101843
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1086236
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1086092
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1073642
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1070272
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1078844
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1066333
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1070238
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1087733
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1093285
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1095478
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1095016
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1093400
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1098113
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1097380
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1091124
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1093874
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1098875
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1099755
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1109820
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1107787
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1081095
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1075393
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1076453
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1070913
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1081762
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1085139
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1088885
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1091317
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1092545
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1088254
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1085907
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1094825
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1069119
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1072048
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1087770
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1093826
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1078942
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1077680
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1089331
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1088762
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1074175
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1069414
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1068401
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1070056
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1054055
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1061544
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1055619
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1050541
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1050793
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1055573
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1058598
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1058839
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1036433
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1054397
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1037373
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1014606
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1005825
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1026377
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1026500
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1018215
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1020992
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1014745
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1016519
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1019061
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1022499
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1019757
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1023752
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1021020
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1024008
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1025188
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1013385
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1014115
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1014674
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1011914
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1014666
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1013443
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1011334
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1014443
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1015267
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1013890
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1012069
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1013745
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1015207
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1015190
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1014580
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1015631
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1018587
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1010821
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1018026
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1016112
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1041467
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1032974
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1029752
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1044470
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1060575
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1059177
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1062141
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1074412
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1077257
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1067661
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1098131
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1094617
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1122811
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1123202
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1105434
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1110669
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1141045
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1144591
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1139133
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1174408
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1193301
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1174055
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1195651
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1205704
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1199541
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1234639
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1206984
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1194559
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1190884
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1188653
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1218661
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1212569
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1222729
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1247953
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1240616
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1250657
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1249537
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1253742
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1274199
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1271307
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1271363
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1204932
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1243355
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1243166
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1215314
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1250662
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1248966
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1272305
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1238262
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1228958
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1258558
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1279084
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1245662
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1251048
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1269397
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1248710
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1275823
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1295715
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1271965
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1254620
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1259576
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1256354
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1255431
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1270803
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1267460
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1257670
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1265787
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1261972
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1253629
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1244480
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1247663
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1250555
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1250287
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1246531
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1246577
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1246606
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1246582
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1246447
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1246554
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1246533
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1246607
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1254918
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1249382
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1248280
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1251700
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1250246
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1250046
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1250422
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1253625
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1252336
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1249190
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1242932
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1249433
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1242563
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1243887
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1240581
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1240539
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1240545
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1247629
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1246692
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1250166
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1246671
   }
  ],
  "trades": [
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
    "riesgo_clp": 10000,
    "invertido_clp": 1546,
    "resultado_clp": 66,
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
    "invertido_clp": 386361,
    "resultado_clp": 7323,
    "resultado_pct": 0.019
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
    "ticker": "SPY",
    "estrategia": "Cruce de medias 20/50",
    "fecha_entrada": "2024-09-03",
    "fecha_salida": "2025-01-14",
    "razon_entrada": "SMA20 cruzó sobre SMA50 (tendencia al alza)",
    "razon_salida": "SMA20 cruzó bajo SMA50 (tendencia perdida)",
    "precio_entrada_usd": 539.31,
    "precio_salida_usd": 572.39,
    "riesgo_clp": 10000,
    "invertido_clp": 357922,
    "resultado_clp": 60521,
    "resultado_pct": 0.1691
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
    "invertido_clp": 193393,
    "resultado_clp": -16835,
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
    "invertido_clp": 400509,
    "resultado_clp": -15450,
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
    "invertido_clp": 331727,
    "resultado_clp": -18512,
    "resultado_pct": -0.0558
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-02-18",
    "fecha_salida": "2025-02-24",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 589.27 USD",
    "precio_entrada_usd": 601.2,
    "precio_salida_usd": 589.27,
    "riesgo_clp": 10000,
    "invertido_clp": 3806,
    "resultado_clp": -140,
    "resultado_pct": -0.0369
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
    "riesgo_clp": 9830,
    "invertido_clp": 272374,
    "resultado_clp": -4760,
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
    "riesgo_clp": 9830,
    "invertido_clp": 202346,
    "resultado_clp": -6112,
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
    "riesgo_clp": 9721,
    "invertido_clp": 141402,
    "resultado_clp": -12326,
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
    "riesgo_clp": 9721,
    "invertido_clp": 120659,
    "resultado_clp": -13260,
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
    "riesgo_clp": 9721,
    "invertido_clp": 80442,
    "resultado_clp": -11977,
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
    "riesgo_clp": 9345,
    "invertido_clp": 151950,
    "resultado_clp": 26923,
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
    "riesgo_clp": 9362,
    "invertido_clp": 183741,
    "resultado_clp": 23736,
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
    "riesgo_clp": 9362,
    "invertido_clp": 107248,
    "resultado_clp": 30470,
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
    "invertido_clp": 524068,
    "resultado_clp": -149,
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
    "invertido_clp": 325990,
    "resultado_clp": -8500,
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
    "riesgo_clp": 9639,
    "invertido_clp": 198222,
    "resultado_clp": 36724,
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
    "invertido_clp": 354787,
    "resultado_clp": -4831,
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
    "invertido_clp": 425654,
    "resultado_clp": -16592,
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
    "invertido_clp": 202445,
    "resultado_clp": -5010,
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
    "riesgo_clp": 10000,
    "invertido_clp": 183696,
    "resultado_clp": -9593,
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
    "riesgo_clp": 9627,
    "invertido_clp": 247085,
    "resultado_clp": 23353,
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
    "riesgo_clp": 9651,
    "invertido_clp": 46297,
    "resultado_clp": 25956,
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
    "riesgo_clp": 10000,
    "invertido_clp": 254917,
    "resultado_clp": 13284,
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
    "riesgo_clp": 10000,
    "invertido_clp": 307285,
    "resultado_clp": 8114,
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
    "invertido_clp": 268201,
    "resultado_clp": 31616,
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
    "riesgo_clp": 10000,
    "invertido_clp": 146535,
    "resultado_clp": 94577,
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
    "invertido_clp": 306894,
    "resultado_clp": 41572,
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
    "invertido_clp": 5681
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
   "sharpe": 0.48,
   "max_drawdown": -0.1952,
   "win_rate": 0.439,
   "retorno_total": 0.2467,
   "resultado_clp": 246671
  },
  "buy_hold": [
   {
    "fecha": "2024-09-03",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 1012348
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1025693
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 1007714
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1020132
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1024782
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1041770
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1042079
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1038711
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1034775
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1027987
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1032783
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1051356
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1049663
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1049504
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1046166
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1033582
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1035566
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1027291
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1024971
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1013147
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1020713
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1027234
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1047058
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1041493
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1053642
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1069327
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1067010
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1069706
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1078651
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1066299
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1086172
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1083536
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1097895
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1078535
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1102273
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1088529
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1086605
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1088104
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1079080
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1093211
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1100625
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1085360
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1089487
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1071840
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1092180
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1121942
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1138730
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1136821
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1124344
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1147975
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1168393
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1153812
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1133997
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1123362
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1139606
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1138163
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1146584
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1150540
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1144238
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1163583
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1161567
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1169345
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1151683
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1172968
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1172698
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1174057
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1170188
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1149943
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1159944
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1175291
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1169512
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1171307
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1162903
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1180076
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1143206
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1156598
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1167228
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1154476
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1185868
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1184521
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1171875
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1147268
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1159786
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1156937
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1184114
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1198348
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1185037
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1179440
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1163433
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1168562
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1169091
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1188101
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1185097
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1206007
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1210127
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1212254
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1203541
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1195474
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1154166
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1188449
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1191729
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1194835
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1179448
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1176429
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1181024
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1169623
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1171901
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1151420
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1142058
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1159301
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1155133
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1161219
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1156838
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1153802
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1158729
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1156085
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1126189
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1107282
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1116720
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1115495
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1097829
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1127154
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1093885
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1091839
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1100007
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1071400
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1065289
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1021570
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1043367
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1043471
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1031044
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1051343
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1035832
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1028217
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1035676
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1032230
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1044133
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1050415
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1067031
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1044408
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1045986
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1035591
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1024218
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1054398
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1067106
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1024502
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 958184
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 962504
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 982616
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1097123
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1028294
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1055027
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1046271
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1037615
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1017723
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1019122
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 994864
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 1012584
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1018506
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1028595
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1030647
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1029400
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1045011
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1047310
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1060914
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1072733
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1067336
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1048779
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1052337
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1068127
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1061105
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1088390
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1109133
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1103635
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1109887
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1114768
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1119482
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1114201
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1097523
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1098911
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1090542
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1111066
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1102089
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1106982
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1105167
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1091649
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1118004
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1118835
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1111105
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1113668
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1115667
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1127571
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1126723
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1126278
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1108915
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1100561
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1117290
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1128128
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1120191
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1129957
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1152642
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1138140
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1148872
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1146964
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1138028
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1152558
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1154040
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1160165
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1156793
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1169760
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1179639
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1190127
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1186718
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1174264
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1206868
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1209477
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1217621
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1212981
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1213945
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1201806
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1207722
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1205363
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1212613
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1195909
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1220326
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1220926
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1243187
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1211311
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1197738
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1216038
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1225441
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1234551
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1238406
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1233344
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1247646
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1235969
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1231263
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1245002
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1242269
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1235645
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1231530
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1230067
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1254983
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1235413
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1243960
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1251874
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1259064
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1251103
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1240729
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1255426
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1259114
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1260436
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1256991
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1264237
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1263487
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1267028
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1254682
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1244743
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1257945
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1251349
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1263009
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1273826
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1279692
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1273858
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1259576
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1258949
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1275631
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1279723
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1291812
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1291271
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1290458
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1293021
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1278583
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1292794
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1297364
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1281953
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1247291
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1261860
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1272987
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1284387
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1273343
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1275030
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1295953
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1282309
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1276179
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1282127
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1288781
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1281972
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1297729
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1301391
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1284906
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1291190
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1275446
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1273544
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1288660
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1270833
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1270169
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1273550
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1286683
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1284914
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1255340
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1254946
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1228375
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1224841
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1240932
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1222083
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1231872
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1261319
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1275991
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1277042
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1272916
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1268048
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1272766
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1269147
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1263184
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1263903
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1265807
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1266513
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1279044
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1278766
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1251891
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1244528
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1246693
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1232449
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1247166
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1249169
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1256261
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1260907
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1262518
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1257562
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1255230
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1265951
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1236904
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1238758
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1255907
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1259835
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1241750
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1243583
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1254116
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1253479
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1235647
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1232190
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1229672
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1230272
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1211756
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1222039
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1214174
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1210308
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1214765
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1211965
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1205059
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1206431
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1198258
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1213704
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1202302
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1189466
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1172111
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1205733
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1203407
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1189046
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1192662
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1172836
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1177056
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1186814
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1197496
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1188640
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1202002
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1191626
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1200288
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1202397
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1189980
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1196212
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1207946
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1210312
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1242699
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1228162
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1227365
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1245253
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1248616
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1211429
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1204109
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1222335
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1236137
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1229532
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1209030
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1216982
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1196075
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1228581
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1202187
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1217754
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1195133
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1189299
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1178528
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1222643
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1226412
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1209424
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1224343
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1220352
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1252103
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1232902
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1224382
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1240258
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1256002
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1253663
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1254928
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1271774
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1275247
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1253949
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1282056
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1273916
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1290627
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1295221
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1285222
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1281543
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1313684
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1311496
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1304921
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1333630
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1341934
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1324956
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1327472
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1333050
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1338550
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1369653
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1340637
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1335983
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1340164
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1335345
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1355817
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1347548
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1353765
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1360280
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1355676
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1363460
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1362178
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1363787
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1369231
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1356361
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1369382
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1335038
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1365893
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1374784
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1343595
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1364568
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1358216
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1371625
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1349588
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1325681
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1341113
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1359306
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1346612
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1357161
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1366190
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1358689
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1384316
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1394747
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1392574
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1396011
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1401770
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1405321
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1399333
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1423622
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1417980
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1406987
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1417512
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1414795
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1406262
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1391817
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1404381
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1415792
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1414737
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1399913
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1410244
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1416690
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1411150
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1381071
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1405022
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1400213
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1416932
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1445151
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1426356
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1422613
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1434227
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1429289
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1428610
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1429887
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1440763
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1437769
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1429563
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1422533
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1438217
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1423386
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1430932
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1424963
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1415643
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1416858
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1436220
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1438339
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1447778
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1441721
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
    "valor": -2.42,
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
