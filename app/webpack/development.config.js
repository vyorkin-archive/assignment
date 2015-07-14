'use strict'

import path from 'path';
import webpack from 'webpack';
import merge from 'webpack-merge';

import config from '../config';
import commonConfig from './common.config';

const NODE_MODULES_PATH = path.resolve(__dirname, '../node_modules');

export default merge(commonConfig, {
  entry: [
    'webpack-dev-server/client?' + config.server.url,
    'webpack/hot/only-dev-server'
  ],
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        loaders: ['react-hot', 'babel'],
        include: [path.resolve(__dirname, '../src/scripts')]
      },
      {
        test: /\.css$/,
        loaders: ['style', 'css', 'postcss']
      },
      {
        test: /\.scss/,
        loaders: ['style', 'css', 'sass?includePath[]=' + NODE_MODULES_PATH]
      },
      {
        test: /\.sass$/,
        loaders: ['style', 'css', 'sass?includePath[]=' + NODE_MODULES_PATH + '&indentedSyntax']
      },
      {
        test: /\.less$/,
        loaders: ['style', 'css', 'less']
      }
    ]
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  devServer: {
    contentBase: 'build/',
    publicPath: '/',
    hot: true,
    noInfo: true,
    historyApiFallback: true,
    stats: {
      colors: true,
      reasons: true
    }
  }
});
