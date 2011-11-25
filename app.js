var http = require('http');
var port = process.argv[2] || process.env.PORT || 80;

http.createServer(function(req, res){
	var ip;
	if(typeof req.headers["x-forwarded-for"] === 'string')
		ip = req.headers["x-forwarded-for"];
	else
		ip = req.connection.remoteAddress;
	res.writeHead(200, { 'Content-Type': 'text/plain'}); 
	res.end(ip);
}).listen(port);

console.log('Get-IP-Server listening on ' + port);
