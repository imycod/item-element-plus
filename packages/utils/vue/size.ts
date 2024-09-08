import { componentSizeMap } from '@item-ui/constants'

import type { ComponentSize } from '@item-ui/constants'

export const getComponentSize = (size?: ComponentSize) => {
  return componentSizeMap[size || 'default']
}
