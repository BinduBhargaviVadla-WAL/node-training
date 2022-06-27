const ProductApi = require("../models/productApi");
function getProduct(req, res) {
  ProductApi.find((err, products_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(products_list);
    }
  });
}
function createProduct(req, res) {
  console.log(req.body);
  let { product_name, inStore, upload_Date, sizes } = req.body;
  let productObject = new ProductApi({
    product_name,
    inStore,
    upload_Date,
    sizes,
  });
  productObject.save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json("Added Product details successfully");
    }
  });
}
function deleteAuthor(req, res) {
  ProductApi.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Product with _id as ${req.params._id} is removed`);
    }
  });
}
module.exports = { getProduct, createProduct, deleteAuthor };
