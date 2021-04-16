const { api } = require('../services/apiPoloniex');
const { Candles } = require('../models');

const makeCandles = async (currencyPair, array, array5, array10) => {
  const quote = await api(currencyPair);
  //   console.log('Requisição');
  array.push(quote.last);
  //   console.log('OneMin:', array);

  if (array.length === 6) {
    const candleOneMinute = {
      currency: 'Bitcoin',
      frequency: '1 minute',
      time: new Date(),
      open: array[0],
      close: array[array.length - 1],
      low: Math.min(...array),
      high: Math.max(...array),
    };

    // console.log('Salvar no Banco Candle 1min: ', candleOneMinute);
    await Candles.create(candleOneMinute);
    // console.log('Array com 6:', array);
    // Zerar array de 1 minuto
    array.length = 0;
    // Inserir Candle de 1min no array de 5 minutos
    // inserir a propriedade Close, que se refere ao close do candles de 1minuto
    array5.push(candleOneMinute.close);
  }

  if (array5.length === 5) {
    const candleFiveMinute = {
      currency: 'Bitcoin',
      frequency: '5 minutes',
      time: new Date(),
      open: array5[0],
      close: array5[array5.length - 1],
      low: Math.min(...array5),
      high: Math.max(...array5),
    };

    // console.log('salvar no banco Candle 5min: ', candleFiveMinute);
    await Candles.create(candleFiveMinute);

    // Zerar array de 5 minutos
    array5.length = 0;

    // Inserir candle de 5 minutos no array de 10 minutos
    array10.push(candleFiveMinute.close);
  }

  if (array10.length === 2) {
    const candleTenMinutes = {
      currency: 'Bitcoin',
      frequency: '10 minutes',
      time: new Date(),
      open: array10[0],
      close: array10[array10.length - 1],
      low: Math.min(...array10),
      high: Math.max(...array10),
    };

    // console.log('salvar no banco Candle 10min: ', candleTenMinutes);
    await Candles.create(candleTenMinutes);

    //zerar array 10 minutos
    array10.length = 0;
  }
};

module.exports = { makeCandles };
