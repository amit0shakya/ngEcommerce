	var express = require('express');
	var router = express.Router();
	var config = require('../config/dbconfig');
	var knex = require('knex')(config);
	var bookshelf = require('bookshelf')(knex);

	var product = bookshelf.Model.extend({
		tableName: 'product'
	})
	
	router.get('/products',function(req,res){
		console.log('products')
		res.send('products');
	})
	
	router.post('/addproduct',function(req,res){
		
		console.log(req.body,"<<<data")

		var _name=req.body.name;
		var _price=req.body.price;
		var _qty=req.body.qty;
		var _cat=req.body.catagoery;
		var _off=req.body.offer;
		var _key=req.body.keywords;
		var _img=req.body.image;

		product.forge({
			'name':_name,
			'price':1000,
			'quantity':_qty,
			'offer':_off,
			'catagoery':_cat,
			'keywords':_key,
			'image':'image path',
			'approval':'false'
		})
		.save()
		.then(function(row){
			res.json({error:false,data:row})
		})
		.catch(function(err){
			res.status(500)
			.json({error:true,data:err});
		})

	})	


module.exports = router