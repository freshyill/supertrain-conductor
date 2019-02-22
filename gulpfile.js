var gulp = require('gulp');

require('require-dir')('./gulp-tasks');

gulp.task('default', defaultTask);

function defaultTask(done) {
  gulp.watch('./_includes/assets/css/*.scss', gulp.parallel('css'));
  done();
}

gulp.task("watch", function() {
  gulp.watch('./_includes/assets/css/*.scss', gulp.parallel('css'));
});

gulp.task('build', gulp.parallel(
  'css'
));

/*
  Build and watch things during dev
*/
gulp.task('dev', gulp.series(
  'build',
  'watch'
));


// var gulp = require('gulp');
//
// gulp.task('default', defaultTask);
//
// function defaultTask(done) {
//   console.log("🥤 Gulp is gulping!").
//   done();
// }
//
// gulp.task("watch", function() {
//   gulp.watch('./_includes/assets/css/*.scss', gulp.parallel('css'));
//   // gulp.watch('./src/js/**/*.js', gulp.parallel('js'));
// });
