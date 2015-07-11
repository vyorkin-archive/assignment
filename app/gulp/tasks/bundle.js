import webpack from 'webpack';

gulp.task('bundle', () => {
  const bundler = webpack(webpackConfig);

  function bundle(err, stats) {
    if (err) {
      throw new $.util.PluginError('webpack', err);
    }

    const verbose = !!config.argv.verbose;

    $.util.log('[webpack]', stats.toString({
      colors: $.util.colors.supportsColor,
      hash: verbose,
      version: verbose,
      timings: verbose,
      chunks: verbose,
      chunkModules: verbose,
      cached: verbose,
      cachedAssets: verbose
    }));
  }

  if (isWatching) {
    bundler.watch(200, bundle);
  } else {
    bundler.run(bundle);
  }
});
