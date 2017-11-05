var gulp = require('gulp');
gulp.task('watch', function () {
    gulp.watch('src/php/**/*.php', ['php2html', 'reload']);
    // Watch .html files
    gulp.watch('dist/*.html', ['reload']);
    // Watch .coffee files
    gulp.watch('src/coffee/**/*.coffee', ['coffee']);
    // Watch .js files
    gulp.watch('src/js/**/*.js', ['scripts']);
    // Watch .scss files
    gulp.watch('src/scss/**/*.scss', ['sass']);
});
gulp.task('default', ['browser-sync', 'watch']);