/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:14
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 09:33:30
 * @FilePath: \item-ui\internal\build\src\plugins\item-ui-alias.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { PKG_NAME, PKG_PREFIX } from '@item-ui/build-constants'

import type { Plugin } from 'rollup'

export function ItemUiAlias(): Plugin {
  const themeChalk = 'theme-chalk'
  const sourceThemeChalk = `${PKG_PREFIX}/${themeChalk}` as const
  const bundleThemeChalk = `${PKG_NAME}/${themeChalk}` as const

  return {
    name: 'item-ui-alias-plugin',
    resolveId(id) {
      if (!id.startsWith(sourceThemeChalk)) return
      return {
        id: id.replaceAll(sourceThemeChalk, bundleThemeChalk),
        external: 'absolute',
      }
    },
  }
}
