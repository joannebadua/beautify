module.exports = function(sequelize, DataTypes) {
  var Provider = sequelize.define("provider", {
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    bio: {
      type: DataTypes.STRING,
      allowNull: false
    },

    workingHours: {
      type: DataTypes.STRING,
      allowNull: false
    },
    img: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  Provider.associate = function(models) {
    Provider.hasMany(models.appointment, {
      foreignKey: {
        allowNull: false
      }
    });
    Provider.hasMany(models.slot, {
      foreignKey: {
        allowNull: false
      }
    });
    Provider.belongsToMany(models.service, {
      through: models.provider_service
    });
  };

  return Provider;
};
