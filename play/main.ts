/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:15
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 11:53:59
 * @FilePath: \item-ui\play\main.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */
import { createApp } from 'vue'
// import '@item-ui/theme-chalk/src/dark/css-vars.scss'
import 'item-ui/es/presets/dist/index.css'
// import ElementPlus from 'element-plus'
;(async () => {
  const apps = import.meta.glob('./src/*.vue')
  const name = location.pathname.replace(/^\//, '') || 'App'
  const file = apps[`./src/${name}.vue`]
  if (!file) {
    location.pathname = 'App'
    return
  }
  const App = (await file()).default
  const app = createApp(App)
  app.mount('#play')
})()
