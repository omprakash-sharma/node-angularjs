var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');
var config = require('./port_config');
var app = express();

app.use(bodyParser.urlencoded({extended: true }));
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use('/scripts', express.static(__dirname + '/scripts'));
app.use('/app', express.static(__dirname + '/app'));
app.use('/css', express.static(__dirname + '/css'));
app.get('/*', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

app.listen(config.port, function(err){
  if(err){
    console.log(err)
  }else{
	console.log("Listening on port 8081");
  }
})