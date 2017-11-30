var express = require('express');
var router = express.Router();
import React from 'react';
var ReactDOMServer = require('react-dom/server');
import App from '../react/app';

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});

// define the home page route
router.get('/', function(req, res) {
	
  	res.send('<html><head><script src="./bin/react-bundle.js"></script></head><body id="react-app">'+
  			ReactDOMServer.renderToString( <App/> )+
  			'</body></html>');
});

// define the about route
router.get('/about', function(req, res) {
	//res.send('About birds');
	res.send('test');
});

module.exports = router;