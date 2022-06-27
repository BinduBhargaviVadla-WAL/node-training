const { add, multiply } = require("../libs/calculations");
const testAdd = (req, res) => {
  let a = 4,
    b = 5,
    result = 9;
  if (add(a, b) === result) {
    res.send("add test pass");
  } else {
    res.send("add test fail");
  }
};
const testMultiply = (req, res) => {
  let a = 4,
    b = 5,
    result = 20;
  if (multiply(a, b) === result) {
    res.send("multiply test pass");
  } else {
    res.send("multiply test fail");
  }
};
module.exports = { testAdd, testMultiply };
