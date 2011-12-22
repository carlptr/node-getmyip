var http = require('http'),
	url = require('url');
var port = process.argv[2] || process.env.PORT || 80;

var appinfo;

try
{
	var contents = require('fs').readFileSync('./package.json');
	appinfo = JSON.parse(contents);
} catch(ex)
{
		console.log('Error on parsing package.json %s', ex);
		appinfo = { homepage : 'http://github.com/carlptr/node-getmyip'};
}

http.createServer(function(req, res){
	var ip;
	if(typeof req.headers["x-forwarded-for"] === 'string')
		ip = req.headers["x-forwarded-for"];
	else
		ip = req.connection.remoteAddress;

	var params = url.parse(req.url, true);
	if(params.pathname === '/about'){

		res.writeHead(302, { 'Location': appinfo.homepage });
		return res.end();
	}

	var format = params.query.format || 'plain';
	if(format == 'jsonp' && params.query.jsonp) {
		res.writeHead(200, { 'Content-Type': 'application/json'}); 
		res.end(params.query.jsonp + '({ip: \'' + ip + '\'})');
	} else if(format == 'json'){
		res.writeHead(200, { 'Content-Type': 'application/json'}); 
		res.end('{ip: \'' + ip + '\'}');
	} else{
		res.writeHead(200, { 'Content-Type': 'text/plain'}); 
		res.end(ip);	
	}
}).listen(port);

console.log('Get-IP-Server listening on ' + port);
