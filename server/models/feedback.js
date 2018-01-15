var bookshelf= require('bookshelf');

var Feedbacks = bookshelf.Model.extend({
  tableName: 'feedback',
  posts:function(){
  	return this.hasMany(FeedbackCopy)
  }
});