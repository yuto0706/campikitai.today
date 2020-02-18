var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require('gulp-autoprefixer');

gulp.task('sass', function (done) {
    gulp.src('./scss/style.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer(['last 3 versions', 'ie >= 8', 'Android >= 4', 'iOS >= 8']))
        .pipe(gulp.dest('./css/'));
    done();
});

gulp.task('watch', function () {
    gulp.watch('./scss/**/*.scss', gulp.series('sass'));
});

gulp.task('default', gulp.series('watch'));