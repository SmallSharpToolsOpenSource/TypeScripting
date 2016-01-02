var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  return gulp.src('ts/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts({
            sortOutput: true,
			noImplicitAny: true,
			out: 'js/run.js',
            inlineSourceMap : false
		}))
        .pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: '../ts'}))
		.pipe(gulp.dest('./'));
});


var watcher = gulp.watch('ts/*.ts', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
