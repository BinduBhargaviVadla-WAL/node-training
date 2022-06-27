var express = require("express");
var router = express.Router();
// const connector = require("../connect");
const connector = require("../poolconnect");
router.get("/createtable", function (req, res) {
  console.log(connector);
  const sql =
    "CREATE TABLE products (name varchar(20),description varchar(250),price int)";
  connector.query(sql, function (err, results, fields) {
    res.json({ err, results, fields });
  });
});
router.post("/", function (req, res) {
  const { name, description, price } = req.body;
  const sql = `INSERT INTO products VALUES(?,?,?)`;
  connector.query(
    sql,
    [name, description, price],
    function (err, results, fields) {
      res.json({ err, results, fields });
    }
  );
});
router.get("/", function (rea, res) {
  const sql = `SELECT * FROM products`;
  connector.query(sql, function (err, results, fields) {
    if (err) {
      res.json(err);
    } else {
      res.json({ err, results, fields });
    }
  });
});
module.exports = router;
