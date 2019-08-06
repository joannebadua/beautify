module.exports = function(sequelize, DataTypes) {
  var User = sequelize.define("user", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
     passportId: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true      
    },
     
    isProvider: {
      type: DataTypes.BOOLEAN,
      defaultValue: false
    }
  });

  User.associate = function(models) {
    User.hasMany(models.appointment, {
      foreignKey: {
        allowNull: false
      }
    });
  };
  return User;
};
