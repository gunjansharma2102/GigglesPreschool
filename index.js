var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var server = app.listen(4000, function(){});
var http = require('http');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
var mysql = require('mysql');

var con = mysql.createConnection({
  host: "localhost",
  user: "myusername",
  password: "mypassword"
});

con.connect(function(err) {
  if (err) throw err;
  console.log("Connected!");
});

var login=[];
app.get('/login', function(req, res) {
	console.log(req.query);
	login.username = req.query.username;
	login.password = req.query.password;
	
	//check in database
	//if response has 1 row

	// res.send(JSON.stringify({"status": 200, "error": null, "response": results}));

	//else if response has no row
	// res.send(JSON.stringify({"status": 200, "error": null, "response": "ERROR"}));

	//else if error occurs
	// res.send(JSON.stringify({"status": 404, "error": error, "response": "ERROR"}));
});

