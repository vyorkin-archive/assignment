'use strict'

import path from 'path';
import webpack from 'webpack';
import config from '../config';

import HtmlPlugin from 'html-webpack-plugin';
import NyanProgressPlugin from 'nyan-progress-webpack-plugin';

export default {
  entry: [path.resolve(__dirname, '../src/scripts/main')],
  resolve: {
    root: path.resolve(__dirname, '..'),
    modulesDirectories: ['node_modules'],
    extensions: ['', '.js', '.jsx', '.json']
  },
  output: {
    path: path.resolve(__dirname, '../build'),
    filename: 'bundle.js'
  },
  module: {
    preLoaders: [
      {
        test: /\.jsx?$/,
        include: [path.resolve(__dirname, '../src/scripts')],
        loader: 'eslint'
      }
    ],

    loaders: [
      {
        test: /\.svg$/,
        loaders: ['file']
      },
      {
        test: /\.(jpe?g|png|gif)$/i,
        loaders: ['url?limit=25000']
      },
      {
        test: /\.woff$/,
        include: [path.resolve(__dirname, '../src/fonts')],
        loaders: ['url?limit=25000']
      }
    ],
    noParse: /\.min\.js/
  },
  plugins: [
    new webpack.DefinePlugin({
      'settings': {
        'apiRoot': JSON.stringify(config.apiRoot),
      },
      'process.env': { 'NODE_ENV': JSON.stringify(config.ENVIRONMENT) }
    }),
    new webpack.optimize.OccurenceOrderPlugin(true),
    new HtmlPlugin({
      title: config.appName,
      template: path.resolve(__dirname, '../src/templates/main.html')
    }),
    new NyanProgressPlugin()
  ],

  target: 'web',
  debug: config.DEVELOPMENT,
  cache: config.DEVELOPMENT,
  devtool: config.DEVELOPMENT ? config.devtool : false,
  stats: {
    children: false,
    colors: true,
    reasons: config.DEVELOPMENT
  },
  postcss: function() {
    return [
      require('cssnext')(config.cssnext),
      require('postcss-nested'),
      require('postcss-bem-linter')(config.bemLinter),
      require('postcss-reporter')
    ];
  },
  eslint: {
    configFile: path.resolve(__dirname, '../.eslintrc'),
    failOnError: false,
    failOnWarning: false
  }
};
