const { body, validationResult } = require("express-validator");
let tweet = [
  {
    title: "initial tweeet",
    tweetBody: "body of tweet",
    doc: "",
    author: "",
    category: "music",
  },
];
function getTweet(req, res) {
  res.json(tweet);
}
const createTweet = [
  body("title")
    .trim()
    .isLength({ min: 5, max: 50 })
    .withMessage("in range of 5 to 50 characters")
    .isAlphanumeric()
    .withMessage(
      "Only alphabets and numbers allowed. No special characters allowed"
    ),
  body("tweetBody")
    .trim()
    .isLength({ min: 5, max: 200 })
    .withMessage("in range of 5 to 200 characters")
    .escape(),
  body("author")
    .trim()
    .isLength({ min: 5, max: 100 })
    .escape()
    .withMessage("in range of 5 to 100 characters"),
  (req, res) => {
    const errors = validationResult(req);
    console.log(errors);
    if (!errors.isEmpty()) {
      res.json({ status: 0, debug_data: errors });
    } else {
      console.log(req.body);
      let { title, tweetBody, doc, author, category } = req.body;
      tweet.push({ title, tweetBody, doc, author, category });
      res.json({ status: "adding tweet complete" });
    }
  },
];
function deleteTweet(req, res) {
  console.log(req.params.indexToDelete);
  let newTweet = tweet.filter((val, index) => {
    if (index === parseInt(req.params.indexToDelete)) {
      console.log("Came in return false");
      return false;
    } else {
      return true;
    }
  });
  console.log(newTweet);
  tweet = newTweet;
  console.log(tweet);
  res.json({ status: "Successfully deleted todos" });
}
function deleteAll(req, res) {
  tweet = [];
  res.json("Delete All");
}
module.exports = { getTweet, createTweet, deleteTweet, deleteAll };
