var gulp = require("gulp");
var sass = require("gulp-sass");
var rename = require("gulp-rename");
var sourcemaps = require("gulp-sourcemaps");
var livereload = require("gulp-livereload");
var concat = require("gulp-concat");
var uglify = require("gulp-uglify");
var autoprefixer = require("gulp-autoprefixer");

// Conversion of styles sass to css, compilation and minification

/*
  SRC and DIST
*/
var sass_Src = "src/sass/templates/*.scss";
var sass_Dist = "src/css/";
var sass_Watch = "src/sass/**/*.scss";

var js_Src = "src/app.js";
var js_Watch = "src/**/*.js";
var js_Dist = "assets/js";

var js_Conc_Src = "js/src/*.js";
var js_Conc_Dist = "js/dist";
var js_Cont_Watch = "js/src/*.js";

gulp.task(
  "sass",
  gulp.series(function() {
    return gulp
      .src(sass_Src)
      .pipe(sourcemaps.init())
      .pipe(sass({ outputStyle: "compressed" }).on("error", sass.logError))
      .pipe(autoprefixer({ browsers: ["last 2 version"], cascade: false }))
      .pipe(sourcemaps.write("maps"))
      .pipe(rename({ suffix: ".min" }))
      .pipe(gulp.dest(sass_Dist))
      .pipe(livereload());
  })
);

// Concatination and minification of scripts

gulp.task("c-scripts", function() {
  return gulp
    .src(js_Conc_Src)
    .pipe(sourcemaps.init())
    .pipe(concat("htron-widgets.js"))
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest(js_Conc_Dist));
});

gulp.task("m-scripts", function() {
  return gulp
    .src(js_Src)
    .pipe(sourcemaps.init())
    .pipe(uglify())
    .pipe(rename({ suffix: ".min" }))
    .pipe(sourcemaps.write("maps"))
    .pipe(gulp.dest(js_Dist));
});

gulp.task(
  "watch",
  gulp.series(function() {
    livereload.listen();
    gulp.watch(sass_Watch, gulp.parallel(["sass"]));
    // gulp.watch(js_Cont_Watch, gulp.parallel(["c-scripts"]));
    // gulp.watch(js_Watch, gulp.parallel(["m-scripts"]));
  })
);

gulp.task("default", gulp.series(["sass", "watch"]));
