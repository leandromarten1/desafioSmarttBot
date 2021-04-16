require('dotenv/config');
const express = require('express');
const controllers = require('./controllers');
const { makeCandles } = require('./helpers/makeCandles');
const app = express();

app.use(express.json());

const oneMin = [];
const fiveMin = [];
const tenMin = [];
setInterval(async () => {
  makeCandles('USDT_BTC', oneMin, fiveMin, tenMin);
}, 10000);

app.use('/', controllers.candlesController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
