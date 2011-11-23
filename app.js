var http = require('http');
var port = process.argv[2] || 80;

http.createServer(function(req, res){
	res.writeHead(200, { 'Content-Type': 'text/plain'}); 
	res.end(req.connection.remoteAddress);
}).listen(port);

console.log('Get-IP-Server listening on ' + port);
