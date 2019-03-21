const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');

// Prepare all the memes
const memes = require('./src/memes.js');

memes.sort((a, b) => (a.title || "_").localeCompare(b.title || "_"));

var htmls = [
	// index
	new HtmlWebpackPlugin({
		template: './src/app.html',
		inject: true,
		filename: 'index.html',
		chunks: ['style'],

		templateParameters: {
			title: null,
			description: 'An open source collection of random meme pages',
			keywords: ['funny', 'random website'],
			memes: memes
		}
	})
];

memes.forEach(function(meme) {
	try {
		htmls.push(new HtmlWebpackPlugin({
			template: './src/app.html',
			inject: true,
			filename: meme.path + '.html',
			chunks: ['app', 'style'],

			templateParameters: meme
		}));

		console.log(`Meme ${meme.title} registred!`);
	} catch(e) {
		// Rotten meme
		console.log(`Meme ${meme.title || "<no title>"} is rotten`);
		console.error(e);
	}
});

const devMode = process.env.NODE_ENV !== 'production';

module.exports = {
	mode: devMode ? 'development' : 'production',
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
	resolve: {
		alias: {
			'@presets': path.resolve(__dirname, 'src/presets')
		}
	},
	module: {
		rules: [
			{
				test: /\.(c|le)ss$/,
				use: [MiniCssExtractPlugin.loader, 'css-loader', 'less-loader']
			},
			{
				test: /\.(js|jsx)$/,
				exclude: /node_modules/,
				use: {
					loader: 'babel-loader',
					options: {
						presets: devMode ? [] : ['@babel/preset-env'],
						compact: !devMode
					}
				}
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
