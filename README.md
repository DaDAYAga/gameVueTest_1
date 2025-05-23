# 六邊形戰棋遊戲

一個基於 Vue 3 + TypeScript + Pinia 的六邊形戰棋遊戲。

## 功能特點

- 響應式設計，適配各種屏幕尺寸
- 使用 Vue 3 Composition API 和 `<script setup>` 語法
- 使用 Pinia 進行狀態管理
- 使用 TypeScript 提供類型安全
- 使用 Vite 進行快速的開發和構建
- 完整的 ESLint + Prettier 代碼風格檢查
- 單元測試支持 (Vitest)

## 技術棧

- **前端框架**: Vue 3
- **開發語言**: TypeScript
- **狀態管理**: Pinia
- **路由**: Vue Router
- **構建工具**: Vite
- **代碼風格**: ESLint + Prettier
- **測試框架**: Vitest

## 快速開始

### 安裝依賴

```bash
pnpm install
```

### 開發模式

```bash
pnpm dev
```

### 構建生產版本

```bash
pnpm build
```

### 代碼檢查

```bash
# 檢查代碼風格
pnpm lint

# 修復代碼風格問題
pnpm lint --fix

# 格式化代碼
pnpm format
```

### 運行測試

```bash
# 運行單元測試
pnpm test

# 監聽模式運行測試
pnpm test:watch

# 生成測試覆蓋率報告
pnpm test:coverage
```

## 目錄結構

```
src/
├── assets/          # 靜態資源
├── components/       # 可重用組件
├── composables/      # 組合式函數
├── router/          # 路由配置
├── stores/          # Pinia 存儲
├── tests/           # 測試文件
├── types/           # TypeScript 類型定義
├── utils/           # 工具函數
└── views/           # 頁面組件
```

## 貢獻指南

1. Fork 本倉庫
2. 創建特性分支 (`git checkout -b feature/AmazingFeature`)
3. 提交您的更改 (`git commit -m 'Add some AmazingFeature'`)
4. 推送到分支 (`git push origin feature/AmazingFeature`)
5. 開啟 Pull Request

## 許可證

[MIT](LICENSE) © 2025
