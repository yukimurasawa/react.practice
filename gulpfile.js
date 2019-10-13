var gulp = require("gulp");
var watch = require('gulp-watch');
var sass = require('gulp-sass');
var plumber = require('gulp-plumber');
var notify = require('gulp-notify');
var browserSync = require('browser-sync').create();
var webpack = require('webpack');
var webpackStream = require('webpack-stream');
var webpackConfig =require('./webpack.config.js');

gulp.task('compile', function(){
  return gulp.src([
      './src/js/index.js',
      ])
      .pipe(plumber({errorHandler: notify.onError('<%= error.message %>')}))
      .pipe(webpackStream(webpackConfig), null, function(err, stats){
          if(stats.compilation.errors.length > 0){
              notify({
                  title: 'webpack error',
                  message: stats.compilation.errors[0].error
              });
          }
      })
      .pipe(gulp.dest('./js/'))
});

gulp.task('browser-sync', function() {
  browserSync.init({
    server: {
      baseDir: './'
    }
  });
});

gulp.task('sass',function(){
  return gulp.src('./scss/*.scss')
  .pipe(sass({outputStyle: 'expanded'}))
  .pipe(gulp.dest('./css/'));
});

gulp.task('watch', function() {
  gulp.watch(['./src/js/**/*.js'], gulp.series('compile'));
  gulp.watch(['./scss/*.scss'],gulp.series('sass'));
  gulp.watch(['./*.html','./src/js/**/*.js','./css/*.css'],function() {
     browserSync.reload(); 
  });
});

gulp.task('default',gulp.series(gulp.parallel('compile','sass','browser-sync','watch')));
