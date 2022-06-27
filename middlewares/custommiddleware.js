module.exports = (req, res, next) => {
  if (req.params.name) {
    if (req.params.name == "danger") {
      console.log("Came in error");
      res.json({ status: 0, debug_data: "You cannot send danger as name" });
    }
  }
  //pass the request to next function handler
  next();
};
