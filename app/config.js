import minimist from 'minimist';
import { config } from './package';

const argv = minimist(process.argv.slice(2));

const isProduction = !!argv.production || process.env.NODE_ENV === 'production';
const enableSourceMaps = isProduction && config.sourceMap;

export default {
  argv: argv,

  DEVELOPMENT: !isProduction,
  PRODUCTION: isProduction,
  ENVIRONMENT: isProduction ? 'production' : 'development',

  assets: ['src/assets/**'],

  sourceMap: enableSourceMaps,
  devtool: '#source-map',

  appName: config.appName,
  apiRoot: config.apiRoot,

  server: require('./config/server.js')(config, argv),
  browserSync: require('./config/browsersync.js')(config, argv),
  cssnext: require('./config/cssnext.js')(isProduction, enableSourceMaps),
  bemLinter: require('./config/bemLinter.js')
}
