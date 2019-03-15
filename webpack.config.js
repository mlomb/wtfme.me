const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

var htmls = [];

// Prepare all the memes
const memes = path.resolve(__dirname, 'src/memes');
fs.readdirSync(memes).forEach(function(file) {
	try {
		const meme_module_path = path.resolve(memes, file);
		const meme_module = require(meme_module_path);
		const code = file.slice(0, -3);
		const config = Object.assign({
			// defaults
			title: code
		}, meme_module);
		
		htmls.push(new HtmlWebpackPlugin({
			template: './src/app.html',
			inject: true,
			filename: code + '.html',
			chunks: ['app', 'style'],
			
			templateParameters	: {
				meme_module: `./${file}`,
				title: config.title
			}
		}));
		
		console.log(`Meme ${config.title} registred!`);
	} catch(e) {
		// Rotten meme
		console.log(`Meme ${file} is rotten`);
		console.error(e);
	}
});

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: 'production',
	target: 'web',
	entry: {
		app: './src/app.js',
		style: './src/app.less'
	},
	output: {
		filename: devMode ? '[name].js' : '[name].[contenthash].js',
		path: path.resolve(__dirname, 'dist'),
		publicPath: '/'
	},
	module: {
		rules: [
  			{
  				test: /\.(c|le)ss$/,
  				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
  			}
		],
	},
	plugins: [
		new CleanWebpackPlugin(),
        new CopyWebpackPlugin([
            { from: 'public' }
        ]),
		new MiniCssExtractPlugin({
			filename: devMode ? '[name].css' : '[name].[contenthash].css'
		}),
		new FixStyleOnlyEntriesPlugin({ silent: true }),
	].concat(htmls),
	devServer: {
		contentBase: path.resolve(__dirname, 'dist'),
		hot: true,
		historyApiFallback: true
	}
};
