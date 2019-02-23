'use strict';

const gulp = require('gulp'),
      sass = require("gulp-sass");

/*
  FILES //
  Set up some path aliases to make the functions a little easier to look at.
*/
const files = {
  "src": {
    "styles": './_includes/assets/scss/*.scss',
    // Todo: Add scripts here too
    // "js": './src/js/script.js'
  },
  "dist": {
    "styles": './_includes/assets/css/',
    // Todo: Add scripts here too
    // "js": 'dist/js'
  }
}


/*
  STYLES
  Compile Sass into CSS. This is the bare minimum
  // Todo: Add PostCSS and
*/
gulp.task('styles', function() {
  return gulp.src(files.src.styles)
    .pipe(sass({
      outputStyle: 'compressed'
    })
    .on('error', sass.logError))
    .pipe(gulp.dest(files.dist.styles));
});


/*
  WATCH
  Watch those files, and then do some things with them. Eleventy is going to be
  watching the content and templates for updates, as well as providing
  BrowserSync for on-the-fly reloading, so no need to do any of that with Gulp.
*/
gulp.task("watch", function() {
  gulp.watch(files.src.styles, gulp.parallel('styles'));
  // Todo: Add scripts here too
});


/*
  BUILD
  A parallel process to do a few things at once. Eleventy is also going to be
  building the templates and markdown into pages. Check package.json.
*/
gulp.task('build', gulp.parallel(
  'styles',
  // Todo: Add scripts here too
));


/*
  DEV //
  Build, then watch. package.json will call this.
*/
gulp.task('dev', gulp.series(
  'build',
  'watch'
));


/*
  DEFAULT
  Do this when Gulp doesn't get any more specific instructions. Might remove
  this since package.json is going to be defining all the scripts we need and
  Gulp probably won't be running alone.
*/
gulp.task('default', defaultTask);

function defaultTask(done) {
  gulp.watch(files.src.styles, gulp.parallel('styles'));
  done();
}
