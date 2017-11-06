var gulp = require('gulp');
var ejs = require('gulp-ejs')
var gutil = require('gulp-util')

module.exports.init = function(){
	gulp.task('ejs', function() {
	  return gulp.src('./src/ejs/*.ejs')
		.pipe(ejs(
			{ msg: 'Hello Gulp!'}, 
			{}, 
			{ ext: '.html' }
		).on('error', gutil.log))
		.pipe(gulp.dest('./dist'))
	});
}