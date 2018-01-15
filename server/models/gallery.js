var bookshelf= require('bookshelf');

var Gallery = bookshelf.Model.extend({
  tableName: 'gallery',
  images:function(){
  	return this.hasMany(Pimages)
  }
});