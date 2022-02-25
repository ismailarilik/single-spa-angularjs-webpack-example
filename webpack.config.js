const path = require('path');

const areWeInDevEnvironment = process.env.NODE_ENV === 'development';

module.exports = {
	entry: './src/index.js',
	mode: areWeInDevEnvironment ? 'development' : 'production',
	module: {
		rules: [
			{
				test: /\.html$/i,
				loader: "html-loader",
			}
		]
	},
	output: {
		filename: 'main.js',
		path: path.resolve(__dirname, 'dist'),
	}
};
