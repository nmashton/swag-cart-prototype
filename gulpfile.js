var browserify = require('browserify')
var buffer = require('vinyl-buffer')
var gulp = require('gulp')
var gutil = require('gulp-util')
var source = require('vinyl-source-stream')
var sourcemaps = require('gulp-sourcemaps')
var uglify = require('gulp-uglify')
var watchify = require('watchify')

var opts = Object.assign({}, watchify.args, {debug: true})

var b = watchify(
  browserify(
    'src/index.js',
    opts
  )
)

b.on('update', bundle)
b.on('log', gutil.log)

function bundle () {
  return b.bundle()
    .on('error', gutil.log.bind(gutil, 'Build error'))
    .pipe(source('bundle.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({loadMaps: true}))
    .pipe(uglify({
      compress: {dead_code: true}
    }))
    .pipe(sourcemaps.write('.'))
    .pipe(gulp.dest('dist'))
}

gulp.task('default', bundle)
