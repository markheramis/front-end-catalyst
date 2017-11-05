// Gulp modules
var gulp = require('gulp');
// Get Gulp configuration
var config = require('../../gulp-config.json');

module.exports.init = function (browserSync) {
    gulp.task('browser-sync', function () {
        console.log('---- starting browser-sync');
        browserSync.init({
            server: {
                baseDir: './'
            },
            startPath: './dist/index.html'
        });
    });
    gulp.task('reload', function () {
        console.log('---- reloading browser');
        browserSync.reload();
    })
}