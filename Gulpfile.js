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

gulp.task('default', ['dist'])