var express = require('express');
var bodyParser = require('body-parser'); 
var app = express();
var http = require('http');
var port = process.env.PORT || 8000;
app.listen(port);
//var server = app.listen(4000, function(){});
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())
app.use(express.static(__dirname + '/public'));
var mysql = require('mysql');


// var con = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "project"
// });


// con.connect(function(err) {
//   if (err) throw err;
//   console.log("Connected!");
//   // con.query("CREATE TABLE Cohort(ClassNo varchar (6) NOT NULL PRIMARY KEY ,StartMonth int,StartYear int,EndMonth int,EndYear int,CohortDesc varchar (30))", function (err, result) {
//   //   if (err) 
//   //   	console.log("error!");
//   //   else
//   //   	console.log("Connected!");
//   // });
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
	if(login.username=='teacher1'&&login.password=='password'){
		result.userID = 'TEMP000001';
		// result.FirstName = 'Muktika';
		// result.LastName = 'Poddar';
		// result.BirthDate = '12/16/1992';
		// result.Address = 'ABC apartment';
		// result.PhoneNo = '1234567899';
		// result.email = 'muktika.poddar@tamu.edu';	
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
	alert("Hello");
	console.log(req.query.role, req.query.firstName);

	if(req.query.role == 'STUDENT'){
		//student signup
		console.log(req.query.role, req.query.firstName);
		var student = [];
		student.firstName = req.query.firstName;
		student.lastName = req.query.lastName;
		student.username = req.query.username;
		student.password = req.query.password;
		student.dateOfBirth = req.query.dateOfBirth;
		student.address = req.query.address;
		student.phoneNumber = req.query.phoneNumber;
		student.email = req.query.email;
		student.gender = req.query.gender;
		student.fatherName = req.query.fatherName;
		student.motherName = req.query.motherName;
		student.secondPhoneNumber = req.query.secondPhoneNumber;
		student.secondEmail = req.query.secondEmail;
		student.bloodGroup = req.query.bloodGroup;
		student.IsActive = false;
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
	}else if(req.query.role == 'TEACHER'){
		console.log(req.query.role, req.query.firstName);
		var teacher = [];
		teacher.firstName = req.query.firstName;
		teacher.lastName = req.query.lastName;
		teacher.username = req.query.username;
		teacher.password = req.query.password;
		teacher.dateOfBirth = req.query.dateOfBirth;
		teacher.address = req.query.address;
		teacher.phoneNumber = req.query.phoneNumber;
		teacher.email = req.query.email;
		teacher.gender = req.query.gender;
		// teacher.FirstName = 'Muktika';
		// teacher.LastName = 'Poddar';
		// teacher.Username = 'muktikap'; //notunique
		// teacher.Password = 'password';
		// teacher.BirthDate = date;
		// teacher.BirthDate = '12/16/1992';
		// teacher.Address = 'ABC apartment';
		// teacher.PhoneNo = '1234567899';
		// teacher.email = 'muktika.poddar@tamu.edu';
		teacher.IsActive = false;
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

app.get('/getTeachers', function(req, res) {

  	con.query("SELECT * FROM users where userID like 'TE%'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 404, "error": err, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
	});

});

app.get('/getStudents', function(req, res) {
	console.log("here",req.query.ClassNo);
	// if(req.query.ClassNo='')
	// 	req.query.ClassNo='CRN01';

	con.query("SELECT * FROM users where ClassNo='"+req.query.ClassNo+"' && userID like 'ST%'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
	});

});

app.get('/getUser', function(req, res) {

	
  	con.query("SELECT * FROM users where userID = '"+req.query.userID+"' LIMIT 1", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
		
	});
	
});

app.get('/getInactiveUsers', function(req, res) {

  	con.query("SELECT * FROM users where IsActive='0'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
		
	});
	
});

app.get('/getEvents', function(req, res) {

	  con.query("SELECT * FROM ClassEvent where IsActive = '1'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
	  });
});

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

app.get('/getSentNotif', function(req, res) {
	
	con.query("SELECT * FROM notify where UserID = '"+req.query.userID+"'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
	  });
});

app.get('/getRecNotif', function(req, res) {
	con.query("SELECT * FROM notify where RecipientID =  '"+req.query.userID+"'", function (err, result) {
	    if (err)
	    	res.send(JSON.stringify({"status": 200, "response": "ERROR"}));

	    console.log(result);
	    res.send(JSON.stringify({"status": 200, "response": result}));
	  });
});


// app.get('/', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/signup', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

// app.get('/forgotpassword', function (req, res) {
//     res.sendFile(__dirname + '/public/index.html');
// });

app.get('*', function (req, res) {
    res.sendFile(__dirname + '/public/index.html');
});

