// Gulp modules
var gulp = require('gulp')
var coffee = require('gulp-coffee')
var gutil = require('gulp-util')
var uglify = require('gulp-uglify');
var rename = require('gulp-rename');
// Get Helper
var fsHelper = require('../helper/filesystem');
// configuration file
var config = require('../../gulp-config.json');

module.exports.init = function (browserSync) {
    gulp.task('coffee', function () {
        var files = fsHelper.getFilesOnDir(config.coffee, 'coffee');
        files.forEach(function (file) {
            gulp.src('./' + config.coffee + file[0] + '.coffee')
                    .pipe(coffee({bare: true})
                            .on('error', gutil.log))
                    .pipe(gulp.dest('./' + config.js))
                    .pipe(uglify())
                    .pipe(rename(file[0] + '.min.js'))
                    .pipe(gulp.dest('./' + config.js))
                    .pipe(browserSync.stream());
        })
    })
}