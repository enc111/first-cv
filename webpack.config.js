'use strict';

const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
let ExtractTextPlugin = require('extract-text-webpack-plugin');

module.exports = {
        context: __dirname + '/frontend',
        entry: {
            main: "./main.js"
        },

        output: {
            path: __dirname + '/public',
            filename: "home.js"
        },

        watch: true,

        watchOptions: {
            aggregateTimeout: 100
        },

        plugins: [
            new HtmlWebpackPlugin({
                filename: 'index.html',
                template: 'test.pug'
            }),
            new ExtractTextPlugin('styles.css')
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
                    loader: ExtractTextPlugin.extract({fallback: 'style-loader', use: 'css-loader!stylus-loader'})
                },
                {
                    test: /\.(css|png|jpg|svg|ttf|otf|eot|woff|woff2)$/,
                    loader: 'file-loader?name=[path][name].[ext]'
                }]
        }
    };