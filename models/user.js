var mongoose = require("mongoose");
var UserSchema = new mongoose.Schema({
  name: { type: String, maxLength: 20 },
  age: { type: Number },
  dob: { type: Date },
  password: { type: String },
  email: { type: String },
});
module.exports = mongoose.model("User", UserSchema);
