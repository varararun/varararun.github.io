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
let tsProject = ts.createProject('tsconfig.json');
let sourcemaps = require('gulp-sourcemaps');
let runSequence = require('run-sequence');
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
    html: 'assets/html/index.html'
}

let banner = ['/*\n',
    ' * <%= pkg.title %> (<%= pkg.homepage %>)\n',
    ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
    ' */\n',
    ''
].join('');

/** Miscellaneous Tasks **/

gulp.task('jshint', () => {
    return gulp.src([
            paths.ts,
            '*.js'
        ])
        .pipe(plumber())
        .pipe(jshint())
        .pipe(jshint.reporter(stylish))
        .pipe(jshint.reporter('fail'));
});

gulp.task('format', () => {
    return gulp.src([
            paths.scss,
            paths.ts,
            'index.html',
            '*.{js,json}'
        ], {
            base: './'
        })
        .pipe(plumber())
        .pipe(beautify())
        .pipe(gulp.dest('./'));
});

/** Image Tasks **/

gulp.task('minify-images', () => {
    gulp.src('assets/img/**/*')
        .pipe(plumber())
        .pipe(imagemin())
        .pipe(gulp.dest('assets/img'))
});

/** JavaScript Tasks **/

gulp.task('clean-js', () => {
    return del.sync([
        'assets/js/*.min.js',
        'assets/js/*.map'
    ], {
        force: true
    });
});

gulp.task('typescript', () => {
    tsProject.src()
        .pipe(plumber())
        .pipe(tsProject())
        .js.pipe(gulp.dest('assets/js'));
});

gulp.task('minify-js', () => {
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
});

gulp.task('sourcemap-js', () => {
    return gulp.src([
            'assets/js/*.min.js',
            '!assets/js/*spec.js'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/js'));
});

/** CSS Tasks **/

gulp.task('clean-css', () => {
    return del.sync([
        'assets/css/*.min.css',
        'assets/css/*.map'
    ], {
        force: true
    });
});

gulp.task('scss', () => {
    return gulp.src('assets/css/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(autoprefixer({
            browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
        }))
        .pipe(gulp.dest('assets/css'));
});

gulp.task('minify-css', ['scss'], () => {
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
});

gulp.task('sourcemap-css', () => {
    return gulp.src([
            'assets/css/*.min.css'
        ])
        .pipe(plumber())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./'))
        .pipe(gulp.dest('assets/css'));
});

/** HTML Tasks **/

gulp.task('clean-html', () => {
    return del.sync([
        paths.html,
        'index.html'
    ], {
        force: true
    });
});

gulp.task('jade', () => {
    return gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('assets/html'))
});

gulp.task('minify-html', () => {
    return gulp.src(paths.html)
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('assets/html'));
});

gulp.task('move-html', () => {
    return gulp.src(paths.html)
        .pipe(plumber())
        .pipe(gulp.dest('.'));
});

/** Server Task **/

gulp.task('browserSync', () => {
    return browserSync.init({
        server: {
            baseDir: '.'
        },
        port: process.env.PORT || 4790
    });
});

/** Task Flows **/

gulp.task('js', () => {
    return runSequence('clean-js', 'typescript', 'minify-js', 'sourcemap-js');
});

gulp.task('css', () => {
    return runSequence('clean-css', 'scss', 'minify-css', 'sourcemap-css');
});

gulp.task('html', () => {
    return runSequence('clean-html', 'jade', 'minify-html', 'move-html');
});

gulp.task('minify', () => {
    return runSequence('css', 'js');
});

gulp.task('serve', () => {
    runSequence('minify', 'browserSync');
    gulp.watch('assets/css/**/*.scss', ['css', browserSync.reload]);
    gulp.watch('assets/js/**/*.ts', ['js', browserSync.reload]);
    gulp.watch('assets/html/**/*.jade', ['html', browserSync.reload]);
});

gulp.task('default', ['serve']);

module.exports = gulp;