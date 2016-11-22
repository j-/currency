const path = require('path');
const webpack = require('webpack');
const DefinePlugin = webpack.DefinePlugin;
const HTMLPlugin = require('html-webpack-plugin');

const resolve = (relative) => path.resolve(__dirname, relative);

module.exports = {
	entry: resolve('./src/index.jsx'),
	output: {
		path: resolve('./dist'),
		filename: 'bundle.js',
	},
	resolve: {
		extensions: ['', '.js', '.json', '.jsx'],
	},
	module: {
		loaders: [
			{
				loader: 'babel',
				include: [
					resolve('./src'),
				],
				test: /\.jsx?$/,
			},
			{
				loader: 'json',
				test: /\.json$/,
			},
		],
	},
	plugins: [
		new HTMLPlugin({
			template: resolve('./src/index.html'),
		}),
		new DefinePlugin({
			'process.env': {
				'NODE_ENV': JSON.stringify(process.env.NODE_ENV),
				'APP_ID_OER': JSON.stringify(process.env.APP_ID_OER),
			},
		}),
	],
	devtool: 'source-map',
};
