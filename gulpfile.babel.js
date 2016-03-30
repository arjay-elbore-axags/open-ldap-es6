require('babel/register');

var gulp = require('gulp');
var sourcemaps = require('gulp-sourcemaps');
var babel = require('gulp-babel');
var concat = require('gulp-concat');

var fs = require('fs');
var path = require('path');

var mocha = require('gulp-mocha');
var util = require('gulp-util');
var del = require('del');

console.log(path.join);

const babelrc = JSON.parse(fs.readFileSync(path.join(__dirname, '.babelrc'), 'utf-8'));

var test_path = {
    sources: ['test/units/**/*.js'],
    src: ['test/units/account-spec.js']
};

var build_path = [
    'src/**/*.js', 
    'test/**/*.js'    
];

gulp.task('clean', function(done){
  del.sync('lib/**/*');
  done();
});

gulp.task('copy', function(){ 
    gulp.src('src/**/*.json')
        .pipe(gulp.dest('lib')); 
});

// gulp.task('transform', ['copy'], function(){ 
//     gulp.src('src/**/*.js')
//         .pipe(babel(babelrc))
//         .pipe(gulp.dest('lib')); 
// });

// gulp.task('build', ['clean'], function() {
// 	return gulp.src([
//             'src/**/*.js', 
//             'test/**/*.js'
//         ])
// 		.pipe(sourcemaps.init())
// 		.pipe(babel({
// 			presets: ['es2015']
// 		}))
// 		.pipe(sourcemaps.write('.'))
// 		.pipe(gulp.dest('lib'));
// });

gulp.task('transform', ['copy'], function() {
	return gulp.src(['src/**/*.js'])
		.pipe(babel({
			presets: ['es2015']
		}))
		.pipe(gulp.dest('lib'));
});

gulp.task('build', ['clean'], function() {
   gulp.start('transform'); 
});

gulp.task('test', function () {
    return gulp.src(test_path.sources, { read: false })
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