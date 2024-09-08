declare module 'vue' {
  // GlobalComponents for Volar
  export interface GlobalComponents {
    IInput: typeof import('item-ui')['IInput']
  }

  interface ComponentCustomProperties {}
}

export {}
