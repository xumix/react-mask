var gulp = require('gulp');
var connect	= require('gulp-connect');
var source = require('vinyl-source-stream');
var browserify = require('browserify');
var watchify = require('watchify');
var reactify = require('reactify');

gulp.task('browserify', function() {
    var bundler = browserify({
        entries: ['./public/app.js'],
        transform: [reactify],
        debug: true,
        cache: {}, packageCache: {}, fullPaths: true
    });
    var watcher  = watchify(bundler);

    return watcher
    .on('update', function () {
        var updateStart = Date.now();
        console.log('Updating!');
        watcher.bundle()
        .pipe(source('bundle.js'))
        .pipe(gulp.dest('./public/'));
        console.log('Updated!', (Date.now() - updateStart) + 'ms');
    })
    .bundle()
    .pipe(source('bundle.js'))
    .pipe(gulp.dest('./public/'));
});


gulp.task('connect', function() {
	connect.server({
		root: 'public',
		livereload: true
	});
});

gulp.task('default', ['connect', 'browserify']);
gulp.task('c', ['connect']);
