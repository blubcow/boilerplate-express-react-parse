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
