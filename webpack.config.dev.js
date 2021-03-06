/**
 * Created by william on 2017/6/1.
 */
var path = require('path');
var webpack = require('webpack')
var glob = require('glob');
// 导入非 webpack 默认自带插件
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWepackPlugin = require('copy-webpack-plugin');
const SOURCE_DIR = './src-examples/';
const PRODUCT_DIR = 'examples';

var getEntrys = function(globPath) {
	var files = glob.sync(globPath);
	var entries = {
			js: {},
			pages: {},
			resource: {}
		},
		entry, dirname, basename, pathname, extname;
	for(var i = 0; i < files.length; i++) {
		entry = files[i];
		dirname = path.dirname(entry);
		extname = path.extname(entry);
		basename = path.basename(entry, extname);
		var split = dirname.split('/');
		pathname = path.join(split.slice(2, split.length).join("/"), basename + extname);
		if(extname === '.js') {
			entries.js[pathname] = "./" + entry;
		} else if(extname === '.html') {
			entries.pages[pathname] = "./" + entry;
		} else {
			entries.resource[pathname] = "./" + entry;
		}
	}
	return entries;

}

var entries = getEntrys(SOURCE_DIR + "*/*.*");
var pages = Object.keys(entries.pages);

//********app*************
var app_src_config = {
	entry: entries.js,
	output: {
		path: path.resolve(__dirname, PRODUCT_DIR),
		filename: "[name]" // 用于长效缓存
	},
	module: {
		rules: [{
				test: /\.js?$/,
				loader: "babel-loader",
				options: {
					presets: [
						[
							"es2015",
							{
								"modules": false
							}
						],
						"react"
					]
				},
				include: [path.resolve(__dirname, 'examples/src'), path.resolve(__dirname, 'src')]
			},
			{
				test: /\.js?$/,
				enforce: "pre",
				loader: "eslint-loader",
				options: {
					configFile:'eslintrc.js'
				},
				include: [path.resolve(__dirname, 'examples/src'), path.resolve(__dirname, 'src')]
			}
		]
	},
	plugins: [],
	resolve: {
		modules: [path.resolve(__dirname, 'node_modules')]
	},
	externals: {
		'react': 'React',
		'React': 'React',
		'react-dom': 'ReactDOM',
		'ReactDOM': 'ReactDOM',
		'Swiper': 'Swiper'
	}
}
pages.forEach(function(pathname) {
	if(pathname.indexOf('.html') === pathname.length - 5) {
		var html_conf = {
			filename: pathname,
			template: SOURCE_DIR + pathname,
			inject: 'body',
			chunks: [pathname.substring(0, pathname.length - 5) + '.js'],
			hash: false,
			minify: {
				removeComments: true,
				collapseWhitespace: false
			}
		}
		app_src_config.plugins.push(new HtmlWebpackPlugin(html_conf));
	}
});

//********CSS*************
var css_config = {
	entry: {
		'app': './scss/app.scss'
	},
	output: {
		path: path.resolve(__dirname, 'dist/assets/css'),
		filename: 'app.css'
	},
	plugins: [
		// 构建优化插件
		new ExtractTextPlugin({
			filename: 'app.css',
			disable: false,
			allChunks: true,
		})
	],
	module: {
		rules: [{
				test: /\.css?$/,
				use: ExtractTextPlugin.extract({
					use: 'css-loader'
				})
			},
			{
				test: /\.scss$/,
				use: ExtractTextPlugin.extract({
					use: [{
						loader: "css-loader"
					}, {
						loader: "sass-loader",
						options: {
							noIeCompat: true
						}
					}],
					// use style-loader in development
					fallback: "style-loader"
				})
			},
			// 处理图片操作  25000bit ~3kb
			{
				test: /\.(png|jpg|jpeg|gif)$/,
				use: ['url-loader']
			},
			// 处理字体文件
			{
				test: /\.(eot|woff|ttf|woff2|svg)$/,
				use: ['url-loader']
			}
		]
	},
}
console.log(app_src_config.plugins[0]);
module.exports = [app_src_config,css_config];