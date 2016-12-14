const gulp = require('gulp');
const sass = require('gulp-sass');
const coffee = require('gulp-coffee');
const connect = require('gulp-connect');

gulp.task('sass', function() {
  return gulp.src('./app/stylesheets/**/*.scss')
    .pipe(sass())
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload())
});

gulp.task('css', function() {
  return gulp.src('./app/stylesheets/**/*.css')
    .pipe(gulp.dest('./public/css'))
    .pipe(connect.reload())
});

gulp.task('coffee', function() {
  return gulp.src('./app/javascript/**/*.coffee')
    .pipe(coffee())
    .pipe(gulp.dest('./public/javascript'))
    .pipe(connect.reload())
});

gulp.task('js', function() {
  return gulp.src('./app/javascript/**/*.js')
    .pipe(gulp.dest('./public/javascript'))
    .pipe(connect.reload())
});

gulp.task('html', function() {
  return gulp.src('./app/views/**/*.html')
    .pipe(gulp.dest('./public'))
    .pipe(connect.reload())
});


gulp.task('watch', function(){
  gulp.watch('./app/stylesheets/**/*.scss', ['sass']);
  gulp.watch('./app/stylesheets/**/*.css', ['css']);
  gulp.watch('./app/javascript/**/*.coffee', ['coffee']);
  gulp.watch('./app/javascript/**/*.js', ['js']);
  gulp.watch('./app/views/**/*.html', ['html']);
});

gulp.task('connect', function() {
  connect.server({
    root: './public',
    livereload: true
  })
});

gulp.task('server', ['html', 'js', 'coffee', 'css', 'sass', 'connect', 'watch']);
