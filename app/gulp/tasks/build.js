gulp.task('build', ['clean', 'assets', 'bundle']);

gulp.task('build:watch', ['set:watch', 'build'], (callback) => {
  gulp.watch(config.assets, ['assets']);
  callback();
});

