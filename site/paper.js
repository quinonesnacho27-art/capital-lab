window.PAPER = {
 "generado": "2026-09-22 00:58 UTC",
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
   "sesiones": 33,
   "n_trades": 2,
   "sharpe": 0.35,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": 0.0082,
   "resultado_clp": 8155
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-22",
  "hasta": "2026-09-22",
  "equity": [
   {
    "fecha": "2024-09-23",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 994936
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
    "equity_clp": 974687
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
    "equity_clp": 1024589
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
    "equity_clp": 1047521
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
    "equity_clp": 1050963
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
    "equity_clp": 1026891
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
    "equity_clp": 1058384
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
    "equity_clp": 1067620
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1051888
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1059066
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
    "equity_clp": 916248
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
    "equity_clp": 908396
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 913973
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 917376
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
    "equity_clp": 885952
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
    "equity_clp": 920376
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
    "equity_clp": 913442
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
    "equity_clp": 948869
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
    "equity_clp": 966482
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
    "equity_clp": 982995
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
    "equity_clp": 1002663
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
    "equity_clp": 1015805
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
    "equity_clp": 1026790
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
    "equity_clp": 1030789
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
    "equity_clp": 1046953
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
    "equity_clp": 980789
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
    "equity_clp": 946661
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
    "equity_clp": 942283
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
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 944037
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 944037
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
    "equity_clp": 971182
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
    "equity_clp": 1184613
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
    "equity_clp": 1161170
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
    "precio_entrada_usd": 485.07,
    "precio_salida_usd": 479.5,
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
    "resultado_clp": -19893,
    "resultado_pct": -0.0959
   },
   {
    "ticker": "QQQ",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2025-01-22",
    "fecha_salida": "2025-01-27",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Stop loss (gap de apertura bajo 510.29 USD)",
    "precio_entrada_usd": 527.58,
    "precio_salida_usd": 507.22,
    "riesgo_clp": 10000,
    "invertido_clp": 208799,
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
    "invertido_clp": 426236,
    "resultado_clp": -16442,
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
    "riesgo_clp": 9615,
    "invertido_clp": 318959,
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
    "razon_salida": "Stop loss tocado en 450.40 USD",
    "precio_entrada_usd": 473.4,
    "precio_salida_usd": 450.4,
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
    "razon_salida": "Stop loss tocado en 425.92 USD",
    "precio_entrada_usd": 463.25,
    "precio_salida_usd": 425.92,
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
    "invertido_clp": 74833,
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
    "precio_entrada_usd": 478.83,
    "precio_salida_usd": 551.23,
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
    "invertido_clp": 375414,
    "resultado_clp": -14634,
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
    "invertido_clp": 204129,
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
    "precio_entrada_usd": 598.22,
    "precio_salida_usd": 610.03,
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
    "invertido_clp": 175089,
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
    "precio_entrada_usd": 576.55,
    "precio_salida_usd": 636.7,
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
    "precio_entrada_usd": 636.7,
    "precio_salida_usd": 704.29,
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
    "precio_entrada_usd": 643.62,
    "precio_salida_usd": 695.33,
    "riesgo_clp": 9929,
    "invertido_clp": 297749,
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
   "sesiones": 499,
   "n_trades": 44,
   "sharpe": 0.31,
   "max_drawdown": -0.2059,
   "win_rate": 0.4091,
   "retorno_total": 0.1766,
   "resultado_clp": 176561
  },
  "buy_hold": [
   {
    "fecha": "2024-09-23",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 996820
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 984829
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 986720
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 978835
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 976624
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 965358
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 972567
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 978781
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 997670
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 992367
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1003943
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1018889
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1016680
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1019249
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1027773
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1016003
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1034938
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1032427
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1046108
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1027662
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1050280
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1037184
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1035351
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1036779
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1028182
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1041645
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1048710
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1034165
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1038098
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1021283
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1040663
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1069022
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1085017
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1083199
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1071310
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1093827
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1113281
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1099388
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1080508
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1070374
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1085853
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1084478
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1092501
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1096270
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1090266
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1108698
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1106777
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1114188
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1097360
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1117640
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1117384
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1118678
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1114992
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1095702
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1105231
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1119854
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1114347
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1116058
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1108050
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1124414
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1089283
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1102043
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1112172
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1100021
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1129932
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1128649
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1116599
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1093153
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1105080
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1102365
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1128261
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1141824
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1129140
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1123807
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1108556
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1113442
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1113946
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1132060
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1129198
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1149121
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1153047
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1155074
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1146771
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1139085
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1099726
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1132391
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1135517
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1138476
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1123815
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1120939
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1125317
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1114454
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1116623
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1097109
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1088188
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1104618
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1100647
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1106446
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1102271
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1099379
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1104074
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1101554
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1073068
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1055053
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1064046
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1062879
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1046046
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1073987
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1042288
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1040338
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1048121
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1020863
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1015041
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 973383
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 994153
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 994252
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 982411
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1001752
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 986973
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 979718
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 986824
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 983541
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 994882
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1000868
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1016700
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 995145
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 996648
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 986743
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 975907
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1004664
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1016772
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 976177
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 912988
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 917104
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 936267
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1045373
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 979791
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1005263
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 996920
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 988672
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 969718
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 971052
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 947938
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 964821
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 970465
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 980078
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 982033
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 980845
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 995720
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 997910
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1010872
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1022133
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1016991
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 999309
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1002700
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1017744
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1011054
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1037052
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1056816
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1051578
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1057535
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1062186
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1066677
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1061646
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1045754
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1047077
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1039103
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1058658
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1050105
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1054767
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1053038
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1040158
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1065269
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1066061
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1058696
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1061138
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1063042
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1074385
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1073576
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1073153
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1056609
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1048648
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1064589
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1074916
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1067353
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1076658
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1098273
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1084455
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1094681
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1092863
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1084349
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1098193
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1099605
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1105442
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1102229
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1114584
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1123997
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1133990
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1130742
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1118875
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1149941
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1152427
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1160187
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1155766
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1156685
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1145119
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1150755
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1148508
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1155415
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1139500
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1162765
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1163336
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1184548
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1154175
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1141242
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1158679
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1167639
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1176319
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1179992
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1175169
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1188797
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1177670
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1173186
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1186277
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1183672
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1177361
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1173441
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1172046
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1195787
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1177140
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1185284
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1192825
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1199676
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1192090
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1182205
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1196209
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1199724
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1200982
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1197701
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1204605
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1203890
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1207264
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1195500
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1186030
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1198609
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1192324
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1203434
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1213741
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1219330
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1213772
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1200163
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1199566
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1215461
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1219360
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1230879
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1230363
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1229589
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1232031
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1218274
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1231814
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1236169
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1221485
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1188458
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1202339
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1212942
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1223804
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1213281
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1214888
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1234825
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1221824
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1215984
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1221651
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1227991
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1221503
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1236516
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1240006
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1224299
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1230286
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1215285
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1213472
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1227875
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1210889
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1210257
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1213479
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1225992
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1224306
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1196127
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1195751
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1170434
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1167067
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1182399
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1164439
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1173767
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1201824
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1215804
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1216805
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1212874
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1208235
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1212731
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1209283
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1203602
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1204286
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1206100
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1206773
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1218713
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1218448
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1192841
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1185825
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1187888
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1174316
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1188339
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1190248
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1197005
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1201432
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1202967
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1198245
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1196022
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1206238
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1178561
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1180327
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1196668
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1200410
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1183178
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1184925
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1194961
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1194354
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1177364
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1174069
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1171670
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1172242
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1154599
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1164397
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1156903
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1153219
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1157466
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1154798
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1148218
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1149525
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1141738
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1156455
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1145591
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1133360
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1116824
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1148861
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1146644
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1132960
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1136406
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1117515
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1121536
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1130834
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1141012
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1132573
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1145305
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1135419
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1143672
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1145681
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1133851
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1139788
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1150968
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1153223
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1184082
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1170232
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1169472
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1186516
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1189720
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1154287
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1147313
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1164679
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1177830
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1171537
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1152001
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1159578
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1139658
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1170631
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1145482
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1160314
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1138760
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1133201
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1122938
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1164972
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1168564
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1152377
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1166592
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1162789
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1193043
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1174748
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1166630
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1181757
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1196758
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1194529
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1195735
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1211786
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1215095
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1194802
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1221583
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1213827
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1229750
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1234127
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1224600
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1221095
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1251720
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1249635
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1243370
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1270725
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1278636
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1262459
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1264857
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1270172
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1275412
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1305048
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1277401
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1272967
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1276950
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1272358
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1291865
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1283986
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1289910
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1296117
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1291731
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1299147
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1297926
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1299459
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1304647
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1292383
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1304790
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1272066
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1301466
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1309937
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1280219
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1300203
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1294150
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1306927
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1285929
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1263150
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1277855
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1295190
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1283094
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1293145
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1301748
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1294601
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1319020
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1328959
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1326888
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1330163
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1335651
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1339033
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1333328
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1356472
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1351095
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1340621
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1350650
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1348061
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1339931
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1326167
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1338138
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1349011
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1348005
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1333881
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1343725
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1349866
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1344588
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1315927
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1338749
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1334167
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1350097
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1376985
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1359076
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1355510
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1366576
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1361871
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1361224
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1362441
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1372804
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1369951
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1362132
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1355434
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1370378
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1356247
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1363436
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1357750
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1348869
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1350027
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1368475
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1370494
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1379488
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1373717
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1382190
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1399585
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1386816
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1381048
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1360704
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1355123
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1387525
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1374738
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1396391
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1388239
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1404716
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1415354
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.6,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": 0.35,
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
