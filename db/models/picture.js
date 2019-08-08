module.exports = function(sequelize, DataTypes) {
  var Picture = sequelize.define("picture", {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        document_id: {
            type: DataTypes.INTEGER,
            default: 0
        },
        description: {
            type: DataTypes.STRING,
        },
        fileLink: {
            type: DataTypes.STRING,
        },
        s3_key: {
            type: DataTypes.STRING,
        }
  });
  
  return Picture;
};
