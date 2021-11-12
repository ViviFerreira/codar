const { series } = require('gulp')
const gulp = require('gulp')
const concat = require('gulp-concat')

const uglifycss = require('gulp-uglifycss')

function minifyCSS() {
    return gulp.src('./assets/css/style.css')
        .pipe(uglifycss({ "uglyComments" : true }))
        .pipe(concat('estilo.min.css'))
        .pipe(gulp.dest('./assets/css'))
}

exports.default = series(minifyCSS)