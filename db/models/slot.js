module.exports = function(sequelize, DataTypes) {
  var Slot = sequelize.define("slot", {
   
    date: {
      type: DataTypes.DATE,
      allowNull: false,
      primaryKey: true
    },
    max: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  Slot.associate = function(models) {
    Slot.belongsTo(models.provider, {
      foreignKey: {
        allowNull: false
      },
      primaryKey: true
    });
  };

  return Slot;
};
