/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:15
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 09:38:50
 * @FilePath: \item-ui\packages\item-ui\make-installer.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { INSTALLED_KEY } from '@item-ui/constants'
import { version } from './version'

import type { App, Plugin } from '@vue/runtime-core'

export const makeInstaller = (components: Plugin[] = []) => {
  const install = (app: App) => {
    if (app[INSTALLED_KEY]) return

    app[INSTALLED_KEY] = true
    components.forEach((c) => app.use(c))
  }

  return {
    version,
    install,
  }
}
