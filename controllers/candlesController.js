const router = require('express').Router();
const service = require('../services/candleServices');

router.get('/', async (req, res) => {
  const toot = await service.getAllCandles();

  res.status(200).json(toot);
});

router.get('/bitcoin', async (req, res) => {
  const toot = await service.oneMinuteCandle('USDT_BTC');

  res.status(200).json(toot);
});

router.get('/monero', async (req, res) => {
  const toot = await service.oneMinuteCandle('USDT_XMR');

  res.status(200).json(toot);
});

module.exports = router;
