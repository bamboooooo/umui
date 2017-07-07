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
var node_modules_dir = path.join(__dirname, 'node_modules');
const SOURCE_DIR = 'examples/src/';
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

var app_src_config = {
	entry: entries.js,
	output: {
		path: path.resolve(__dirname, PRODUCT_DIR),
		filename: "[name]" // 用于长效缓存
	},
	module: {
		rules: [{
				test: /\.jsx?$/,
				loaders: ["babel-loader","eslint-loader"],
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
				include: [path.resolve(__dirname, 'examples/src'),path.resolve(__dirname, 'src')]
			},
			{
                    test: /\.js$/,
                    enforce: 'pre',  // 在babel-loader对源码进行编译前进行lint的检查
                    include: [path.resolve(__dirname, 'examples/src'),path.resolve(__dirname, 'src')],  // src文件夹下的文件需要被lint
                    use: [{
                        loader: 'eslint-loader',
                        options: {
                            formatter: require('eslint-friendly-formatter')   // 编译后错误报告格式
                        }
                    }]
                    // exclude: /node_modules/ 可以不用定义这个字段的属性值，eslint会自动忽略node_modules和bower_
              },
			{
				test: /\.css?$/,
				use: [{
						loader: 'style-loader'
					},
					{
						loader: 'css-loader',
						options: {
							importLoaders: 1
						}
					}
				]
			},
			{
				test: /\.scss?$/,
				use: [{
					loader: 'sass-loader',
					options: {
						noIeCompat: true
					}
				}]
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
	// 在配置中添加插件
	plugins: [
		// 构建优化插件
		new ExtractTextPlugin({
			filename: 'app.css',
			allChunks: true,
		})
	],
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

module.exports = [app_src_config];