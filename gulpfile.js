var gulp = require('gulp');

var browserify = require('browserify');
var reactify = require('reactify');
var source = require('vinyl-source-stream');

gulp.task('js1', function(){
    browserify('./public/javascripts/src/myapp.jsx')
        .transform(reactify)
        .bundle()
        .pipe(source('myapp.js'))
        .pipe(gulp.dest('public/javascripts/build/'));
});

gulp.task('watch', function() {
    gulp.watch("public/javascripts/src/**/*.jsx", ["js1"])
})

gulp.task('default', ['js1', 'watch']);
