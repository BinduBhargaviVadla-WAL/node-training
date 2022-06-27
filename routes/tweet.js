var express = require("express");
var router = express.Router();
const tweetController = require("../controllers/tweet");
router.get("/", tweetController.getTweet);
router.post("/", tweetController.createTweet);
router.delete("/:indexToDelete", tweetController.deleteTweet);
router.put("/deleteAll", tweetController.deleteAll);
module.exports = router;
