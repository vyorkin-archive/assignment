gulp.task('assets', () => {
  gulp.src(config.assets)
  .pipe($.changed('build'))
  .pipe(gulp.dest('build'))
  .pipe($.size({ title: 'assets' }));
});
