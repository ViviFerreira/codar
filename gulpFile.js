const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')

const uglifycss = require('gulp-uglifycss')

function minifyCSS() {
    return gulp.src('./assets/css/style.css')
            .pipe(uglifycss({ "uglyComments" : true }))
            .pipe(concat('estilo.min.css'))
            .pipe(gulp.dest('./build/assets/css'))
}

function copyHTML() {
    return gulp.src('index.html')
            .pipe(uglifycss({ "uglyComments" : true }))
            .pipe(gulp.dest('./build/'))
}

function copyIMG() {
    return gulp.src('./assets/img/**/*.*')
            .pipe(gulp.dest('build/assets/img'))
}

exports.default = series(minifyCSS, copyHTML, copyIMG)