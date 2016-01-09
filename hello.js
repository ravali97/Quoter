var express=require('express');
var app=express();
//var port = process.env.PORT || 1337;
app.use(express.static('public'));
app.get('/',function(req,res){


res.sendFile(__dirname + '/public/index.html');

});
var server=app.listen(3000,function(){
	console.log("server started listening");
});
