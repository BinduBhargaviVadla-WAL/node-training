var mongoose = require("mongoose");
var ProductApiSchema = new mongoose.Schema({
  product_name: { type: String, required: true, maxLength: 100 },
  inStore: { type: Boolean },
  upload_Date: { type: Date },
  sizes: [String],
});
module.exports = mongoose.model("ProductApi", ProductApiSchema);
