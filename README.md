# Node-GetMyIp
A simple [Node](http://nodejs.org) application to return the IP of the client.

## Feature

- Return the IP of the client by using the client connection or by using the header _x-forwarded-for_

## Installation

	1. Download [application](https://github.com/carlptr/node-getmyip/zipball/master)
	2. Extract zip to a new directory where you want the app to reside

## Usage

	$ node app.js [port]

Default port is 80. You can specify a different port as command line argument or by defining an environment variable __PORT__.

Point a brower to http://your-server:[port] and the HTTP reponse will contain your client IP __only__.

## Try it out

Powered by Heroku: [GetMyIP](http://getmyip.heroku.com)
