var gulp = require('gulp');
var ts = require('gulp-typescript');
var sourcemaps = require('gulp-sourcemaps');

gulp.task('default', function() {
  // place code for your default task here
  return gulp.src('*.ts')
        .pipe(sourcemaps.init())
		.pipe(ts({
            sortOutput: true,
			noImplicitAny: true,
			out: 'run.js',
            inlineSourceMap : false
		}))
        .pipe(sourcemaps.write('./', {includeContent: false, sourceRoot: './'}))
		.pipe(gulp.dest('./'));
});


var watcher = gulp.watch('./*.ts', ['default']);
watcher.on('change', function(event) {
  console.log('File ' + event.path + ' was ' + event.type + ', running tasks...');
});
