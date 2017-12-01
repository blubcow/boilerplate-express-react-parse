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
	res.render('test', {
		body: ReactDOMServer.renderToString( <App/> )
	});
});

// define the about route
router.get('/about', function(req, res) {
	res.send('test');
});

module.exports = router;