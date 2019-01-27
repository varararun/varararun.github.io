let ts = require('gulp-typescript');
let del = require('del');
let pkg = require('./package.json');
let gulp = require('gulp');
let sass = require('gulp-sass');
let header = require('gulp-header');
let rename = require('gulp-rename');
let uglify = require('gulp-uglify');
let jshint = require('gulp-jshint');
let stylish = require('jshint-stylish');
let beautify = require('gulp-jsbeautifier');
let cleanCSS = require('gulp-clean-css');
let concat = require('gulp-concat');
let tsProject = ts.createProject('tsconfig.json');
let sourcemaps = require('gulp-sourcemaps');
let browserSync = require('browser-sync').create();
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');
let plumber = require('gulp-plumber');
let jade = require('gulp-jade');
let htmlmin = require('gulp-htmlmin');

let paths = {
    scss: 'assets/css/avarghese.scss',
    css: 'assets/css/avarghese.css',
    ts: 'assets/js/avarghese.ts',
    js: 'assets/js/avarghese.js',
    jade: 'assets/html/index.jade',
    html: 'index.html'
}

const banner = ['/*\n',
    ' * <%= pkg.title %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    ''
].join('');

/** Miscellaneous Tasks **/

function jshintReport() {
    return gulp.src([
            paths.ts,
            '*.js'
        ])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));

};

function format() {
    return gulp.src([
            'assets/js/*.ts',
            'assets/css/*.scss',
            'assets/html/*.jade',
            '*.{js,json}'
        ], {
            base: './'
        })
        .pipe(plumber())
        .pipe(beautify())
        .pipe(gulp.dest('./'));

};

/** Image Tasks **/

function minifyImages() {
    return gulp.src('assets/img/**/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'));

};

/** JavaScript Tasks **/

function cleanJs(done) {
    del.sync([
        'assets/js/*.min.js',
        'assets/js/*.map'
    ], {
        force: true
    });

    done();
};

function typescript() {
    return tsProject.src()
        .pipe(plumber())
        .pipe(tsProject())
        .js.pipe(gulp.dest('assets/js'));
};

function minifyJs() {
    return gulp.src([
            paths.js
        ])
        .pipe(plumber())
        .pipe(uglify())
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/js'));
};

function sourcemapJs() {
    return gulp.src([
            'assets/js/*.min.js',
            '!assets/js/*spec.js'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/js'));
};

/** CSS Tasks **/

function cleanCss(done) {
    del.sync([
        'assets/css/*.min.css',
        'assets/css/*.map'
    ], {
        force: true
    });

    done();
};

function scss() {
    return gulp.src('assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest('assets/css'));
};

function minifyCss() {
    return gulp.src([
            paths.css
        ])
        .pipe(plumber())
        .pipe(cleanCSS({
            compatibility: 'ie8'
        }))
        .pipe(header(banner, {
            pkg: pkg
        }))
        .pipe(rename({
            suffix: '.min'
        }))
        .pipe(gulp.dest('assets/css'));
};

function bundleCss() {
    return gulp.src([
            'assets/css/avarghese.min.css',
            'assets/lib/animate.css/animate.min.css',
            'assets/lib/devicon/devicon.min.css'
        ])
        .pipe(concat('bundled.min.css'))
        .pipe(gulp.dest('assets/css'));
}

function sourcemapCss() {
    return gulp.src([
            'assets/css/*.min.css'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/css'));

};

/** HTML Tasks **/

function cleanHtml(done) {
    del.sync([
        paths.html
    ], {
        force: true,
    });

    done();
};

function jadeTemplate() {
    return gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('.'))
};

function minifyHtml() {
    return gulp.src(paths.html)
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('.'));
};

/** Server Task **/

function serve(done) {
    browserSync.init({
        server: {
            baseDir: '.'
        },
        port: process.env.PORT || 4790
    });

    done();
};

function reload(done) {
    browserSync.reload();
    done();
};

/** Task Flows **/

const js = gulp.series(cleanJs, typescript, minifyJs, sourcemapJs, reload);

const css = gulp.series(cleanCss, scss, minifyCss, bundleCss, sourcemapCss, reload);

const html = gulp.series(cleanHtml, jadeTemplate, minifyHtml, reload);

const compile = gulp.series(css, js, html);

function watch() {
    gulp.watch('assets/css/**/*.scss', css);
    gulp.watch('assets/js/**/*.ts', js);
    gulp.watch('assets/html/**/*.jade', html);
};

gulp.task('format', format);

gulp.task('bundleCss', bundleCss);

gulp.task('minifyImages', minifyImages);

gulp.task('default', gulp.series(minifyImages, compile, serve, watch));

module.exports = gulp;