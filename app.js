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


app.get('/', function(req,res){
	res.render('home');
});

app.use("/",router);

app.listen(3000,function(){
  console.log("Live at Port 3000");
});


