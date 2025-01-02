# 電競產品專賣店

這是一個使用 React + TypeScript + Vite + Ant Design 開發的電競產品專賣店網站。

## 專案架構

```
my-gaming-store/
├── public/
│   ├── assets/
│   │   └── images/
│   │       └── products/      # 商品圖片
│   ├── data/
│   │   └── products.json      # 商品資料
│   ├── favicon.ico
│   └── index.html
├── src/
│   ├── assets/                # 其他靜態資源
│   ├── components/            # 共用元件
│   │   ├── Header.tsx        # 頁首導航
│   │   └── Footer.tsx        # 頁尾資訊
│   ├── pages/                # 頁面元件
│   │   ├── Home/            # 首頁
│   │   ├── Products/        # 商品列表
│   │   ├── SiteInfo/        # 網站資訊
│   │   ├── Cart/            # 購物車
│   │   ├── Checkout/        # 結帳
│   │   └── NotFound.tsx     # 404 頁面
│   ├── services/            # 服務層
│   │   └── productsService.ts
│   ├── store/               # 狀態管理
│   │   └── CartContext.tsx
│   ├── styles/              # 樣式檔案
│   │   └── global.css
│   ├── config/             # 配置檔案
│   │   └── siteConfig.ts   # 網站配置
│   ├── hooks/              # 自定義 Hooks
│   ├── types/              # TypeScript 型別定義
│   ├── utils/              # 工具函數
│   ├── App.tsx
│   ├── index.tsx
│   └── routes.tsx
├── package.json
└── README.md
```

## 功能特點

- 響應式設計，支援各種裝置
- 商品分類與搜尋功能
- 購物車功能
- 結帳流程
- 中文化介面
- 深色模式支援
- SEO 優化
- 效能優化

## 使用技術

- React 18
- TypeScript 5
- Vite 5
- Ant Design 5
- React Router 6
- Tailwind CSS
- React Query
- Zustand (狀態管理)
- Vitest (單元測試)
- Cypress (E2E測試)

## 開始使用

1. 安裝依賴：
```bash
npm install
```

2. 設定環境變數：
```bash
cp .env.example .env
```

3. 開發模式：
```bash
npm run dev
```

4. 建置專案：
```bash
npm run build
```

5. 執行測試：
```bash
npm run test
npm run test:e2e
```

## 開發須知

1. 商品圖片：
   - 請將商品圖片放在 `public/assets/images/products/` 目錄下
   - 圖片命名應與 `products.json` 中的圖片路徑相對應
   - 建議使用 WebP 格式並提供適當的備用格式

2. 商品資料：
   - 商品資料存放在 `public/data/products.json`
   - 使用 TypeScript 介面確保資料型別正確
   - 支援國際化的商品描述

3. 效能優化：
   - 使用 React.lazy() 進行程式碼分割
   - 實作圖片懶加載
   - 使用 Suspense 優化載入體驗
   - 實作 Service Worker 支援離線功能

4. 開發規範：
   - 遵循 ESLint 規則
   - 使用 Prettier 格式化程式碼
   - 遵循 Git Commit 規範
   - 撰寫單元測試和 E2E 測試

## 部署指南

1. 正式環境：
```bash
npm run build
npm run preview
```

2. Docker 部署：
```bash
docker build -t gaming-store .
docker run -p 3000:80 gaming-store
```

3. CI/CD 配置：
   - GitHub Actions 自動化部署
   - 自動化測試和程式碼品質檢查
   - 自動版本發布

## 效能指標

- Lighthouse 分數目標：
  - Performance: 90+
  - Accessibility: 95+
  - Best Practices: 95+
  - SEO: 95+

## 安全性考量

1. 資料安全：
   - 實作 CSRF 防護
   - XSS 防護
   - 資料加密傳輸
   - 安全的 Cookie 設定

2. 用戶隱私：
   - 符合 GDPR 規範
   - 實作 Cookie 同意機制
   - 資料最小化原則

## 維護指南

1. 定期更新：
   - 依賴套件更新
   - 安全性修補
   - 效能優化
   - 功能改進

2. 監控：
   - 錯誤追蹤
   - 效能監控
   - 用戶行為分析

## 授權

MIT License

## 聯絡方式

如有任何問題或建議，請聯繫：
- Email: support@gaming-store.com
- GitHub Issues
