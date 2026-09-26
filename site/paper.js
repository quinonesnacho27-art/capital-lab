window.PAPER = {
 "generado": "2026-09-26 00:44 UTC",
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
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1000142
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1016609
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
   "sesiones": 37,
   "n_trades": 2,
   "sharpe": 0.88,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0166,
   "resultado_clp": 16609
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
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1021748
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1038249
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-26",
  "hasta": "2026-09-26",
  "equity": [
   {
    "fecha": "2024-09-26",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 988994
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 984464
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 969457
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 978444
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 985392
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1006368
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1002013
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1015507
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1031787
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1028445
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1030215
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1041431
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1016648
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1033185
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1032745
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1046594
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1029231
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1051637
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1036535
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1037444
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1043492
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1033288
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1055075
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1052533
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1034082
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1034867
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1033333
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1034746
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1037193
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1054451
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1050833
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1038247
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1056903
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1070757
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1059449
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1039259
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1032557
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1045447
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1044078
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1049550
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1051882
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1046684
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1060720
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1057518
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1064050
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1054520
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1070900
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1072943
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1073516
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1073286
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1057553
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1064732
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1079649
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1074933
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1079168
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1076756
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1090288
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1053333
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1053333
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1053333
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1053333
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1053333
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1050642
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1047465
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1038203
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1038160
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1039233
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1042575
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1042744
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1049650
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1050868
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1055199
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1043911
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1029345
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 969439
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 981493
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 982647
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 983739
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 978329
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 973421
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 973421
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 969535
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 970311
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 963329
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 960138
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 966016
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 964595
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 966670
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 965324
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 963233
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 966681
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 964448
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 938351
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 921167
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 924384
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 923967
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 919339
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 913169
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 922442
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 915617
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 911207
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 914828
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 913273
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 918880
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 922301
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 930009
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 919126
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 919220
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 913630
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 907586
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 921302
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 926860
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 909172
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 909172
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 909172
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 909172
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 909172
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 883190
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 888025
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 886021
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 885452
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 880099
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 879738
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 874040
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 875623
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 873307
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 865866
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 868504
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 875311
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 873949
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 889603
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 901464
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 900329
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 902636
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 904754
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 907433
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 903455
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 890708
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 890869
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 881970
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 901303
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 894595
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 897920
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 893453
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 884653
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 909922
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 913995
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 906858
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 908232
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 913599
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 926274
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 925317
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 923968
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 906829
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 904903
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 918346
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 927946
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 920152
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 927713
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 952287
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 942436
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 951860
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 948729
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 941001
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 949414
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 953963
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 959209
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 954414
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 968929
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 977005
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 985418
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 983415
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 971671
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1003184
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1003371
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1010441
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1006790
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1008634
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 994025
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 994849
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 993144
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 997677
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 988272
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1009668
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1012682
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1025237
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 998554
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 993415
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1000653
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1004858
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1010437
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1012415
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1010077
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1017595
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1008046
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1004074
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1013749
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1011648
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1004000
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 999814
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 998414
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1019283
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1003812
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1010991
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1017250
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1023734
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1014871
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1006111
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1018023
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1021259
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1024007
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1021971
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1027897
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1027506
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1029781
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1020862
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1013616
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1024826
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1019348
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1031388
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1039987
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1045596
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1040805
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1029156
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1028787
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1041872
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1045474
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1055371
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1056129
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1057163
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1057972
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1048530
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1058717
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1065326
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1052940
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1020639
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1029873
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1032302
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1039266
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1035912
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1036323
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1046150
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1036726
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1027210
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1035761
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1042282
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1042141
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1055704
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1063934
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1048800
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1054396
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1043258
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1032486
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1052545
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1032142
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1024339
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1027808
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1030828
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1030655
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1016058
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1015924
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1004279
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1001127
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1009145
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 997443
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1001096
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1017458
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1022650
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1024702
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1024270
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1022759
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1027166
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1026480
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1020473
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1023134
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1027952
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1028765
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1038250
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1036264
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1010916
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1005550
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1006523
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1001342
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1011867
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1015138
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1018728
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1021082
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1022219
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1018204
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1015982
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1024303
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1000236
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1002900
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1017634
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1023356
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1009515
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1008222
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1019189
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1018642
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1005005
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1000434
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 999504
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1001052
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 986065
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 993274
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 987525
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 982591
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 982815
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 987536
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 990639
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 990958
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 969641
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 986582
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 970666
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 948373
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 939846
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 959641
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 959774
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 951757
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 954354
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 948511
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 950170
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 952548
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 955763
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 953199
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 956935
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 954380
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 957174
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 958278
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 947091
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 947763
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 948224
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 945642
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 948216
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 947072
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 945100
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 948007
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 948778
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 947490
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 945787
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 947355
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 948722
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 948707
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 948136
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 949119
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 951925
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 944553
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 951392
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 949576
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 973645
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 965584
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 962630
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 976409
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 991505
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 990206
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 993005
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1004450
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1007109
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 998258
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1026998
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1023718
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1050344
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1050652
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1033875
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1038925
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1067371
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1070802
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1065709
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1098882
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1116759
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1098701
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1119263
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1128744
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1122785
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1155764
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1129851
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1118092
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1114530
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1112474
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1140755
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1135071
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1144645
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1168582
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1161665
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1171123
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1170082
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1174074
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1193454
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1190889
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1190734
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1127934
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1164128
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1163789
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1137691
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1171103
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1169571
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1191655
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1159512
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1150978
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1178987
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1198266
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1166566
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1171531
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1188887
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1169293
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1194781
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1213603
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1190989
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1174377
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1179048
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1175860
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1175093
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1189446
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1186333
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1177098
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1184725
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1181094
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1173208
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1164664
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1167481
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1170039
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1169802
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1166479
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1174663
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1169212
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1168127
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1171495
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1170063
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1169866
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1170236
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1173391
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1172115
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1169006
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1162778
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1169210
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1162406
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1163697
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1160417
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1160417
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1160417
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1167414
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1166469
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1169900
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1166432
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1167794
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1172597
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1171379
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1171554
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1167063
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1164067
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1172250
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1167835
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1172552
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1172142
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1178339
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1182806
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1193064
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1182627
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1172477
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1191845
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
    "riesgo_clp": 10000,
    "invertido_clp": 164123,
    "resultado_clp": -1549,
    "resultado_pct": -0.0094
   },
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-09-26",
    "fecha_salida": "2024-10-31",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 559.39,
    "precio_salida_usd": 555.81,
    "riesgo_clp": 10000,
    "invertido_clp": 447649,
    "resultado_clp": 21525,
    "resultado_pct": 0.0481
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
    "riesgo_clp": 10000,
    "invertido_clp": 312125,
    "resultado_clp": 13333,
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
    "riesgo_clp": 9854,
    "invertido_clp": 76103,
    "resultado_clp": 368,
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
    "invertido_clp": 215680,
    "resultado_clp": -6410,
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
    "invertido_clp": 214412,
    "resultado_clp": -15836,
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
    "riesgo_clp": 9667,
    "invertido_clp": 320671,
    "resultado_clp": -17895,
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
    "riesgo_clp": 9632,
    "invertido_clp": 250139,
    "resultado_clp": -9220,
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
    "riesgo_clp": 9734,
    "invertido_clp": 402611,
    "resultado_clp": -26966,
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
    "riesgo_clp": 9193,
    "invertido_clp": 254741,
    "resultado_clp": -4451,
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
    "riesgo_clp": 9193,
    "invertido_clp": 189246,
    "resultado_clp": -5716,
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
    "riesgo_clp": 9092,
    "invertido_clp": 132247,
    "resultado_clp": -11528,
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
    "riesgo_clp": 9092,
    "invertido_clp": 112847,
    "resultado_clp": -12402,
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
    "riesgo_clp": 9092,
    "invertido_clp": 75234,
    "resultado_clp": -11202,
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
    "riesgo_clp": 8740,
    "invertido_clp": 142113,
    "resultado_clp": 25180,
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
    "riesgo_clp": 8756,
    "invertido_clp": 171845,
    "resultado_clp": 22199,
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
    "riesgo_clp": 8756,
    "invertido_clp": 100305,
    "resultado_clp": 28498,
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
    "invertido_clp": 490139,
    "resultado_clp": -140,
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
    "invertido_clp": 292071,
    "resultado_clp": -7616,
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
    "riesgo_clp": 9015,
    "invertido_clp": 185388,
    "resultado_clp": 34346,
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
    "invertido_clp": 321752,
    "resultado_clp": -4381,
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
    "invertido_clp": 377858,
    "resultado_clp": -14729,
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
    "riesgo_clp": 9875,
    "invertido_clp": 157902,
    "resultado_clp": -3908,
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
    "riesgo_clp": 9933,
    "invertido_clp": 205227,
    "resultado_clp": -15357,
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
    "riesgo_clp": 10000,
    "invertido_clp": 308906,
    "resultado_clp": -14964,
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
    "riesgo_clp": 9583,
    "invertido_clp": 176032,
    "resultado_clp": -9192,
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
    "riesgo_clp": 9003,
    "invertido_clp": 231089,
    "resultado_clp": 21842,
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
    "riesgo_clp": 9026,
    "invertido_clp": 43299,
    "resultado_clp": 24276,
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
    "riesgo_clp": 9491,
    "invertido_clp": 241946,
    "resultado_clp": 12608,
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
    "riesgo_clp": 9491,
    "invertido_clp": 291650,
    "resultado_clp": 7701,
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
    "riesgo_clp": 9902,
    "invertido_clp": 254555,
    "resultado_clp": 30008,
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
    "riesgo_clp": 9496,
    "invertido_clp": 139146,
    "resultado_clp": 89808,
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
    "riesgo_clp": 9983,
    "invertido_clp": 299351,
    "resultado_clp": 39797,
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
    "riesgo_clp": 9656,
    "invertido_clp": 276376,
    "resultado_clp": 37438,
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
    "invertido_clp": 274096
   }
  ],
  "metricas": {
   "sesiones": 500,
   "n_trades": 44,
   "sharpe": 0.35,
   "max_drawdown": -0.2058,
   "win_rate": 0.4091,
   "retorno_total": 0.1918,
   "resultado_clp": 191845
  },
  "buy_hold": [
   {
    "fecha": "2024-09-26",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 992009
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 989768
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 978351
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 985657
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 991954
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1011097
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1005723
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1017455
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1032602
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1030364
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1032967
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1041605
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1029677
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1048867
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1046322
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1060188
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1041493
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1064416
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1051144
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1049286
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1050733
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1042020
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1055665
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1062824
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1048084
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1052069
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1035028
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1054669
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1083410
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1099620
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1097777
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1085729
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1108548
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1128265
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1114184
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1095051
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1084780
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1100467
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1099074
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1107205
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1111025
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1104940
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1123620
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1121673
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1129184
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1112129
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1132682
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1132422
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1133734
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1129998
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1110449
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1120106
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1134927
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1129345
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1131079
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1122963
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1139547
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1103943
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1116875
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1127140
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1114826
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1145140
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1143839
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1131627
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1107865
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1119954
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1117202
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1143446
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1157191
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1144337
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1138933
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1123476
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1128428
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1128939
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1147296
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1144395
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1164587
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1168565
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1170620
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1162206
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1154415
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1114527
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1147632
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1150800
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1153799
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1138940
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1136025
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1140462
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1129453
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1131652
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1111874
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1102834
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1119485
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1115461
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1121337
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1117107
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1114175
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1118933
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1116380
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1087510
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1069252
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1078366
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1077184
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1060125
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1088442
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1056316
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1054340
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1062228
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1034603
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1028702
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 986484
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1007533
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1007633
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 995633
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1015235
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1000256
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 992903
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1000106
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 996779
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1008272
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1014338
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1030384
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1008538
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1010061
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1000024
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 989041
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1018185
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1030456
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 989316
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 925275
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 929447
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 948868
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1059442
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 992977
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1018793
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1010337
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1001978
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 982769
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 984121
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 960696
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 977807
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 983526
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 993269
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 995250
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 994046
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1009121
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1011340
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1024477
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1035890
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1030678
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1012759
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1016195
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1031442
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1024661
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1051010
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1071040
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1065731
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1071768
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1076481
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1081033
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1075934
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1059829
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1061169
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1053088
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1072906
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1064238
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1068963
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1067210
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1054157
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1079606
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1080409
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1072945
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1075420
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1077349
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1088845
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1088026
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1087597
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1070830
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1062762
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1078917
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1089383
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1081718
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1091149
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1113055
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1099051
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1109414
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1107572
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1098943
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1112973
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1114405
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1120320
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1117064
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1129585
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1139125
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1149253
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1145961
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1133934
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1165418
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1167937
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1175802
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1171322
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1172253
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1160531
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1166243
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1163965
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1170966
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1154836
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1178415
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1178993
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1200491
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1169709
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1156602
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1174273
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1183353
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1192151
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1195873
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1190985
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1204796
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1193520
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1188976
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1202243
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1199603
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1193207
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1189234
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1187820
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1211881
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1192983
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1201236
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1208879
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1215822
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1208134
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1198116
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1212308
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1215870
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1217146
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1213820
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1220817
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1220093
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1223513
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1211590
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1201992
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1214741
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1208372
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1219631
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1230077
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1235741
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1230108
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1216316
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1215710
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1231820
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1235771
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1247445
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1246923
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1246138
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1248613
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1234670
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1248393
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1252807
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1237925
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1204453
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1218521
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1229267
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1240275
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1229610
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1231239
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1251444
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1238268
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1232349
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1238093
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1244518
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1237943
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1253159
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1256695
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1240776
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1246845
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1231641
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1229804
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1244401
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1227186
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1226545
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1229811
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1242493
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1240784
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1212226
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1211845
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1186187
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1182775
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1198313
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1180111
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1189564
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1218000
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1232168
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1233182
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1229198
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1224497
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1229053
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1225559
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1219801
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1220494
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1222333
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1223014
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1235115
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1234846
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1208895
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1201785
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1203876
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1190121
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1204332
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1206267
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1213115
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1217602
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1219157
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1214372
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1212119
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1222472
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1194423
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1196213
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1212774
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1216566
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1199102
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1200873
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1211044
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1210429
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1193210
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1189871
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1187439
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1188019
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1170138
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1180068
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1172473
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1168740
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1173044
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1170340
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1163672
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1164996
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1157104
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1172019
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1161009
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1148614
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1131855
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1164323
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1162076
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1148208
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1151700
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1132555
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1136631
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1146053
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1156368
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1147817
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1160720
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1150700
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1159064
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1161101
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1149111
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1155128
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1166459
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1168744
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1200019
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1185982
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1185211
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1202485
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1205732
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1169823
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1162754
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1180355
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1193682
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1187305
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1167506
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1175185
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1154996
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1186386
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1160898
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1175931
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1154086
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1148453
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1138051
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1180651
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1184291
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1167887
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1182293
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1178439
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1209100
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1190558
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1182331
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1197662
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1212865
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1210606
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1211828
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1228095
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1231449
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1210882
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1238024
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1230164
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1246301
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1250737
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1241082
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1237529
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1268566
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1266453
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1260104
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1287827
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1295845
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1279451
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1281880
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1287267
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1292578
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1322612
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1294593
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1290099
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1294136
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1289483
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1309252
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1301267
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1307271
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1313561
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1309116
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1316632
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1315395
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1316948
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1322206
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1309777
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1322351
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1289186
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1318982
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1327567
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1297449
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1317702
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1311568
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1324517
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1303236
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1280151
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1295053
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1312621
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1300363
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1310549
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1319268
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1312025
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1336772
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1346845
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1344746
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1348065
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1353627
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1357055
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1351273
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1374729
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1369280
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1358664
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1368828
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1366205
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1357965
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1344015
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1356148
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1367167
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1366148
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1351834
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1361810
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1368034
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1362685
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1333638
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1356767
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1352123
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1368268
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1395517
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1377368
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1373753
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1384969
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1380200
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1379545
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1380778
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1391280
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1388389
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1380465
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1373676
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1388822
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1374500
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1381787
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1376023
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1367023
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1368196
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1386893
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1388939
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1398055
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1392206
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1400793
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1418422
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1405481
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1399635
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1379018
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1373361
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1406199
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1393240
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1415185
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1406923
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1423621
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1434403
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1456416
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1437303
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1425867
   },
   {
    "fecha": "2026-09-24",
    "equity_clp": 1448895
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
    "valor": 0.88,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0178,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
