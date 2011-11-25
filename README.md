# Node-GetMyIp
A simple [Node](http://nodejs.org) application to return the IP of the client.

## Feature

- Return the IP of the client by using the client connection or by using the header _x-forwarded-for_

## Installation

	$ mkdir GetMyIP
	$ cd GetMyIP
	$ wget https://github.com/carlptr/node-getmyip/raw/master/app.js

## Usage

	$ node app.js [port]

Default port is 80.

Point a brower to http://your-server:[port] and the HTTP reponse will contain your client IP __only__.

## Try it out

Powered by Heroku: [GetMyIP](http://getmyip.heroku.com)
