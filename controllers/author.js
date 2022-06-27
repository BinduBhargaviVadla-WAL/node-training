const Author = require("../models/author");
function getAuthor(req, res) {
  Author.find((err, authors_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json(authors_list);
    }
  });
}
function createAuthor(req, res) {
  console.log(req.body);
  let { first_name, last_name, dob, dod } = req.body;
  let authorObject = new Author({
    first_name,
    last_name,
    dob,
    dod,
  });
  authorObject.save((error) => {
    if (error) {
      res.json(error);
    } else {
      res.json("Added author details successfully");
    }
  });
}
function deleteAuthor(req, res) {
  Author.findByIdAndDelete(req.params._id, function (err) {
    if (err) {
      res.json(err);
    } else {
      res.json(`Author with _id as ${req.params._id} is removed`);
    }
  });
}
module.exports = { getAuthor, createAuthor, deleteAuthor };
