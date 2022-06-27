const express = require("express");
const router = express.Router();
const evenSumTest = require("../unittests/evenSumTest");
router.get("/", evenSumTest.testevensum);
module.exports = router;
