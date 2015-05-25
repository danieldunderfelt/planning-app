var gulp = require('gulp')
var browserSync = require('browser-sync')
var sass = require('gulp-sass')
var autoprefixer = require('gulp-autoprefixer')
var reload = browserSync.reload;

gulp.task('browser-sync', function() {
    browserSync({
    	server: {
    		baseDir: "./"
    	},
        open: false
    })
})

gulp.task('bs-reload', function () {
    browserSync.reload()
})

gulp.task('scss', function () {
    return gulp.src('src/scss/*.scss')
        .pipe(sass().on('error', console.error.bind(console)))
        .pipe(autoprefixer())
        .pipe(gulp.dest('src/css'))
        .pipe(reload({stream: true}))
})

gulp.task('default', ['browser-sync'], function () {
    gulp.watch(['src/**/*.scss'], ['scss'])
    gulp.watch(["src/**/*.{js,jsx}", "./*.html"], ['bs-reload'])
})