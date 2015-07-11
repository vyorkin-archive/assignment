global.config = require('./config');
global.webpackConfig = require(`./webpack/${config.ENVIRONMENT}.config.js`);

global.gulp = require('gulp');
global.$ = require('gulp-load-plugins')();

require('./gulp');
