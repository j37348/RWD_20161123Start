var http = require("http");
var express = require("express");
var app = express();
var server = http.createServer(app);

app.get("/",function(req,res){
	res.send("Hello Express");
	res.end();
});
server.listen(3333);