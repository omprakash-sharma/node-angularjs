var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
//var config = require('./port_config');

var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.get('*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(8080, function(err){
  if(err){
    console.log(err)
  }else{
	console.log("Listening on port 8080");
  }
})