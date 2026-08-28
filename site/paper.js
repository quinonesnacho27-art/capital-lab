window.PAPER = {
 "generado": "2026-08-28 06:12 UTC",
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
   "sesiones": 18,
   "n_trades": 2,
   "sharpe": null,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.007,
   "resultado_clp": -7022
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-08-28",
  "hasta": "2026-08-28",
  "equity": [
   {
    "fecha": "2024-08-28",
    "equity_clp": 1000000
   },
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
    "equity_clp": 1021177
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1015288
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1028632
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
    "equity_clp": 1062862
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
    "equity_clp": 1135757
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1146513
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1133341
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1126251
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
    "equity_clp": 1074224
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1075726
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
    "equity_clp": 1046243
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
    "equity_clp": 1055319
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
    "equity_clp": 1000374
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
    "equity_clp": 993346
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
    "equity_clp": 986295
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
    "equity_clp": 943021
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 963693
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
    "equity_clp": 972908
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 977263
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 969632
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 971101
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
    "equity_clp": 987927
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
    "equity_clp": 1088035
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
    "equity_clp": 1073298
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
    "equity_clp": 1099050
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
    "equity_clp": 1102783
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
    "equity_clp": 1112851
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1100396
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1100002
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
    "equity_clp": 1128426
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1129236
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
    "equity_clp": 1132003
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1139071
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1125827
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
    "equity_clp": 1108059
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1118566
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
    "equity_clp": 1114493
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
    "equity_clp": 1125030
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
    "equity_clp": 1073641
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1070271
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1078844
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1066332
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
    "equity_clp": 1098874
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
    "equity_clp": 1078941
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1077680
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1089330
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
    "equity_clp": 1058838
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1036433
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1054396
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1037372
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
    "equity_clp": 1026376
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
    "equity_clp": 1022498
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
    "equity_clp": 1014665
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
    "equity_clp": 1014579
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1015630
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1018587
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1010820
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
    "equity_clp": 1059176
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
    "equity_clp": 1206983
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1194559
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1190883
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
    "equity_clp": 1250656
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
    "equity_clp": 1215313
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
    "equity_clp": 1254619
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
    "equity_clp": 1246532
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
    "equity_clp": 1240544
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1247628
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
    "riesgo_clp": 10000,
    "invertido_clp": 1548,
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
    "invertido_clp": 386362,
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
    "invertido_clp": 357921,
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
    "invertido_clp": 193394,
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
    "invertido_clp": 354786,
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
    "invertido_clp": 306893,
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
   "retorno_total": 0.2476,
   "resultado_clp": 247628
  },
  "buy_hold": [
   {
    "fecha": "2024-08-28",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-29",
    "equity_clp": 1005722
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 1017771
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 997393
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 1009709
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1023019
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 1005087
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1017473
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1022111
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1039054
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1039362
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1036003
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1032078
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1025307
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1030091
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1048616
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1046927
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1046768
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1043439
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1030888
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1032867
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1024613
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1022299
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1010506
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1018052
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1024557
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1044329
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1038778
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1050895
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1066540
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1064229
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1066917
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1075840
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1063520
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1083340
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1080711
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1095033
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1075724
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1099400
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1085691
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1083772
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1085267
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1076267
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1090361
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1097756
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1082531
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1086647
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1069046
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1089332
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1119018
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1135761
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1133858
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1121413
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1144982
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1165347
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1150804
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1131041
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1120433
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1136636
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1135197
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1143595
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1147540
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1141256
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1160549
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1158539
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1166297
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1148681
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1169910
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1169641
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1170997
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1167138
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1146945
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1156920
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1172228
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1166463
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1168254
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1159871
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1177000
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1140226
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1153583
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1164186
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1151466
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1182777
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1181434
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1168820
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1144277
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1156763
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1153921
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1181028
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1195224
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1181948
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1176366
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1160401
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1165516
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1166043
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1185004
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1182008
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1202863
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1206972
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1209094
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1200404
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1192357
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1151157
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1185351
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1188623
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1191720
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1176374
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1173363
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1177946
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1166574
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1168846
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1148418
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1139081
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1156279
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1152122
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1158192
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1153822
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1150795
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1155709
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1153072
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1123253
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1104395
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1113809
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1112587
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1094968
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1124215
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1091034
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1088992
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1097140
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1068606
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1062512
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1018907
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1040647
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1040751
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1028356
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1048602
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1033131
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1025537
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1032976
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1029539
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1041411
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1047676
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1064249
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1041686
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1043259
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1032891
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1021548
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1051650
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1064324
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1021831
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 955686
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 959995
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 980055
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1094263
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1025613
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1052277
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1043543
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1034910
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1015070
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1016466
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 992271
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 1009944
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1015851
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1025914
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1027960
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1026717
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1042287
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1044580
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1058148
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1069936
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1064553
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1046045
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1049594
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1065342
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1058339
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1085553
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1106241
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1100758
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1106993
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1111862
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1116563
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1111297
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1094662
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1096047
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1087700
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1108169
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1099216
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1104096
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1102286
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1088804
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1115089
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1115918
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1108209
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1110765
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1112758
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1124632
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1123785
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1123343
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1106024
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1097692
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1114378
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1125188
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1117271
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1127011
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1149637
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1135173
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1145877
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1143974
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1135062
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1149553
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1151031
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1157141
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1153778
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1166711
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1176564
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1187025
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1183625
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1171203
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1203722
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1206324
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1214447
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1209819
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1210781
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1198674
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1204574
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1202221
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1209452
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1192792
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1217145
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1217743
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1239947
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1208153
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1194616
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1212868
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1222247
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1231333
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1235177
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1230129
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1244394
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1232748
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1228054
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1241757
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1239030
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1232423
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1228320
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1226860
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1251711
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1232192
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1240717
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1248611
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1255782
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1247842
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1237494
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1252153
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1255832
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1257150
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1253715
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1260942
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1260194
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1263726
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1251411
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1241498
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1254666
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1248087
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1259716
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1270505
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1276356
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1270538
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1256292
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1255667
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1272305
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1276387
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1288445
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1287905
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1287095
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1289651
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1275250
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1289424
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1293983
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1278611
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1244040
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1258570
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1269669
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1281039
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1270024
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1271706
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1292575
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1278966
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1272852
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1278785
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1285421
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1278630
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1294346
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1297999
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1281556
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1287824
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1272121
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1270224
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1285301
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1267520
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1266858
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1270230
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1283329
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1281564
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1252068
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1251674
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1225173
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1221649
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1237697
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1218897
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1228661
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1258031
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1272665
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1273713
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1269598
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1264742
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1269448
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1265839
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1259892
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1260608
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1262507
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1263211
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1275710
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1275432
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1248627
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1241283
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1243443
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1229236
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1243915
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1245913
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1252986
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1257621
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1259227
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1254284
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1251958
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1262651
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1233680
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1235529
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1252633
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1256551
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1238513
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1240342
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1250847
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1250212
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1232426
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1228978
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1226466
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1227065
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1208597
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1218853
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1211009
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1207153
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1211598
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1208806
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1201918
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1203286
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1195134
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1210540
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1199168
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1186365
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1169056
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1202590
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1200270
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1185946
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1189553
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1169779
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1173988
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1183720
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1194374
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1185542
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1198869
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1188520
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1197159
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1199262
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1186878
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1193094
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1204797
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1207156
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1239459
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1224961
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1224165
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1242007
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1245361
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1208271
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1200970
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1219149
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1232915
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1226327
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1205878
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1213809
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1192957
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1225379
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1199053
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1214580
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1192018
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1186199
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1175456
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1219455
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1223215
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1206271
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1221151
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1217170
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1248839
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1229688
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1221191
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1237025
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1252728
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1250395
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1251657
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1268459
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1271922
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1250680
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1278714
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1270595
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1287263
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1291845
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1281872
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1278203
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1310260
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1308077
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1301520
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1330154
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1338436
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1321502
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1324012
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1329575
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1335061
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1366082
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1337142
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1332501
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1336670
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1331864
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1352283
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1344035
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1350236
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1356734
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1352142
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1359905
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1358627
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1360232
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1365662
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1352825
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1365812
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1331558
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1362333
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1371200
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1340092
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1361010
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1354675
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1368049
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1346070
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1322225
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1337617
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1355763
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1343102
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1353623
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1362629
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1355147
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1380707
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1391112
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1388944
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1392372
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1398116
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1401657
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1395685
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1419911
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1414283
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1403319
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1413817
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1411107
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1402596
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1388189
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1400720
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1412102
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1411049
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1396264
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1406568
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1412997
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1407472
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1377470
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1401359
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1396563
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1413239
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1441383
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1422637
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1418904
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1430488
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1425563
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1424886
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1426160
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1437007
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1434021
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1425836
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1418825
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1434468
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1419675
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1427202
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1421249
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1411953
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1413165
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1432476
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
