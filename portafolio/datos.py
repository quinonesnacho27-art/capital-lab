# Descarga de precios históricos mensuales (yfinance) con caché local en CSV.
# La caché evita golpear Yahoo en cada corrida y permite trabajar sin red.

from __future__ import annotations

import os
import shutil
import time
from pathlib import Path

import pandas as pd

from portafolio.activos import ACTIVOS, TICKER_USDCLP

RAIZ = Path(__file__).resolve().parent.parent
DIR_CACHE = RAIZ / "data" / "cache"
DIAS_VALIDEZ_CACHE = 7


def _asegurar_certificados() -> None:
    """libcurl (usado por yfinance) no puede abrir el cacert.pem de certifi
    cuando la ruta contiene caracteres no ASCII (p. ej. un usuario 'Quiño').
    Se copia el archivo a una ruta ASCII del proyecto y se apunta ahí."""
    import certifi

    origen = certifi.where()
    try:
        origen.encode("ascii")
        return
    except UnicodeEncodeError:
        pass
    destino = RAIZ / "data" / "cacert.pem"
    if not destino.exists():
        destino.parent.mkdir(parents=True, exist_ok=True)
        shutil.copyfile(origen, destino)
    os.environ.setdefault("CURL_CA_BUNDLE", str(destino))
    os.environ.setdefault("SSL_CERT_FILE", str(destino))


_asegurar_certificados()
import yfinance as yf  # noqa: E402  (después de configurar los certificados)


def _ruta_cache(ticker: str) -> Path:
    return DIR_CACHE / f"{ticker.replace('=', '_')}.csv"


def _precios_mensuales(ticker: str) -> pd.Series:
    """Serie mensual de precios ajustados (dividendos incluidos), índice PeriodIndex."""
    ruta = _ruta_cache(ticker)
    if ruta.exists() and (time.time() - ruta.stat().st_mtime) < DIAS_VALIDEZ_CACHE * 86400:
        serie = pd.read_csv(ruta, index_col=0).iloc[:, 0]
        serie.index = pd.PeriodIndex(serie.index, freq="M")
        return _sin_mes_en_curso(serie)

    crudo = yf.download(ticker, period="max", interval="1mo",
                        auto_adjust=True, progress=False)
    if crudo is None or crudo.empty:
        raise RuntimeError(f"yfinance no devolvió datos para {ticker}")
    cierre = crudo["Close"]
    if isinstance(cierre, pd.DataFrame):  # columnas MultiIndex en versiones nuevas
        cierre = cierre.iloc[:, 0]
    indice = pd.DatetimeIndex(cierre.index)
    if indice.tz is not None:
        indice = indice.tz_localize(None)
    serie = pd.Series(cierre.values, index=indice.to_period("M"), name=ticker)
    serie = serie.groupby(level=0).last().dropna()

    DIR_CACHE.mkdir(parents=True, exist_ok=True)
    serie.to_csv(ruta)
    return _sin_mes_en_curso(serie)


def _sin_mes_en_curso(serie: pd.Series) -> pd.Series:
    """El mes en curso tiene solo días parciales: su 'retorno mensual' sería basura."""
    return serie[serie.index < pd.Timestamp.now().to_period("M")]


def precios_diarios(ticker: str, periodo: str = "3y") -> pd.DataFrame:
    """OHLC diario (ajustado) para el paper trading. Caché de 1 día."""
    ruta = DIR_CACHE / f"diario_{ticker.replace('=', '_')}.csv"
    if ruta.exists() and (time.time() - ruta.stat().st_mtime) < 86400:
        df = pd.read_csv(ruta, index_col=0, parse_dates=True)
        return df

    crudo = yf.download(ticker, period=periodo, interval="1d",
                        auto_adjust=True, progress=False)
    if crudo is None or crudo.empty:
        raise RuntimeError(f"yfinance no devolvió datos diarios para {ticker}")
    if isinstance(crudo.columns, pd.MultiIndex):
        crudo.columns = crudo.columns.get_level_values(0)
    df = crudo[["Open", "High", "Low", "Close"]].copy()
    indice = pd.DatetimeIndex(df.index)
    if indice.tz is not None:
        indice = indice.tz_localize(None)
    df.index = indice.normalize()
    df = df[~df.index.duplicated(keep="last")].dropna()

    DIR_CACHE.mkdir(parents=True, exist_ok=True)
    df.to_csv(ruta)
    return df


def retornos_mensuales_clp(claves: list[str], anios_historia: int) -> pd.DataFrame:
    """Retornos mensuales en CLP de los activos pedidos (solo los que tienen ticker).

    Convierte cada retorno USD a CLP con el tipo de cambio del mismo mes:
    r_clp = (1 + r_usd) * (1 + r_fx) - 1, y descuenta la comisión mensual
    equivalente de los fondos mutuos proxy. Devuelve la ventana común más
    larga disponible, recortada a `anios_historia`.
    """
    r_fx = _precios_mensuales(TICKER_USDCLP).pct_change()

    columnas = {}
    for clave in claves:
        activo = ACTIVOS[clave]
        if activo.tipo != "proxy_usd":
            continue
        r_usd = _precios_mensuales(activo.ticker).pct_change()
        r_clp = (1 + r_usd) * (1 + r_fx) - 1
        if activo.comision_anual:
            r_clp -= (1 + activo.comision_anual) ** (1 / 12) - 1
        columnas[clave] = r_clp

    df = pd.DataFrame(columnas).dropna()
    if df.empty:
        raise RuntimeError("No hay ventana común de datos para los activos pedidos")
    corte = df.index.max() - (anios_historia * 12 - 1)
    return df[df.index >= corte]
