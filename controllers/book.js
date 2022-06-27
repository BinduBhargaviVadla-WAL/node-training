const Book = require("../models/book");
exports.createBook = (request, response) => {
  const { name, description, author } = request.body;
  let bookOb = new Book({ name, description, author });
  bookOb.save((err) => {
    if (err) {
      response.json(err);
    } else {
      response.json({ status: 1, data: { msg: "Book created" } });
    }
  });
};
exports.getBooks = (req, res) => {
  Book.find((err, book_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 1, data: { book_list } });
    }
  });
};
exports.getBooksWithAuthor = (req, res) => {
  Book.find()
    .populate("author")
    .exec((err, book_list) => {
      if (err) {
        res.json(err);
      } else {
        res.json({ status: 1, data: { book_list } });
      }
    });
};
exports.getBookWithCondition = (req, res) => {
  Book.find({ name: req.params.name }).exec((err, book_list) => {
    if (err) {
      res.json(err);
    } else {
      res.json({ status: 1, data: { book_list } });
    }
  });
};
