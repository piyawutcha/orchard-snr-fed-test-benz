const { series, parallel, src, dest, watch} = require('gulp');
const babel = require('gulp-babel');
const uglify = require('gulp-uglify');
const importjs = require('gulp-importjs');
const cleanDir = require('gulp-clean-dir');
const concat = require('gulp-concat');
const minify = require('gulp-minify');
const sass = require('gulp-sass')(require('sass'));
const cleanCSS = require('gulp-clean-css');

function css() {
  let scss_files = 'scss/**/*.scss';
  let styles_file = 'scss/styles.scss';

  src(styles_file)
    .pipe(cleanDir('assets/build',{
      ext:['.css']
    }))
    .pipe(sass())
    .pipe(cleanCSS())
    .pipe(dest('assets/build'));

  watch(scss_files, function() {
    css();
  })
}

function js() {
  let js_files = 'js/**/*.js';

  src(js_files)
    .pipe(cleanDir('assets/build', {
      ext:['.js']
    }))
    .pipe(importjs())
    .pipe(babel())
    .pipe(uglify())
    .pipe(concat('tasteology-js.js'))
    .pipe(minify())
    .pipe(dest('assets/build'));

    watch(js_files, function() {
      js();
    })
}

exports.default = series(parallel(css, js));