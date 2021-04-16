const { Candles } = require('../models');

const getAllCandles = async () => {
  const candles = await Candles.findAll();
  return candles;
};

const getCandleByCurrency = async (currency) => {
  const candles = await Candles.findAll({
    where: { currency },
  });
  return candles;
};

const getCandleByCurrencyAndTime = async (currency, time) => {
  const candles = await Candles.findAll({
    where: { currency, frequency: time },
  });
  return candles;
};

module.exports = {
  getAllCandles,
  getCandleByCurrency,
  getCandleByCurrencyAndTime,
};
