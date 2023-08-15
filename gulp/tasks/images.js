import webp from "gulp-webp"
import imagemin from "gulp-imagemin"

export const images = () =>
app.gulp.src(app.path.src.images, { sourcemaps: true })
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Images",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                webp()
            )
        )
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.gulp.src(app.path.src.images))
        .pipe(
            app.plugins.if(
                app.isBuild,
                app.plugins.newer(app.path.build.images)
            )
        )
        .pipe(
            app.plugins.if(
                app.isBuild,
                imagemin({
                    progressive: true,
                    svgoPlugins: [{ removeViewBox: false }],
                    interlaced: true,
                    optimizationLevel: 3 // 0 to 7
                })
            )
        )
        .pipe(app.gulp.dest(app.path.build.images))

        .pipe(app.gulp.src(app.path.src.svg))
        .pipe(app.gulp.dest(app.path.build.images))
        .pipe(app.plugins.browserSync.stream())

