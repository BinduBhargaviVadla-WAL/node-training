var express = require("express");
var router = express.Router();

router.get("/", function (req, res, next) {
  res.send("Welcome to the index page");
});

router.get("/fibonacci", function (req, res) {
  let n1 = 0,
    n2 = 1,
    nextTerm;
  let fibSeries = [];
  for (let i = 1; i <= 10; i++) {
    fibSeries.push(n1);
    nextTerm = n1 + n2;
    n1 = n2;
    n2 = nextTerm;
  }
  res.json(fibSeries);
});
router.get("/fibonacci/:min/:max", function (req, res) {
  console.log(req.params);
  let minNumber = parseInt(req.params.min);
  let maxNumber = parseInt(req.params.max);
  if ((minNumber == 0) & (maxNumber == 1) || maxNumber == 0) {
    res.json([minNumber, maxNumber]);
  } else {
    let n1 = 0,
      n2 = 1,
      nextTerm = 0;
    let fibSeries = [];
    while (nextTerm <= maxNumber) {
      nextTerm = n1 + n2;
      if (nextTerm >= minNumber && nextTerm <= maxNumber) {
        fibSeries.push(nextTerm);
      }
      n1 = n2;
      n2 = nextTerm;
    }
    res.json(fibSeries);
  }
});

module.exports = router;
