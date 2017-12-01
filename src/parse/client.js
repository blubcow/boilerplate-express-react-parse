var Parse = require('parse');

Parse.initialize(process.env.PARSE_APP_ID);
Parse.serverURL = process.env.PARSE_SERVER_URL;
if(typeof window != 'undefined'){
	window.Parse = Parse;
}

module.exports = Parse;

