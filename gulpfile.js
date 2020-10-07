var gulp = require('gulp'),
    sourcemaps = require('gulp-sourcemaps'),
    plumber = require('gulp-plumber'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    notify = require('gulp-notify'),
    include = require('gulp-include'),
    sass = require('gulp-sass'),
    gulpif = require('gulp-if'),
    util = require('gulp-util');

var config = {
    sourceMaps: !util.env.production,
    sassOptions: {
        errLogToConsole: true,
        precision: 4,
        noCache: true,
        outputStyle: 'compressed'
    }
};

// Default error handler
var onError = function (err) {
    console.log('An error occured:', err.message);
    this.emit('end');
};

// Concatenates all files that it finds in the main.js
gulp.task('scripts', function () {
    return gulp.src('./src/js/main.js')
        .pipe(include())
        .pipe(rename({basename: 'scripts'}))
        .pipe(gulp.dest('./dist'));
});

gulp.task('scripts-min', function () {
    return gulp.src('./src/js/main.js')
        .pipe(include())
        .pipe(rename({basename: 'scripts'}))
        .pipe(uglify())
        .pipe(gulp.dest('./dist'))
});



gulp.task('sass', function () {
    return gulp.src('./src/scss/main.scss')
        .pipe(plumber({errorHandler: onError}))
        .pipe(gulpif(config.sourceMaps, sourcemaps.init()))
        .pipe(sass(config.sassOptions))
        .pipe(gulpif(config.sourceMaps, sourcemaps.write()))
        .pipe(autoprefixer())
        .pipe(gulp.dest('./dist'))
        .pipe(notify({title: 'Styles', message: 'update successfully'}));
});

// watch files for change
gulp.task('watch', ['sass', 'scripts'], function () {
    gulp.watch(['./src/js/**/*.js'], ['scripts']);
    gulp.watch('./src/scss/**/*.scss', ['sass']);
});

gulp.task('default', ['sass', 'scripts-min'], function () {
});