# Mezclas de ejemplo. Para agregar una propia: nombre → {activo: peso},
# con pesos que sumen 1.0 y claves del catálogo en activos.py.

MEZCLAS = {
    "Conservadora": {
        "deposito": 0.60,
        "fm_deuda": 0.30,
        "sp500": 0.10,
    },
    "Moderada": {
        "deposito": 0.25,
        "fm_deuda": 0.25,
        "sp500": 0.35,
        "dividendos": 0.15,
    },
    "Agresiva": {
        "deposito": 0.10,
        "sp500": 0.45,
        "tech": 0.30,
        "dividendos": 0.15,
    },
}
