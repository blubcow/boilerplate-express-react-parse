var express = require('express');
var router = express.Router();
/*
var React = require('react');
var ReactDOMServer = require('react-dom/server');
import App from '../react/app';
*/

// helper functions for our templates
router.use(function helpers(req, res, next) {
	function Url(){
		this.path = function(url) {
			return req.protocol + "://" + req.get('host') + '/' + url;
		};
		this.originalPath = function() {
			return this.path(req.originalUrl);
		};
	};
	req.helpers = {
		url: new Url()
	};
	next();
});

// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
	console.log('Time: ', Date.now());
	next();
});

// define routes for our server
router.get('/about', function(req, res) {
	res.send('test');
});

// all other routes will be processed by react-route
router.get('/backend/*', function(req, res) {
	/*res.render('test', {
		body: ReactDOMServer.renderToString( <App/> )
	});*/
	res.render('one-page-app', req.helpers);
});

// Catch 404 and forward to error handler
router.use(function(req, res, next){
	const err = new Error('Not Found');
	err.status = 404;
	next(err);
});

// Error handler
router.use(function(err, req, res, next){
	res.status(err.status || 500);
	res.render('error-404', {
		message: err.message
	});
});

//
module.exports = router;