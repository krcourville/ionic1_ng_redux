var 
    gulp = require('gulp'),
    gulpWatch = require('gulp-watch'),
    gutil = require('gulp-util'),
    bower = require('bower'),
    concat = require('gulp-concat'),
    sass = require('gulp-sass'),
    minifyCss = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    sh = require('shelljs'),
    wiredep = require('wiredep'),
    fs = require('fs');
/**
 * Ionic Gulp tasks, for more information on each see
 * https://github.com/driftyco/ionic-gulp-tasks
 *
 * Using these will allow you to stay up to date if the default Ionic 2 build
 * changes, but you are of course welcome (and encouraged) to customize your
 * build however you see fit.
 */
var 
    buildBrowserify = require('ionic-gulp-browserify-typescript'),
    sassBuild = require('ionic-gulp-sass-build'),
    copyHTML = require('ionic-gulp-html-copy'),
    copyFonts = require('ionic-gulp-fonts-copy'),
    copyScripts = require('ionic-gulp-scripts-copy');

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

gulp.task('build', ['sass', 'html', 'fonts', 'scripts'], buildBrowserify);

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

gulp.task('html', ['bower-depends'],copyHTML);

gulp.task('fonts', copyFonts);

gulp.task('scripts', copyScripts);

gulp.task('clean', function(done){
  del('www/build', done);
});

gulp.task('bower-depends', function(){    
    return gulp.src('./app/index.html')
        .pipe(gulp.dest('./www'))
        .pipe(wiredep.stream())
        .pipe(gulp.dest('./www'));
});

function copyFile(source, target, cb) {
  var cbCalled = false;

  var rd = fs.createReadStream(source);
  rd.on("error", function(err) {
    done(err);
  });
  var wr = fs.createWriteStream(target);
  wr.on("error", function(err) {
    done(err);
  });
  wr.on("close", function(ex) {
    done();
  });
  rd.pipe(wr);

  function done(err) {
    if (!cbCalled) {
      cb(err);
      cbCalled = true;
    }
  }
}
