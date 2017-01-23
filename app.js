var PORT = 3000;

var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

var app = express();
var trashes = require('./routes/trashes');
var http = require('http').Server(app);

mongoose.connect('mongodb://shreyashirday:myswapp2014@ds127389.mlab.com:27389/heroku_4rjn6gk7', function(err){
  if (err){
    console.log('unable to connect to MongoDB', err);
    return;
  }
  console.log('Successfully connected to MongoDB');
});

http.listen(PORT, function(){
  console.log('listening on PORT 3000');
});

app.use('/trash', trashes);

module.exports = app;
