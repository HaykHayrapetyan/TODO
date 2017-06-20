const express = require('express');
const app = express();
const router = require('./router');
const bodyParser = require('body-parser');
const expressValidator = require('express-validator');

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(expressValidator());

app.use(express.static('static'));
app.set('views', './static')
app.set('view engine', 'pug')

app.use('/', router);

app.listen(4500)