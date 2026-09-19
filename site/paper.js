window.PAPER = {
 "generado": "2026-09-19 00:28 UTC",
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
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 997640
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1003750
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
   "sesiones": 32,
   "n_trades": 2,
   "sharpe": -0.19,
   "max_drawdown": -0.0139,
   "win_rate": 0.0,
   "retorno_total": 0.0037,
   "resultado_clp": 3750
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
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1008173
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1020139
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-19",
  "hasta": "2026-09-19",
  "equity": [
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
    "equity_clp": 965721
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 974087
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
    "equity_clp": 1030440
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
    "equity_clp": 1045238
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
    "equity_clp": 1067596
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
    "equity_clp": 973154
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
    "equity_clp": 957740
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
    "equity_clp": 956186
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 930312
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
    "equity_clp": 907773
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
    "equity_clp": 913409
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 918919
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 901383
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 901383
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 901383
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 901383
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 901383
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
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 866552
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 866552
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
    "equity_clp": 940600
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 932939
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 941279
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
    "equity_clp": 974990
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
    "equity_clp": 1015234
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
    "equity_clp": 1018385
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
    "equity_clp": 1003173
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
    "equity_clp": 979059
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
    "equity_clp": 939619
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
    "equity_clp": 939215
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
    "equity_clp": 943745
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
    "equity_clp": 954358
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
    "equity_clp": 1061601
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
    "equity_clp": 1089260
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
    "equity_clp": 1118242
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
    "equity_clp": 1141088
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
    "equity_clp": 1159985
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1159751
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1156456
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1156456
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
    "equity_clp": 1161472
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
    "equity_clp": 1159187
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
    "equity_clp": 1157771
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
    "equity_clp": 1161531
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
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1162119
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1168316
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
    "riesgo_clp": 9944,
    "invertido_clp": 310377,
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
    "invertido_clp": 210429,
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
    "invertido_clp": 205407,
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
    "invertido_clp": 247997,
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
    "invertido_clp": 399161,
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
    "invertido_clp": 137951,
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
   "sharpe": 0.29,
   "max_drawdown": -0.206,
   "win_rate": 0.4091,
   "retorno_total": 0.1683,
   "resultado_clp": 168316
  },
  "buy_hold": [
   {
    "fecha": "2024-09-19",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 998390
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 998238
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 995063
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 983094
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 984981
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 977110
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 974904
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 963657
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 970853
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 977056
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 995912
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 990618
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1002174
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1017093
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1014889
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1017453
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1025962
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1014213
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1033115
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1030608
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1044265
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1025851
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1048430
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1035357
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1033527
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1034952
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1026370
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1039810
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1046862
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1032343
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1036269
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1019483
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1038829
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1067138
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1083105
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1081290
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1069423
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1091899
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1111320
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1097451
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1078604
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1068488
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1083939
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1082567
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1090576
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1094338
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1088345
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1106745
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1104827
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1112225
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1095426
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1115671
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1115415
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1116707
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1113027
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1093771
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1103284
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1117882
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1112384
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1114091
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1106098
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1122433
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1087364
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1100101
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1110212
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1098083
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1127941
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1126660
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1114631
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1091227
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1103133
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1100423
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1126274
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1139812
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1127151
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1121827
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1106603
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1111480
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1111984
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1130065
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1127208
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1147097
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1151015
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1153038
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1144751
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1137078
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1097788
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1130396
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1133516
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1136470
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1121835
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1118964
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1123334
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1112490
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1114656
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1095176
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1086271
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1102672
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1098708
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1104496
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1100329
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1097442
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1102128
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1099613
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1071177
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1053194
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1062171
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1061006
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1044203
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1072095
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1040452
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1038505
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1046275
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1019064
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1013252
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 971668
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 992401
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 992500
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 980680
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 999988
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 985234
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 977991
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 985086
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 981808
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 993130
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 999104
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1014909
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 993391
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 994892
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 985005
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 974187
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1002894
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1014980
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 974458
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 911379
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 915488
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 934618
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1043531
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 978064
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1003492
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 995163
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 986930
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 968009
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 969341
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 946268
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 963122
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 968755
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 978351
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 980303
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 979116
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 993965
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 996151
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1009091
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1020332
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1015199
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 997549
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1000933
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1015951
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1009272
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1035225
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1054955
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1049725
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1055671
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1060314
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1064798
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1059776
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1043911
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1045232
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1037272
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1056793
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1048255
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1052909
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1051182
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1038325
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1063392
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1064183
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1056831
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1059268
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1061169
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1072492
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1071685
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1071263
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1054747
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1046801
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1062713
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1073022
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1065472
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1074761
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1096338
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1082545
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1092752
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1090937
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1082438
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1096258
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1097668
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1103494
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1100287
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1112621
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1122017
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1131993
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1128750
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1116904
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1147915
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1150397
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1158143
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1153730
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1154647
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1143101
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1148728
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1146484
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1153380
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1137492
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1160716
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1161287
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1182461
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1152141
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1139231
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1156637
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1165581
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1174246
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1177913
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1173098
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1186702
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1175595
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1171119
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1184187
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1181587
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1175286
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1171373
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1169981
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1193680
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1175066
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1183196
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1190723
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1197562
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1189990
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1180122
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1194101
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1197610
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1198866
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1195591
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1202483
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1201769
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1205137
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1193394
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1183940
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1196497
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1190224
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1201314
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1211603
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1217182
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1211634
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1198048
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1197452
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1213319
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1217211
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1228711
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1228196
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1227423
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1229861
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1216127
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1229644
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1233991
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1219333
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1186364
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1200221
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1210805
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1221648
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1211143
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1212748
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1232649
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1219671
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1213841
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1219498
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1225827
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1219351
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1234338
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1237821
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1222142
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1228119
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1213143
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1211334
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1225712
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1208756
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1208125
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1211341
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1223832
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1222149
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1194020
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1193645
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1168372
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1165011
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1180316
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1162387
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1171699
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1199707
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1213662
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1214661
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1210737
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1206107
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1210594
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1207152
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1201481
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1202164
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1203975
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1204647
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1216566
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1216301
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1190739
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1183735
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1185795
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1172247
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1186245
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1188150
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1194896
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1199315
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1200847
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1196133
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1193915
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1204113
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1176484
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1178248
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1194559
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1198295
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1181094
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1182838
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1192855
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1192250
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1175289
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1172000
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1169605
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1170177
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1152565
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1162345
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1154865
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1151187
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1155427
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1152763
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1146195
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1147499
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1139726
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1154417
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1143572
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1131363
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1114856
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1146836
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1144623
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1130964
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1134403
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1115546
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1119560
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1128841
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1139001
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1130578
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1143288
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1133418
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1141657
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1143663
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1131853
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1137780
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1148941
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1151191
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1181996
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1168170
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1167411
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1184425
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1187624
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1152254
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1145291
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1162627
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1175755
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1169473
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1149972
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1157535
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1137650
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1168568
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1143463
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1158270
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1136754
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1131205
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1120960
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1162920
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1166505
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1150347
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1164537
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1160741
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1190941
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1172678
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1164574
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1179675
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1194649
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1192424
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1193628
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1209651
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1212954
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1192696
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1219431
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1211689
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1227584
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1231953
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1222442
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1218943
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1249514
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1247433
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1241179
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1268486
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1276384
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1260235
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1262628
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1267934
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1273165
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1302749
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1275150
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1270724
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1274700
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1270117
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1289589
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1281724
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1287637
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1293833
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1289455
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1296858
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1295639
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1297170
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1302348
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1290106
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1302491
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1269824
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1299173
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1307629
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1277963
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1297912
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1291870
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1304625
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1283664
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1260925
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1275603
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1292908
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1280834
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1290867
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1299455
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1292320
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1316696
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1326617
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1324550
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1327819
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1333297
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1336674
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1330979
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1354082
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1348715
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1338259
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1348270
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1345686
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1337570
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1323830
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1335781
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1346634
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1345630
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1331531
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1341357
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1347488
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1342219
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1313609
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1336390
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1331816
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1347719
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1374559
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1356682
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1353122
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1364168
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1359472
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1358826
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1360041
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1370385
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1367537
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1359732
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1353046
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1367964
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1353857
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1361034
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1355357
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1346493
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1347648
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1366064
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1368079
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1377058
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1371297
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1379755
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1397119
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1384372
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1378614
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1358307
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1352735
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1385080
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1372316
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1393931
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1385793
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1402241
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 1.5,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": -0.19,
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
