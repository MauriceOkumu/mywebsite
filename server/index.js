var express = require('express');
var path = require('path');
var morgan = require('morgan');
var bodyparser = require('body-parser');

var port = 3009;

var server = express();
server.use(morgan('dev'));
server.use(bodyparser.json());
server.use(bodyparser.urlencoded({extended: true}));
server.use(express.static(__dirname + '/../client'));

server.listen(port, function() {
  console.log(' The server is listening now on port :',port);	
});
