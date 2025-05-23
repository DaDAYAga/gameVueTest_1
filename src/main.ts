import { createApp } from 'vue'
import { createPinia } from 'pinia'
import App from './App.vue'
import router from './router'
import './assets/styles/main.css'

// 初始化 Pinia
const pinia = createPinia()

// 創建應用實例
const app = createApp(App)

// 使用插件
app.use(pinia)
app.use(router)

// 掛載應用
app.mount('#app')

// 在開發環境中將 store 添加到 window 對象以便調試
declare global {
  interface Window {
    pinia?: typeof pinia
  }
}

if (import.meta.env.DEV) {
  window.pinia = pinia
}