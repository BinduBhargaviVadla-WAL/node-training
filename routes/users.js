var express = require("express");
var router = express.Router();
const userController = require("../controllers/users");
/* GET users listing. */
/*router.get("/", function (req, res, next) {
  res.send("respond with a resource");
});
router.get("/details", function (req, res) {
  res.send(
    `you are at details route${req.cookies.city} and gender is ${req.cookies.gender}`
  );
});
router.get("/info", function (req, res) {
  res.send("you are at info route");
});
router.get("/info/mine", function (req, res) {
  res.send("you are at /info/mine");
});*/
router.post("/", userController.createUser);
router.get("/", userController.getUsers);
router.post("/login", userController.loginUser);
module.exports = router;
