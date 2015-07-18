import jest from 'gulp-jest-iojs';

gulp.task('test', function () {
  return gulp.src('./src/scripts').pipe(jest({
    scriptPreprocessor: './spec/support/jestPreprocessor.js',
    testFileExtensions: [
      'js'
    ],
    unmockedModulePathPatterns: [
      'node_modules/react',
      'node_modules/babel-runtime',
      'spec/support'
    ],
    moduleFileExtensions: [
      'js',
      'jsx',
    ],
    collectCoverage: true,
  }));
});
