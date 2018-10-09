var mongoose = require('mongoose');
var Schema   = mongoose.Schema;

var booksSchema = new Schema({
	'title' : String,
	'author' : String
});

module.exports = mongoose.model('books', booksSchema);
