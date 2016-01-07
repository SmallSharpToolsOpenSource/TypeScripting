var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  return null;
});

gulp.task('tsc', function() {
  return gulp.src('ts/**/*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts({
            sortOutput: true,
			noImplicitAny: true,
			//out: 'js/run.js',
            outDir: 'js',
            inlineSourceMap : false,
            module : 'commonjs',
            moduleResolution: 'node'
		}))
        .pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: '../ts'}))
		.pipe(gulp.dest('./js'));
});

gulp.task('watch', function() {
    var watcher = gulp.watch('ts/*.ts', ['tsc']);
    watcher.on('change', function(event) {
    console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
    });

  return null;
});
