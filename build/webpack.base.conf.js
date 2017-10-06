var path = require('path')
var utils = require('./utils')
var config = require('../config')
var vueLoaderConfig = require('./vue-loader.conf')

function resolve (dir) {
  return path.join(__dirname, '..', dir)
}

function urlLoaderOptions (name) {
  var params = { 
    name: name,
    limit: 5000 // 5 KB
  };
  if (process.env.NODE_ENV === 'production') params['publicPath'] = '../';
  return params;
}

module.exports = {
  entry: { app: './src/main.js' },
  output: {
    filename: '[name].js',
    path: process.env.NODE_ENV === 'production' ? config.build.assetsRoot : config.dev.assetsRoot,
    publicPath: process.env.NODE_ENV === 'production' ? config.build.assetsPublicPath : config.dev.assetsPublicPath
  },
  resolve: {
    extensions: ['.js', '.vue', '.json'],
    modules: [path.resolve('./src'), 'node_modules'],
    alias: {
      'vue$': 'vue/dist/vue.esm.js',
      '@': resolve('src'),
      'style': resolve('style'),
      'static': resolve('static'),
      'node_modules': resolve('node_modules')
    }
  },
  module: {
    rules: [
      {
        test: /\.(js|vue)$/,
        loader: 'eslint-loader',
        enforce: "pre",
        // include: [resolve('src'), resolve('test')],
        options: {
          formatter: require('eslint-friendly-formatter')
        }
      },
      {
        test: /\.vue$/,
        loader: 'vue-loader',
        options: vueLoaderConfig
      },
      {
        test: /\.js$/,
        loader: 'babel-loader',
        include: [resolve('src'), resolve('test')]
      },
      {
        test: /\.(png|jpe?g|gif|svg)(\?.*)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('img/[name].[hash:8].[ext]')
      },
      {
        test: /\.(woff2?|eot|ttf|otf)(\?.*)?$/,
        loader: 'url-loader',
        options: urlLoaderOptions('fonts/[name].[hash:8].[ext]')
      }
    ]
  }
}
