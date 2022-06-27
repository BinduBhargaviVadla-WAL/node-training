var express = require("express");
var router = express.Router();
const bookController = require("../controllers/book");
router.get("/", bookController.getBooks);
router.post("/", bookController.createBook);
router.get("/bookandauthor", bookController.getBooksWithAuthor);
router.get("/bookwithcondition/:name", bookController.getBookWithCondition);
router.get("/isloggedin", function (req, res) {
  //let { isLoggedIn, city, hobby, username } = req.session;
  res.send(`username =${req.session.username} and city = ${req.session.city}`);
});

module.exports = router;
