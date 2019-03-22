const path = require('path');
const fs = require('fs');
const webpack = require('webpack');

const CleanWebpackPlugin = require('clean-webpack-plugin');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const CopyWebpackPlugin = require('copy-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const FixStyleOnlyEntriesPlugin = require('webpack-fix-style-only-entries');
const SitemapPlugin = require('sitemap-webpack-plugin').default;

// Build info
let revision = 'unknown';
try {
	revision = require('child_process').execSync('git describe --always --abbrev=7 --dirty="-dirty"').toString().trim();
} catch(e) {}

const pages = require('./src/pages.js');

pages.sort((a, b) => (a.title || "_").localeCompare(b.title || "_"));

var htmls = [
	// index
	new HtmlWebpackPlugin({
		template: './src/app.html',
		inject: true,
		filename: 'index.html',
		chunks: ['style'],

		templateParameters: {
			revision: revision,
			title: null,
			description: 'An open source collection of random memes and useless pages',
			keywords: ['funny', 'useless websites', 'random pages'],
			pages: pages
		}
	})
];
var sitemap = [
	{
		path: '/',
		priority: '1',
		changeFreq: 'daily'
	}
];

pages.forEach(function(page) {
	try {
		htmls.push(new HtmlWebpackPlugin({
			template: './src/app.html',
			inject: true,
			filename: page.path + '.html',
			chunks: ['app', 'style'],

			templateParameters: {
				...page,
				revision: revision
			}
		}));
		sitemap.push({
			path: page.path,
			priority: '0.8',
			changeFreq: 'weekly'
		})

		console.log(`Page ${page.title} registred!`);
	} catch(e) {
		// Rotten meme
		console.log(`Page ${page.title || "<no title>"} is rotten`);
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
    	new SitemapPlugin('https://wtfme.me', sitemap, { skipGzip: true }),
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
