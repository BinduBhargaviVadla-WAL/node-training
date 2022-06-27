function productsIndex(req, res) {
  res.send("we are at base route of products");
}
function productsDetails(req, res) {
  res.send("We are at details page produts");
}
module.exports = { productsDetails, productsIndex };
