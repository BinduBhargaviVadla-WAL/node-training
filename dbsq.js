const Sequelize = require("sequelize");
const db = new Sequelize("westsidenode", "root", "Bindu@1059", {
  host: "localhost",
  dialect: "mysql",
});
module.exports = db;
