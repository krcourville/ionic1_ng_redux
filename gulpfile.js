var gulp = require('gulp');
var gulpWatch = require('gulp-watch');
var gutil = require('gulp-util');
var bower = require('bower');
var concat = require('gulp-concat');
var sass = require('gulp-sass');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var sh = require('shelljs');
var wiredep = require('wiredep');
/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var buildBrowserify = require('ionic-gulp-browserify-typescript');
var sassBuild = require('ionic-gulp-sass-build');
var copyHTML = require('ionic-gulp-html-copy');
var copyFonts = require('ionic-gulp-fonts-copy');
var copyScripts = require('ionic-gulp-scripts-copy');

var paths = {
    app: ['./app/**/*.ts'],
    sass: [ './app/**/*.scss' ],
    html: ['./app/**/*.html']
};


gulp.task('watch', ['build'], function(){    
  gulpWatch(paths.sass, function(){ gulp.start('sass'); });
  gulpWatch(paths.html, function(){ gulp.start('html'); });
  return buildBrowserify({ watch: true });
});

gulp.task('install', ['git-check'], function() {
    return bower.commands.install()
        .on('log', function(data) {
            gutil.log('bower', gutil.colors.cyan(data.id), data.message);
        });
});

gulp.task('git-check', function(done) {
    if (!sh.which('git')) {
        console.log(
            '  ' + gutil.colors.red('Git is not installed.'),
            '\n  Git, the version control system, is required to download Ionic.',
            '\n  Download git here:', gutil.colors.cyan('http://git-scm.com/downloads') + '.',
            '\n  Once git is installed, run \'' + gutil.colors.cyan('gulp install') + '\' again.'
        );
        process.exit(1);
    }
    done();
});

gulp.task('build', ['bower-depends', 'sass', 'html', 'fonts', 'scripts'], buildBrowserify);

gulp.task('sass', function(){
    return sassBuild({
        src: paths.sass,
        dest: 'www/css',
        sassOptions : {
            includePaths: [
                './www/lib/ionic/fonts'
            ]            
        }
    });
});

gulp.task('html', copyHTML);

gulp.task('fonts', copyFonts);

gulp.task('scripts', copyScripts);

gulp.task('clean', function(done){
  del('www/build', done);
});

gulp.task('bower-depends', function(done){
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./www'))
        .pipe(wiredep.stream())
        .pipe(gulp.dest('./www'));
});
