import minimist from 'minimist';
import { config } from './package';

const argv = minimist(process.argv.slice(2));
const production = !!argv.production || process.env.NODE_ENV === 'production';

export default {
  argv: argv,

  DEVELOPMENT: !production,
  PRODUCTION: production,
  ENVIRONMENT: production ? 'production' : 'development',

  assets: ['src/assets/**'],

  sourceMap: production && config.sourceMap,
  devtool: '#source-map',

  appName: config.appName,
  apiRoot: config.apiRoot,

  server: require('./config/server.js')(config, argv),
  browserSync: require('./config/browsersync.js')(config, argv),
  cssnext: require('./config/cssnext.json')
}
