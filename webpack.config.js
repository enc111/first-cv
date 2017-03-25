'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
    context: __dirname + '/frontend',
    entry: {
        main: "./main.js"
    },

    output: {
        path: __dirname + '/public/html',
        filename: "home.js"
    },

    watch: true,

    watchOptions: {
        aggregateTimeout: 100
    },

    plugins: [
        new HtmlWebpackPlugin({
            filename: 'home.html',
            template: 'test.pug'
        })
    ],

    resolve: {
        modules: ['node_modules'],
        extensions: ['*', '.js', '.pug', '.styl', 'css']
    },

    resolveLoader: {
       modules: ['node_modules'],
       moduleExtensions: ['*-loader', '*'],
       extensions: ['*', '.js']
   },

    module: {
      loaders: [
      {
        test: /\.pug$/,
        loader: 'pug-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
            test:   /\.(css|png|jpg|svg|ttf|eot|woff|woff2)$/,
            loader: 'file-loader?name=[name].[ext]'
      }]
  }
};