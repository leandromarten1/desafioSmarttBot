const router = require('express').Router();
const service = require('../services/candleServices');

router.get('/', async (_req, res) => {
  const result = await service.getAllCandles();
  res.status(200).json(result);
});

module.exports = router;
