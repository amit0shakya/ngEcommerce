var bookshelf= requre('bookshelf');
var Pimages = requre()

var Gallery = bookshelf.Model.extend({
  tableName: 'gallery',
  images:function(){
  	return this.hasMany(Pimages)
  }
});