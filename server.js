var http= require("http");
var port = process.env.PORT || 3000;

var server = http.createServer(function(req,res){
res.end("hello");
});

server.listen(port);
