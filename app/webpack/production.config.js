'use strict'

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import config from '../config';
import commonConfig from './common.config';

import ExtractTextPlugin from 'extract-text-webpack-plugin';

const NODE_MODULES_PATH = path.resolve(__dirname, '../node_modules');

export default merge(commonConfig, {
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['babel?optional=runtime'],
        include: [path.resolve(__dirname, '../src/scripts')]
      },
      {
        test: /\.css$/,
        loader: ExtractTextPlugin.extract('style', 'css!postcss')
      },
      {
        test: /\.scss/,
        loaders: ExtractTextPlugin.extract('style', 'css!sass?includePath[]=' + NODE_MODULES_PATH)
      },
      {
        test: /\.sass$/,
        loaders: ExtractTextPlugin.extract('style', 'css!sass?includePath[]=' + NODE_MODULES_PATH + '&indentedSyntax')
      },
      {
        test: /\.less$/,
        loaders: ExtractTextPlugin.extract('style', 'css!less')
      }
    ]
  },
  plugins: [
    // new webpack.optimize.DedupePlugin(),
    new webpack.optimize.UglifyJsPlugin({
      compress: {
        warnings: false
      },
      minimize: true,
      sourceMap: false
    }),
    // new webpack.optimize.AggressiveMergingPlugin(),
    new ExtractTextPlugin('styles.css')
  ]
});
