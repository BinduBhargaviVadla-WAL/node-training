const { Sequelize, DataTypes } = require("sequelize");
const db = require("../dbsq");
const Todo = db.define(
  "todos",
  {
    status: {
      type: DataTypes.BOOLEAN,
    },
    title: {
      type: DataTypes.STRING,
    },
    description: {
      type: DataTypes.TEXT,
    },
  },
  { freezeTableName: true }
);
module.exports = Todo;
