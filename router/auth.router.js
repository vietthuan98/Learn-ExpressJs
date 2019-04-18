var express = require('express');
var router = express.Router();
var controllers = require('../controller/auth.controller.js');

router.get('/', controllers.login);

router.post('/', controllers.postLogin);

module.exports = router;