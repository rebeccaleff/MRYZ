var express = require('express');
var app = express();

app.get('/', function(req, res) {
  res.send({
    "Output": "Testing this get request!"
  });
});

app.post('/', function(req, res) {
  res.send({
    "Output": "Testing this post request!"
  });
});


// Export your Express configuration so that it can be consumed by the Lambda handler
module.exports = app
