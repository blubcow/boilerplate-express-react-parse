var Parse = require('parse');

Parse.initialize(process.env.PARSE_APP_ID);
Parse.serverURL = process.env.PARSE_SERVER_URL;

module.exports = Parse;

