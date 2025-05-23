import { config } from '@vue/test-utils'
import { createPinia } from 'pinia'
import { beforeAll, afterEach, afterAll } from 'vitest'

// 全局設置 Pinia
const pinia = createPinia()

// 全局配置
config.global.plugins = [pinia]

// 可以在這裡添加其他全局測試設置
// 例如：模擬 window 對象、全局變量等

// 測試前的設置
beforeAll(() => {
  // 測試前的初始化代碼
})

// 每個測試用例之後運行
afterEach(() => {
  // 清理測試環境
})

// 所有測試完成後運行
afterAll(() => {
  // 清理全局資源
})
