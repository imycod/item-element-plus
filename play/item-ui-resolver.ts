/*
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 10:49:40
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 11:56:59
 * @FilePath: \item-ui\play\item-ui-resolver.ts
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
 */

export const ItemUiResolver = (userOptions = {}) => {
  return {
    type: 'component' as const,
    resolve: (name) => {
      if (name.startsWith('I')) {
        const pathName = name.slice(1).toLowerCase()
        return {
          importName: name,
          path: '@item-ui/components',
          sideEffects:
            userOptions.importStyle === 'sass'
              ? `@item-ui/components/${pathName}/style/index.ts`
              : `@item-ui/components/${pathName}/style/css.ts`,
        }
      }
    },
  }
}
