// Gulp modules
var gulp = require('gulp');
var sass = require('gulp-ruby-sass');
var autoprefixer = require('gulp-autoprefixer');
var concat = require('gulp-concat');
// Get Helper
var fsHelper = require('../helper/filesystem');
// Get Gulp configuration
var config = require('../../gulp-config.json');

module.exports.init = function (browserSync) {
    gulp.task('sass', function () {
        var files = fsHelper.getFilesOnDir(config.scss, 'scss');
        console.log(files);
        files.forEach(function (file) {
            var target = './' + config.scss + file[0] + '.scss';
            console.log('Target: ' + target);
            // Deploy developer version of the css
            sass(target)
                    .pipe(autoprefixer('last 2 versions', '> 5%'))
                    .pipe(concat(file[0] + '.css'))
                    .pipe(gulp.dest(config.css))
                    .pipe(browserSync.stream())
            // Deploy production version of the css (compressed)
            sass(target, {style: 'compressed'})
                    .pipe(autoprefixer('last 2 versions', '> 5%'))
                    .pipe(concat(file[0] + '.min.css'))
                    .pipe(gulp.dest(config.css))
                    .pipe(browserSync.stream())
        });
    });
}