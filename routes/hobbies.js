var express = require("express");
var router = express.Router();
let hobbies = [
  {
    hobby: "coding",
    description: "Coding is a good skill.",
    doc: "12 - 3 - 2022",
  },
];
router.get("/", (req, res) => {
  res.json(hobbies);
});
router.post("/", (req, res) => {
  let { hobby, description, doc } = req.body;
  hobbies.push({ hobby, description, doc });
  res.json({ status: "Hobby added" });
});
router.delete("/:indexToDelete", function (req, res) {
  console.log(req.params.indexToDelete);
  let newHobbies = hobbies.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      return false;
    } else {
      return true;
    }
  });
  hobbies = newHobbies;
  res.json({ status: "Hobby Deleted Sucessfully" });
});
router.get("/clearall", function (req, res) {
  hobbies = [];
  res.json({ status: "All Hobbies are Deleted" });
});
module.exports = router;
