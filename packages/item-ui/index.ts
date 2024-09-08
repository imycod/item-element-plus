/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:15
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 11:17:30
 * @FilePath: \item-ui\packages\item-ui\index.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import installer from './defaults'
export * from '@item-ui/components'
export * from '@item-ui/constants'
export * from '@item-ui/directives'
export * from '@item-ui/hooks'
export * from './make-installer'

console.log('dev')

export const install = installer.install
export const version = installer.version
export default installer

export { default as dayjs } from 'dayjs'
