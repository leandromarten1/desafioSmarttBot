const { api } = require('../services/apiPoloniex');
const { Candles } = require('../models');

const makeCandles = async (currencyPair, array, array5, array10) => {
  // A cada 10s uma requisição é feita. Buscando o ultimo valor em que o currencyPair foi negociado.
  const quote = await api(currencyPair);

  // insere o valor 'last' em um array para fazer a comparação por período
  array.push(quote.last);
  array5.push(quote.last);
  array10.push(quote.last);

  // Cada 6 requisições formam o candle de 1min.
  // A requisição tem um intervalo de 10s entre uma e outra.
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

    // Salvar candle de 1 minuto no banco
    await Candles.create(candleOneMinute);

    // Zerar array de 1 minuto
    array.length = 0;
  }

  // Cada 30 requisições temos um candle de 5min.
  if (array5.length === 30) {
    const candleFiveMinute = {
      currency: 'Bitcoin',
      frequency: '5 minutes',
      time: new Date(),
      open: array5[0],
      close: array5[array5.length - 1],
      low: Math.min(...array5),
      high: Math.max(...array5),
    };

    // Salvar candle de 5 minutos no banco
    await Candles.create(candleFiveMinute);

    // Zerar array de 5 minutos
    array5.length = 0;
  }

  // Cada 60 requisições temos um candle de 10min.
  if (array10.length === 60) {
    const candleTenMinutes = {
      currency: 'Bitcoin',
      frequency: '10 minutes',
      time: new Date(),
      open: array10[0],
      close: array10[array10.length - 1],
      low: Math.min(...array10),
      high: Math.max(...array10),
    };

    // Salvar candle de 10 minutos no banco
    await Candles.create(candleTenMinutes);

    //zerar array 10 minutos
    array10.length = 0;
  }
};

module.exports = { makeCandles };
