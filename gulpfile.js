const gulp = require('gulp'),
    minifyCSS = require('gulp-clean-css'),
    rename = require('gulp-rename'),
    sass = require('gulp-sass'),
    minifyJS = require('gulp-minify'),
<<<<<<< HEAD
    autoprefixer = require('gulp-autoprefixer'),
=======
>>>>>>> 7e509453522a314dd20ac3c9591cdf652db17f25
    browserSync = require('browser-sync').create();
//create - чтобы создать соединение с локальным сервером

gulp.task('minCSS', async function() {//таск позволяет минифицировать scss-файлы
    gulp.src('app/css/*.scss')//взяли файлы из папки app
        .pipe(sass())//конвертируем из scss в css
<<<<<<< HEAD
        .pipe(autoprefixer({
            overrideBrowserslist: ['last 20 versions'], //Добавляет префиксы для последних 20 версий всех браузеров
            cascade: false
        }))
=======
>>>>>>> 7e509453522a314dd20ac3c9591cdf652db17f25
        .pipe(minifyCSS())//функция минификации
        .pipe(rename({//переименовываем файл
            suffix: '.min'
        }))
        .pipe(gulp.dest('public/css'))//перенесли файл в public
        .pipe(browserSync.stream());//stream - передает данные в browserSync, оно синхранизируется и обновляет страничку
});

gulp.task('minJs', async function() {//таск позволяет минифицировать js-файлы
    gulp.src('app/js/*.js')
        .pipe(minifyJS())//функция минификации
        .pipe(gulp.dest('public/js'))//перенесли файл в public
        .pipe(browserSync.stream());
});

gulp.task('watchAll', function() {
    gulp.watch("app/css/*.scss", gulp.series('minCSS'));//при изменении scss-файла мы вызываем minCSS
    gulp.watch("app/js/*.js", gulp.series('minJs'));
});

gulp.task('browserSync', function() {
    browserSync.init({//инициализация
        server: "public/" //показываем, какую папку отображать на локальном сервере
    });

    gulp.watch("public/*.html").on('change',
        browserSync.reload);//watch-таски выполняются постоянно
    //on - прикрепляется событие change.
    // Перезагружаем наш локальный сервер.
});

<<<<<<< HEAD
gulp.task('default', gulp.parallel('browserSync', 'watchAll'));
=======
gulp.task('default', gulp.parallel('browserSync', 'watchAll'));
>>>>>>> 7e509453522a314dd20ac3c9591cdf652db17f25
