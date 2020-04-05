var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var server = app.listen(4000, function(){});
var http = require('http');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));


// app.get('/test', function(req, res) {
// 		res.send(JSON.stringify({"status": 200, "error": null, "response": results}));
// });

