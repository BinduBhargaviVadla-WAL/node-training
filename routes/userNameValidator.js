var express = require("express");
var router = express.Router();
const userController = require("../controllers/userNameValidator");
router.get("/", userController.getUser);
router.post("/", userController.createUser);
module.exports = router;
