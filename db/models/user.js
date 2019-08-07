module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    email: {
      type: DataTypes.STRING,
      unique: true
    },
    password: {
      type: DataTypes.STRING,
    },
    passportId: {
      type: DataTypes.STRING,
      allowNull: true,
      unique: true
    },
    isProvider: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  User.associate = function (models) {
    User.hasMany(models.appointment, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
