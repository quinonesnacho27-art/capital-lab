window.PAPER = {
 "generado": "2026-08-24 22:51 UTC",
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
    "equity_clp": 983279
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
    "resultado_clp": -10724,
    "resultado_pct": -0.0386
   }
  ],
  "abiertas": [],
  "metricas": {
   "sesiones": 15,
   "n_trades": 2,
   "sharpe": null,
   "max_drawdown": -0.0167,
   "win_rate": 0.0,
   "retorno_total": -0.0167,
   "resultado_clp": -16721
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
    "equity_clp": 975808
   }
  ]
 },
 "backtest": {
  "desde": "2024-08-24",
  "hasta": "2026-08-24",
  "equity": [
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
    "equity_clp": 1063761
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
    "equity_clp": 1133675
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
    "equity_clp": 1126251
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
    "equity_clp": 972908
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
    "equity_clp": 1144591
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
    "equity_clp": 1237712
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
    "resultado_clp": -10737,
    "resultado_pct": -0.0386
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
   }
  ],
  "metricas": {
   "sesiones": 500,
   "n_trades": 41,
   "sharpe": 0.46,
   "max_drawdown": -0.1952,
   "win_rate": 0.439,
   "retorno_total": 0.2377,
   "resultado_clp": 237712
  },
  "buy_hold": [
   {
    "fecha": "2024-08-26",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-27",
    "equity_clp": 999124
   },
   {
    "fecha": "2024-08-28",
    "equity_clp": 994321
   },
   {
    "fecha": "2024-08-29",
    "equity_clp": 1000011
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 1011992
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 991729
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 1003976
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 1017210
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 999380
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 1011695
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 1016306
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1033154
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1033461
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1030120
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 1026217
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 1019485
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1024242
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1042661
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1040982
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1040824
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1037513
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1025034
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1027002
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 1018794
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 1016494
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 1004768
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 1012271
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 1018739
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1038398
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1032879
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1044927
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1060483
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1058185
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1060859
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1069730
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1057480
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1077188
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1074575
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1088814
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1069615
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1093157
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1079526
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1077618
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1079105
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1070156
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1084169
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1091522
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1076384
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1080477
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1062975
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1083147
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1112663
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1129312
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1127419
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1115045
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1138481
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1158730
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1144269
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1124619
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1114071
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1130181
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1128750
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1137101
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1141024
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1134775
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1153959
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1151960
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1159674
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1142158
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1163266
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1162999
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1164347
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1160510
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1140433
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1150351
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1165571
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1159839
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1161620
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1153285
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1170317
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1133752
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1147033
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1157575
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1144928
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1176060
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1174725
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1162183
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1137779
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1150194
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1147368
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1174321
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1188437
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1175236
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1169686
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1153811
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1158897
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1159422
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1178275
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1175296
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1196033
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1200118
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1202228
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1193587
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1185586
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1144621
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1178620
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1181873
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1184953
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1169694
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1166700
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1171257
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1159950
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1162208
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1141897
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1132612
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1149713
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1145580
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1151615
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1147270
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1144260
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1149146
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1146524
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1116874
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1098124
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1107484
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1106269
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1088750
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1117832
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1084838
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1082809
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1090910
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1062538
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1056479
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 1013121
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1034738
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1034841
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1022517
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1042648
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1027265
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1019713
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1027110
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1023693
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1035497
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1041727
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1058206
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1035770
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1037335
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1027026
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 1015747
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1045678
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1058280
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 1016029
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 950259
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 954544
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 974489
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1088049
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1019789
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1046301
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1037618
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1029033
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 1009306
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 1010693
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 986636
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 1004209
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 1010083
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1020088
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1022123
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1020887
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1036369
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1038648
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1052140
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1063861
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1058508
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1040105
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1043634
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1059293
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1052329
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1079389
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1099960
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1094507
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1100707
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1105548
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1110223
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1104986
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1088446
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1089823
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1081523
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1101877
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1092975
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1097827
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1096027
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1082621
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1108757
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1109582
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1101916
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1104458
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1106439
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1118246
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1117404
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1116964
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1099744
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1091458
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1108050
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1118798
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1110926
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1120611
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1143109
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1128727
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1139370
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1137478
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1128616
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1143025
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1144495
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1150570
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1147226
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1160086
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1169883
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1180284
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1176903
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1164552
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1196886
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1199474
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1207550
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1202949
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1203905
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1191867
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1197734
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1195394
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1202584
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1186018
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1210234
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1210828
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1232905
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1201293
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1187832
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1205981
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1215306
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1224340
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1228163
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1223144
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1237328
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1225747
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1221080
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1234705
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1231994
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1225425
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1221345
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1219893
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1244604
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1225195
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1233672
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1241520
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1248651
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1240756
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1230467
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1245043
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1248701
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1250011
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1246596
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1253781
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1253038
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1256550
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1244305
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1234448
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1247541
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1241000
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1252563
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1263291
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1269108
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1263323
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1249158
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1248536
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1265081
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1269139
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1281128
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1280592
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1279786
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1282327
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1268008
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1282102
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1286635
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1271350
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1236976
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1251423
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1262459
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1273764
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1262812
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1264485
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1285235
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1271704
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1265625
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1271523
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1278122
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1271369
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1286996
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1290628
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1274279
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1280512
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1264897
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1263011
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1278002
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1260322
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1259664
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1263017
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1276042
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1274287
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1244958
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1244567
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1218215
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1214711
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1230669
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1211976
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1221684
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1250888
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1265438
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1266480
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1262388
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1257560
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1262239
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1258651
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1252737
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1253449
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1255338
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1256038
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1268465
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1268189
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1241537
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1234235
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1236382
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1222256
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1236851
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1238838
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1245871
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1250479
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1252077
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1247162
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1244848
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1255481
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1226674
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1228513
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1245520
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1249415
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1231480
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1233298
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1243744
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1243112
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1225428
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1221999
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1219502
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1220097
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1201734
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1211932
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1204132
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1200298
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1204718
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1201941
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1195093
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1196453
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1188348
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1203666
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1192358
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1179628
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1162417
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1195761
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1193454
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1179212
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1182798
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1163136
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1167321
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1176999
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1187592
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1178809
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1192061
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1181771
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1190361
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1192452
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1180139
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1186319
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1197955
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1200302
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1232421
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1218005
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1217214
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1234954
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1238289
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1201410
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1194150
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1212226
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1225913
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1219364
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1199031
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1206917
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1186183
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1218420
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1192244
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1207683
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1185249
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1179463
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1168781
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1212531
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1216269
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1199421
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1214217
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1210259
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1241748
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1222705
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1214256
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1230000
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1245614
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1243294
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1244549
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1261256
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1264700
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1243578
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1271453
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1263380
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1279953
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1284509
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1274593
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1270944
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1302820
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1300650
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1294129
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1322601
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1330835
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1313998
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1316493
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1322025
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1327480
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1358325
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1329549
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1324934
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1329080
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1324301
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1344604
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1336403
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1342569
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1349030
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1344464
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1352183
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1350912
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1352508
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1357907
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1345143
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1358056
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1323996
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1354597
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1363414
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1332482
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1353282
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1346983
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1360281
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1338426
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1314717
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1330022
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1348064
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1335475
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1345936
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1354891
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1347452
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1372867
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1383212
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1381057
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1384465
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1390177
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1393698
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1387759
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1411848
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1406252
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1395350
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1405789
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1403094
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1394632
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1380306
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1392766
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1404083
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1403036
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1388335
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1398581
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1404973
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1399479
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1369648
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1393401
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1388632
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1405214
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1433199
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1414559
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1410847
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1422365
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1417468
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1416794
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1418061
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1428847
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1425878
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1417739
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1410768
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1426323
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1411614
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1419097
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1398527
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 0.7,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": null,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0167,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
