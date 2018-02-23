var gulp = require('gulp'),
	rename = require('gulp-rename'),
	sass = require('gulp-sass'),
	pug = require('gulp-pug'),
	uglify = require('gulp-uglify'),
	concatCss = require('gulp-concat-css'),
	minifyCss = require('gulp-clean-css');

gulp.task('sass', function() {
	gulp.src('src/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('./dist/css/'))
});

gulp.task('templates', function buildHTML() {
	return gulp.src('src/templates/*.pug')
		.pipe(pug())
		.pipe(gulp.dest('./dist/'))
});

gulp.task('uglifyJS', function() {
	gulp.src('dist/js/bundle.js')
		.pipe(uglify())
		.pipe(rename('bundle.min.js'))
		.pipe(gulp.dest('dist/js'))
});

gulp.task('uglifyCSS', function() {
	gulp.src('dist/css/*.css')
		.pipe(concatCss('bundle.css'))
		.pipe(minifyCss())
		.pipe(rename('bundle.min.css'))
		.pipe(gulp.dest('dist/css'));
});

//Watch task
gulp.task('default',function() {
	gulp.watch('src/sass/**/*.scss',['sass', 'uglifyCSS']);
	gulp.watch('src/templates/**/*.pug',['templates']);
});