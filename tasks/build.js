const gulp = require('gulp');
const babel = require('gulp-babel');

gulp.task('build', () => {
  console.log('Running build');
  gulp.src('src/js/main.ts')
  .pipe(babel())
  .pipe(gulp.dest('lib'));
  console.log('Running finished');
});
