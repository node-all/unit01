var express = require('express');
var app = express();

app.get('/sayhello', function(req, res) {
  res.send('Hello world');
});

app.get('/saygoodbye', function(req, res) {
  res.send('Bye Bye');
});

var server = app.listen(3000, function() {
  var host = server.address().address;
  var port = server.address.port;
  console.log(`App listening at http://%s:%s`, host, port);
});
