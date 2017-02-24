/**
 * Created by sheng on 16/7/14.
 */
'use strict'
var webpack = require('webpack')
var HtmlWebpackPlugin = require('html-webpack-plugin')
var ExtractTextPlugin = require('extract-text-webpack-plugin')
var DashboardPlugin = require('webpack-dashboard/plugin')
var path = require('path')

var config = {
  entry: {
    app: __dirname + '/src/app.js'

  },
  output: {
    path: 'build',
    // filename: 'bundle.js'
    filename: 'bundle.js?h=[hash]'
  },
  resolve: {
    modulesDirectories: ['node_modules', './'],
    alias: {
      'npm': __dirname + '/node_modules'

    },
    extensions: ['', '.js', '.html', '.css', '.styl']
  },
  module: {
    loaders: [
        {
      test: /\.js$/,
      loaders: ['ng-annotate?add=true', 'babel'],
      // loaders: ['eslint','ng-annotate?add=true', 'babel'],
      exclude: /node_modules/
    }, {
      test: /\.html$/,
      loader: 'html'
    }, {
      test: /\.css$/,
      loader: ExtractTextPlugin.extract("style-loader", "css-loader")
    }, {
      test: /\.jade$/,
      loader: "pug-html-loader"
    }, {
      test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
      loader: 'file'
    }, {
      test: /\.styl$/,
      loader: ExtractTextPlugin.extract(
        'style-loader',
        'css-loader?sourceMap!stylus?sourceMap'
      )
    }]
  },
  plugins: [
    // new ExtractTextPlugin("[name].css"),
    // new webpack.optimize.UglifyJsPlugin({
    //   compress: {
    //     warnings: false
    //   }
    // }),
    //
    new webpack.optimize.CommonsChunkPlugin('vendors', 'vendors.js'),
    new DashboardPlugin(),
    new webpack.BannerPlugin("Copyright addnewer inc."),
    new ExtractTextPlugin("styles.css"),
    new HtmlWebpackPlugin({
      favicon:'src/index/favicon.png',
      title: 'Custom template using Handlebars',
      template: 'src/index/index.jade',
      inject: 'body'
    }),
    new webpack.ProvidePlugin({
      $: 'jquery',
      jQuery: 'jquery',
      'window.jQuery': 'jquery',
    }),
  ],


  devtool: 'eval-source-map',

  //   devtool:false,
  devServer: {
    host:'0.0.0.0',
    port: 5000,
    contentBase: __dirname,
    colors: true,
    hot: true,
    plugins: [
      new webpack.HotModuleReplacementPlugin(),
      new DashboardPlugin(),
    ],
    proxy: {
      //'/rap/*': {
      //  target: 'http://192.168.0.30/mockjsdata/17/',
      //  pathRewrite: {
      //    '^/rap': ''
      //  },
      //  changeOrigin: true,
      //  secure: false
      //},
      '/saiku/*': {
        //  target: 'http://front.dev.tradingmax.com/',
        target: 'http://192.168.0.228:9080/',
        // pathRewrite: {
        //   '^/dev': ''
        // },
        changeOrigin: true,
        secure: false
      }
    }
  }
}

module.exports = config