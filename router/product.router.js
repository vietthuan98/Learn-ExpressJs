var express = require('express');
var router = express.Router();

var controllers = require('../controller/product.controller.js');
router.get('/', controllers.index);

module.exports = router;