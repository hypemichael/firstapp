
var http= require("http"); 
var port = process.env.PORT || 3000;
var request = require('request');
xml2js = require('xml2js');
 
var parser = new xml2js.Parser({explicitArray : false});

 
http.createServer(function(req, res) {  
 res.setHeader('Access-Control-Allow-Origin', '*');
  var url = 'http://pass.gear.host/Social_Studies.xml';
  
  request(url, function (error, response, body) {
  if (!error && response.statusCode == 200) {
	  parser.parseString(body, function (err, result) {
        res.end(JSON.stringify(result));
    });
  
  }
  });
}).listen(port);
