import path from 'path'
import { createRequire } from 'module'
import { type TaskFunction, dest, parallel, series, src } from 'gulp'
import postcss from 'gulp-postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import cssnano from 'cssnano'
import gulpSass from 'gulp-sass'
import dartSass from 'sass'
import rename from 'gulp-rename'
import { run, withTaskName } from '@item-ui/build'
import { epOutput } from '@item-ui/build-utils'

const require = createRequire(import.meta.url)

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme-chalk')

// 新增：解析 element-plus 的路径
const elementPlusPath = path.dirname(
  require.resolve('element-plus/package.json')
)

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

function compileSassAndTailwind() {
  const sass = gulpSass(dartSass)
  return src('src/index.scss')
    .pipe(
      sass({
        includePaths: [
          path.resolve(__dirname, '../../node_modules'),
          path.resolve(elementPlusPath, 'theme-chalk/src'), // 添加 element-plus 样式路径
        ],
        importer: [
          (url) => {
            if (url === 'element-plus/theme-chalk/src/index.scss') {
              return {
                file: path.resolve(
                  elementPlusPath,
                  'theme-chalk/src/index.scss'
                ),
              }
            }
            if (url.startsWith('element-plus/')) {
              return {
                file: require.resolve(url, {
                  paths: [path.resolve(__dirname, '../../')],
                }),
              }
            }
            return null
          },
        ],
      }).on('error', sass.logError)
    )
    .pipe(postcss([tailwindcss('./tailwind.config.js'), autoprefixer()]))
    .pipe(dest('temp'))
}

function optimizeCss() {
  return src('temp/**/*.css')
    .pipe(postcss([cssnano()]))
    .pipe(dest(distFolder))
}

function cleanTemp(cb) {
  // 使用 del 包来删除 temp 文件夹
  // 为简化示例，这里只是一个占位函数
  console.log('Cleaning temp folder')
  cb()
}

export const build: TaskFunction = series(
  compileSassAndTailwind,
  optimizeCss,
  cleanTemp,
  parallel(copyThemeChalkSource, copyThemeChalkBundle)
)

export default build
