module.exports = function(sequelize, DataTypes) {
  var Service = sequelize.define("service", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    name: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    category: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    description: {
      type: DataTypes.STRING,
      validate: {
        allowNull: false
      }
    },
    duration: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    },
    price: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    }
  });

  Service.associate = function(models) {
    Service.hasMany(models.appointment, {
      foreignKey: {
        allowNull: false
      }
    });

    Service.belongsToMany(models.provider, {
      through: models.provider_service
    });
  };

  return Service;
};
