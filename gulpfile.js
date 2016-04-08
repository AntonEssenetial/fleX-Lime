var gulp = require ('gulp'),
  watch = require ('gulp-watch'),
  connect = require ('gulp-connect'),
  jade = require ('gulp-jade'),
  stylus = require ('gulp-stylus'),
  nib = require('nib')

gulp.task('connect',function(){
  connect.server({
    root: './dist',
    livereload: true,
    port: 1337
    })
  });

gulp.task('jade',function(){
  gulp.src('jade/*.jade')
    .pipe(jade({
      pretty: false
      }))
    .pipe(gulp.dest('dist'))
    .pipe(connect.reload())
  });

gulp.task('stylus', function(){
  gulp.src('stylus/*.styl')
    .pipe(stylus({
      use: nib(),
      compress: true
      }))
    .pipe(gulp.dest('dist/css'))
    .pipe(connect.reload())
  });

gulp.task('watch',function(){
  gulp.watch('stylus/*.styl',['stylus']);
  gulp.watch('jade/*.jade',['jade']);
  watch('dist/*.').pipe(connect.reload());
  //gulp.watch('js/*.js',['concat']);
  //gulp.watch('concat_js/*.js',['uglify'])
  });

gulp.task('default',['connect','jade','stylus','watch']); 