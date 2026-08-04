# Estrategias simples y explícitas para el paper trading. Cada una define
# cuándo entrar y cuándo salir, con la razón en texto — el journal la guarda.
#
# Las señales se calculan sobre los precios USD del instrumento (los
# indicadores técnicos no deben mezclarse con el tipo de cambio); la
# contabilidad de las posiciones se hace en CLP en el motor.

from __future__ import annotations

import pandas as pd


def preparar_indicadores(df: pd.DataFrame) -> pd.DataFrame:
    """Agrega SMA20/50, RSI14 (Wilder), ATR14 (Wilder) y canales de ruptura."""
    d = df.copy()
    d["sma20"] = d["Close"].rolling(20).mean()
    d["sma50"] = d["Close"].rolling(50).mean()

    delta = d["Close"].diff()
    subida = delta.clip(lower=0).ewm(alpha=1 / 14, adjust=False).mean()
    bajada = (-delta.clip(upper=0)).ewm(alpha=1 / 14, adjust=False).mean()
    d["rsi14"] = 100 - 100 / (1 + subida / bajada)

    rango = pd.concat([
        d["High"] - d["Low"],
        (d["High"] - d["Close"].shift()).abs(),
        (d["Low"] - d["Close"].shift()).abs(),
    ], axis=1).max(axis=1)
    d["atr14"] = rango.ewm(alpha=1 / 14, adjust=False).mean()

    # Canales calculados SIN el día actual (shift): romper el máximo de los
    # 20 días previos, perder el mínimo de los 10 días previos.
    d["max20"] = d["High"].rolling(20).max().shift()
    d["min10"] = d["Low"].rolling(10).min().shift()
    return d


# Cada estrategia expone:
#   entrada(d, i) -> razón (str) o None
#   salida(d, i)  -> razón (str) o None      (el stop loss lo maneja el motor)

def _cruce_medias_entrada(d, i):
    if i < 1:
        return None
    hoy, ayer = d.iloc[i], d.iloc[i - 1]
    if ayer["sma20"] <= ayer["sma50"] and hoy["sma20"] > hoy["sma50"]:
        return "SMA20 cruzó sobre SMA50 (tendencia al alza)"
    return None


def _cruce_medias_salida(d, i):
    hoy, ayer = d.iloc[i], d.iloc[i - 1]
    if ayer["sma20"] >= ayer["sma50"] and hoy["sma20"] < hoy["sma50"]:
        return "SMA20 cruzó bajo SMA50 (tendencia perdida)"
    return None


def _rsi_entrada(d, i):
    if i < 1:
        return None
    hoy, ayer = d.iloc[i], d.iloc[i - 1]
    if ayer["rsi14"] < 30 <= hoy["rsi14"]:
        return "RSI14 recuperó el nivel 30 desde sobreventa"
    return None


def _rsi_salida(d, i):
    if d.iloc[i]["rsi14"] >= 70:
        return "RSI14 llegó a 70 (sobrecompra)"
    return None


def _breakout_entrada(d, i):
    hoy = d.iloc[i]
    if hoy["Close"] > hoy["max20"]:
        return "Cierre sobre el máximo de 20 días (ruptura)"
    return None


def _breakout_salida(d, i):
    hoy = d.iloc[i]
    if hoy["Close"] < hoy["min10"]:
        return "Cierre bajo el mínimo de 10 días"
    return None


ESTRATEGIAS = {
    "cruce_medias": {
        "nombre": "Cruce de medias 20/50",
        "entrada": _cruce_medias_entrada,
        "salida": _cruce_medias_salida,
    },
    "rsi_rebote": {
        "nombre": "Rebote RSI 30/70",
        "entrada": _rsi_entrada,
        "salida": _rsi_salida,
    },
    "breakout": {
        "nombre": "Ruptura 20 días",
        "entrada": _breakout_entrada,
        "salida": _breakout_salida,
    },
}

# Mínimo de días para que todos los indicadores estén formados.
DIAS_CALENTAMIENTO = 60
