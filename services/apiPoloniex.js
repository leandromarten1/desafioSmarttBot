const axios = require('axios');

const api = async (currency) => {
  const response = await axios
    .get('https://poloniex.com/public?command=returnTicker')
    .then((res) => res.data)
    .catch((err) => {
      console.log('Error: ', err);
      return {};
    });
  return response[currency];
};

module.exports = { api };
