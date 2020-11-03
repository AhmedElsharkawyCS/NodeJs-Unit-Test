"use strict";
var gulp = require("gulp"),
  mocha = require("gulp-mocha"),
  log = require("fancy-log");

gulp.task("mocha", function () {
  return gulp
    .src(["test/*.test.js"], { read: false })
    .pipe(mocha({ reporter: "list" }))
    .on("error", log);
});

gulp.task("watch-mocha", function () {
  gulp.watch(["test/*.js"], gulp.series("mocha"));
});
