# Catálogo de activos disponibles para armar mezclas.
#
# Los instrumentos chilenos sin API histórica gratuita se modelan así:
#  - Depósito a plazo: tasa fija determinística (config.TASA_DEPOSITO_ANUAL).
#  - Fondos mutuos: ETF proxy en USD menos una comisión anual típica de la
#    industria chilena. La comisión se descuenta mes a mes del retorno del
#    proxy, así el costo real de los fondos queda visible en la comparación.
#
# Los ETFs directos no llevan comisión extra: su expense ratio ya está
# reflejado en el precio histórico.

from __future__ import annotations

from dataclasses import dataclass


@dataclass(frozen=True)
class Activo:
    clave: str
    nombre: str
    tipo: str              # "tasa_fija" | "proxy_usd"
    ticker: str | None     # ticker yfinance (None para tasa fija)
    comision_anual: float  # comisión adicional simulada (fondos mutuos)
    nota: str


ACTIVOS = {
    "deposito": Activo(
        clave="deposito",
        nombre="Depósito a plazo CLP",
        tipo="tasa_fija",
        ticker=None,
        comision_anual=0.0,
        nota="Tasa fija configurable, sin volatilidad ni riesgo cambiario.",
    ),
    "fm_deuda": Activo(
        clave="fm_deuda",
        nombre="Fondo mutuo deuda",
        tipo="proxy_usd",
        ticker="AGG",
        comision_anual=0.012,
        nota="Proxy: AGG (bonos USA) menos 1,2% anual de comisión.",
    ),
    "fm_accionario": Activo(
        clave="fm_accionario",
        nombre="Fondo mutuo accionario",
        tipo="proxy_usd",
        ticker="ACWI",
        comision_anual=0.030,
        nota="Proxy: ACWI (acciones globales) menos 3,0% anual de comisión.",
    ),
    "sp500": Activo(
        clave="sp500",
        nombre="ETF S&P 500",
        tipo="proxy_usd",
        ticker="SPY",
        comision_anual=0.0,
        nota="SPY, retorno total con dividendos.",
    ),
    "tech": Activo(
        clave="tech",
        nombre="ETF tech/semiconductores",
        tipo="proxy_usd",
        ticker="SOXX",
        comision_anual=0.0,
        nota="SOXX, retorno total con dividendos.",
    ),
    "dividendos": Activo(
        clave="dividendos",
        nombre="Acciones de dividendos",
        tipo="proxy_usd",
        ticker="VYM",
        comision_anual=0.0,
        nota="Proxy: VYM (canasta de acciones de dividendos USA).",
    ),
}

TICKER_USDCLP = "CLP=X"
