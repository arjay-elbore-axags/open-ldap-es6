const gulp = require('gulp');
const sourcemaps = require('gulp-sourcemaps');
const babel = require('gulp-babel');
const concat = require('gulp-concat');

var mocha = require('gulp-mocha');
var util = require('gulp-util');
var babel_reg = require('babel/register');
 
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
            compilers: { js: babel_reg } 
        }))
        .on('error', util.log);
});