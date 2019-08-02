module.exports = function(sequelize, DataTypes) {
  var Slot = sequelize.define("slot", {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true
    },
    date: {
      type: DataTypes.DATE,
      validate: {
        allowNull: false
      }
    },
    max: {
      type: DataTypes.INTEGER,
      validate: {
        allowNull: false
      }
    }
  });

  Slot.associate = function(models) {
    Slot.belongsTo(models.provider, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return Slot;
};
