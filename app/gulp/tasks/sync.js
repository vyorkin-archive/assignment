import browserSync from 'browser-sync';

gulp.task('sync', ['build:watch'], () => {
  browserSync(config.browserSync);
  gulp.watch(['build/*.html', 'build/*.css'], browserSync.reload);
});
