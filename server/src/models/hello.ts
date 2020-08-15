module.exports = (sequelize: any, DataTypes: any) => {
  const hello = sequelize.define(
    "hello",
    {
      title: DataTypes.STRING,
      date: DataTypes.DATE,
    },
    {}
  );
  hello.associate = function(models: any) {
    // associations can be defined here
    hello.hasMany(models["locking"]);
  };
  return hello;
};
