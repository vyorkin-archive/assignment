import del from 'del';

gulp.task('clean', () => {
  del(['build/*']);
});
