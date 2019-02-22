var gulp    = require('gulp');
var sass    = require("gulp-sass");

/*
  generate the css with sass
*/
gulp.task('css', function() {
  return gulp.src('./_includes/assets/css/*.scss')
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest('./_site/_includes/assets/css'));
});
