<!--
 * @Author: wuxs 317009160@qq.com
 * @Date: 2024-09-08 08:45:14
 * @LastEditors: wuxs 317009160@qq.com
 * @LastEditTime: 2024-09-08 11:51:58
 * @FilePath: \item-ui\packages\components\input\src\input.vue
 * @Description: 这是默认设置,请设置`customMade`, 打开koroFileHeader查看配置 进行设置: https://github.com/OBKoro1/koro1FileHeader/wiki/%E9%85%8D%E7%BD%AE
-->
<template>
  <div v-bind="containerAttrs" :class="[containerKls]">
    <div ref="wrapperRef" :class="wrapperKls">
      <input ref="input" :class="nsInput.e('inner')" v-bind="attrs" :autofocus="autofocus" />
    </div>
  </div>
</template>

<script lang="ts" setup>
import {
  computed,
  nextTick,
  onMounted,
  ref,
  shallowRef,
  toRef,
  useAttrs as useRawAttrs,
  useSlots,
  watch,
} from 'vue'
import { useAttrs, useFocusController, useNamespace } from '@item-ui/hooks'

defineOptions({
  name: 'IInput',
  inheritAttrs: false,
})

const props = defineProps({})
const rawAttrs = useRawAttrs()

const input = shallowRef<HTMLInputElement>()
const textarea = shallowRef<HTMLTextAreaElement>()

const _ref = computed(() => input.value || textarea.value)
const { wrapperRef, isFocused, handleFocus, handleBlur } =
  useFocusController(_ref)

const containerAttrs = computed(() => {
  const comboBoxAttrs: Record<string, unknown> = {}
  if (props.containerRole === 'combobox') {
    comboBoxAttrs['aria-haspopup'] = rawAttrs['aria-haspopup']
    comboBoxAttrs['aria-owns'] = rawAttrs['aria-owns']
    comboBoxAttrs['aria-expanded'] = rawAttrs['aria-expanded']
  }
  return comboBoxAttrs
})

const nsInput = useNamespace('input')
const nsTextarea = useNamespace('textarea')

const containerKls = computed(() => [
  props.type === 'textarea' ? nsTextarea.b() : nsInput.b(),
  rawAttrs.class,
])

const wrapperKls = computed(() => [
  nsInput.e('wrapper'),
  nsInput.is('focus', isFocused.value),
])

const attrs = useAttrs({
  excludeKeys: computed<string[]>(() => {
    return Object.keys(containerAttrs.value)
  }),
})
</script>
