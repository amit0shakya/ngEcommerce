var express = require('express');
var router = express.Router();
var config = require('../config/dbconfig');
var knex = require('knex')(config);
var bookshelf = require('bookshelf')(knex);

router.get('/products',function(req,res){
	
	res.send('products');
})

router.post('/addproduct',function(req,res){
	res.sed('add products');
})	

module.exports = router