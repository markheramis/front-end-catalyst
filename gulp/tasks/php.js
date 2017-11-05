// Gulp Modules
var gulp = require('gulp');
var php2html = require("gulp-php2html");
// Get Gulp configuration
var config = require('../../gulp-config.json');

module.exports.init = function () {
    gulp.task('php2html', function () {
        gulp.src("./src/php/*.php")
                .pipe(php2html())
                .pipe(gulp.dest("./dist"));
    })
}