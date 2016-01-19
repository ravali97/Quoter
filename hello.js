var express=require('express');
var app=express();
var port = process.env.PORT || 1337;
app.use(express.static('public'));
app.get('/',function(req,res){


res.sendFile(__dirname + '/public/index.html');

});

app.get('/add',function(req,res){


res.sendFile(__dirname + '/public/AddQuote.html');
//res.sendFile(__dirname + '/public/addNewQuote.html');

});

app.get('/view',function(req,res){


res.sendFile(__dirname + '/public/viewQuote.html');

});
app.get('/home',function(req,res){


res.sendFile(__dirname + '/public/index.html');

});


var server=app.listen(port,function(){
	console.log("server started listening");
});
