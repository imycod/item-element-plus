<!--
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:14
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 11:51:58
 * @FilePath: \item-ui\packages\components\input\src\input.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div>input 111 {{ useNamespace() }} xxx</div>
</template>

<script lang="ts" setup>
import { useNamespace } from '@item-ui/hooks'

defineOptions({
  name: 'IInput',
  inheritAttrs: false,
})
</script>
