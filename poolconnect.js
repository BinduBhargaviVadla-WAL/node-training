const mysql = require("mysql2");
//Create the connection pool. The pool speciifc setting
const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Bindu@1059",
  database: "westsidenode",
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0,
});
module.exports = pool;
