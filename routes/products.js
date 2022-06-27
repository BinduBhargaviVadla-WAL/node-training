var express = require("express");
var router = express.Router();
var productsController = require("../controllers/products.js");

router.get("/", productsController.productsIndex);
router.get("/details", productsController.productsDetails);
// function productsDetails(req, res) {
//   res.send("We are at details page of produtcs router");
// }
// function productsIndex(req, res) {
//   res.send("We are at base route page of product router");
// }
module.exports = router;
