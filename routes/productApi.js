var express = require("express");
var router = express.Router();
const productApiController = require("../controllers/prdouctApi");
router.get("/", productApiController.getProduct);
router.post("/", productApiController.createProduct);
module.exports = router;
