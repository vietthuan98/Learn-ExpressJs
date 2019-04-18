const express = require('express');
const pug = require('pug');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');

const userRouter = require('./router/user.router.js');


const app  = express();
const port = 3000;

app.use(express.static('public'));	//Save file static in Public folder
app.set('view engine','pug');
app.set('views','./views');

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(cookieParser());


app.get('/', function(req, res) {
	res.send('Hellllo world');
});

app.use('/user', userRouter);


app.listen(port, function() {
	console.log('Example app listening on port' + port);
});