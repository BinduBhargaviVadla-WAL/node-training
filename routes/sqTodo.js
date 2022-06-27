const express = require("express");
const router = express.Router();
const TodoModel = require("../mysqlmodels/todos");
router.get("/", function (req, res) {
  TodoModel.findAll().then(
    function (todos) {
      res.status(200).json(todos);
    },
    function (error) {
      res.status(500).send(error);
    }
  );
});
router.post("/create", function (req, res) {
  let { status, title, description } = req.body;
  console.log(req.body);
  TodoModel.create({
    status: status,
    title: title,
    description: description,
  }).then(function (todo) {
    res.status(200).json(todo);
  });
});
module.exports = router;
