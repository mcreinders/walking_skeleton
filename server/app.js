/**
 * Created by user on 1/8/16.
 */
var express = require('express');
var bodyParser = require('body-parser');
var index = require('./routes/index');
var path = require('path');

var app = express();

app.use(express.static(path.join(__dirname, './public')));

var server = app.listen(3000, function() {
    var port = server.address().port;
    console.log('Listening on port: ', port);
});

app.use(bodyParser.json());
app.use('/', index);

module.exports = app;

