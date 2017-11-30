var express = require('express');
var path = require('path');
var routes = require('./routes');

//
var app = express();
app.disable('x-powered-by');

// View engine setup
//app.set('views', path.join(__dirname, '../views'));
//app.set('view engine', 'ejs');

// Public files
app.use('/public', express.static('public'));
app.use('/bin', express.static('bin'));

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

// Environment
var PORT = process.env.PORT || 8080;

// Start Server
app.listen(PORT, function(){
	console.log('Listening on port '+PORT);
});

//
module.exports = app;