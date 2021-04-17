const router = require('express').Router();
const service = require('../services/candleServices');

router.get('/', async (_req, res) => {
  const result = await service.getCandleByCurrency('Bitcoin');
  res.status(200).json(result);
});

router.get('/1min', async (_req, res) => {
  const result = await service.getCandleByCurrencyAndTime(
    'Bitcoin',
    '1 minute',
  );
  res.status(200).json(result);
});

router.get('/5min', async (_req, res) => {
  const result = await service.getCandleByCurrencyAndTime(
    'Bitcoin',
    '5 minutes',
  );
  res.status(200).json(result);
});

router.get('/10min', async (_req, res) => {
  const result = await service.getCandleByCurrencyAndTime(
    'Bitcoin',
    '10 minutes',
  );
  res.status(200).json(result);
});

module.exports = router;
