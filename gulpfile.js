const gulp = require('gulp');
const notify = require('gulp-notify');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const connect = require('gulp-connect');

// ERROR HANDLING
function onError(error) {
  notify.onError({
    title: 'Error',
    message: error.message
  })(error);
  this.emit('end');
}

// TASKS
gulp.task('sass', function() {
  return gulp.src('./app/**/*.scss')
    .pipe(sass())
    .on('error', onError)
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload())
});

gulp.task('css', function() {
  return gulp.src('./app/**/*.css')
    .pipe(gulp.dest('./public'))
    .on('error', onError)
    .pipe(connect.reload())
});

gulp.task('coffee', function() {
  return gulp.src('./app/**/*.coffee')
    .pipe(coffee())
    .on('error', onError)
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  return gulp.src('./app/**/*.js')
    .pipe(gulp.dest('./public'))
    .on('error', onError)
    .pipe(connect.reload())
});

gulp.task('html', function() {
  return gulp.src('./app/**/*.html')
    .pipe(gulp.dest('./public'))
    .on('error', onError)
    .pipe(connect.reload())
});


gulp.task('watch', function(){
  gulp.watch('./app/**/*.scss', ['sass']);
  gulp.watch('./app/**/*.css', ['css']);
  gulp.watch('./app/**/*.coffee', ['coffee']);
  gulp.watch('./app/**/*.js', ['js']);
  gulp.watch('./app/**/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  })
});

gulp.task('server', ['html', 'js', 'coffee', 'css', 'sass', 'connect', 'watch']);
