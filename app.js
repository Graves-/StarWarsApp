var express = require('express');
var exphbs  = require('express-handlebars');
var http = require("http");
var request = require('request');

var app = express();
var router = express.Router();

//EXPRESS
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');


//SERVE STATIC CONTENT
app.use(express.static('public'));

//RUTA PARA LA RAIZ DE LA APP / INDEX
app.get('/getPeople', function (req, res) {
	request('http://swapi.co/api/people/', function (error, response, body) {
	  if (!error && response.statusCode == 200) {
	    res.send(body); 
	  }else{
	  	res.send("error :(");
	  }
	});
});

app.get('/', function(req,res){
	res.render('home');
});

app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


