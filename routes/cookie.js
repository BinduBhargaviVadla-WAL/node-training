var express = require("express");
var router = express.Router();
var custommiddleware = require("../middlewares/custommiddleware");
router.get("/setcookie/:name/:value", [
  custommiddleware,
  function (req, res) {
    res.cookie(req.params.name, req.params.value);
    res.send(
      `cookie with name ${req.params.name} and value ${req.params.value} set`
    );
  },
]);
router.get("/setcookiewithtime/:name/:value/:time", function (req, res) {
  res.cookie(req.params.name, req.params.value, {
    maxAge: req.params.time * 60 * 1000,
  });
  res.send(
    `cookie with name ${req.params.name} and value ${req.params.value} and will expire in ${req.params.time} minutes`
  );
});
router.get("/viewcookies", function (req, res) {
  res.send(req.cookies);
});
router.get("/delete/:name", function (req, res) {
  res.clearCookie(req.params.name);
  res.send(`cookie with name ${req.params.name} is defined`);
});
//Assignemnt
router.get("/setcookiewithcity/:city/:value", function (req, res) {
  res.cookie(req.params.city, req.params.value);
  res.send(`cookie with city name ${req.params.city} set`);
});
router.get("/NameValueTime/:name/:value/:time", function (req, res) {
  res.cookie(req.params.name, req.params.value, {
    maxAge: req.params.time * 60 * 1000,
  });
  res.send(
    `cookie with name ${req.params.name} and value ${req.params.value} and will expire in ${req.params.time} minutes`
  );
});
module.exports = router;
