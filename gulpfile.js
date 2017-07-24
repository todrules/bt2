const gulp = require('gulp');
const del = require('del');
const rename = require('gulp-rename');


gulp.task('copyprod', ['del'], () => {
  gulp.src('./src/env/env.production.ts').pipe(rename({
    basename: 'environment', extname: '.ts'
  })).pipe(gulp.dest('./src/env'));
});

gulp.task('copydev', ['del'], () => {
  gulp.src('./src/env/env.development.ts').pipe(rename({
    basename: 'environment',
    extname: '.ts'
  })).pipe(gulp.dest('./src/env'));
});

gulp.task('del', () => {
  return del('./src/env/environment.ts');
});

gulp.task('prod', ['del', 'copyprod']);

gulp.task('dev', ['del', 'copydev']);
