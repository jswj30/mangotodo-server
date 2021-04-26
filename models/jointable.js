"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class joinTable extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.joinTable.belongsTo(models.todo, { foreignKey: "todoId" });
      models.joinTable.belongsTo(models.status, { foreignKey: "statusId" });
    }
  }
  joinTable.init(
    {
      todoId: DataTypes.INTEGER,
      statusId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "joinTable",
    }
  );
  return joinTable;
};
