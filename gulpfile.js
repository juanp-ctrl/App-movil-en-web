const {src, dest} = require('gulp');
const sass = require('gulp-sass')(require('sass'));
const rename = require('gulp-rename');
const cleanCSS = require('gulp-clean-css');
const uglify = require('gulp-uglify-es').default;

function css(){
    return src("./sass/index.scss")
            .pipe(sass())
            .pipe(rename("main.css"))
            .pipe(dest("./css"));
}

function min_css(){
    return src("./css/main.css")
            .pipe(cleanCSS())
            .pipe(rename('main.min.css'))
            .pipe(dest("./css"));
}

function min_js(){
    return src("./js/main.js")
            .pipe(uglify())
            .pipe(rename("main.min.js"))
            .pipe(dest("./js"));
}

exports.css = css;
exports.min_css = min_css;
exports.min_js = min_js;
exports.default = ()=>{};