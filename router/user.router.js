var express = require('express');
var router = express.Router();

var controllers = require('../controller/user.controller.js');
var validate = require('../validation/user.validation.js');

router.get('/', controllers.index);

router.get('/cookie', function(req, res, next) {
	res.cookie('user-id', 1234);
	res.send('Cookie here');
});

//query parameter	
router.get('/search', controllers.search);

//post method
router.get('/create', controllers.create);

//body-parser expressJs
router.post('/create', validate.postCreate, controllers.postCreate);

//routing expressJs
router.get('/:id', controllers.view);

module.exports = router;