require('babel/register');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var mocha = require('gulp-mocha');
var util = require('gulp-util');

require('babel/register');
 
gulp.task('default', function() {
	return gulp.src('src/**/*.js')
		.pipe(sourcemaps.init())
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(concat('all.js'))
		.pipe(sourcemaps.write('.'))
		.pipe(gulp.dest('dist'));
});

gulp.task('test', function () {
    return gulp.src(['test/**/*.js'], { read: false })
        .pipe(mocha({ 
            reporter: 'spec',
            compilers: [
                'js:babel-core/register',
            ]
        }))
        .on('error', util.log);
});


gulp.task('e2e', function () {
    return gulp.src(['e2e/**/*.js'], { read: false })
        .pipe(mocha({ 
            reporter: 'spec',
            compilers: [
                'js:babel-core/register',
            ]
        }))
        .on('error', util.log);
});