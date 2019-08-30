const aglio = require('gulp-aglio');
const gulp  = require('gulp');

gulp.task('render', function () {
    return gulp.src('apib-files/*.apib')
        .pipe(aglio({ template: './src/custom.less', themeCondenseNav: false, themeFullWidth: true } ))
        .pipe(gulp.dest('./documentatie'));
});