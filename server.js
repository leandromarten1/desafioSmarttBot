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

// Implementar novas criptomoedas futuramente.
// app.use('/', controllers.candlesController);
app.use('/bitcoin', controllers.bitcoinController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server listening on port ${PORT}!`));
