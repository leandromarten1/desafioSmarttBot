const { now } = require('sequelize/types/lib/utils');

module.exports = {
  up: async (queryInterface, Sequelize) =>
    queryInterface.bulkInsert(
      'Candles',
      [
        {
          id: 1,
          currency: 'Bitcoin',
          frequency: '1 min',
          time: Date.now(),
          open: 0.00000215,
          close: 0.00000193,
          high: 0.00000201,
          low: 0.00000204,
        },
        {
          id: 2,
          currency: 'Bitcoin',
          frequency: '5 min',
          time: Date.now(),
          open: 0.00000215,
          close: 0.00000193,
          high: 0.00000201,
          low: 0.00000204,
        },
        {
          id: 3,
          currency: 'Bitcoin',
          frequency: '10 min',
          time: Date.now(),
          open: 0.00000215,
          close: 0.00000193,
          high: 0.00000201,
          low: 0.00000204,
        },
      ],
      {},
    ),

  down: async (queryInterface) =>
    queryInterface.bulkDelete('Candles', null, {}),
};
