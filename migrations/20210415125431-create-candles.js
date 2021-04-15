module.exports = {
  up: async (queryInterface, Sequelize) => {
    const candles = queryInterface.createTable('Candles', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      currency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      frequency: {
        allowNull: false,
        type: Sequelize.STRING,
      },
      time: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      open: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      close: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      high: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
      low: {
        allowNull: false,
        type: Sequelize.FLOAT,
      },
    });

    return candles;
  },

  down: async (queryInterface) => queryInterface.dropTable('Candles'),
};
