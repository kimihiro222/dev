var gulp = require('gulp');
var sass = require("gulp-sass");
var autoprefixer = require("gulp-autoprefixer");

//sassコンパイル
gulp.task("sass", function() {
	gulp.src("./sass/**/*.scss")
		.pipe(sass())
		.pipe(autoprefixer())
		.pipe(gulp.dest("./css"))
});

//ファイル監視
gulp.task('default', function () {
	gulp.watch("./**/*.scss", ['sass']);
});
