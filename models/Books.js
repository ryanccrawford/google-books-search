var mongoose = require("mongoose");
var Schema = mongoose.Schema;

var BooksSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  link: {
    type: String,
    required: true
    },
  image: {
        type: String,
        required: false
    },
    authors: {
        type: Array,
        required: true
    },
    description: {
        type: String,
        required: false
    }
    }
});

var Books = mongoose.model("Books", BooksSchema);
module.exports = Books;
