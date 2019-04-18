var express = require('express');
var router = express.Router();

var controllers = require('../controller/user.controller.js');

router.get('/', controllers.index);

//query parameter	
router.get('/search', controllers.search);

//post method
router.get('/create', controllers.create);

//body-parser expressJs
router.post('/create', controllers.postCreate);

//routing expressJs
router.get('/:id', controllers.view);

module.exports = router;