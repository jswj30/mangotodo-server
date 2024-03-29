"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class todo extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.belongsTo(models.user, {
        foreignKey: "userId",
        targetKey: "id",
      });
      models.belongsToMany(models.Complete, {
        through: "joinTable",
        foreignKey: "todoId",
      });
    }
  }
  todo.init(
    {
      content: DataTypes.STRING,
      startDate: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "todo",
    }
  );
  return todo;
};
