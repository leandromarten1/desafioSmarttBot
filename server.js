require('dotenv/config');
const express = require('express');
const controllers = require('./controllers');
const app = express();

app.use(express.json());

app.use('/', controllers.candlesController);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Example app listening on port ${PORT}!`));
