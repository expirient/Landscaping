var express = require('express');
var app = express();
var bodyParser = require("body-parser");
var fs = require("fs");

app.use(bodyParser.urlencoded({extended: true}));

app.use(express.static(__dirname));
app.get('/',function(req,res){
	res.sendFile(__dirname + '/index.html');
});

app.post('/regForm',function(req,res){
	res.sendFile(__dirname + '/formReg.html');
});

app.post('/logForm',function(req,res){
	res.sendFile(__dirname + '/formLog.html');
});

app.post('/isRegistered',function(req,res){

	var firstN = req.body.firstname;
	var lastN = req.body.lastname;
	var pass = req.body.password;

	var file = require("./data.json");// . означає що з текучого обьєкту
		for(var key in file){
			for(var value in file[key]){
				if(file[key][value] == firstN || file[key][value] == lastN){
					res.send('This user already exists...');
					return;
				}
			}
		}
		file.push(req.body);// обєкт файлу
	/*console.log(file);*/
	
	var str = JSON.stringify(file);
	fs.writeFileSync('data.json',str);
	res.send('Registration completed successfully!');
});

app.post('/trueLogin',function(req,res){

	var firstN = req.body.firstname;
	var pass = req.body.password;

	var file = require("./data.json");// . означає що з текучого обьєкту
	
	for(var key in file){
			for(var value in file[key]){
				//console.log(file[key].firstname);
				if(file[key].firstname == firstN && file[key].password == pass){
					res.send(firstN);
					return;
				}
			}
	}
		res.send('Your Login or Password is wrong, please try again...');
});

app.post('/regular',function(req,res){
	res.sendFile(__dirname + '/regular.html');
});
app.post('/english',function(req,res){
	res.sendFile(__dirname + '/english.html');
});
app.post('/fr',function(req,res){
	res.sendFile(__dirname + '/fr.html');
});
app.post('/jap',function(req,res){
	res.sendFile(__dirname + '/jap.html');
});
app.post('/eco',function(req,res){
	res.sendFile(__dirname + '/eco.html');
});
app.post('/flowers',function(req,res){
	res.sendFile(__dirname + '/flowers.html');
});
app.post('/trees',function(req,res){
	res.sendFile(__dirname + '/trees.html');
});
app.post('/bushes',function(req,res){
	res.sendFile(__dirname + '/bushes.html');
});
app.post('/scenery',function(req,res){
	res.sendFile(__dirname + '/scenery.html');
});
app.post('/blades',function(req,res){
	res.sendFile(__dirname + '/blades.html');
});
app.post('/rakes',function(req,res){
	res.sendFile(__dirname + '/rakes.html');
});
app.post('/pruners',function(req,res){
	res.sendFile(__dirname + '/pruners.html');
});
var port = process.env.PORT;
app.listen(port || 8080);
console.log("Server is runing!");

