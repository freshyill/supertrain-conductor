"use strict";

const gulp =       require("gulp"),
      sass =       require("gulp-sass"),
      concat =     require("gulp-concat"),
      sourcemaps = require("gulp-sourcemaps"),
      terser =     require("gulp-terser");

/*
  FILES //
  Set up some path aliases to make the functions a little easier to look at.
*/
const paths = {
  "styles": {
    "src":   "./_includes/assets/scss/*.scss",
    "dist1": "./_site/_includes/assets/css",
    "dist2": "./_includes/assets/css"
  },
  "scripts": {
    "src":  ["./_includes/assets/js/*.js", "!./_includes/assets/js/script.js"],
    "dist": "./_includes/assets/js"
  }
}


/*
  STYLES
  Compile Sass into CSS. This is the bare minimum
  // Todo: Add PostCSS, sourcemaps, and a few other basics
  // Todo: Avoid piping compiled CSS to two destinations
  //       https://github.com/freshyill/supertrain-conductor/issues/2
*/
gulp.task("styles", function() {
  return gulp.src(paths.styles.src)
    .pipe(sass({
      outputStyle: "compressed"
    })
    .on("error", sass.logError))
    .pipe(gulp.dest(paths.styles.dist1))
    .pipe(gulp.dest(paths.styles.dist2));
});


/*
  SCRIPTS
  Basic concatenating and uglifying for Javascript. This is the bare minimum
*/
gulp.task("scripts", function() {
  return gulp.src(paths.scripts.src)
    .pipe(concat("script.js"))
    .pipe(terser())
    .pipe(gulp.dest(paths.scripts.dist));
});


/*
  WATCH
  Watch those files, and then do some things with them. Eleventy is going to be
  watching the content and templates for updates, as well as providing
  BrowserSync for on-the-fly reloading, so no need to do any of that with Gulp.
*/
gulp.task("watch", function() {
  gulp.watch(paths.styles.src, gulp.parallel("styles"));
  gulp.watch(paths.scripts.src, gulp.parallel("scripts"));
});


/*
  BUILD
  A parallel process to do a few things at once. Eleventy is also going to be
  building the templates and markdown into pages. Check package.json.
*/
gulp.task("build", gulp.parallel(
  "styles",
  "scripts"
));


/*
  DEV //
  Build, then watch. package.json will call this.
*/
gulp.task("dev", gulp.series(
  "build",
  "watch"
));


/*
  DEFAULT
  Do this when Gulp doesn't get any more specific instructions. Might remove
  this since package.json is going to be defining all the scripts we need and
  Gulp probably won't be running alone.
*/
gulp.task("default", defaultTask);

function defaultTask(done) {
  gulp.watch(paths.styles.src, gulp.parallel("styles"));
  gulp.watch(paths.scripts.src, gulp.parallel("scripts"));
  done();
}
