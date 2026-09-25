window.PAPER = {
 "generado": "2026-09-25 00:39 UTC",
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
   "sesiones": 36,
   "n_trades": 2,
   "sharpe": -0.54,
   "max_drawdown": -0.0178,
   "win_rate": 0.0,
   "retorno_total": 0.0001,
   "resultado_clp": 142
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
   }
  ]
 },
 "backtest": {
  "desde": "2024-09-25",
  "hasta": "2026-09-25",
  "equity": [
   {
    "fecha": "2024-09-25",
    "equity_clp": 1000000
   },
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
    "equity_clp": 1033287
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
    "equity_clp": 1039258
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1032556
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
    "equity_clp": 1064049
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
    "equity_clp": 1073285
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1057553
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1064731
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
    "equity_clp": 1042574
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
    "equity_clp": 982646
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 983738
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 978328
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
    "equity_clp": 969534
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
    "equity_clp": 960137
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 966015
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 964595
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 966669
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 965323
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
    "equity_clp": 923966
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
    "equity_clp": 913168
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
    "equity_clp": 914827
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 913272
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
    "equity_clp": 930008
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
    "equity_clp": 907585
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 921301
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
    "equity_clp": 883189
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 888025
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 886020
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
    "equity_clp": 873306
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
    "equity_clp": 901463
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 900329
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 902635
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 904754
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 907432
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 903454
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
    "equity_clp": 881969
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
    "equity_clp": 884652
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 909921
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 913994
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 906857
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 908231
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
    "equity_clp": 952286
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 942435
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 951859
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 948728
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 941001
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 949413
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
    "equity_clp": 971670
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
    "equity_clp": 1006789
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
    "equity_clp": 993143
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
    "equity_clp": 1025236
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
    "equity_clp": 1004857
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
    "equity_clp": 1004073
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
    "equity_clp": 1003999
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 999814
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 998413
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
    "equity_clp": 1021258
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1024006
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
    "equity_clp": 1019347
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
    "equity_clp": 1040804
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
    "equity_clp": 1057162
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
    "equity_clp": 1058716
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
    "equity_clp": 1046149
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1036725
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
    "equity_clp": 1052544
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
    "equity_clp": 1027807
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
    "equity_clp": 1016057
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1015923
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
    "equity_clp": 1009144
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
    "equity_clp": 1024269
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1022758
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
    "equity_clp": 1038249
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1036264
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1010915
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
    "equity_clp": 1011866
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
    "equity_clp": 1021081
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1022218
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1018204
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1015981
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1024303
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1000235
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1002899
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1017633
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
    "equity_clp": 1005004
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
    "equity_clp": 1001051
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
    "equity_clp": 987524
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 982590
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 982814
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
    "equity_clp": 954353
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 948510
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 950170
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 952547
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
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 949118
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 951924
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
    "equity_clp": 949575
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
    "equity_clp": 962629
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
    "equity_clp": 993004
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1004450
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1007108
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
    "equity_clp": 1023717
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1050343
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
    "equity_clp": 1038924
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
    "equity_clp": 1098700
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1119262
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1128744
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1122784
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
    "equity_clp": 1118091
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1114530
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1112473
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
    "equity_clp": 1144644
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
    "equity_clp": 1171122
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
    "equity_clp": 1190733
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1127933
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1164127
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
    "equity_clp": 1171102
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
    "equity_clp": 1150977
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1178987
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1198265
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1166566
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1171530
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
    "equity_clp": 1213602
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1190988
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
    "equity_clp": 1175092
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
    "equity_clp": 1173207
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1164664
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1167480
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1170038
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
    "equity_clp": 1168126
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
    "equity_clp": 1173390
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1172114
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1169005
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
    "equity_clp": 1162405
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1163696
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1160416
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1160416
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1160416
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1167414
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1166468
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1169900
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1166431
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
    "equity_clp": 1167834
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
    "equity_clp": 1182805
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1193063
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1182627
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1172477
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
    "invertido_clp": 447648,
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
    "invertido_clp": 76104,
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
    "invertido_clp": 215679,
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
    "invertido_clp": 43300,
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
    "invertido_clp": 291649,
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
    "invertido_clp": 254554,
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
    "invertido_clp": 276377,
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
   "sharpe": 0.3,
   "max_drawdown": -0.2058,
   "win_rate": 0.4091,
   "retorno_total": 0.1725,
   "resultado_clp": 172477
  },
  "buy_hold": [
   {
    "fecha": "2024-09-25",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 1001920
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 993913
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 991669
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 980229
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 987549
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 993859
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1013038
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1007654
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1019408
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1034584
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1032342
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1034950
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1043605
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1031654
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1050881
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1048331
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1062223
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1043493
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1066459
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1053162
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1051300
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1052750
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1044020
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1057691
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1064865
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1050096
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1054089
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1037015
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1056694
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1085490
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1101732
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1099885
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1087813
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1110676
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1130431
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1116323
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1097153
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1086863
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1102579
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1101184
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1109330
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1113158
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1107061
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1125777
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1123827
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1131352
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1114264
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1134857
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1134597
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1135911
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1132168
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1112581
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1122257
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1137106
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1131513
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1133250
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1125119
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1141735
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1106063
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1119020
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1129304
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1116966
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1147338
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1146035
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1133799
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1109992
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1122104
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1119347
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1145642
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1159413
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1146534
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1141119
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1125633
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1130594
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1131106
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1149499
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1146592
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1166823
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1170809
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1172867
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1164437
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1156632
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1116666
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1149835
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1153009
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1156014
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1141127
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1138206
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1142652
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1131621
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1133825
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1114009
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1104951
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1121634
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1117602
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1123490
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1119251
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1116314
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1121081
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1118523
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1089598
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1071305
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1080437
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1079252
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1062160
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1090532
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1058344
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1056364
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1064267
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1036589
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1030677
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 988378
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1009467
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1009568
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 997544
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1017184
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 1002177
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 994810
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 1002026
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 998692
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1010208
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1016286
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1032362
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1010474
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1012001
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 1001944
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 990940
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1020140
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1032435
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 991215
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 927052
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 931232
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 950690
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1061476
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 994884
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1020749
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1012277
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 1003902
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 984656
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 986010
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 962540
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 979684
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 985415
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 995176
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 997161
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 995954
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1011058
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1013282
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1026444
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1037879
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1032657
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1014703
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1018146
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1033422
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1026629
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1053027
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1073096
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1067777
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1073826
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1078548
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1083109
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1078000
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1061863
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1063207
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1055110
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1074966
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1066282
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1071015
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1069259
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1056181
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1081679
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1082483
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1075005
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1077484
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1079418
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1090936
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1090115
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1089685
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1072886
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1064802
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1080988
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1091474
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1083795
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1093244
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1115192
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1101161
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1111544
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1109698
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1101053
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1115110
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1116544
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1122470
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1119209
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1131754
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1141312
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1151459
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1148161
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1136111
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1167656
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1170180
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1178059
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1173570
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1174503
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1162759
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1168482
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1166200
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1173214
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1157053
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1180677
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1181257
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1202795
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1171954
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1158822
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1176528
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1185625
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1194439
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1198169
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1193272
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1207109
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1195812
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1191259
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1204551
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1201906
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1195498
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1191517
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1190101
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1214207
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1195273
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1203543
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1211200
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1218156
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1210454
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1200416
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1214636
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1218205
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1219483
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1216151
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1223161
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1222436
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1225862
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1213916
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1204300
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1217073
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1210692
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1221973
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1232438
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1238113
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1232470
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1218651
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1218044
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1234184
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1238143
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1249840
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1249317
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1248531
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1251010
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1237041
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1250790
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1255212
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1240301
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1206766
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1220861
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1231627
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1242656
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1231971
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1233603
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1253847
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1240646
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1234715
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1240470
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1246907
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1240319
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1255564
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1259108
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1243158
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1249239
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1234005
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1232165
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1246790
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1229542
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1228900
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1232172
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1244878
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1243166
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1214553
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1214171
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1188464
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1185046
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1200613
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1182377
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1191848
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1220338
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1234533
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1235550
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1231558
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1226848
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1231413
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1227911
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1222142
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1222837
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1224680
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1225363
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1237487
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1237217
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1211216
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1204092
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1206187
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1192406
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1206645
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1208583
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1215444
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1219940
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1221498
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1216703
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1214446
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1224820
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1196716
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1198510
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1215102
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1218902
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1201405
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1203178
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1213369
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1212753
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1195500
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1192155
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1189719
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1190300
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1172385
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1182334
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1174724
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1170984
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1175296
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1172587
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1165906
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1167233
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1159325
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1174270
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1163238
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1150819
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1134028
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1166558
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1164307
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1150413
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1153911
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1134730
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1138813
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1148254
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1158588
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1150020
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1162948
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1152909
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1161289
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1163330
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1151317
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1157346
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1168699
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1170988
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1202322
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1188258
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1187487
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1204794
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1208047
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1172069
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1164986
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1182621
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1195974
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1189584
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1169748
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1177441
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1157213
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1188664
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1163127
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1178188
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1156302
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1150658
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1140236
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1182918
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1186565
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1170129
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1184563
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1180701
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1211421
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1192844
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1184601
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1199961
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1215193
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1212930
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1214155
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1230453
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1233813
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1213207
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1240401
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1232526
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1248694
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1253139
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1243465
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1239905
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1271002
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1268885
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1262523
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1290300
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1298333
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1281907
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1284341
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1289739
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1295060
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1325152
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1297079
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1292576
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1296621
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1291958
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1311766
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1303765
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1309780
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1316083
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1311629
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1319160
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1317920
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1319477
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1324744
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1312292
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1324890
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1291661
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1321515
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1330116
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1299940
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1320232
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1314086
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1327060
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1305739
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1282609
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1297539
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1315142
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1302860
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1313065
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1321801
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1314544
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1339338
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1349431
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1347328
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1350653
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1356226
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1359661
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1353867
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1377368
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1371908
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1361273
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1371456
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1368828
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1360572
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1346596
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1358752
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1369792
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1368771
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1354429
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1364424
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1370660
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1365301
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1336199
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1359371
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1354719
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1370895
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1398197
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1380012
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1376391
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1387628
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1382850
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1382193
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1383429
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1393951
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1391054
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1383115
   },
   {
    "fecha": "2026-08-18",
    "equity_clp": 1376314
   },
   {
    "fecha": "2026-08-19",
    "equity_clp": 1391488
   },
   {
    "fecha": "2026-08-20",
    "equity_clp": 1377139
   },
   {
    "fecha": "2026-08-21",
    "equity_clp": 1384440
   },
   {
    "fecha": "2026-08-24",
    "equity_clp": 1378665
   },
   {
    "fecha": "2026-08-25",
    "equity_clp": 1369648
   },
   {
    "fecha": "2026-08-26",
    "equity_clp": 1370823
   },
   {
    "fecha": "2026-08-27",
    "equity_clp": 1389556
   },
   {
    "fecha": "2026-08-28",
    "equity_clp": 1391606
   },
   {
    "fecha": "2026-08-31",
    "equity_clp": 1400739
   },
   {
    "fecha": "2026-09-01",
    "equity_clp": 1394878
   },
   {
    "fecha": "2026-09-02",
    "equity_clp": 1403482
   },
   {
    "fecha": "2026-09-03",
    "equity_clp": 1421145
   },
   {
    "fecha": "2026-09-04",
    "equity_clp": 1408179
   },
   {
    "fecha": "2026-09-08",
    "equity_clp": 1402322
   },
   {
    "fecha": "2026-09-09",
    "equity_clp": 1381665
   },
   {
    "fecha": "2026-09-10",
    "equity_clp": 1375998
   },
   {
    "fecha": "2026-09-11",
    "equity_clp": 1408899
   },
   {
    "fecha": "2026-09-14",
    "equity_clp": 1395915
   },
   {
    "fecha": "2026-09-15",
    "equity_clp": 1417902
   },
   {
    "fecha": "2026-09-16",
    "equity_clp": 1409624
   },
   {
    "fecha": "2026-09-17",
    "equity_clp": 1426355
   },
   {
    "fecha": "2026-09-18",
    "equity_clp": 1437157
   },
   {
    "fecha": "2026-09-21",
    "equity_clp": 1459212
   },
   {
    "fecha": "2026-09-22",
    "equity_clp": 1440063
   },
   {
    "fecha": "2026-09-23",
    "equity_clp": 1428605
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
    "valor": -0.54,
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
