/// <reference types="vite/client" />

declare module '*.vue' {
  import type { DefineComponent } from 'vue'
  const component: DefineComponent<{}, {}, any>
  export default component
}

// 環境變數類型
interface ImportMetaEnv {
  readonly VITE_APP_TITLE: string
  // 可以在這裡添加更多的環境變數類型
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}

// Pinia 類型定義
declare module 'pinia' {
  export interface PiniaCustomProperties {
    // 可以在這裡添加自定義的 store 屬性
  }
  
  export interface PiniaCustomStateProperties {
    // 可以在這裡添加自定義的 state 屬性
  }
}

declare module 'pinia' {
  export function createPinia(): any
  export function defineStore(storeId: string, options: any): any
}
