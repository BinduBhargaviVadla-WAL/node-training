const { body, validationResult } = require("express-validator");
let userName = [];
function getUser(req, res) {
  res.json(userName);
}
const createUser = [
  body("userName")
    .trim()
    .custom((value) => {
      if (value.length === 0) {
        throw new Error(
          "Custom validator says that userName is required not empty"
        );
      }
      if (value.length < 5 || value.length > 15) {
        throw new Error(
          "Custom validator says that userName in range 5 to 15 characters are allowed"
        );
      }
      if (value.includes("*") || value.includes("&")) {
        throw new Error(
          "Custom validator says that userName contains & and * are not allowed"
        );
      }
      return true;
    }),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      userName.push(req.body);
      res.json({ status: "adding username complete" });
    }
  },
];
module.exports = { getUser, createUser };
