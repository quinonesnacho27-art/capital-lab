window.PAPER = {
 "generado": "2026-08-20 22:53 UTC",
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
    "equity_clp": 989139
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
    "resultado_clp": -5363,
    "resultado_pct": -0.0135
   }
  ],
  "abiertas": [
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-13",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 732.07,
    "stop_usd": 705.76,
    "invertido_clp": 277908
   }
  ],
  "metricas": {
   "sesiones": 13,
   "n_trades": 1,
   "sharpe": null,
   "max_drawdown": -0.0116,
   "win_rate": 0.0,
   "retorno_total": -0.0109,
   "resultado_clp": -10861
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
    "equity_clp": 986533
   }
  ]
 },
 "backtest": {
  "desde": "2024-08-20",
  "hasta": "2026-08-20",
  "equity": [
   {
    "fecha": "2024-08-20",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-21",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-22",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-23",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-26",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-27",
    "equity_clp": 1000000
   },
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
    "equity_clp": 1008603
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
    "equity_clp": 1051766
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
    "equity_clp": 976874
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
    "equity_clp": 949497
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
    "equity_clp": 1073641
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
    "equity_clp": 1058838
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
    "equity_clp": 1206983
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
    "equity_clp": 1243681
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
    "invertido_clp": 331728,
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
    "invertido_clp": 3805,
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
    "invertido_clp": 272375,
    "resultado_clp": -4759,
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
    "resultado_clp": 2540,
    "resultado_pct": 0.0062
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
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-13",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 732.07,
    "stop_usd": 705.76,
    "invertido_clp": 278244
   }
  ],
  "metricas": {
   "sesiones": 502,
   "n_trades": 40,
   "sharpe": 0.47,
   "max_drawdown": -0.1952,
   "win_rate": 0.45,
   "retorno_total": 0.2437,
   "resultado_clp": 243681
  },
  "buy_hold": [
   {
    "fecha": "2024-08-20",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-21",
    "equity_clp": 1003948
   },
   {
    "fecha": "2024-08-22",
    "equity_clp": 987654
   },
   {
    "fecha": "2024-08-23",
    "equity_clp": 1001888
   },
   {
    "fecha": "2024-08-26",
    "equity_clp": 987960
   },
   {
    "fecha": "2024-08-27",
    "equity_clp": 987095
   },
   {
    "fecha": "2024-08-28",
    "equity_clp": 982350
   },
   {
    "fecha": "2024-08-29",
    "equity_clp": 987971
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 999807
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 979789
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 991888
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1004963
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 987347
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 999514
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1004070
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1020715
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1021018
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1017718
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1013861
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1007210
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1011910
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1030108
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1028448
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1028292
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1025022
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1012692
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1014637
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1006528
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1004255
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 992670
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1000083
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1006473
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1025896
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1020443
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1032347
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1047715
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1045445
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1048086
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1056851
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1044748
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1064219
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1061637
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1075705
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1056737
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1079995
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1066529
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1064644
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1066112
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1057271
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1071116
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1078380
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1063424
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1067468
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1050177
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1070106
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1099267
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1115715
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1113845
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1101620
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1124773
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1144779
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1130492
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1111078
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1100658
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1116574
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1115160
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1123410
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1127286
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1121112
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1140066
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1138091
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1145712
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1128407
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1149261
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1148997
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1150328
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1146538
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1126702
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1136501
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1151538
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1145875
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1147634
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1139400
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1156226
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1120101
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1133222
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1143637
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1131143
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1161900
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1160581
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1148190
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1124081
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1136346
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1133554
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1160182
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1174129
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1161086
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1155603
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1139919
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1144944
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1145463
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1164088
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1161145
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1181633
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1185669
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1187753
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1179216
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1171312
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1130839
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1164429
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1167643
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1170686
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1155611
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1152653
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1157155
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1145984
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1148215
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1128148
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1118976
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1135870
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1131787
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1137750
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1133457
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1130483
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1135310
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1132720
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1103427
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1084902
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1094150
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1092950
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1075641
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1104373
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1071777
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1069772
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1077775
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1049745
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1043758
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1000923
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1022280
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1022381
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1010206
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1030094
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1014896
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1007436
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1014744
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1011368
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1023030
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1029185
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1045465
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1023300
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1024845
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1014661
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1003517
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1033088
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1045538
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1003796
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 938818
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 943051
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 962756
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1074949
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1007511
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1033704
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1025125
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1016644
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 997154
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 998525
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 974757
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 992118
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 997922
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1007806
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1009817
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1008595
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1023891
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1026143
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1039472
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1051052
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1045764
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1027582
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1031069
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1046539
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1039659
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1066393
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1086716
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1081329
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1087455
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1092237
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1096856
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1091682
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1075341
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1076701
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1068502
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1088610
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1079815
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1084609
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1082831
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1069586
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1095408
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1096222
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1088649
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1091160
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1093118
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1104782
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1103950
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1103515
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1086503
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1078317
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1094709
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1105328
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1097551
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1107119
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1129346
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1115137
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1125652
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1123783
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1115027
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1129263
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1130716
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1136717
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1133414
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1146118
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1155797
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1166074
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1162734
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1150531
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1182476
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1185032
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1193011
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1188466
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1189410
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1177517
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1183313
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1181001
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1188105
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1171739
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1195663
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1196250
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1218061
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1186829
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1173531
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1191460
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1200674
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1209600
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1213376
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1208417
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1222430
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1210989
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1206378
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1219839
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1217161
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1210671
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1206640
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1205206
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1229618
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1210444
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1218818
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1226573
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1233617
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1225817
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1215653
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1230052
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1233666
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1234961
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1231587
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1238686
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1237951
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1241421
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1229323
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1219585
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1232521
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1226058
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1237482
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1248081
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1253828
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1248113
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1234118
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1233504
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1249849
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1253858
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1265704
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1265173
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1264377
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1266888
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1252741
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1266665
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1271144
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1256043
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1222082
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1236356
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1247259
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1258428
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1247608
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1249260
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1269761
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1256392
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1250386
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1256214
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1262733
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1256062
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1271500
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1275089
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1258937
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1265094
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1249668
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1247804
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1262615
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1245148
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1244498
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1247811
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1260678
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1258944
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1229969
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1229582
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1203548
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1200086
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1215852
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1197384
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1206975
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1235827
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1250202
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1251232
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1247189
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1242419
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1247042
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1243496
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1237654
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1238358
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1240224
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1240915
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1253193
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1252920
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1226589
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1219374
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1221496
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1207540
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1221960
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1223922
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1230871
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1235423
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1237002
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1232146
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1229860
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1240365
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1211905
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1213722
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1230524
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1234372
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1216653
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1218449
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1228769
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1228145
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1210674
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1207286
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1204819
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1205407
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1187265
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1197340
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1189634
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1185847
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1190213
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1187470
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1180704
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1182048
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1174040
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1189174
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1178002
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1165426
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1148422
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1181364
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1179085
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1165014
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1168557
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1149132
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1153267
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1162828
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1173293
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1164617
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1177709
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1167542
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1176029
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1178095
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1165930
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1172036
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1183532
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1185850
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1217583
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1203340
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1202559
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1220085
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1223380
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1186945
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1179773
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1197631
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1211153
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1204682
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1184594
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1192385
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1171901
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1203751
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1177890
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1193142
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1170978
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1165262
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1154709
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1197932
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1201625
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1184980
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1199598
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1195687
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1226797
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1207984
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1199637
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1215191
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1230617
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1228325
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1229565
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1246070
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1249473
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1228605
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1256144
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1248169
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1264543
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1269044
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1259247
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1255642
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1287134
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1284990
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1278548
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1306676
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1314812
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1298177
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1300643
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1306108
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1311497
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1341971
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1313542
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1308982
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1313078
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1308356
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1328415
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1320313
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1326404
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1332787
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1328277
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1335903
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1334647
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1336224
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1341558
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1328948
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1341705
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1308055
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1338287
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1346998
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1316439
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1336988
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1330765
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1343903
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1322311
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1298888
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1314008
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1331834
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1319396
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1329731
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1338578
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1331228
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1356338
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1366558
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1364429
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1367796
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1373439
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1376918
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1371051
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1394850
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1389321
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1378550
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1388863
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1386201
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1377840
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1363687
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1375997
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1387178
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1386144
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1371620
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1381742
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1388057
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1382630
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1353158
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1376625
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1371913
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1388295
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1415943
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1397528
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1393860
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1405240
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1400402
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1399736
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1400988
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1411643
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1408710
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1400670
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1393782
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1409150
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1396874
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 0.5,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": null,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0116,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
