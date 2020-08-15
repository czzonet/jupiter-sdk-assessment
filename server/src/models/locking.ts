module.exports = (sequelize: any, DataTypes: any) => {
  const locking = sequelize.define(
    "locking",
    {
      date: DataTypes.DATE,
    },
    {}
  );
  locking.associate = function(models: any) {
    // associations can be defined here
    locking.belongsTo(models["hello"]);
  };
  return locking;
};
