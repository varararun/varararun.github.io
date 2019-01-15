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
let browserSync = require('browser-sync').create();
let autoprefixer = require('gulp-autoprefixer');
let imagemin = require('gulp-imagemin');
let plumber = require('gulp-plumber');
let jade = require('gulp-jade');
let htmlmin = require('gulp-htmlmin');

let paths = {
  scss: 'assets/css/avarghese.scss',
  css: 'assets/css/avarghese.css',  
  ts:'assets/js/avarghese.ts',
  js:'assets/js/avarghese.js',
  jade: 'assets/html/index.jade',
  html: 'assets/html/index.html'
}

const banner = ['/*\n',
  ' * <%= pkg.title %> (<%= pkg.homepage %>)\n',
  ' * Copyright 2016-' + (new Date()).getFullYear(), ' <%= pkg.author %>\n',
  ' */\n',
  ''
].join('');

/** Miscellaneous Tasks **/

function jshintReport(done) {
  gulp.src([
      paths.ts,
      '*.js'
    ])
    .pipe(plumber())
    .pipe(jshint())
    .pipe(jshint.reporter(stylish))
    .pipe(jshint.reporter('fail'));

    done();
};

function format(done) {
  gulp.src([
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

    done();
};

/** Image Tasks **/

function minifyImages(done) {
  gulp.src('assets/img/**/*')
    .pipe(plumber())
    .pipe(imagemin())
    .pipe(gulp.dest('assets/img'));

    done();
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

function typescript(done) {
  tsProject.src()
    .pipe(plumber())
    .pipe(tsProject())
    .js.pipe(gulp.dest('assets/js'));

    done();
};

function minifyJs(done) {
  gulp.src([
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

    done();
};

function sourcemapJs(done) {
  gulp.src([
      'assets/js/*.min.js',
      '!assets/js/*spec.js'
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/js'));

    done();
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

function scss(done) {
  gulp.src('assets/css/**/*.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(autoprefixer({
      browsers: ['last 2 versions', '> 5%', 'Firefox ESR']
    }))
    .pipe(gulp.dest('assets/css'));

    done();
};

function minifyCss(done) {
  gulp.src([
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

    done();
};

function sourcemapCss(done) {
  gulp.src([
      'assets/css/*.min.css'
    ])
    .pipe(plumber())
    .pipe(sourcemaps.init())
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('assets/css'));

    done();
};

/** HTML Tasks **/

function cleanHtml(done) {
    del.sync([
        paths.html,
        'index.html'
    ], {
        force: true
    });

    done();
};

function jadeTemplate(done) {
    gulp.src(paths.jade)
        .pipe(plumber())
        .pipe(jade({
            pretty: true
        }))
        .pipe(gulp.dest('assets/html'))

        done();
};

function minifyHtml(done) {
    gulp.src(paths.html)
        .pipe(plumber())
        .pipe(htmlmin({
            collapseWhitespace: true
        }))
        .pipe(gulp.dest('assets/html'));

    done();
};

function moveHtml(done) {
    gulp.src(paths.html)
        .pipe(gulp.dest('.'));

    done();
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

const css = gulp.series(cleanCss, scss, minifyCss, sourcemapCss, reload);

const html = gulp.series(cleanHtml, jadeTemplate, minifyHtml, moveHtml, reload);

const minify = gulp.series(css, js);

function watch() {
  gulp.watch('assets/css/**/*.scss', css);
  gulp.watch('assets/js/**/*.ts', js);
  gulp.watch('index.html', reload);
  // gulp.watch('assets/html/**/*.jade', html);
};

gulp.task('default', gulp.series(minify, serve, watch));

module.exports = gulp;
