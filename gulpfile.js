var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: './app'
        }
    });

    gulp.watch('./app/components/**/*.html', browserSync.reload);
    gulp.watch('./app/assets/css/*.css', browserSync.reload);
});

gulp.task('default', ['serve']);