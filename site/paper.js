window.PAPER = {
 "generado": "2026-09-24 00:40 UTC",
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
   "sesiones": 35,
   "n_trades": 2,
   "sharpe": 0.32,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": 0.0087,
   "resultado_clp": 8707
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-24",
  "hasta": "2026-09-24",
  "equity": [
   {
    "fecha": "2024-09-24",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 994937
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 995735
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 985008
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 980563
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 965952
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 974688
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 981423
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1002449
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 998300
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1011754
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1028080
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1024590
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1026426
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1037913
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1011855
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1028183
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1027978
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1041675
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1024387
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1046590
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1031565
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1032574
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1038908
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1028673
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1051063
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1047522
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1028570
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1029651
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1027538
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1029484
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1032855
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1050964
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1046930
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1033222
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1052262
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1065987
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1054479
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1033593
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1026892
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1039782
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1038413
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1043885
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1046217
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1041019
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1055055
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1051853
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1058385
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1048855
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1065235
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1067278
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1067851
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1067621
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1051888
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1059067
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1073984
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1069268
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1073503
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1071091
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1084615
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1047720
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1047720
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1047720
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1047720
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1047720
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1045029
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1041852
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1032590
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1032547
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1033620
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1036962
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1037131
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1044037
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1045255
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1049586
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1038357
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1023843
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 964241
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 976295
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 977448
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 978540
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 973130
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 968223
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 968223
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 964357
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 965129
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 958185
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 955010
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 960857
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 959444
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 961507
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 960168
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 958089
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 961519
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 959298
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 933340
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 916247
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 919448
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 919032
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 914430
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 908292
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 917516
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 910727
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 906341
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 909942
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 908395
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 913973
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 917375
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 925042
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 914218
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 914311
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 908751
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 902739
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 916382
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 921910
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 904316
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 904316
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 904316
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 904316
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 904316
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 878473
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 883283
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 881289
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 880724
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 875399
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 875040
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 869372
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 870947
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 868643
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 861242
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 863866
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 870637
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 869282
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 884853
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 896649
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 895521
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 897815
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 899922
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 902586
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 898630
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 885951
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 886111
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 877259
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 896490
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 889818
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 893125
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 888682
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 879928
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 905062
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 909114
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 902015
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 903381
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 908720
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 921328
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 920375
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 919034
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 901986
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 900070
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 913441
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 922990
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 915238
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 922759
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 947201
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 937402
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 946776
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 943662
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 935976
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 944343
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 948868
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 954086
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 949317
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 963755
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 971788
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 980156
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 978163
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 966481
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 997827
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 998013
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1005045
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1001413
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1003248
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 988717
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 989536
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 987840
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 992349
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 982994
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1004276
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1007274
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1019761
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 993221
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 988110
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 995309
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 999491
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1005041
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1007009
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1004683
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1012161
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1002662
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 998712
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1008335
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1006246
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 998638
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 994475
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 993082
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1013840
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 998451
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1005592
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1011818
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1018267
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1009451
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1000738
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1012587
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1015804
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1018538
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1016513
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1022408
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1022019
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1024282
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1015410
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1008203
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1019353
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1013904
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1025880
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1034433
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1040012
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1035246
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1023660
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1023293
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1036308
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1039891
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1049735
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1050489
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1051517
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1052322
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1042930
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1053063
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1059637
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1047317
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1015188
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1024373
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1026789
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1033716
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1030380
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1030788
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1040563
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1031172
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1021682
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1030211
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1036711
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1036587
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1050077
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1058280
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1043224
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1048791
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1037717
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1026972
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1046952
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1026642
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1018881
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1022331
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1025335
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1025163
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1010644
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1010510
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 998928
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 995793
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1003767
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 992128
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 995762
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1012036
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1017201
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1019242
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1018812
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1017309
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1021693
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1021011
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1015022
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1017676
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1022480
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1023288
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1032728
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1030747
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1005501
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1000162
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1001128
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 995975
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1006451
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1009707
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1013280
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1015622
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1016753
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1012760
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1010549
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1018825
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 994886
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 997534
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1012190
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1017883
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1004118
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1002829
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1013739
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1013195
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 999631
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 995082
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 994157
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 995697
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 980790
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 987965
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 982244
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 977336
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 977560
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 982258
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 985344
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 985661
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 964458
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 981308
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 965479
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 943296
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 934808
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 954509
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 954641
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 946662
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 949244
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 943433
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 945083
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 947448
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 950646
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 948096
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 951812
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 949270
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 952050
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 953148
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 942021
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 942689
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 943148
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 940580
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 943140
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 942002
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 940040
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 942932
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 943699
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 942418
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 940724
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 942284
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 943643
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 943628
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 943060
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 944038
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 946828
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 939497
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 946299
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 944492
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 968432
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 960415
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 957476
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 971181
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 986197
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 984905
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 987688
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 999073
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1001717
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 992913
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1021500
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1018237
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1044720
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1045028
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1028340
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1033363
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1061657
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1065069
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1060004
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1092999
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1110780
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1092819
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1113270
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1122701
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1116774
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1149577
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1123802
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1112106
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1108563
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1106518
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1134648
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1128994
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1138517
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1162326
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1155446
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1164853
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1163818
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1167789
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1187065
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1184514
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1184359
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1121895
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1157895
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1157558
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1131600
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1164833
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1163310
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1185275
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1153304
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1144816
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1172675
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1191851
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1160321
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1165259
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1182522
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1163033
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1188385
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1207105
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1184612
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1168090
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1172736
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1169565
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1168802
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1183078
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1179982
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1170796
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1178383
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1174771
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1166927
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1158429
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1161230
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1163775
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1163539
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1160234
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1168418
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1162967
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1161882
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1165250
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1163818
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1163621
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1163991
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1167146
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1165870
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1162761
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1156533
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1162965
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1156161
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1157452
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1154172
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1154172
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1154172
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1161169
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1160224
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1163655
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1160187
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1161549
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1166352
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1165134
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1165309
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1160818
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1157822
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1166005
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1161590
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1166307
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1165897
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1172094
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1176561
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1186819
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1176413
   }
  ],
  "trades": [
   {
    "ticker": "SOXX",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-26",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss tocado en 219.74 USD",
    "precio_entrada_usd": 234.0,
    "precio_salida_usd": 219.74,
    "riesgo_clp": 9957,
    "invertido_clp": 163423,
    "resultado_clp": -1543,
    "resultado_pct": -0.0094
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-24",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 558.41,
    "precio_salida_usd": 555.81,
    "riesgo_clp": 10000,
    "invertido_clp": 420949,
    "resultado_clp": 15771,
    "resultado_pct": 0.0375
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-26",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 484.57,
    "precio_salida_usd": 479.0,
    "riesgo_clp": 9957,
    "invertido_clp": 310794,
    "resultado_clp": 13277,
    "resultado_pct": 0.0427
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
    "riesgo_clp": 9814,
    "invertido_clp": 104834,
    "resultado_clp": 508,
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
    "invertido_clp": 213924,
    "resultado_clp": -6358,
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
    "invertido_clp": 464179,
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
    "invertido_clp": 208798,
    "resultado_clp": -15422,
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
    "invertido_clp": 426237,
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
    "riesgo_clp": 9615,
    "invertido_clp": 318958,
    "resultado_clp": -17800,
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
    "riesgo_clp": 9581,
    "invertido_clp": 248803,
    "resultado_clp": -9171,
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
    "riesgo_clp": 9682,
    "invertido_clp": 400461,
    "resultado_clp": -26822,
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
    "riesgo_clp": 9144,
    "invertido_clp": 253380,
    "resultado_clp": -4428,
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
    "riesgo_clp": 9144,
    "invertido_clp": 188236,
    "resultado_clp": -5686,
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
    "riesgo_clp": 9043,
    "invertido_clp": 131541,
    "resultado_clp": -11467,
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
    "riesgo_clp": 9043,
    "invertido_clp": 112245,
    "resultado_clp": -12336,
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
    "riesgo_clp": 9043,
    "invertido_clp": 74832,
    "resultado_clp": -11142,
    "resultado_pct": -0.1489
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-05-01",
    "fecha_salida": "2025-08-01",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 478.34,
    "precio_salida_usd": 550.65,
    "riesgo_clp": 8694,
    "invertido_clp": 141354,
    "resultado_clp": 25045,
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
    "riesgo_clp": 8709,
    "invertido_clp": 170927,
    "resultado_clp": 22081,
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
    "riesgo_clp": 8709,
    "invertido_clp": 99769,
    "resultado_clp": 28346,
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
    "riesgo_clp": 10000,
    "invertido_clp": 487522,
    "resultado_clp": -139,
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
    "invertido_clp": 289454,
    "resultado_clp": -7548,
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
    "precio_entrada_usd": 512.01,
    "precio_salida_usd": 622.13,
    "riesgo_clp": 8966,
    "invertido_clp": 184398,
    "resultado_clp": 34163,
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
    "invertido_clp": 319204,
    "resultado_clp": -4346,
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
    "riesgo_clp": 10000,
    "invertido_clp": 375415,
    "resultado_clp": -14634,
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
    "riesgo_clp": 9823,
    "invertido_clp": 156651,
    "resultado_clp": -3877,
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
    "riesgo_clp": 9880,
    "invertido_clp": 204130,
    "resultado_clp": -15275,
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
    "riesgo_clp": 9960,
    "invertido_clp": 307662,
    "resultado_clp": -14904,
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
    "riesgo_clp": 9531,
    "invertido_clp": 175090,
    "resultado_clp": -9143,
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
    "riesgo_clp": 8955,
    "invertido_clp": 229855,
    "resultado_clp": 21725,
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
    "riesgo_clp": 8978,
    "invertido_clp": 43068,
    "resultado_clp": 24146,
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
    "riesgo_clp": 9440,
    "invertido_clp": 240651,
    "resultado_clp": 12541,
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
    "riesgo_clp": 9440,
    "invertido_clp": 290088,
    "resultado_clp": 7660,
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
    "riesgo_clp": 9849,
    "invertido_clp": 253192,
    "resultado_clp": 29847,
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
    "riesgo_clp": 9445,
    "invertido_clp": 138401,
    "resultado_clp": 89327,
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
    "riesgo_clp": 9929,
    "invertido_clp": 297748,
    "resultado_clp": 39584,
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
    "riesgo_clp": 9604,
    "invertido_clp": 274897,
    "resultado_clp": 37238,
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
    "invertido_clp": 267851
   }
  ],
  "metricas": {
   "sesiones": 500,
   "n_trades": 44,
   "sharpe": 0.31,
   "max_drawdown": -0.2059,
   "win_rate": 0.4091,
   "retorno_total": 0.1764,
   "resultado_clp": 176413
  },
  "buy_hold": [
   {
    "fecha": "2024-09-24",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 987971
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 989868
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 981958
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 979740
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 968438
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 975670
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 981904
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1000853
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 995533
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1007146
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1022140
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1019924
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1022501
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1031052
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1019245
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1038240
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1035721
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1049446
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1030941
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1053631
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1040494
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1038655
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1040087
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1031462
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1044969
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1052056
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1037465
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1041410
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1024541
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1043983
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1072433
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1088479
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1086655
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1074729
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1097317
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1116833
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1102896
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1083955
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1073789
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1089317
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1087938
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1095987
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1099768
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1093745
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1112235
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1110308
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1117743
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1100861
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1121206
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1120949
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1122247
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1118550
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1099198
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1108758
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1123427
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1117903
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1119619
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1111586
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1128001
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1092758
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1105559
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1115720
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1103531
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1133537
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1132250
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1120161
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1096640
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1108606
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1105883
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1131861
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1145467
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1132743
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1127393
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1112093
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1116994
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1117501
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1135672
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1132801
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1152788
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1156725
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1158759
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1150430
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1142719
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1103234
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1136004
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1139140
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1142108
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1127401
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1124515
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1128907
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1118009
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1120186
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1100609
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1091660
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1108142
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1104159
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1109976
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1105788
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1102887
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1107596
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1105069
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1076491
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1058419
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1067441
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1066270
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1049384
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1077414
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1045614
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1043657
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1051466
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1024120
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1018279
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 976489
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 997325
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 997424
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 985545
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1004949
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 990122
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 982843
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 989973
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 986679
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 998057
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1004061
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1019944
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 998320
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 999828
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 989892
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 979020
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1007869
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1020016
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 979292
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 915901
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 920030
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 939255
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1048708
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 982917
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1008470
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1000100
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 991826
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 972812
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 974150
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 950962
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 967900
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 973561
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 983205
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 985166
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 983974
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 998897
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1001094
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1014097
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1025395
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1020236
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1002498
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1005899
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1020992
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1014280
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1040361
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1060188
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1054933
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1060909
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1065575
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1070080
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1065033
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1049090
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1050418
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1042418
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1062036
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1053456
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1058132
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1056397
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1043476
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1068668
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1069462
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1062074
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1064524
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1066434
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1077813
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1077002
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1076577
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1059980
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1051994
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1067986
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1078346
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1070759
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1080093
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1101778
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1087915
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1098174
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1096350
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1087809
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1101697
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1103114
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1108969
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1105746
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1118141
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1127583
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1137609
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1134350
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1122445
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1153610
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1156104
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1163889
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1159454
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1160376
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1148772
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1154427
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1152172
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1159102
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1143135
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1166475
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1167048
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1188327
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1157857
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1144883
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1162376
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1171364
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1180072
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1183757
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1178918
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1192589
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1181428
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1176929
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1190062
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1187449
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1181117
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1177185
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1175786
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1199602
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1180896
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1189066
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1196631
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1203504
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1195894
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1185977
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1200025
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1203551
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1204814
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1201522
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1208448
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1207731
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1211116
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1199314
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1189814
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1202434
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1196129
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1207274
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1217614
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1223221
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1217645
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1203992
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1203393
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1219339
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1223250
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1234807
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1234289
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1233512
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1235962
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1222161
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1235745
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1240114
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1225382
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1192250
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1206176
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1216812
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1227708
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1217152
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1218765
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1238765
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1225723
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1219863
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1225548
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1231909
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1225400
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1240462
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1243963
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1228205
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1234212
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1219162
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1217344
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1231793
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1214753
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1214118
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1217350
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1229904
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1228212
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1199944
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1199567
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1174168
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1170791
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1186171
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1168154
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1177512
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1205659
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1219683
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1220688
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1216744
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1212090
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1216600
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1213141
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1207442
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1208129
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1209949
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1210623
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1222601
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1222335
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1196647
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1189608
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1191678
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1178063
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1192130
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1194045
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1200824
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1205265
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1206805
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1202068
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1199838
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1210087
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1182321
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1184094
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1200486
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1204240
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1186953
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1188706
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1198774
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1198165
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1181120
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1177815
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1175408
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1175982
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1158283
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1168112
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1160594
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1156899
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1161159
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1158483
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1151881
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1153193
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1145380
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1160145
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1149246
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1136976
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1120387
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1152526
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1150302
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1136575
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1140031
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1121081
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1125114
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1134442
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1144652
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1136187
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1148960
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1139042
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1147321
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1149337
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1137468
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1143425
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1154641
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1156902
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1187860
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1173965
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1173203
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1190302
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1193516
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1157970
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1150973
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1168395
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1181588
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1175275
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1155677
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1163278
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1143294
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1174366
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1149136
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1164016
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1142394
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1136817
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1126521
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1168689
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1172292
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1156054
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1170314
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1166499
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1196850
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1178496
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1170352
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1185527
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1200576
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1198340
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1199550
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1215652
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1218972
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1198614
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1225480
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1217700
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1233674
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1238065
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1228507
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1224991
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1255713
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1253622
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1247337
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1274779
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1282716
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1266487
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1268893
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1274225
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1279482
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1309212
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1281477
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1277028
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1281024
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1276418
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1295987
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1288083
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1294026
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1300253
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1295852
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1303292
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1302067
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1303605
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1308809
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1296507
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1308953
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1276124
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1305619
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1314117
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1284304
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1304351
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1298280
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1311097
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1290032
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1267181
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1281932
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1299322
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1287188
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1297271
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1305902
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1298732
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1323228
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1333199
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1331122
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1334407
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1339912
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1343306
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1337582
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1360800
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1355406
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1344898
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1354960
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1352363
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1344206
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1330398
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1342408
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1353315
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1352306
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1338137
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1348012
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1354173
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1348878
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1320126
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1343020
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1338424
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1354405
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1381378
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1363413
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1359835
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1370936
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1366216
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1365567
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1366788
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1377184
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1374322
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1366478
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1359759
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1374751
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1360574
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1367787
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1362082
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1353173
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1354334
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1372842
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1374867
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1383890
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1378100
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1386600
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1404051
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1391241
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1385454
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1365046
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1359447
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1391952
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1379124
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1400846
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1392668
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1409198
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1419870
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1441660
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1422741
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.7,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 0.32,
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
