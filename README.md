# Node-GetMyIp
A simple [Node](http://nodejs.org) application to return the IP of the client.

## Feature

- Return the IP of the client by using the client connection or by using the header _x-forwarded-for_ in either plain text, JSON or JSONP format.

## Installation

1. Download [application](https://github.com/carlptr/node-getmyip/zipball/master)
2. Extract zip to a new directory where you want the app to reside

## Usage

	$ node app.js [port]

Default port is 80. You can specify a different port as command line argument or by defining an environment variable __PORT__.

To retrieve the IP use one of the following methods depending on the desired format:
<table>
	<tr>
		<th>Format</th>
		<th>URL</th>
		<th>Example</th>
	</tr>
	<tr>
		<td>Plain text</td>
		<td>http://your-server:[port]</td>
		<td><a href="http://getmyip.heroku.com">Example</a></td>
	</tr>
	<tr>
		<td>JSON</td>
		<td>http://your-server:[port]/?format=json</td>
		<td><a href="http://getmyip.heroku.com/?format=json">Example</a></td>
	</tr>
	<tr>
		<td>JSONP</td>
		<td>http://your-server:[port]/?format=jsonp&jsonp=callback</td>
		<td><a href="http://getmyip.heroku.com/?format=json&jsonp=callback">Example</a></td>
	</tr>
</table>

The created JSON output looks like the following:
```{ip: '127.0.0.1'}```

## Try it out

- Powered by [Heroku](http://heroku.com): [GetMyIP](http://getmyip.heroku.com)
