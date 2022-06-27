/* fisrt we create a json token and send to user browser
browser sends this token back on every request to server
the token can come from any person but only a valid token can be 
decoded using th epassword
in every json token i can send some data like userid or email.
this token can be decoded at the browser also
the token can only be verified if you enter the right password this is only with server.*/
const jwt = require("jsonwebtoken");
module.exports = (req, res, next) => {
  console.log("Came in middleware");
  const token = req.header("token");
  if (!token) {
    res.status(401).json({ status: 0, debug_msg: "token not found" });
  }
  try {
    console.log("Came in try");
    const decodedToken = jwt.verify(token, "secret_string");
    console.log(decodedToken);
    next();
  } catch (error) {
    res.status(500).json({ status: 0, debug_msg: "Token sent is not valid" });
  }
};
