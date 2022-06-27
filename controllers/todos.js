const { body, validationResult } = require("express-validator");
let Todo = require("../models/todos");
function getTodos(req, res) {
  Todo.find((err, todos_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(todos_list);
    }
  });
}
const postTodos = [
  body("item")
    .trim()
    .escape()
    .isLength({ min: 3, max: 200 })
    .withMessage("min should be 3 and max length should be 20"),
  body("status")
    .trim()
    .isLength({ min: 8, max: 10 })
    .withMessage("min should be 8 and max length should be 10"),
  (req, res) => {
    console.log(req.body);
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_errors: errors });
    } else {
      console.log(req.body);
      let { item, status } = req.body;
      let todoObject = new Todo({ item, status });
      todoObject.save((error) => {
        if (error) {
          res.json(error);
        } else {
          res.json({ status: "added todo successfuly" });
        }
      });
    }
  },
];
function deleteTodos(req, res) {
  Todo.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`todo with _id ${req.params._id} is deleted`);
    }
  });
}
function updateTodos(req, res) {
  const newValues = req.body;
  Todo.findByIdAndUpdate(req.params._id, newValues, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`todo with _id ${req.params._id} is updated`);
    }
  });
}
module.exports = { getTodos, postTodos, deleteTodos, updateTodos };
