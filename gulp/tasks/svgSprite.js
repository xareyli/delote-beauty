import gulpSvgSprite from "gulp-svg-sprite"

export const svgSprite = () =>
    app.gulp.src(app.path.src.svgicons, {})
        .pipe(app.plugins.plumber(
            app.plugins.notify.onError({
                title: "Svg sprites",
                message: "Error: <%= error.message %>"
            })
        ))
        .pipe(gulpSvgSprite({
            mode: {
                stack: {
                    sprite: '../icons/icons.svg',
                    example: true
                }
            }
        }))
        .pipe(app.gulp.dest(app.path.build.images))

