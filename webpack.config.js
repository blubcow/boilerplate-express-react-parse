var path = require('path');

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
	watch: true
};

module.exports = [reactConfig];