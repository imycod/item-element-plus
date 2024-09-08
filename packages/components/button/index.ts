/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:14
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 10:20:42
 * @FilePath: \item-ui\packages\components\input\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { withInstall } from '@item-ui/utils'
import Button from './src/button.vue'
import type { SFCWithInstall } from '@item-ui/utils'

export const IButton: SFCWithInstall<typeof Button> = withInstall(Button)
export default IButton
