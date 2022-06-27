const { Sequelize, DataTypes } = require("sequelize");
const db = require("../dbsq");
const Product = db.define(
  "products",
  { title: { type: DataTypes.STRING }, price: { type: DataTypes.DOUBLE } },
  { freezeTableName: true }
);
module.exports = Product;
