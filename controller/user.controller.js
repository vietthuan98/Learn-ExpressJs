const shortid = require('shortid'); 	//Set Id for records in db

const db = require('../lowdb.js')

module.exports.index = function(req, res) {
	res.render('user/index.pug', {
		users: db.get('users').value()
	});
};

//querry parameter
module.exports.search = function(req, res) {
	var q = req.query.q;
	var matchedUsers = db.get('users').value().filter(function(user) {
		return user.name.toLowerCase().indexOf(q.toLowerCase()) !== -1;
	});
	console.log(matchedUsers);	
	res.render('user/index.pug', {
		users: matchedUsers
	});
};

module.exports.create = function(req, res) {
	res.render('user/create.pug')
};


//body-parser
module.exports.postCreate = function(req, res) {
	req.body.id = shortid.generate();
	db.get('users').push(req.body).write();
	res.redirect('/user');
};

//router parameter
module.exports.view = function(req, res) {
	var id = req.params.id;
	var user = db.get('users').find({id : id}).value();
	res.render('user/view.pug', {
		userSelected: user
	});
};