window.PAPER = {
 "generado": "2026-08-29 03:47 UTC",
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
    "equity_clp": 994933
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
   "sesiones": 19,
   "n_trades": 2,
   "sharpe": null,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.0051,
   "resultado_clp": -5067
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
    "equity_clp": 1003819
   }
  ]
 },
 "backtest": {
  "desde": "2024-08-29",
  "hasta": "2026-08-29",
  "equity": [
   {
    "fecha": "2024-08-29",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 1000000
   },
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
    "equity_clp": 1002296
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
    "equity_clp": 1051329
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
    "equity_clp": 1114318
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
    "equity_clp": 1122493
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
    "equity_clp": 1108538
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
    "equity_clp": 1139897
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1127641
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1112232
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1049177
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
    "equity_clp": 988526
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
    "equity_clp": 976873
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 970411
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 985076
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
    "equity_clp": 925804
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
    "equity_clp": 977263
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
    "equity_clp": 1061891
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
    "equity_clp": 1082782
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
    "equity_clp": 1091953
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
    "equity_clp": 1131207
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
    "equity_clp": 1107620
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
    "equity_clp": 1085906
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1094824
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
    "equity_clp": 1061543
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
    "equity_clp": 1005824
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
    "equity_clp": 1014744
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1016518
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
    "equity_clp": 1014442
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1015267
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1013889
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1012068
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
    "equity_clp": 1029751
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1044470
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1060574
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
    "equity_clp": 1067660
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
    "equity_clp": 1122810
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
    "equity_clp": 1144590
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1139132
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
    "equity_clp": 1174054
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
    "equity_clp": 1199540
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
    "equity_clp": 1253741
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
    "equity_clp": 1271362
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1204931
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
    "equity_clp": 1251047
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
    "equity_clp": 1275822
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
    "equity_clp": 1256353
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1255431
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1270802
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
    "equity_clp": 1246581
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
    "equity_clp": 1254917
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
    "equity_clp": 1242931
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
    "equity_clp": 1249676
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
    "invertido_clp": 1547,
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
    "invertido_clp": 183740,
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
    "invertido_clp": 198221,
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
    "invertido_clp": 425653,
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
    "invertido_clp": 247086,
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
   "retorno_total": 0.2497,
   "resultado_clp": 249676
  },
  "buy_hold": [
   {
    "fecha": "2024-08-29",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 1011980
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 991718
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 1003964
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1017199
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 999368
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1011684
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1016295
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1033142
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1033449
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1030109
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1026205
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1019473
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1024230
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1042649
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1040970
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1040812
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1037502
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1025022
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1026990
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1018783
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1016483
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1004756
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1012260
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1018727
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1038387
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1032867
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1044916
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1060472
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1058173
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1060847
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1069718
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1057468
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1077176
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1074563
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1088802
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1069603
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1093144
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1079514
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1077606
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1079092
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1070144
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1084157
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1091510
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1076372
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1080465
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1062963
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1083134
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1112651
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1129299
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1127407
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1115033
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1138468
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1158717
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1144256
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1124606
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1114058
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1130168
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1128737
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1137088
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1141011
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1134762
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1153946
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1151947
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1159661
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1142145
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1163253
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1162987
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1164334
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1160497
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1140420
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1150338
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1165558
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1159826
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1161606
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1153272
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1170303
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1133739
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1147020
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1157562
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1144915
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1176047
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1174711
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1162170
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1137767
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1150181
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1147355
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1174308
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1188424
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1175223
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1169672
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1153798
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1158884
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1159409
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1178262
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1175282
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1196020
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1200105
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1202214
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1193574
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1185573
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1144608
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1178607
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1181860
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1184940
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1169680
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1166687
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1171243
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1159937
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1162195
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1141884
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1132600
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1149700
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1145567
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1151602
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1147257
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1144247
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1149133
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1146511
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1116862
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1098112
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1107471
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1106257
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1088738
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1117819
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1084826
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1082796
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1090898
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1062526
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1056467
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1013109
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1034726
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1034829
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1022505
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1042636
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1027253
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1019702
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1027099
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1023682
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1035486
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1041715
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1058194
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1035759
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1037323
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1027014
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1015735
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1045666
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1058268
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1016017
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 950249
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 954533
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 974478
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1088037
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1019778
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1046290
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1037606
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1029022
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1009294
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1010682
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 986625
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 1004198
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1010072
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1020077
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1022112
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1020875
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1036357
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1038636
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1052128
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1063849
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1058497
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1040093
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1043622
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1059281
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1052317
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1079376
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1099947
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1094495
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1100695
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1105536
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1110210
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1104974
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1088433
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1089810
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1081511
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1101864
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1092962
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1097814
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1096014
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1082609
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1108745
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1109569
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1101904
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1104445
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1106427
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1118233
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1117391
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1116951
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1099731
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1091446
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1108037
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1118785
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1110914
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1120599
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1143096
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1128714
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1139357
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1137465
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1128603
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1143012
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1144482
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1150557
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1147213
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1160073
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1169870
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1180271
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1176890
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1164539
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1196873
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1199460
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1207537
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1202935
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1203892
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1191853
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1197720
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1195380
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1202570
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1186005
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1210220
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1210814
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1232891
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1201279
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1187818
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1205967
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1215292
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1224327
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1228150
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1223130
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1237314
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1225733
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1221066
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1234691
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1231980
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1225411
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1221331
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1219880
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1244589
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1225181
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1233658
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1241506
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1248637
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1240742
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1230454
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1245029
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1248687
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1249997
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1246582
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1253767
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1253023
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1256535
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1244291
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1234434
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1247527
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1240986
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1252549
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1263276
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1269093
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1263309
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1249144
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1248522
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1265066
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1269124
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1281114
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1280577
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1279771
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1282313
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1267994
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1282087
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1286620
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1271336
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1236962
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1251409
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1262445
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1273750
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1262798
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1264471
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1285221
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1271689
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1265610
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1271509
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1278107
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1271355
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1286981
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1290613
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1274265
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1280497
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1264883
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1262997
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1277988
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1260308
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1259650
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1263003
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1276028
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1274272
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1244944
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1244553
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1218202
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1214698
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1230655
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1211962
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1221670
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1250873
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1265424
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1266466
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1262374
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1257546
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1262225
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1258636
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1252723
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1253435
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1255324
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1256024
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1268451
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1268175
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1241523
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1234221
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1236369
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1222242
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1236837
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1238824
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1245857
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1250465
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1252062
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1247147
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1244834
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1255467
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1226660
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1228499
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1245506
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1249401
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1231466
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1233284
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1243730
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1243098
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1225414
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1221985
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1219488
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1220084
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1201720
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1211918
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1204119
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1200285
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1204704
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1201928
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1195079
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1196439
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1188334
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1203652
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1192345
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1179615
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1162404
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1195748
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1193441
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1179198
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1182785
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1163123
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1167308
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1176985
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1187579
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1178796
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1192048
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1181758
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1190347
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1192439
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1180125
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1186305
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1197942
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1200288
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1232407
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1217991
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1217200
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1234940
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1238275
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1201396
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1194137
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1212212
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1225900
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1219350
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1199017
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1206903
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1186169
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1218407
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1192231
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1207669
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1185235
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1179449
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1168767
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1212517
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1216255
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1199408
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1214203
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1210245
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1241734
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1222692
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1214243
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1229987
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1245600
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1243280
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1244535
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1261242
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1264685
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1243564
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1271438
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1263366
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1279939
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1284495
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1274578
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1270930
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1302805
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1300635
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1294114
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1322586
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1330820
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1313983
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1316478
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1322011
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1327465
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1358310
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1329534
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1324919
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1329065
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1324286
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1344589
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1336388
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1342554
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1349014
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1344449
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1352168
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1350897
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1352493
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1357892
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1345128
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1358041
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1323981
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1354582
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1363398
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1332467
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1353267
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1346967
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1360266
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1338411
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1314702
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1330007
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1348049
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1335460
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1345921
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1354876
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1347436
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1372852
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1383197
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1381041
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1384449
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1390161
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1393682
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1387744
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1411832
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1406236
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1395335
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1405773
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1403079
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1394616
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1380290
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1392750
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1404067
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1403020
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1388320
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1398565
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1404957
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1399464
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1369633
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1393386
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1388617
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1405198
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1433182
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1414543
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1410831
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1422349
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1417452
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1416778
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1418045
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1428831
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1425861
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1417723
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1410752
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1426306
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1411598
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1419081
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1413162
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1403919
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1405124
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1424326
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1438656
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 0.8,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": null,
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
