var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var server = app.listen(4000, function(){});
var http = require('http');
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
var mysql = require('mysql');

// var con = mysql.createConnection({
//   host: "localhost",
//   user: "myusername",
//   password: "mypassword"
// });

// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

var result = {};
app.get('/getLogin', function(req, res) {
	var login=[];
	login.username = req.query.username;
	login.password = req.query.password;

	if(login.username=='principal'&&login.password=='password'){
		result.userID = 'PRI01';
		result.FirstName = 'Muktika';
		result.LastName = 'Poddar';
		result.BirthDate = '12/16/1992';
		result.Address = 'ABC apartment';
		result.PhoneNo = '1234567899';
		result.email = 'muktika.poddar@tamu.edu';	
		if(result.userID.substring(0, 3)=='PRI')
			result.role = "PRINCIPAL";
		console.log(result);
		res.send(JSON.stringify({"status": 200, "response": result}));
	}
	if(login.username=='teacher'&&login.password=='password'){
		result.userID = 'TEMP121692';
		result.FirstName = 'Muktika';
		result.LastName = 'Poddar';
		result.BirthDate = '12/16/1992';
		result.Address = 'ABC apartment';
		result.PhoneNo = '1234567899';
		result.email = 'muktika.poddar@tamu.edu';	
		if(result.userID.substring(0, 2)=='TE')
			result.role = "TEACHER";
		console.log(result);
		res.send(JSON.stringify({"status": 200, "response": result}));
	}

	if(login.username=='student'&&login.password=='password'){
		result.userID = 'STMP161292';
		result.FirstName = 'Muktika';
		result.LastName = 'Poddar';
		result.BirthDate = '12/16/1992';
		result.Address = 'ABC apartment';
		result.PhoneNo = '1234567899';
		result.email = 'muktika.poddar@tamu.edu';	
		if(result.userID.substring(0, 2)=='ST')
			result.role = "STUDENT";
		console.log(result);
		res.send(JSON.stringify({"status": 200, "response": result}));
	}

});

app.get('/getSignup', function(req, res) {
	//console.log(req.query);

	if(req.query.role == 'STUDENT'){
		//student signup
		console.log(req.query.role, req.query.firstName);
		// var student = [];
		// student.firstName = req.query.firstName;
		// // student.lastName = 'Poddar';
		// // student.Username = 'muktikap'; //notunique
		// // student.Password = 'password';
		// // student.BirthDate = date;
		// // student.BirthDate = '12/16/1992';
		// // student.Address = 'ABC apartment';
		// // student.PhoneNo = '1234567899';
		// // student.email = 'muktika.poddar@tamu.edu';
		// student.IsActive = false;
		//add additional details

		// var userid = 'STMP161292'; //form it
		// var responseMessage = "";
		//create in MySQL - send reponse to UI
		// con.connect(function(err) {
		//   if (err) throw err;
		//   con.query("SELECT * FROM users where userID='"+userid+"'", function (err, result) {
		//     if (err){
		//     	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));
		//     }else{
		//     	console.log(result);
		//     	if(result.length > 0){
		//     		//check for new userID until unique//create new record
		//     	}
		//     	if(result.length == 0){
		//     		con.query("insert into users", function (err, result) {
		// 			    if (err) 
		// 			    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));
		// 			    else{
		// 			    	console.log(result);
		// 			    	res.send(JSON.stringify({"status": 200, "response": "OK"}));
		// 			    }
		// 			  });
		//     	}
		    	
		//     }
		    
		//   });
		// });
	}elseif(req.query.role == 'TEACHER'){
		console.log(req.query.role, req.query.firstName);
		// var teacher = [];
		// teacher.FirstName = 'Muktika';
		// teacher.LastName = 'Poddar';
		// teacher.Username = 'muktikap'; //notunique
		// teacher.Password = 'password';
		// teacher.BirthDate = date;
		// teacher.BirthDate = '12/16/1992';
		// teacher.Address = 'ABC apartment';
		// teacher.PhoneNo = '1234567899';
		// teacher.email = 'muktika.poddar@tamu.edu';
		// teacher.IsActive = false;
		//teacher.cohort

		// var userid = 'TEMP121692'; //form it
		// var responseMessage = "";
		//create in MySQL - send reponse to UI
		// con.connect(function(err) {
		//   if (err) throw err;
		//   con.query("SELECT * FROM users where userID='"+userid+"'", function (err, result) {
		//     if (err){
		//     	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));
		//     }else{
		//     	console.log(result);
		//     	if(result.length > 0){
		//     		//check for new userID until unique//create new record
		//     	}
		//     	if(result.length == 0){
		//     		con.query("insert into users", function (err, result) {
		// 			    if (err) 
		// 			    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));
		// 			    else{
		// 			    	console.log(result);
		// 			    	res.send(JSON.stringify({"status": 200, "response": "OK"}));
		// 			    }
		// 			  });
		//     	}
		    	
		//     }
		    
		//   });
		// });

	}
	//On UI, if response= ok.
	//teacher or student, display - wait for approval and link to contact us
	
});

// app.get('/getTeachers', function(req, res) {
// 	console.log(req.query);

// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM users where userID like 'TE%'", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getStudents', function(req, res) {
// 	console.log(req.query);
// 	//based on teacher id - find crn then find all students in that crn
// 	//if principal - take crn and based on entered crn, show all students
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM users bla bla", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getUser', function(req, res) {
// 	console.log(req.query);
// 	//take userID from cookie
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM users where userID = '"+$userid+"'", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	//		Send user self details to display on profile
// 	// 	  });
// 	// 	});
// });

// app.get('/getEvents', function(req, res) {
// 	console.log(req.query);
// 	//take month year and select query filter in events with where clause to get all isAcitve events of that month and year i.e between 
// 	//- 01/xx/YYYY to 31/xx/YYYY
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM events where IsActive = 'true' AND Date between xx and yy", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getAttendance', function(req, res) {
// 	console.log(req.query);
// 	//take userID of student & month and year and find in attendance table
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM events where userid = ABC AND Date between xx and yy", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getSentNotif', function(req, res) {
// 	console.log(req.query);
// 	//take userID 
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM events where userid = userid", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getRecNotif', function(req, res) {
// 	console.log(req.query);
// 	//take userID 
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM notify where recepientid = userid", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

// app.get('/getapprove', function(req, res) {
// 	// con.connect(function(err) {
// 	//   if (err)
// 	//   	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	//   con.query("SELECT * FROM users where IsActive = 'false'", function (err, result) {
// 	// 	    if (err)
// 	// 	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

// 	// 	    console.log(result);
// 	// 	    res.send(JSON.stringify({"status": 200, "response": result}));
// 	// 	  });
// 	// 	});
// });

app.get('/login', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/signup', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

app.get('/forgotpassword', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

