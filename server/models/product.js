var bookshelf= require('bookshelf');

var Product = bookshelf.Model.extend({
  tableName: 'product'
});

// /module.exports = Product;