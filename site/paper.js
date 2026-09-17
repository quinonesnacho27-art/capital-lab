window.PAPER = {
 "generado": "2026-09-17 00:44 UTC",
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
   "sesiones": 30,
   "n_trades": 2,
   "sharpe": -0.95,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": -0.002,
   "resultado_clp": -1956
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-17",
  "hasta": "2026-09-17",
  "equity": [
   {
    "fecha": "2024-09-17",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 999400
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 999343
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 998160
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 993699
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 994403
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 984082
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 979752
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 965720
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 974086
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 980504
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1001738
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 997908
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1011375
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1027874
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1024113
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1026073
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1038083
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1009729
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1025802
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1025992
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1039512
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1022249
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1044242
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1029259
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1030439
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1037291
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1026946
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1050481
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1045237
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1025335
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1026920
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1023822
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1026675
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1031618
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1051174
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1046432
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1030814
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1050508
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1064013
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1052168
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1030098
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1023396
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1036287
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1034917
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1040390
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1042721
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1037523
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1051559
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1048357
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1054889
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1045359
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1061739
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1063782
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1064355
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1064125
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1048392
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1055571
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1070488
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1065772
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1070007
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1067595
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1081103
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1044328
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1044328
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1044328
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1044328
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1044328
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1041637
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1038460
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1029198
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1029155
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1030228
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1033570
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1033739
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1040645
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1041863
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1046194
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1035001
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1020519
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 961100
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 973153
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 974307
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 975399
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 969989
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 965082
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 965082
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 961228
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 961998
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 955076
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 951912
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 957739
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 956331
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 958388
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 957053
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 954981
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 958399
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 956185
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 930311
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 913275
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 916465
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 916051
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 911463
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 905345
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 914539
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 907772
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 903401
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 906990
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 905448
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 911008
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 914399
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 922041
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 911252
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 911344
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 905802
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 899810
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 913408
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 918919
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 901382
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 901382
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 901382
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 901382
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 901382
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 875623
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 880417
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 878430
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 877866
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 872559
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 872201
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 866551
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 868121
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 865825
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 858448
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 861063
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 867812
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 866462
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 881982
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 893740
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 892616
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 894902
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 897003
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 899658
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 895714
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 883077
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 883237
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 874413
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 893581
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 886931
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 890228
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 885799
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 877073
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 902126
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 906164
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 899088
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 900450
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 905772
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 918339
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 917390
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 916052
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 899060
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 897150
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 910478
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 919996
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 912269
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 919765
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 944128
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 934361
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 943705
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 940601
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 932939
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 941280
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 945790
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 950991
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 946237
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 960628
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 968635
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 976976
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 974989
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 963346
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 994589
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 994775
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1001784
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 998164
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 999993
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 985509
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 986326
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 984635
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 989130
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 979805
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1001018
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1004006
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1016453
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 989999
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 984904
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 992080
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 996248
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1001780
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1003742
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1001424
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1008877
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 999410
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 995471
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1005064
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1002981
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 995398
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 991248
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 989860
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1010550
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 995212
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1002330
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1008535
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1014964
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1006176
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 997492
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1009301
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1012509
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1015233
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1013215
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1019091
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1018703
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1020959
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1012116
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1004932
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1016046
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1010614
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1022552
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1031077
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1036638
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1031888
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1020339
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1019973
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1032946
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1036517
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1046329
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1047080
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1048106
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1048908
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1039547
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1049646
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1056199
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1043919
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1011895
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1021050
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1023458
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1030362
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1027037
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1027444
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1037187
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1027816
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1018342
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1026857
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1033345
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1033232
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1046676
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1054864
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1039855
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1045404
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1034368
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1023640
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1043573
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1023318
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1015582
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1019021
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1022016
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1021844
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1007372
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1007239
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 995694
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 992569
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1000518
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 988917
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 992539
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1008760
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1013908
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1015942
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1015514
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1014015
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1018386
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1017706
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1011729
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1014379
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1019174
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1019979
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1029392
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1027412
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1002230
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 996906
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 997868
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 992731
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1003174
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1006419
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1009981
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1012315
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1013442
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1009462
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1007258
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1015507
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 991647
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 994286
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1008894
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1014569
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1000849
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 999564
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1010438
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1009896
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 996376
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 991842
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 990920
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 992455
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 977596
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 984748
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 979046
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 974154
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 974377
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 979060
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 982136
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 982452
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 961318
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 978113
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 962335
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 940224
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 931764
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 951401
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 951533
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 943579
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 946154
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 940361
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 942006
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 944363
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 947551
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 945009
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 948713
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 946180
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 948950
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 950044
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 938953
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 939620
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 940077
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 937517
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 940069
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 938935
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 936980
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 939862
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 940626
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 939349
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 937661
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 939216
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 940571
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 940556
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 939989
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 940964
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 943746
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 936438
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 943218
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 941417
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 965279
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 957288
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 954359
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 968019
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 982986
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 981698
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 984473
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 995820
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 998455
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 989681
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1018174
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1014922
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1041319
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1041625
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1024992
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1029998
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1058200
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1061602
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1056553
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1089440
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1107164
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1089261
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1109646
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1119046
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1113138
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1145834
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1120143
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1108485
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1104954
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1102915
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1130954
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1125318
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1134810
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1158542
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1151684
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1161060
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1160029
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1163987
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1183200
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1180657
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1180503
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1118243
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1154125
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1153789
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1127916
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1161040
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1159522
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1181416
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1149549
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1141089
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1168857
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1187970
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1156543
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1161465
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1178672
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1159246
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1184515
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1203175
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1180756
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1164287
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1168918
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1165757
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1164996
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1179226
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1176140
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1166984
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1174546
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1170946
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1163127
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1154657
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1157449
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1159986
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1159751
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1156457
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1164641
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1159190
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1158104
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1161473
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1160040
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1159843
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1160214
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1163368
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1162092
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1158983
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1152756
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1159188
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1152383
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1153674
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1150394
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1150394
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1150394
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1157392
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1156446
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1159878
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1156409
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1157772
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1162574
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1161357
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1161532
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1157040
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1154045
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1162227
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1157812
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1162529
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
    "riesgo_clp": 9944,
    "invertido_clp": 163205,
    "resultado_clp": -1541,
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
    "riesgo_clp": 9944,
    "invertido_clp": 310378,
    "resultado_clp": 13259,
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
    "riesgo_clp": 9805,
    "invertido_clp": 153723,
    "resultado_clp": 744,
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
    "invertido_clp": 210428,
    "resultado_clp": -6254,
    "resultado_pct": -0.0297
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
    "razon_salida": "Stop loss (gap de apertura bajo 510.29 USD)",
    "precio_entrada_usd": 527.58,
    "precio_salida_usd": 507.22,
    "riesgo_clp": 10000,
    "invertido_clp": 205406,
    "resultado_clp": -15171,
    "resultado_pct": -0.0739
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
    "razon_salida": "Stop loss tocado en 515.90 USD",
    "precio_entrada_usd": 531.94,
    "precio_salida_usd": 515.9,
    "riesgo_clp": 9584,
    "invertido_clp": 317924,
    "resultado_clp": -17742,
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
    "riesgo_clp": 9550,
    "invertido_clp": 247995,
    "resultado_clp": -9141,
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
    "riesgo_clp": 9651,
    "invertido_clp": 399162,
    "resultado_clp": -26735,
    "resultado_pct": -0.067
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
    "riesgo_clp": 9115,
    "invertido_clp": 252558,
    "resultado_clp": -4413,
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
    "riesgo_clp": 9115,
    "invertido_clp": 187625,
    "resultado_clp": -5667,
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
    "riesgo_clp": 9014,
    "invertido_clp": 131114,
    "resultado_clp": -11429,
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
    "riesgo_clp": 9014,
    "invertido_clp": 111881,
    "resultado_clp": -12296,
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
    "riesgo_clp": 9014,
    "invertido_clp": 74590,
    "resultado_clp": -11106,
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
    "riesgo_clp": 8666,
    "invertido_clp": 140895,
    "resultado_clp": 24964,
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
    "riesgo_clp": 8681,
    "invertido_clp": 170373,
    "resultado_clp": 22009,
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
    "riesgo_clp": 8681,
    "invertido_clp": 99446,
    "resultado_clp": 28254,
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
    "invertido_clp": 485940,
    "resultado_clp": -138,
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
    "invertido_clp": 287873,
    "resultado_clp": -7507,
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
    "precio_entrada_usd": 512.54,
    "precio_salida_usd": 622.78,
    "riesgo_clp": 8937,
    "invertido_clp": 183800,
    "resultado_clp": 34052,
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
    "precio_entrada_usd": 680.06,
    "precio_salida_usd": 673.29,
    "riesgo_clp": 10000,
    "invertido_clp": 317663,
    "resultado_clp": -4325,
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
    "invertido_clp": 374188,
    "resultado_clp": -14586,
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
    "riesgo_clp": 9791,
    "invertido_clp": 156137,
    "resultado_clp": -3864,
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
    "riesgo_clp": 9847,
    "invertido_clp": 203465,
    "resultado_clp": -15225,
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
    "riesgo_clp": 9927,
    "invertido_clp": 306660,
    "resultado_clp": -14856,
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
    "riesgo_clp": 9500,
    "invertido_clp": 174519,
    "resultado_clp": -9113,
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
    "riesgo_clp": 8926,
    "invertido_clp": 229109,
    "resultado_clp": 21654,
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
    "riesgo_clp": 8949,
    "invertido_clp": 42929,
    "resultado_clp": 24068,
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
    "riesgo_clp": 9410,
    "invertido_clp": 239868,
    "resultado_clp": 12500,
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
    "riesgo_clp": 9410,
    "invertido_clp": 289144,
    "resultado_clp": 7635,
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
    "riesgo_clp": 9817,
    "invertido_clp": 252367,
    "resultado_clp": 29750,
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
    "riesgo_clp": 9414,
    "invertido_clp": 137950,
    "resultado_clp": 89036,
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
    "riesgo_clp": 9897,
    "invertido_clp": 296779,
    "resultado_clp": 39455,
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
    "riesgo_clp": 9573,
    "invertido_clp": 274002,
    "resultado_clp": 37117,
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
   "n_trades": 44,
   "sharpe": 0.27,
   "max_drawdown": -0.206,
   "win_rate": 0.4091,
   "retorno_total": 0.1625,
   "resultado_clp": 162529
  },
  "buy_hold": [
   {
    "fecha": "2024-09-17",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 1004666
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1022733
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1021086
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1020931
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1017684
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 1005443
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1007373
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 999323
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 997066
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 985564
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 992924
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 999268
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1018552
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1013138
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1024956
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1040215
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1037961
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1040583
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1049285
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1037269
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1056600
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1054037
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1068004
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1049172
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1072264
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1058894
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1057022
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1058480
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1049702
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1063448
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1070660
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1055811
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1059826
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1042659
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1062445
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1091398
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1107728
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1105871
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1093734
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1116721
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1136584
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1122399
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1103124
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1092778
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1108580
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1107177
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1115368
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1119216
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1113086
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1131904
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1129943
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1137510
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1120329
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1141034
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1140772
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1142093
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1138330
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1118636
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1128365
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1143294
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1137672
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1139418
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1131243
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1147949
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1112083
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1125110
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1135451
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1123046
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1153583
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1152273
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1139970
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1116034
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1128211
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1125439
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1151877
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1165723
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1152774
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1147330
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1131759
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1136748
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1137262
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1155755
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1152833
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1173174
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1177181
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1179250
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1170775
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1162927
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1122744
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1156093
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1159285
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1162306
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1147338
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1144401
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1148871
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1137780
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1139996
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1120072
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1110965
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1127739
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1123685
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1129605
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1125343
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1122390
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1127183
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1124611
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1095528
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1077136
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1086317
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1085126
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1067941
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1096467
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1064104
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1062113
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1070060
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1042231
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1036287
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 993758
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1014962
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1015062
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 1002974
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1022720
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1007631
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 1000224
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1007480
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 1004128
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1015706
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1021817
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1037981
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1015974
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1017509
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1007397
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 996333
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1025692
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1038054
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 996610
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 932098
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 936300
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 955864
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1067254
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 1000298
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1026304
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1017786
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1009366
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 990015
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 991377
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 967779
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 985016
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 990778
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 1000592
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 1002588
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 1001375
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1016561
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1018797
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1032031
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1043528
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1038278
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1020226
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1023687
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1039047
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1032216
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1058759
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1078937
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1073588
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1079670
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1084418
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1089004
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1083867
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1067643
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1068993
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1060852
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1080817
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1072085
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1076845
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1075079
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1061929
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1087566
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1088375
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1080856
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1083349
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1085293
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1096873
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1096048
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1095616
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1078725
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1070598
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1086872
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1097415
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1089694
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1099194
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1121261
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1107154
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1117594
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1115738
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1107046
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1121179
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1122621
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1128580
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1125300
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1137914
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1147523
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1157726
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1154410
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1142295
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1174011
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1176549
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1184471
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1179958
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1180896
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1169087
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1174842
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1172547
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1179599
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1163351
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1187103
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1187686
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1209342
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1178333
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1165129
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1182931
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1192078
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1200940
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1204690
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1199767
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1213679
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1202320
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1197742
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1211107
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1208448
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1202004
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1198002
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1196578
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1220816
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1201779
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1210093
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1217792
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1224786
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1217042
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1206950
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1221247
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1224835
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1226120
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1222770
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1229819
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1229089
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1232534
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1220523
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1210855
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1223697
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1217281
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1228624
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1239146
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1244852
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1239178
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1225284
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1224674
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1240902
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1244882
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1256643
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1256116
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1255326
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1257819
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1243773
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1257597
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1262044
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1247052
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1213334
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1227506
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1238330
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1249419
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1238676
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1240317
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1260671
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1247398
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1241435
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1247221
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1253694
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1247070
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1262398
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1265961
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1249925
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1256038
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1240722
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1238872
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1253576
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1236234
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1235589
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1238878
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1251654
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1249932
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1221164
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1220780
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1194932
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1191495
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1207148
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1188812
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1198335
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1226980
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1241252
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1242274
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1238261
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1233525
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1238115
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1234595
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1228794
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1229493
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1231345
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1232032
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1244222
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1243951
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1217808
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1210645
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1212752
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1198896
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1213212
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1215161
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1222060
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1226579
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1228146
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1223325
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1221056
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1231486
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1203229
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1205033
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1221715
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1225536
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1207943
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1209727
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1219973
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1219353
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1202007
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1198644
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1196194
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1196778
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1178766
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1188769
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1181118
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1177357
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1181693
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1178969
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1172251
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1173586
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1165635
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1180661
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1169569
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1157083
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1140200
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1172907
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1170644
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1156674
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1160192
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1140906
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1145011
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1154503
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1164894
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1156279
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1169278
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1159184
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1167610
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1169662
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1157583
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1163645
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1175060
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1177361
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1208866
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1194726
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1193950
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1211351
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1214622
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1178448
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1171327
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1189057
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1202483
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1196059
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1176114
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1183850
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1163512
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1195133
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1169458
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1184601
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1162596
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1156920
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1146442
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1189356
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1193023
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1176497
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1191010
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1187128
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1218015
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1199336
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1191049
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1206492
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1221807
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1219532
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1220763
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1237150
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1240528
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1219810
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1247152
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1239234
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1255490
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1259959
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1250232
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1246654
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1277919
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1275791
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1269395
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1297322
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1305400
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1288884
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1291332
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1296758
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1302108
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1332364
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1304138
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1299611
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1303678
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1298990
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1318905
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1310861
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1316909
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1323246
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1318768
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1326340
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1325093
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1326658
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1331954
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1319434
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1332101
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1298691
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1328707
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1337355
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1307015
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1327417
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1321238
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1334283
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1312845
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1289589
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1304602
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1322299
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1309951
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1320212
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1328996
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1321699
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1346628
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1356776
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1354661
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1358004
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1363607
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1367061
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1361236
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1384864
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1379375
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1368682
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1378921
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1376278
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1367977
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1353925
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1366147
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1377247
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1376221
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1361801
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1371850
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1378120
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1372732
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1343471
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1366770
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1362092
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1378356
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1405807
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1387523
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1383882
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1395180
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1390377
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1389716
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1390959
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1401538
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1398625
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1390643
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1383805
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1399062
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1384634
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1391975
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1386169
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1377103
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1378284
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1397119
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1399180
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1408362
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1402470
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1411121
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1428880
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1415843
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1409954
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1389185
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1383487
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1416567
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1403513
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1425619
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.4,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -0.95,
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
