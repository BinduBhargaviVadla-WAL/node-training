var mongoose = require("mongoose");
var AuthorSchema = new mongoose.Schema({
  first_name: { type: String, required: true, maxLength: 100 },
  last_name: { type: String, required: true, maxLength: 100 },
  dob: { type: Date },
  dod: { type: Date },
});
module.exports = mongoose.model("Author", AuthorSchema);
