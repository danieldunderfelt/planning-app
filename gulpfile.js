var gulp = require('gulp')
var sass = require('gulp-sass')
var flatten = require('gulp-flatten')
var autoprefixer = require('gulp-autoprefixer')

gulp.task('scss', function () {
    gulp.src('src/scss/**/*.scss')
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(autoprefixer())
        .pipe(flatten())
        .pipe(gulp.dest('src/css'))
})

gulp.task('default', function () {
    gulp.watch(['src/**/*.scss'], ['scss'])
})