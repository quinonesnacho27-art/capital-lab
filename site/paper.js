window.PAPER = {
 "generado": "2026-08-17 22:49 UTC",
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
    "equity_clp": 996736
   }
  ],
  "trades": [],
  "abiertas": [
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-04",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 771.33,
    "stop_usd": 751.96,
    "invertido_clp": 398247
   },
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
   "sesiones": 10,
   "n_trades": 0,
   "sharpe": null,
   "max_drawdown": -0.0062,
   "win_rate": null,
   "retorno_total": -0.0033,
   "resultado_clp": -3264
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
    "equity_clp": 992410
   }
  ]
 },
 "backtest": {
  "desde": "2024-08-17",
  "hasta": "2026-08-17",
  "equity": [
   {
    "fecha": "2024-08-19",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-20",
    "equity_clp": 994069
   },
   {
    "fecha": "2024-08-21",
    "equity_clp": 995384
   },
   {
    "fecha": "2024-08-22",
    "equity_clp": 989955
   },
   {
    "fecha": "2024-08-23",
    "equity_clp": 994698
   },
   {
    "fecha": "2024-08-26",
    "equity_clp": 990057
   },
   {
    "fecha": "2024-08-27",
    "equity_clp": 989769
   },
   {
    "fecha": "2024-08-28",
    "equity_clp": 988187
   },
   {
    "fecha": "2024-08-29",
    "equity_clp": 990060
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 994005
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 987334
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 991698
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 996414
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 990060
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 994449
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 996092
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1002095
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1002204
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 1001014
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 999623
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 995500
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 998070
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1011629
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1009952
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1009840
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1007162
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 995894
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 998764
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 989673
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 987092
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 974376
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 981915
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 988478
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1008314
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1002496
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1015681
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1031064
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1029002
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1030366
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1039042
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1025570
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1043495
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1041133
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1055698
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1038083
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1061396
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1046387
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1046211
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1049484
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1039952
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1055856
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1061695
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1045329
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1048767
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1037689
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1050395
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1069376
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1087756
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1084985
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1072621
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1095558
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1114498
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1100430
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1078199
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1068917
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1085331
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1083684
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1091172
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1094489
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1087956
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1106393
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1103006
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1111168
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1097103
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1118178
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1119808
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1120755
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1119239
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1099064
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1108530
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1126345
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1120396
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1124578
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1119673
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1136117
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1098607
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1105666
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1111268
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1104493
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1124824
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1123746
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1114976
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1099062
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1105331
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1103718
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1121805
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1132494
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1119384
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1112321
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1093192
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1094847
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1095472
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1105203
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1102948
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1117248
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1118454
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1125552
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1113465
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1098302
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1036289
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1058404
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1061167
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1062655
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1054776
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1049021
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1051978
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1045089
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1047040
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1033304
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1029136
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1038825
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1037431
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1042378
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1041135
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1037980
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1041094
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1038665
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1009511
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 988083
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 991623
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 991434
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 978495
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 986239
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 976239
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 978249
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 981057
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 970693
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 970693
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 970693
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 970693
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 970693
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 964177
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 973969
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 966762
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 962107
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 965929
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 964287
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 970208
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 973820
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 981958
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 970468
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 970566
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 964664
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 958282
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 972765
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 978634
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 959957
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 959957
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 959957
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 959957
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 959957
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 932524
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 937629
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 935513
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 934913
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 929260
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 928879
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 922863
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 924534
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 922089
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 914232
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 917018
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 924205
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 922767
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 939296
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 951818
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 950621
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 953056
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 955293
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 958121
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 953921
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 940462
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 940632
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 931235
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 951649
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 944566
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 948077
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 943360
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 934068
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 960749
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 965049
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 957514
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 958964
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 964632
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 978015
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 977004
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 975580
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 957483
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 955450
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 969644
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 979780
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 971551
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 979534
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1005480
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 995079
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1005030
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1001724
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 993564
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1002447
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1007250
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1012789
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1007726
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1023053
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1031580
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1040463
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1038347
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1025947
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1059221
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1059418
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1066883
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1063028
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1064975
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1049550
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1050420
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1048620
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1053407
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1043476
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1066067
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1069249
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1082505
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1054332
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1048906
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1056549
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1060988
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1066879
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1068968
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1066499
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1074437
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1064354
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1060160
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1070376
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1068158
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1060082
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1055663
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1054184
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1076219
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1059884
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1067464
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1074073
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1080919
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1071561
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1062312
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1074889
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1078305
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1081206
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1079057
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1085314
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1084902
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1087304
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1077887
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1070236
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1082072
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1076287
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1089001
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1098079
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1104002
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1098943
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1086643
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1086254
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1100070
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1103874
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1114323
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1115123
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1116215
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1117069
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1107100
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1117855
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1124834
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1111757
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1077651
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1087400
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1089966
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1097318
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1093777
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1094211
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1104587
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1094813
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1085031
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1093815
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1100553
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1100231
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1114566
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1123070
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1107124
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1113026
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1101224
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1090163
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1111037
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1089673
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1081432
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1085094
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1088284
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1088100
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1072688
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1072546
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1060251
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1056923
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1065389
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1053033
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1056890
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1074166
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1079649
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1081815
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1081358
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1079763
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1084417
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1083693
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1077485
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1080218
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1085183
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1086050
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1096003
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1093980
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1067547
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1061910
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1062953
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1057482
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1068269
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1071625
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1075341
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1077758
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1078969
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1074731
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1072407
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1081210
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1055821
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1058699
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1074230
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1080222
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1065539
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1064271
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1075790
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1075225
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1060822
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1056098
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1055101
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1056735
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1040930
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1048364
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1042471
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1037416
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1037662
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1042435
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1045481
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1045738
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1023535
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1041304
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1024494
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1001806
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 993074
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1013480
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1013605
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1005372
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1008114
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1001944
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1003696
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1006207
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1009602
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1006895
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1010840
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1008141
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1011092
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1012257
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1000522
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1001237
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1001755
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 999029
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1001747
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1000539
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 998457
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1001526
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1002340
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1000980
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 999182
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1000838
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1002281
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1002265
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1001662
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1002700
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1005656
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 997890
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1005095
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1003181
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1028536
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1020043
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1016910
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1031462
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1047401
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1046028
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1048979
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1061074
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1063882
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1054509
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1084684
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1081256
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1109274
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1109617
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1091954
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1097228
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1127267
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1130835
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1125446
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1160421
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1179227
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1160158
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1181728
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1191723
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1185501
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1220274
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1192923
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1180547
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1176828
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1174648
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1204441
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1198436
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1208531
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1233686
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1226397
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1236356
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1235250
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1239438
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1259839
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1257081
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1257000
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1190929
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1229030
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1228747
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1201222
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1236350
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1234721
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1257919
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1224108
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1215054
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1244492
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1264827
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1231538
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1236813
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1255068
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1234460
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1261303
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1281086
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1257359
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1239978
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1244874
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1241614
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1240754
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1255871
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1252588
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1242913
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1250920
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1247133
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1238880
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1229882
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1232934
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1235706
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1235449
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1231849
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1231895
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1231924
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1231899
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1231765
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1231871
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1231850
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1231925
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1240235
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1234700
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1233597
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1237018
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1235564
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1235364
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1235740
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1238943
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1237653
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1236763
   }
  ],
  "trades": [
   {
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2024-08-19",
    "fecha_salida": "2024-09-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "razon_salida": "Cierre bajo el mínimo de 10 días",
    "precio_entrada_usd": 546.67,
    "precio_salida_usd": 539.31,
    "riesgo_clp": 10000,
    "invertido_clp": 339152,
    "resultado_clp": -12666,
    "resultado_pct": -0.0373
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
    "invertido_clp": 366210,
    "resultado_clp": 11844,
    "resultado_pct": 0.0323
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
    "invertido_clp": 378055,
    "resultado_clp": 7165,
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
    "riesgo_clp": 9873,
    "invertido_clp": 353388,
    "resultado_clp": 59755,
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
    "invertido_clp": 184929,
    "resultado_clp": -16099,
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
    "invertido_clp": 395209,
    "resultado_clp": -15245,
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
    "invertido_clp": 322710,
    "resultado_clp": -18009,
    "resultado_pct": -0.0558
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
    "riesgo_clp": 9996,
    "invertido_clp": 267736,
    "resultado_clp": 12355,
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
    "riesgo_clp": 9707,
    "invertido_clp": 268970,
    "resultado_clp": -4700,
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
    "riesgo_clp": 9707,
    "invertido_clp": 199817,
    "resultado_clp": -6036,
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
    "riesgo_clp": 9600,
    "invertido_clp": 139634,
    "resultado_clp": -12172,
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
    "riesgo_clp": 9600,
    "invertido_clp": 119151,
    "resultado_clp": -13095,
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
    "riesgo_clp": 9600,
    "invertido_clp": 79437,
    "resultado_clp": -11828,
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
    "riesgo_clp": 9229,
    "invertido_clp": 150051,
    "resultado_clp": 26586,
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
    "riesgo_clp": 9245,
    "invertido_clp": 181444,
    "resultado_clp": 23439,
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
    "riesgo_clp": 9245,
    "invertido_clp": 105908,
    "resultado_clp": 30090,
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
    "invertido_clp": 517518,
    "resultado_clp": -147,
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
    "invertido_clp": 319442,
    "resultado_clp": -8330,
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
    "riesgo_clp": 9518,
    "invertido_clp": 195744,
    "resultado_clp": 36265,
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
    "invertido_clp": 348409,
    "resultado_clp": -4744,
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
    "invertido_clp": 416427,
    "resultado_clp": -16233,
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
    "invertido_clp": 193578,
    "resultado_clp": -4791,
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
    "riesgo_clp": 9506,
    "invertido_clp": 243997,
    "resultado_clp": 23062,
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
    "riesgo_clp": 9531,
    "invertido_clp": 45718,
    "resultado_clp": 25632,
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
    "invertido_clp": 293963,
    "resultado_clp": 39821,
    "resultado_pct": 0.1355
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
    "ticker": "SPY",
    "estrategia": "Ruptura 20 días",
    "fecha_entrada": "2026-08-03",
    "razon_entrada": "Cierre sobre el máximo de 20 días (ruptura)",
    "precio_entrada_usd": 757.67,
    "stop_usd": 739.23,
    "invertido_clp": 410963
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
   "sesiones": 500,
   "n_trades": 38,
   "sharpe": 0.45,
   "max_drawdown": -0.1953,
   "win_rate": 0.4211,
   "retorno_total": 0.2368,
   "resultado_clp": 236763
  },
  "buy_hold": [
   {
    "fecha": "2024-08-19",
    "equity_clp": 1000000
   },
   {
    "fecha": "2024-08-20",
    "equity_clp": 982512
   },
   {
    "fecha": "2024-08-21",
    "equity_clp": 986390
   },
   {
    "fecha": "2024-08-22",
    "equity_clp": 970382
   },
   {
    "fecha": "2024-08-23",
    "equity_clp": 984366
   },
   {
    "fecha": "2024-08-26",
    "equity_clp": 970682
   },
   {
    "fecha": "2024-08-27",
    "equity_clp": 969832
   },
   {
    "fecha": "2024-08-28",
    "equity_clp": 965170
   },
   {
    "fecha": "2024-08-29",
    "equity_clp": 970693
   },
   {
    "fecha": "2024-08-30",
    "equity_clp": 982322
   },
   {
    "fecha": "2024-09-03",
    "equity_clp": 962654
   },
   {
    "fecha": "2024-09-04",
    "equity_clp": 974541
   },
   {
    "fecha": "2024-09-05",
    "equity_clp": 987388
   },
   {
    "fecha": "2024-09-06",
    "equity_clp": 970080
   },
   {
    "fecha": "2024-09-09",
    "equity_clp": 982034
   },
   {
    "fecha": "2024-09-10",
    "equity_clp": 986511
   },
   {
    "fecha": "2024-09-11",
    "equity_clp": 1002864
   },
   {
    "fecha": "2024-09-12",
    "equity_clp": 1003162
   },
   {
    "fecha": "2024-09-13",
    "equity_clp": 999920
   },
   {
    "fecha": "2024-09-16",
    "equity_clp": 996131
   },
   {
    "fecha": "2024-09-17",
    "equity_clp": 989596
   },
   {
    "fecha": "2024-09-18",
    "equity_clp": 994213
   },
   {
    "fecha": "2024-09-19",
    "equity_clp": 1012093
   },
   {
    "fecha": "2024-09-20",
    "equity_clp": 1010463
   },
   {
    "fecha": "2024-09-23",
    "equity_clp": 1010309
   },
   {
    "fecha": "2024-09-24",
    "equity_clp": 1007096
   },
   {
    "fecha": "2024-09-25",
    "equity_clp": 994982
   },
   {
    "fecha": "2024-09-26",
    "equity_clp": 996892
   },
   {
    "fecha": "2024-09-27",
    "equity_clp": 988926
   },
   {
    "fecha": "2024-09-30",
    "equity_clp": 986693
   },
   {
    "fecha": "2024-10-01",
    "equity_clp": 975310
   },
   {
    "fecha": "2024-10-02",
    "equity_clp": 982593
   },
   {
    "fecha": "2024-10-03",
    "equity_clp": 988871
   },
   {
    "fecha": "2024-10-04",
    "equity_clp": 1007955
   },
   {
    "fecha": "2024-10-07",
    "equity_clp": 1002597
   },
   {
    "fecha": "2024-10-08",
    "equity_clp": 1014293
   },
   {
    "fecha": "2024-10-09",
    "equity_clp": 1029393
   },
   {
    "fecha": "2024-10-10",
    "equity_clp": 1027162
   },
   {
    "fecha": "2024-10-11",
    "equity_clp": 1029757
   },
   {
    "fecha": "2024-10-14",
    "equity_clp": 1038368
   },
   {
    "fecha": "2024-10-15",
    "equity_clp": 1026477
   },
   {
    "fecha": "2024-10-16",
    "equity_clp": 1045608
   },
   {
    "fecha": "2024-10-17",
    "equity_clp": 1043070
   },
   {
    "fecha": "2024-10-18",
    "equity_clp": 1056893
   },
   {
    "fecha": "2024-10-21",
    "equity_clp": 1038256
   },
   {
    "fecha": "2024-10-22",
    "equity_clp": 1061108
   },
   {
    "fecha": "2024-10-23",
    "equity_clp": 1047877
   },
   {
    "fecha": "2024-10-24",
    "equity_clp": 1046025
   },
   {
    "fecha": "2024-10-25",
    "equity_clp": 1047468
   },
   {
    "fecha": "2024-10-28",
    "equity_clp": 1038781
   },
   {
    "fecha": "2024-10-29",
    "equity_clp": 1052384
   },
   {
    "fecha": "2024-10-30",
    "equity_clp": 1059521
   },
   {
    "fecha": "2024-10-31",
    "equity_clp": 1044827
   },
   {
    "fecha": "2024-11-01",
    "equity_clp": 1048800
   },
   {
    "fecha": "2024-11-04",
    "equity_clp": 1031811
   },
   {
    "fecha": "2024-11-05",
    "equity_clp": 1051391
   },
   {
    "fecha": "2024-11-06",
    "equity_clp": 1080043
   },
   {
    "fecha": "2024-11-07",
    "equity_clp": 1096203
   },
   {
    "fecha": "2024-11-08",
    "equity_clp": 1094366
   },
   {
    "fecha": "2024-11-11",
    "equity_clp": 1082355
   },
   {
    "fecha": "2024-11-12",
    "equity_clp": 1105103
   },
   {
    "fecha": "2024-11-13",
    "equity_clp": 1124758
   },
   {
    "fecha": "2024-11-14",
    "equity_clp": 1110722
   },
   {
    "fecha": "2024-11-15",
    "equity_clp": 1091647
   },
   {
    "fecha": "2024-11-18",
    "equity_clp": 1081409
   },
   {
    "fecha": "2024-11-19",
    "equity_clp": 1097047
   },
   {
    "fecha": "2024-11-20",
    "equity_clp": 1095658
   },
   {
    "fecha": "2024-11-21",
    "equity_clp": 1103764
   },
   {
    "fecha": "2024-11-22",
    "equity_clp": 1107572
   },
   {
    "fecha": "2024-11-25",
    "equity_clp": 1101506
   },
   {
    "fecha": "2024-11-26",
    "equity_clp": 1120128
   },
   {
    "fecha": "2024-11-27",
    "equity_clp": 1118187
   },
   {
    "fecha": "2024-11-29",
    "equity_clp": 1125675
   },
   {
    "fecha": "2024-12-02",
    "equity_clp": 1108673
   },
   {
    "fecha": "2024-12-03",
    "equity_clp": 1129162
   },
   {
    "fecha": "2024-12-04",
    "equity_clp": 1128903
   },
   {
    "fecha": "2024-12-05",
    "equity_clp": 1130211
   },
   {
    "fecha": "2024-12-06",
    "equity_clp": 1126487
   },
   {
    "fecha": "2024-12-09",
    "equity_clp": 1106998
   },
   {
    "fecha": "2024-12-10",
    "equity_clp": 1116625
   },
   {
    "fecha": "2024-12-11",
    "equity_clp": 1131399
   },
   {
    "fecha": "2024-12-12",
    "equity_clp": 1125835
   },
   {
    "fecha": "2024-12-13",
    "equity_clp": 1127564
   },
   {
    "fecha": "2024-12-16",
    "equity_clp": 1119473
   },
   {
    "fecha": "2024-12-17",
    "equity_clp": 1136005
   },
   {
    "fecha": "2024-12-18",
    "equity_clp": 1100513
   },
   {
    "fecha": "2024-12-19",
    "equity_clp": 1113404
   },
   {
    "fecha": "2024-12-20",
    "equity_clp": 1123637
   },
   {
    "fecha": "2024-12-23",
    "equity_clp": 1111361
   },
   {
    "fecha": "2024-12-24",
    "equity_clp": 1141581
   },
   {
    "fecha": "2024-12-26",
    "equity_clp": 1140284
   },
   {
    "fecha": "2024-12-27",
    "equity_clp": 1128110
   },
   {
    "fecha": "2024-12-30",
    "equity_clp": 1104422
   },
   {
    "fecha": "2024-12-31",
    "equity_clp": 1116473
   },
   {
    "fecha": "2025-01-02",
    "equity_clp": 1113730
   },
   {
    "fecha": "2025-01-03",
    "equity_clp": 1139893
   },
   {
    "fecha": "2025-01-06",
    "equity_clp": 1153595
   },
   {
    "fecha": "2025-01-07",
    "equity_clp": 1140780
   },
   {
    "fecha": "2025-01-08",
    "equity_clp": 1135393
   },
   {
    "fecha": "2025-01-10",
    "equity_clp": 1119984
   },
   {
    "fecha": "2025-01-13",
    "equity_clp": 1124921
   },
   {
    "fecha": "2025-01-14",
    "equity_clp": 1125430
   },
   {
    "fecha": "2025-01-15",
    "equity_clp": 1143731
   },
   {
    "fecha": "2025-01-16",
    "equity_clp": 1140839
   },
   {
    "fecha": "2025-01-17",
    "equity_clp": 1160968
   },
   {
    "fecha": "2025-01-21",
    "equity_clp": 1164934
   },
   {
    "fecha": "2025-01-22",
    "equity_clp": 1166981
   },
   {
    "fecha": "2025-01-23",
    "equity_clp": 1158594
   },
   {
    "fecha": "2025-01-24",
    "equity_clp": 1150828
   },
   {
    "fecha": "2025-01-27",
    "equity_clp": 1111063
   },
   {
    "fecha": "2025-01-28",
    "equity_clp": 1144065
   },
   {
    "fecha": "2025-01-29",
    "equity_clp": 1147223
   },
   {
    "fecha": "2025-01-30",
    "equity_clp": 1150213
   },
   {
    "fecha": "2025-01-31",
    "equity_clp": 1135401
   },
   {
    "fecha": "2025-02-03",
    "equity_clp": 1132495
   },
   {
    "fecha": "2025-02-04",
    "equity_clp": 1136918
   },
   {
    "fecha": "2025-02-05",
    "equity_clp": 1125943
   },
   {
    "fecha": "2025-02-06",
    "equity_clp": 1128135
   },
   {
    "fecha": "2025-02-07",
    "equity_clp": 1108419
   },
   {
    "fecha": "2025-02-10",
    "equity_clp": 1099407
   },
   {
    "fecha": "2025-02-11",
    "equity_clp": 1116006
   },
   {
    "fecha": "2025-02-12",
    "equity_clp": 1111994
   },
   {
    "fecha": "2025-02-13",
    "equity_clp": 1117852
   },
   {
    "fecha": "2025-02-14",
    "equity_clp": 1113635
   },
   {
    "fecha": "2025-02-18",
    "equity_clp": 1110712
   },
   {
    "fecha": "2025-02-19",
    "equity_clp": 1115456
   },
   {
    "fecha": "2025-02-20",
    "equity_clp": 1112910
   },
   {
    "fecha": "2025-02-21",
    "equity_clp": 1084130
   },
   {
    "fecha": "2025-02-24",
    "equity_clp": 1065929
   },
   {
    "fecha": "2025-02-25",
    "equity_clp": 1075015
   },
   {
    "fecha": "2025-02-26",
    "equity_clp": 1073836
   },
   {
    "fecha": "2025-02-27",
    "equity_clp": 1056830
   },
   {
    "fecha": "2025-02-28",
    "equity_clp": 1085059
   },
   {
    "fecha": "2025-03-03",
    "equity_clp": 1053033
   },
   {
    "fecha": "2025-03-04",
    "equity_clp": 1051063
   },
   {
    "fecha": "2025-03-05",
    "equity_clp": 1058927
   },
   {
    "fecha": "2025-03-06",
    "equity_clp": 1031387
   },
   {
    "fecha": "2025-03-07",
    "equity_clp": 1025505
   },
   {
    "fecha": "2025-03-10",
    "equity_clp": 983418
   },
   {
    "fecha": "2025-03-11",
    "equity_clp": 1004402
   },
   {
    "fecha": "2025-03-12",
    "equity_clp": 1004502
   },
   {
    "fecha": "2025-03-13",
    "equity_clp": 992539
   },
   {
    "fecha": "2025-03-14",
    "equity_clp": 1012080
   },
   {
    "fecha": "2025-03-17",
    "equity_clp": 997148
   },
   {
    "fecha": "2025-03-18",
    "equity_clp": 989818
   },
   {
    "fecha": "2025-03-19",
    "equity_clp": 996998
   },
   {
    "fecha": "2025-03-20",
    "equity_clp": 993681
   },
   {
    "fecha": "2025-03-21",
    "equity_clp": 1005139
   },
   {
    "fecha": "2025-03-24",
    "equity_clp": 1011186
   },
   {
    "fecha": "2025-03-25",
    "equity_clp": 1027182
   },
   {
    "fecha": "2025-03-26",
    "equity_clp": 1005404
   },
   {
    "fecha": "2025-03-27",
    "equity_clp": 1006922
   },
   {
    "fecha": "2025-03-28",
    "equity_clp": 996916
   },
   {
    "fecha": "2025-03-31",
    "equity_clp": 985967
   },
   {
    "fecha": "2025-04-01",
    "equity_clp": 1015021
   },
   {
    "fecha": "2025-04-02",
    "equity_clp": 1027254
   },
   {
    "fecha": "2025-04-03",
    "equity_clp": 986241
   },
   {
    "fecha": "2025-04-04",
    "equity_clp": 922400
   },
   {
    "fecha": "2025-04-07",
    "equity_clp": 926559
   },
   {
    "fecha": "2025-04-08",
    "equity_clp": 945919
   },
   {
    "fecha": "2025-04-09",
    "equity_clp": 1056150
   },
   {
    "fecha": "2025-04-10",
    "equity_clp": 989891
   },
   {
    "fecha": "2025-04-11",
    "equity_clp": 1015626
   },
   {
    "fecha": "2025-04-14",
    "equity_clp": 1007197
   },
   {
    "fecha": "2025-04-15",
    "equity_clp": 998864
   },
   {
    "fecha": "2025-04-16",
    "equity_clp": 979715
   },
   {
    "fecha": "2025-04-17",
    "equity_clp": 981062
   },
   {
    "fecha": "2025-04-21",
    "equity_clp": 957710
   },
   {
    "fecha": "2025-04-22",
    "equity_clp": 974768
   },
   {
    "fecha": "2025-04-23",
    "equity_clp": 980470
   },
   {
    "fecha": "2025-04-24",
    "equity_clp": 990182
   },
   {
    "fecha": "2025-04-25",
    "equity_clp": 992157
   },
   {
    "fecha": "2025-04-28",
    "equity_clp": 990956
   },
   {
    "fecha": "2025-04-29",
    "equity_clp": 1005984
   },
   {
    "fecha": "2025-04-30",
    "equity_clp": 1008197
   },
   {
    "fecha": "2025-05-01",
    "equity_clp": 1021293
   },
   {
    "fecha": "2025-05-02",
    "equity_clp": 1032671
   },
   {
    "fecha": "2025-05-05",
    "equity_clp": 1027475
   },
   {
    "fecha": "2025-05-06",
    "equity_clp": 1009611
   },
   {
    "fecha": "2025-05-07",
    "equity_clp": 1013037
   },
   {
    "fecha": "2025-05-08",
    "equity_clp": 1028236
   },
   {
    "fecha": "2025-05-09",
    "equity_clp": 1021477
   },
   {
    "fecha": "2025-05-12",
    "equity_clp": 1047743
   },
   {
    "fecha": "2025-05-13",
    "equity_clp": 1067711
   },
   {
    "fecha": "2025-05-14",
    "equity_clp": 1062419
   },
   {
    "fecha": "2025-05-15",
    "equity_clp": 1068437
   },
   {
    "fecha": "2025-05-16",
    "equity_clp": 1073136
   },
   {
    "fecha": "2025-05-19",
    "equity_clp": 1077674
   },
   {
    "fecha": "2025-05-20",
    "equity_clp": 1072591
   },
   {
    "fecha": "2025-05-21",
    "equity_clp": 1056535
   },
   {
    "fecha": "2025-05-22",
    "equity_clp": 1057871
   },
   {
    "fecha": "2025-05-23",
    "equity_clp": 1049815
   },
   {
    "fecha": "2025-05-27",
    "equity_clp": 1069572
   },
   {
    "fecha": "2025-05-28",
    "equity_clp": 1060931
   },
   {
    "fecha": "2025-05-29",
    "equity_clp": 1065641
   },
   {
    "fecha": "2025-05-30",
    "equity_clp": 1063893
   },
   {
    "fecha": "2025-06-02",
    "equity_clp": 1050881
   },
   {
    "fecha": "2025-06-03",
    "equity_clp": 1076251
   },
   {
    "fecha": "2025-06-04",
    "equity_clp": 1077051
   },
   {
    "fecha": "2025-06-05",
    "equity_clp": 1069610
   },
   {
    "fecha": "2025-06-06",
    "equity_clp": 1072077
   },
   {
    "fecha": "2025-06-09",
    "equity_clp": 1074001
   },
   {
    "fecha": "2025-06-10",
    "equity_clp": 1085461
   },
   {
    "fecha": "2025-06-11",
    "equity_clp": 1084644
   },
   {
    "fecha": "2025-06-12",
    "equity_clp": 1084217
   },
   {
    "fecha": "2025-06-13",
    "equity_clp": 1067502
   },
   {
    "fecha": "2025-06-16",
    "equity_clp": 1059459
   },
   {
    "fecha": "2025-06-17",
    "equity_clp": 1075564
   },
   {
    "fecha": "2025-06-18",
    "equity_clp": 1085997
   },
   {
    "fecha": "2025-06-20",
    "equity_clp": 1078357
   },
   {
    "fecha": "2025-06-23",
    "equity_clp": 1087758
   },
   {
    "fecha": "2025-06-24",
    "equity_clp": 1109595
   },
   {
    "fecha": "2025-06-25",
    "equity_clp": 1095635
   },
   {
    "fecha": "2025-06-26",
    "equity_clp": 1105966
   },
   {
    "fecha": "2025-06-27",
    "equity_clp": 1104130
   },
   {
    "fecha": "2025-06-30",
    "equity_clp": 1095528
   },
   {
    "fecha": "2025-07-01",
    "equity_clp": 1109514
   },
   {
    "fecha": "2025-07-02",
    "equity_clp": 1110941
   },
   {
    "fecha": "2025-07-03",
    "equity_clp": 1116838
   },
   {
    "fecha": "2025-07-07",
    "equity_clp": 1113592
   },
   {
    "fecha": "2025-07-08",
    "equity_clp": 1126075
   },
   {
    "fecha": "2025-07-09",
    "equity_clp": 1135584
   },
   {
    "fecha": "2025-07-10",
    "equity_clp": 1145681
   },
   {
    "fecha": "2025-07-11",
    "equity_clp": 1142399
   },
   {
    "fecha": "2025-07-14",
    "equity_clp": 1130410
   },
   {
    "fecha": "2025-07-15",
    "equity_clp": 1161796
   },
   {
    "fecha": "2025-07-16",
    "equity_clp": 1164308
   },
   {
    "fecha": "2025-07-17",
    "equity_clp": 1172148
   },
   {
    "fecha": "2025-07-18",
    "equity_clp": 1167681
   },
   {
    "fecha": "2025-07-21",
    "equity_clp": 1168610
   },
   {
    "fecha": "2025-07-22",
    "equity_clp": 1156924
   },
   {
    "fecha": "2025-07-23",
    "equity_clp": 1162619
   },
   {
    "fecha": "2025-07-24",
    "equity_clp": 1160348
   },
   {
    "fecha": "2025-07-25",
    "equity_clp": 1167327
   },
   {
    "fecha": "2025-07-28",
    "equity_clp": 1151247
   },
   {
    "fecha": "2025-07-29",
    "equity_clp": 1174752
   },
   {
    "fecha": "2025-07-30",
    "equity_clp": 1175329
   },
   {
    "fecha": "2025-07-31",
    "equity_clp": 1196760
   },
   {
    "fecha": "2025-08-01",
    "equity_clp": 1166073
   },
   {
    "fecha": "2025-08-04",
    "equity_clp": 1153007
   },
   {
    "fecha": "2025-08-05",
    "equity_clp": 1170624
   },
   {
    "fecha": "2025-08-06",
    "equity_clp": 1179676
   },
   {
    "fecha": "2025-08-07",
    "equity_clp": 1188446
   },
   {
    "fecha": "2025-08-08",
    "equity_clp": 1192156
   },
   {
    "fecha": "2025-08-11",
    "equity_clp": 1187284
   },
   {
    "fecha": "2025-08-12",
    "equity_clp": 1201052
   },
   {
    "fecha": "2025-08-13",
    "equity_clp": 1189811
   },
   {
    "fecha": "2025-08-14",
    "equity_clp": 1185281
   },
   {
    "fecha": "2025-08-15",
    "equity_clp": 1198506
   },
   {
    "fecha": "2025-08-18",
    "equity_clp": 1195875
   },
   {
    "fecha": "2025-08-19",
    "equity_clp": 1189498
   },
   {
    "fecha": "2025-08-20",
    "equity_clp": 1185538
   },
   {
    "fecha": "2025-08-21",
    "equity_clp": 1184129
   },
   {
    "fecha": "2025-08-22",
    "equity_clp": 1208115
   },
   {
    "fecha": "2025-08-25",
    "equity_clp": 1189275
   },
   {
    "fecha": "2025-08-26",
    "equity_clp": 1197503
   },
   {
    "fecha": "2025-08-27",
    "equity_clp": 1205122
   },
   {
    "fecha": "2025-08-28",
    "equity_clp": 1212044
   },
   {
    "fecha": "2025-08-29",
    "equity_clp": 1204380
   },
   {
    "fecha": "2025-09-02",
    "equity_clp": 1194393
   },
   {
    "fecha": "2025-09-03",
    "equity_clp": 1208541
   },
   {
    "fecha": "2025-09-04",
    "equity_clp": 1212092
   },
   {
    "fecha": "2025-09-05",
    "equity_clp": 1213363
   },
   {
    "fecha": "2025-09-08",
    "equity_clp": 1210048
   },
   {
    "fecha": "2025-09-09",
    "equity_clp": 1217023
   },
   {
    "fecha": "2025-09-10",
    "equity_clp": 1216301
   },
   {
    "fecha": "2025-09-11",
    "equity_clp": 1219710
   },
   {
    "fecha": "2025-09-12",
    "equity_clp": 1207825
   },
   {
    "fecha": "2025-09-15",
    "equity_clp": 1198257
   },
   {
    "fecha": "2025-09-16",
    "equity_clp": 1210966
   },
   {
    "fecha": "2025-09-17",
    "equity_clp": 1204616
   },
   {
    "fecha": "2025-09-18",
    "equity_clp": 1215841
   },
   {
    "fecha": "2025-09-19",
    "equity_clp": 1226254
   },
   {
    "fecha": "2025-09-22",
    "equity_clp": 1231900
   },
   {
    "fecha": "2025-09-23",
    "equity_clp": 1226285
   },
   {
    "fecha": "2025-09-24",
    "equity_clp": 1212536
   },
   {
    "fecha": "2025-09-25",
    "equity_clp": 1211932
   },
   {
    "fecha": "2025-09-26",
    "equity_clp": 1227991
   },
   {
    "fecha": "2025-09-29",
    "equity_clp": 1231930
   },
   {
    "fecha": "2025-09-30",
    "equity_clp": 1243569
   },
   {
    "fecha": "2025-10-01",
    "equity_clp": 1243047
   },
   {
    "fecha": "2025-10-02",
    "equity_clp": 1242265
   },
   {
    "fecha": "2025-10-03",
    "equity_clp": 1244732
   },
   {
    "fecha": "2025-10-06",
    "equity_clp": 1230833
   },
   {
    "fecha": "2025-10-07",
    "equity_clp": 1244513
   },
   {
    "fecha": "2025-10-08",
    "equity_clp": 1248913
   },
   {
    "fecha": "2025-10-09",
    "equity_clp": 1234077
   },
   {
    "fecha": "2025-10-10",
    "equity_clp": 1200710
   },
   {
    "fecha": "2025-10-13",
    "equity_clp": 1214734
   },
   {
    "fecha": "2025-10-14",
    "equity_clp": 1225447
   },
   {
    "fecha": "2025-10-15",
    "equity_clp": 1236420
   },
   {
    "fecha": "2025-10-16",
    "equity_clp": 1225789
   },
   {
    "fecha": "2025-10-17",
    "equity_clp": 1227413
   },
   {
    "fecha": "2025-10-20",
    "equity_clp": 1247555
   },
   {
    "fecha": "2025-10-21",
    "equity_clp": 1234420
   },
   {
    "fecha": "2025-10-22",
    "equity_clp": 1228519
   },
   {
    "fecha": "2025-10-23",
    "equity_clp": 1234245
   },
   {
    "fecha": "2025-10-24",
    "equity_clp": 1240650
   },
   {
    "fecha": "2025-10-27",
    "equity_clp": 1234095
   },
   {
    "fecha": "2025-10-28",
    "equity_clp": 1249264
   },
   {
    "fecha": "2025-10-29",
    "equity_clp": 1252789
   },
   {
    "fecha": "2025-10-30",
    "equity_clp": 1236920
   },
   {
    "fecha": "2025-10-31",
    "equity_clp": 1242970
   },
   {
    "fecha": "2025-11-03",
    "equity_clp": 1227813
   },
   {
    "fecha": "2025-11-04",
    "equity_clp": 1225982
   },
   {
    "fecha": "2025-11-05",
    "equity_clp": 1240534
   },
   {
    "fecha": "2025-11-06",
    "equity_clp": 1223372
   },
   {
    "fecha": "2025-11-07",
    "equity_clp": 1222734
   },
   {
    "fecha": "2025-11-10",
    "equity_clp": 1225989
   },
   {
    "fecha": "2025-11-11",
    "equity_clp": 1238631
   },
   {
    "fecha": "2025-11-12",
    "equity_clp": 1236928
   },
   {
    "fecha": "2025-11-13",
    "equity_clp": 1208459
   },
   {
    "fecha": "2025-11-14",
    "equity_clp": 1208079
   },
   {
    "fecha": "2025-11-17",
    "equity_clp": 1182500
   },
   {
    "fecha": "2025-11-18",
    "equity_clp": 1179099
   },
   {
    "fecha": "2025-11-19",
    "equity_clp": 1194588
   },
   {
    "fecha": "2025-11-20",
    "equity_clp": 1176443
   },
   {
    "fecha": "2025-11-21",
    "equity_clp": 1185867
   },
   {
    "fecha": "2025-11-24",
    "equity_clp": 1214214
   },
   {
    "fecha": "2025-11-25",
    "equity_clp": 1228338
   },
   {
    "fecha": "2025-11-26",
    "equity_clp": 1229350
   },
   {
    "fecha": "2025-11-28",
    "equity_clp": 1225378
   },
   {
    "fecha": "2025-12-01",
    "equity_clp": 1220691
   },
   {
    "fecha": "2025-12-02",
    "equity_clp": 1225233
   },
   {
    "fecha": "2025-12-03",
    "equity_clp": 1221750
   },
   {
    "fecha": "2025-12-04",
    "equity_clp": 1216010
   },
   {
    "fecha": "2025-12-05",
    "equity_clp": 1216701
   },
   {
    "fecha": "2025-12-08",
    "equity_clp": 1218534
   },
   {
    "fecha": "2025-12-09",
    "equity_clp": 1219214
   },
   {
    "fecha": "2025-12-10",
    "equity_clp": 1231277
   },
   {
    "fecha": "2025-12-11",
    "equity_clp": 1231009
   },
   {
    "fecha": "2025-12-12",
    "equity_clp": 1205138
   },
   {
    "fecha": "2025-12-15",
    "equity_clp": 1198050
   },
   {
    "fecha": "2025-12-16",
    "equity_clp": 1200134
   },
   {
    "fecha": "2025-12-17",
    "equity_clp": 1186422
   },
   {
    "fecha": "2025-12-18",
    "equity_clp": 1200590
   },
   {
    "fecha": "2025-12-19",
    "equity_clp": 1202518
   },
   {
    "fecha": "2025-12-22",
    "equity_clp": 1209345
   },
   {
    "fecha": "2025-12-23",
    "equity_clp": 1213818
   },
   {
    "fecha": "2025-12-24",
    "equity_clp": 1215368
   },
   {
    "fecha": "2025-12-26",
    "equity_clp": 1210598
   },
   {
    "fecha": "2025-12-29",
    "equity_clp": 1208352
   },
   {
    "fecha": "2025-12-30",
    "equity_clp": 1218673
   },
   {
    "fecha": "2025-12-31",
    "equity_clp": 1190711
   },
   {
    "fecha": "2026-01-02",
    "equity_clp": 1192496
   },
   {
    "fecha": "2026-01-05",
    "equity_clp": 1209004
   },
   {
    "fecha": "2026-01-06",
    "equity_clp": 1212785
   },
   {
    "fecha": "2026-01-07",
    "equity_clp": 1195376
   },
   {
    "fecha": "2026-01-08",
    "equity_clp": 1197141
   },
   {
    "fecha": "2026-01-09",
    "equity_clp": 1207280
   },
   {
    "fecha": "2026-01-12",
    "equity_clp": 1206667
   },
   {
    "fecha": "2026-01-13",
    "equity_clp": 1189501
   },
   {
    "fecha": "2026-01-14",
    "equity_clp": 1186173
   },
   {
    "fecha": "2026-01-15",
    "equity_clp": 1183749
   },
   {
    "fecha": "2026-01-16",
    "equity_clp": 1184327
   },
   {
    "fecha": "2026-01-20",
    "equity_clp": 1166502
   },
   {
    "fecha": "2026-01-21",
    "equity_clp": 1176401
   },
   {
    "fecha": "2026-01-22",
    "equity_clp": 1168830
   },
   {
    "fecha": "2026-01-23",
    "equity_clp": 1165108
   },
   {
    "fecha": "2026-01-26",
    "equity_clp": 1169398
   },
   {
    "fecha": "2026-01-27",
    "equity_clp": 1166703
   },
   {
    "fecha": "2026-01-28",
    "equity_clp": 1160055
   },
   {
    "fecha": "2026-01-29",
    "equity_clp": 1161375
   },
   {
    "fecha": "2026-01-30",
    "equity_clp": 1153508
   },
   {
    "fecha": "2026-02-02",
    "equity_clp": 1168377
   },
   {
    "fecha": "2026-02-03",
    "equity_clp": 1157401
   },
   {
    "fecha": "2026-02-04",
    "equity_clp": 1145044
   },
   {
    "fecha": "2026-02-05",
    "equity_clp": 1128338
   },
   {
    "fecha": "2026-02-06",
    "equity_clp": 1160704
   },
   {
    "fecha": "2026-02-09",
    "equity_clp": 1158465
   },
   {
    "fecha": "2026-02-10",
    "equity_clp": 1144640
   },
   {
    "fecha": "2026-02-11",
    "equity_clp": 1148121
   },
   {
    "fecha": "2026-02-12",
    "equity_clp": 1129036
   },
   {
    "fecha": "2026-02-13",
    "equity_clp": 1133098
   },
   {
    "fecha": "2026-02-17",
    "equity_clp": 1142492
   },
   {
    "fecha": "2026-02-18",
    "equity_clp": 1152774
   },
   {
    "fecha": "2026-02-19",
    "equity_clp": 1144249
   },
   {
    "fecha": "2026-02-20",
    "equity_clp": 1157113
   },
   {
    "fecha": "2026-02-23",
    "equity_clp": 1147124
   },
   {
    "fecha": "2026-02-24",
    "equity_clp": 1155462
   },
   {
    "fecha": "2026-02-25",
    "equity_clp": 1157492
   },
   {
    "fecha": "2026-02-26",
    "equity_clp": 1145540
   },
   {
    "fecha": "2026-02-27",
    "equity_clp": 1151539
   },
   {
    "fecha": "2026-03-02",
    "equity_clp": 1162834
   },
   {
    "fecha": "2026-03-03",
    "equity_clp": 1165111
   },
   {
    "fecha": "2026-03-04",
    "equity_clp": 1196289
   },
   {
    "fecha": "2026-03-05",
    "equity_clp": 1182296
   },
   {
    "fecha": "2026-03-06",
    "equity_clp": 1181528
   },
   {
    "fecha": "2026-03-09",
    "equity_clp": 1198748
   },
   {
    "fecha": "2026-03-10",
    "equity_clp": 1201985
   },
   {
    "fecha": "2026-03-11",
    "equity_clp": 1166187
   },
   {
    "fecha": "2026-03-12",
    "equity_clp": 1159140
   },
   {
    "fecha": "2026-03-13",
    "equity_clp": 1176686
   },
   {
    "fecha": "2026-03-16",
    "equity_clp": 1189972
   },
   {
    "fecha": "2026-03-17",
    "equity_clp": 1183615
   },
   {
    "fecha": "2026-03-18",
    "equity_clp": 1163878
   },
   {
    "fecha": "2026-03-19",
    "equity_clp": 1171533
   },
   {
    "fecha": "2026-03-20",
    "equity_clp": 1151407
   },
   {
    "fecha": "2026-03-23",
    "equity_clp": 1182699
   },
   {
    "fecha": "2026-03-24",
    "equity_clp": 1157291
   },
   {
    "fecha": "2026-03-25",
    "equity_clp": 1172276
   },
   {
    "fecha": "2026-03-26",
    "equity_clp": 1150500
   },
   {
    "fecha": "2026-03-27",
    "equity_clp": 1144884
   },
   {
    "fecha": "2026-03-30",
    "equity_clp": 1134515
   },
   {
    "fecha": "2026-03-31",
    "equity_clp": 1176982
   },
   {
    "fecha": "2026-04-01",
    "equity_clp": 1180611
   },
   {
    "fecha": "2026-04-02",
    "equity_clp": 1164257
   },
   {
    "fecha": "2026-04-06",
    "equity_clp": 1178619
   },
   {
    "fecha": "2026-04-07",
    "equity_clp": 1174777
   },
   {
    "fecha": "2026-04-08",
    "equity_clp": 1205342
   },
   {
    "fecha": "2026-04-09",
    "equity_clp": 1186858
   },
   {
    "fecha": "2026-04-10",
    "equity_clp": 1178657
   },
   {
    "fecha": "2026-04-13",
    "equity_clp": 1193940
   },
   {
    "fecha": "2026-04-14",
    "equity_clp": 1209096
   },
   {
    "fecha": "2026-04-15",
    "equity_clp": 1206844
   },
   {
    "fecha": "2026-04-16",
    "equity_clp": 1208062
   },
   {
    "fecha": "2026-04-17",
    "equity_clp": 1224279
   },
   {
    "fecha": "2026-04-20",
    "equity_clp": 1227622
   },
   {
    "fecha": "2026-04-21",
    "equity_clp": 1207119
   },
   {
    "fecha": "2026-04-22",
    "equity_clp": 1234176
   },
   {
    "fecha": "2026-04-23",
    "equity_clp": 1226341
   },
   {
    "fecha": "2026-04-24",
    "equity_clp": 1242428
   },
   {
    "fecha": "2026-04-27",
    "equity_clp": 1246850
   },
   {
    "fecha": "2026-04-28",
    "equity_clp": 1237225
   },
   {
    "fecha": "2026-04-29",
    "equity_clp": 1233683
   },
   {
    "fecha": "2026-04-30",
    "equity_clp": 1264624
   },
   {
    "fecha": "2026-05-01",
    "equity_clp": 1262517
   },
   {
    "fecha": "2026-05-04",
    "equity_clp": 1256188
   },
   {
    "fecha": "2026-05-05",
    "equity_clp": 1283825
   },
   {
    "fecha": "2026-05-06",
    "equity_clp": 1291818
   },
   {
    "fecha": "2026-05-07",
    "equity_clp": 1275474
   },
   {
    "fecha": "2026-05-08",
    "equity_clp": 1277897
   },
   {
    "fecha": "2026-05-11",
    "equity_clp": 1283267
   },
   {
    "fecha": "2026-05-12",
    "equity_clp": 1288561
   },
   {
    "fecha": "2026-05-13",
    "equity_clp": 1318502
   },
   {
    "fecha": "2026-05-14",
    "equity_clp": 1290570
   },
   {
    "fecha": "2026-05-15",
    "equity_clp": 1286090
   },
   {
    "fecha": "2026-05-18",
    "equity_clp": 1290114
   },
   {
    "fecha": "2026-05-19",
    "equity_clp": 1285475
   },
   {
    "fecha": "2026-05-20",
    "equity_clp": 1305183
   },
   {
    "fecha": "2026-05-21",
    "equity_clp": 1297223
   },
   {
    "fecha": "2026-05-22",
    "equity_clp": 1303208
   },
   {
    "fecha": "2026-05-26",
    "equity_clp": 1309479
   },
   {
    "fecha": "2026-05-27",
    "equity_clp": 1305047
   },
   {
    "fecha": "2026-05-28",
    "equity_clp": 1312540
   },
   {
    "fecha": "2026-05-29",
    "equity_clp": 1311307
   },
   {
    "fecha": "2026-06-01",
    "equity_clp": 1312856
   },
   {
    "fecha": "2026-06-02",
    "equity_clp": 1318096
   },
   {
    "fecha": "2026-06-03",
    "equity_clp": 1305707
   },
   {
    "fecha": "2026-06-04",
    "equity_clp": 1318241
   },
   {
    "fecha": "2026-06-05",
    "equity_clp": 1285180
   },
   {
    "fecha": "2026-06-08",
    "equity_clp": 1314883
   },
   {
    "fecha": "2026-06-09",
    "equity_clp": 1323441
   },
   {
    "fecha": "2026-06-10",
    "equity_clp": 1293417
   },
   {
    "fecha": "2026-06-11",
    "equity_clp": 1313607
   },
   {
    "fecha": "2026-06-12",
    "equity_clp": 1307492
   },
   {
    "fecha": "2026-06-15",
    "equity_clp": 1320401
   },
   {
    "fecha": "2026-06-16",
    "equity_clp": 1299186
   },
   {
    "fecha": "2026-06-17",
    "equity_clp": 1276172
   },
   {
    "fecha": "2026-06-18",
    "equity_clp": 1291028
   },
   {
    "fecha": "2026-06-22",
    "equity_clp": 1308542
   },
   {
    "fecha": "2026-06-23",
    "equity_clp": 1296322
   },
   {
    "fecha": "2026-06-24",
    "equity_clp": 1306476
   },
   {
    "fecha": "2026-06-25",
    "equity_clp": 1315168
   },
   {
    "fecha": "2026-06-26",
    "equity_clp": 1307947
   },
   {
    "fecha": "2026-06-29",
    "equity_clp": 1332618
   },
   {
    "fecha": "2026-06-30",
    "equity_clp": 1342659
   },
   {
    "fecha": "2026-07-01",
    "equity_clp": 1340567
   },
   {
    "fecha": "2026-07-02",
    "equity_clp": 1343876
   },
   {
    "fecha": "2026-07-06",
    "equity_clp": 1349420
   },
   {
    "fecha": "2026-07-07",
    "equity_clp": 1352838
   },
   {
    "fecha": "2026-07-08",
    "equity_clp": 1347073
   },
   {
    "fecha": "2026-07-09",
    "equity_clp": 1370456
   },
   {
    "fecha": "2026-07-10",
    "equity_clp": 1365024
   },
   {
    "fecha": "2026-07-13",
    "equity_clp": 1354442
   },
   {
    "fecha": "2026-07-14",
    "equity_clp": 1364574
   },
   {
    "fecha": "2026-07-15",
    "equity_clp": 1361959
   },
   {
    "fecha": "2026-07-16",
    "equity_clp": 1353744
   },
   {
    "fecha": "2026-07-17",
    "equity_clp": 1339839
   },
   {
    "fecha": "2026-07-20",
    "equity_clp": 1351933
   },
   {
    "fecha": "2026-07-21",
    "equity_clp": 1362918
   },
   {
    "fecha": "2026-07-22",
    "equity_clp": 1361902
   },
   {
    "fecha": "2026-07-23",
    "equity_clp": 1347632
   },
   {
    "fecha": "2026-07-24",
    "equity_clp": 1357577
   },
   {
    "fecha": "2026-07-27",
    "equity_clp": 1363782
   },
   {
    "fecha": "2026-07-28",
    "equity_clp": 1358450
   },
   {
    "fecha": "2026-07-29",
    "equity_clp": 1329493
   },
   {
    "fecha": "2026-07-30",
    "equity_clp": 1352550
   },
   {
    "fecha": "2026-07-31",
    "equity_clp": 1347921
   },
   {
    "fecha": "2026-08-03",
    "equity_clp": 1364016
   },
   {
    "fecha": "2026-08-04",
    "equity_clp": 1391180
   },
   {
    "fecha": "2026-08-05",
    "equity_clp": 1373087
   },
   {
    "fecha": "2026-08-06",
    "equity_clp": 1369484
   },
   {
    "fecha": "2026-08-07",
    "equity_clp": 1380664
   },
   {
    "fecha": "2026-08-10",
    "equity_clp": 1375911
   },
   {
    "fecha": "2026-08-11",
    "equity_clp": 1375257
   },
   {
    "fecha": "2026-08-12",
    "equity_clp": 1376487
   },
   {
    "fecha": "2026-08-13",
    "equity_clp": 1386956
   },
   {
    "fecha": "2026-08-14",
    "equity_clp": 1384074
   },
   {
    "fecha": "2026-08-17",
    "equity_clp": 1380621
   }
  ]
 },
 "graduacion": {
  "chequeos": {
   "meses": {
    "valor": 0.4,
    "umbral": 6,
    "cumple": false
   },
   "sharpe": {
    "valor": null,
    "umbral": 1.0,
    "cumple": false
   },
   "drawdown": {
    "valor": -0.0062,
    "umbral": -0.15,
    "cumple": true
   }
  },
  "graduado": false,
  "monto_real_maximo_clp": 200000
 }
};
