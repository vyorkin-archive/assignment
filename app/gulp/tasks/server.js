import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';

gulp.task('server', (callback) => {
  new WebpackDevServer(webpack(webpackConfig), webpackConfig.devServer)
    .listen(config.server.port, config.server.host, (err, result) => {
      if (err) {
        console.log(err);
      }
      console.log('listening at %s', config.server.url);
      callback();
    });
});
