const path = require('path');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require("css-minimizer-webpack-plugin");

module.exports = {
	mode: "development",
	optimization: {
		minimizer: [ new CssMinimizerPlugin() ],
	},
	plugins: [ new MiniCssExtractPlugin({
		filename: '[name].css',
		chunkFilename: '[id].css',
	}) ],

	entry: './src/js/main.js',
	output: {
		path: path.resolve(__dirname, 'docs'), 
		filename: 'bundle.js' 
	},
	module: {
		rules: [
			{
				test: /\.css$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader'],
			},
			{
					test: /\.svg$/,
					loader: 'svg-inline-loader'
			}
		]
	},
	devServer: {
		static: {
			directory: path.join(__dirname, 'docs'),
		},
		compress: true,
		port: 3000,
	},
};