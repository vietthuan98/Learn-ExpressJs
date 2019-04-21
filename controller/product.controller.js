var db = require('../lowdb.js');

module.exports.index = function(req, res, next) {
	var page = parseInt(req.query.page) || 1;
	var perpage = 8;

	var start = (page - 1) * perpage;
	var end = page * perpage;
	var pageBegin = 0
	var numberOfProduct = db.get('products').value().length;
	var numberOfPage = Math.ceil(numberOfProduct / perpage); 		
	console.log(numberOfPage);
	res.render('product/product.pug', {
		products: db.get('products').value().slice(start, end),
		pageBegin: pageBegin,
		numberOfPage: numberOfPage
	});
};