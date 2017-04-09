var gulp = require('gulp');
var config = require('./gulp.config')();
var plugins = require('gulp-load-plugins')({lazy: true});

gulp.task('wiredep', function(){
    var options = config.getWiredepDefaultOptions();
    var wiredep = require('wiredep').stream;

    return gulp
        .src(config.index)
        .pipe(wiredep(options)) // injects bower dependencies
        .pipe(plugins.inject(gulp.src(config.js))) // injects app js dependencies
        .pipe(plugins.inject(gulp.src(config.css))) // injects app css dependencies
        .pipe(gulp.dest(config.client))
});