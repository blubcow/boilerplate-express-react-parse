var path = require('path');
var Dotenv = require('dotenv-webpack');

var reactConfig = {
	target: 'web',
	entry: './src/react/app.js',
	output: {
		path: path.resolve(__dirname, 'bin'),
		filename: 'react-bundle.js'
	},
	module: {
		loaders: [
	    	{ test: /\.js$/, loader: 'babel-loader', exclude: /node_modules/ },
	    	{ test: /\.jsx$/, loader: 'babel-loader', exclude: /node_modules/ }
		]
	},
	plugins: [
		new Dotenv({
			'path': path.resolve(__dirname, '.env')
		})
	],
	watch: true
};

module.exports = [reactConfig];