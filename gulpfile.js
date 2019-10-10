var gulp = require("gulp");
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var browserSync = require('browser-sync').create();

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass',function(){
  gulp.src('./scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .on('error',sass.logError)
  .pipe(gulp.dest('./css/'));
});

gulp.task('sass-watch',function(){
  gulp.watch('./scss/*.scss',gulp.series('sass'));
});

gulp.task('watch', function() {
  gulp.watch(['./*.html','./js/*.js'],function() {
     browserSync.reload(); 
  });
});

gulp.task('default',gulp.series(gulp.parallel('browser-sync','sass-watch','watch')));
