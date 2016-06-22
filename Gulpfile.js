var gulp = require('gulp')
var rename = require('gulp-rename')
var babel = require('gulp-babel')
var babelify = require('babelify')
var browserify = require('browserify')
var source = require('vinyl-source-stream')
var watchify = require('watchify')

gulp.task('dist', function() {
  gulp
    .src('./src/server/index.js')
    .on('error', function(error) { console.log(error); this.emit('end') })
    .pipe(babel({
      presets: ['es2015']
    }))
    .pipe(gulp.dest('dist/src/server'))
})

function compile(watch) {
  var bundle = browserify('./src/client/app.js')

  if (watch) {
    bundle = watchify(bundle)
    bundle.on('update', function() {
      console.log('--> Bundling...')
      rebundle()
    })
  }

  function rebundle() {

    bundle
      .transform(babelify, { presets: ['es2015', 'react'] })
      .bundle()
      .on('error', function(error) { console.log(error); this.emit('end') })
      .pipe(source('app.js'))
      .pipe(rename('build.js'))
      .pipe(gulp.dest('public'))
  }

  rebundle()
}

gulp.task('build', function() {
  return compile()
})

gulp.task('watch', function() {
  return compile(true)
})

gulp.task('default', ['dist', 'build'])