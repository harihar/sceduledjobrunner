var gulp = require('gulp');
var browserSync = require('browser-sync').create();

gulp.task('serve', function(){
    browserSync.init({
        server: {
            baseDir: 'src/main/resources/static/app/'
        }
    });

    gulp.watch('src/main/resources/static/app/components/**/*.html', browserSync.reload);
    gulp.watch('src/main/resources/static/app/assets/css/*.css', browserSync.reload);
});

gulp.task('default', ['serve']);