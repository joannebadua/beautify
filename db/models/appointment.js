module.exports = function(sequelize, DataTypes) {
  var Appointment = sequelize.define("appointment", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    start_time: {
      type: DataTypes.DATE,
      allowNull: false
    },
    end_time: {
      type: DataTypes.DATE,
      allowNull: false
    }
  });

  Appointment.associate = function(models) {
    Appointment.belongsTo(models.provider, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.service, {
      foreignKey: {
        allowNull: false
      }
    });
    Appointment.belongsTo(models.user, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Appointment;
};
