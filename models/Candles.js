module.exports = (sequelize, DataTypes) => {
  const Candles = sequelize.define(
    'Candles',
    {
      currency: DataTypes.STRING,
      frequency: DataTypes.STRING,
      time: DataTypes.DATE,
      open: DataTypes.FLOAT,
      close: DataTypes.FLOAT,
      high: DataTypes.FLOAT,
      low: DataTypes.FLOAT,
    },
    {
      timestamps: false,
    },
  );

  return Candles;
};
