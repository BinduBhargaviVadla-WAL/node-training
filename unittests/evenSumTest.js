const { evensum } = require("../libs/evensum");
const testevensum = (req, res) => {
  let a = 2,
    b = 4,
    c = 6,
    result = 12;
  if (evensum(a, b, c) === result) {
    res.send("First three Even Sum program success");
  } else {
    res.send("First three Even Sum program fail");
  }
};
module.exports = { testevensum };
