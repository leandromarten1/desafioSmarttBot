const { Candles } = require('../models');

const getAllCandles = async () => {
  const candles = await Candles.findAll();
  return candles;
};

module.exports = { getAllCandles };
