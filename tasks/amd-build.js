const gulp = require('gulp');
var requirejs = require('gulp-requirejs');

gulp.task('amd-bundle',['build'], function(){
  return requirejs({
    name: 'bootstrap',
    baseUrl: 'dest/temp',
    out: 'app.js'
  })
  .pipe(gulp.dest("lib"));
});
