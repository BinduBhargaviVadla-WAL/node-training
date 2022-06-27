const express = require("express");
const router = express.Router();
const todosController = require("../controllers/todos");
router.get("/", todosController.getTodos);
router.post("/", todosController.postTodos);
router.delete("/:_id", todosController.deleteTodos);
router.put("/:_id", todosController.updateTodos);
module.exports = router;
