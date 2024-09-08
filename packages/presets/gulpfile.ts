import path from 'path'
import { type TaskFunction, dest, parallel, series, src } from 'gulp'
import { epOutput } from '@item-ui/build-utils'
import { run, withTaskName } from '@item-ui/build'

const distFolder = path.resolve(__dirname, 'dist')
const distBundle = path.resolve(epOutput, 'theme-chalk')

export function copyThemeChalkBundle() {
  return src(`${distFolder}/**`).pipe(dest(distBundle))
}

export function copyThemeChalkSource() {
  return src(path.resolve(__dirname, 'src/**')).pipe(
    dest(path.resolve(distBundle, 'src'))
  )
}

export const build: TaskFunction = parallel(
  copyThemeChalkSource,
  series(
    withTaskName('buildTailwindCss', () =>
      run(
        `tailwindcss -c "${path.resolve(
          __dirname,
          'tailwind.config.js'
        )}"  -i "${path.resolve(
          __dirname,
          'src/index.scss'
        )}" -o "${path.resolve(distFolder, 'index.css')}" --minify`
      )
    ),
    copyThemeChalkBundle
  )
)

export default build
