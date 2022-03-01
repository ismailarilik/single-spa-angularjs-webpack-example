const path = require('path');

const areWeInDevEnvironment = process.env.NODE_ENV === 'development';

module.exports = {
	devtool: 'inline-source-map',
	devServer: {
		client: {
			overlay: {
				warnings: false
			}
		},
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		static: './dist'
	},
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
		library: {
			type: 'system',
		},
		path: path.resolve(__dirname, 'dist'),
		publicPath: ''
	}
};
