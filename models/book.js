var mongoose = require("mongoose");
var BookSchema = new mongoose.Schema({
  name: { type: String, required: true, maxlength: 100 },
  description: { type: String, required: true, maxlength: 500 },
  author: { type: mongoose.Schema.ObjectId, ref: "Author", required: true },
});
module.exports = mongoose.model("Book", BookSchema);
