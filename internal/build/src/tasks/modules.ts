/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:14
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 09:35:13
 * @FilePath: \item-ui\internal\build\src\tasks\modules.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { rollup } from 'rollup'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
import VueMacros from 'unplugin-vue-macros/rollup'
import { nodeResolve } from '@rollup/plugin-node-resolve'
import Components from 'unplugin-vue-components/rollup'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import commonjs from '@rollup/plugin-commonjs'
import esbuild from 'rollup-plugin-esbuild'
import glob from 'fast-glob'
import postcss from 'rollup-plugin-postcss'
import tailwindcss from 'tailwindcss'
import autoprefixer from 'autoprefixer'
import { epRoot, excludeFiles, pkgRoot } from '@item-ui/build-utils'
import { generateExternal, writeBundles } from '../utils'
import { ItemUiAlias } from '../plugins/item-ui-alias'
import { buildConfigEntries, target } from '../build-info'

import type { OutputOptions } from 'rollup'
export const buildModules = async () => {
  const input = excludeFiles(
    await glob('**/*.{js,ts,vue}', {
      cwd: pkgRoot,
      absolute: true,
      onlyFiles: true,
    })
  )
  const bundle = await rollup({
    input,
    plugins: [
      ItemUiAlias(),
      VueMacros({
        setupComponent: false,
        setupSFC: false,
        plugins: {
          vue: vue({
            isProduction: true,
            template: {
              compilerOptions: {
                hoistStatic: false,
                cacheHandlers: false,
              },
            },
          }),
          vueJsx: vueJsx(),
        },
      }),
      postcss({
        extract: true,
        plugins: [tailwindcss(), autoprefixer()],
      }),
      Components({
        resolvers: [
          ElementPlusResolver({
            importStyle: false,
          }),
        ],
      }),
      nodeResolve({
        extensions: ['.mjs', '.js', '.json', '.ts'],
      }),
      commonjs(),
      esbuild({
        sourceMap: true,
        target,
        loaders: {
          '.vue': 'ts',
        },
      }),
    ],
    external: await generateExternal({ full: false }),
    treeshake: false,
  })
  await writeBundles(
    bundle,
    buildConfigEntries.map(([module, config]): OutputOptions => {
      return {
        format: config.format,
        dir: config.output.path,
        exports: module === 'cjs' ? 'named' : undefined,
        preserveModules: true,
        preserveModulesRoot: epRoot,
        sourcemap: true,
        entryFileNames: `[name].${config.ext}`,
      }
    })
  )
}
