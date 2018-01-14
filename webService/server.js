var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

//controllers
var postAction = require('./controllers/postController');

//port setup
var port = process.env.PORT || 3000;
app.set('port', port);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/', express.static('./public'));
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    res.set("Content-Type", "application/json");
    next();
});


app.get('/check', postAction.list_all_posts);


app.listen(port);

console.log('service is listening on port ' + port);