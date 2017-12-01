require('dotenv').load();
var express = require('express');
var path = require('path');
var routes = require('./routes');
var parseServer = require('../parse/server.js');

/**
 * =========================================================
 * Setup Express App
 */

//
var app = express();
app.disable('x-powered-by');

// View engine setup
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Public files
app.use('/public', express.static( path.join(__dirname, '../../public') ));
app.use('/bin', express.static( path.join(__dirname, '../../bin') ));

/**
 * =========================================================
 * Parse Routing
 */

// Serve the Parse API on the /parse URL prefix
var mountPath = process.env.PARSE_MOUNT || '/parse';
app.use(mountPath, parseServer);

/**
 * =========================================================
 * Basic Routing & Error Pages
 */

// Routes
app.use('/', routes);

// Catch 404 and forward to error handler
app.use(function(req, res, next){
  const err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// Error handler
app.use(function(err, req, res, next){
  res
  	.status(err.status || 500)
    /*.render('error', {
      message: err.message
    });*/
    .send(err.message)
});

/**
 * =========================================================
 * Start HTTP Server
 */

// Environment
var PORT = process.env.PORT || 8080;

// Start Server
var httpServer = require('http').createServer(app);
httpServer.listen(PORT, function() {
    console.log('server running on port ' + PORT + '.');
});

/**
 * =========================================================
 * Add Live Query
 */

// This will enable the Live Query real-time server
parseServer.createLiveQueryServer(httpServer);
