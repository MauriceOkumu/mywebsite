var express = require('express');

var port = 3009;
var server = express();

server.listen(port, function() {
  console.log(' The server is listening now on port :',port);	
})
