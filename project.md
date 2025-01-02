請你根據以下的規劃建立檔案與撰寫程式碼






1. 專案概述
店名：電競產品專賣店

使用技術：

前端框架：React (建議使用 Create React App 或 Vite)
UI 套件：Ant Design
前端路由：React Router
資料處理：可使用 fetch / axios 搭配 JSON 檔做前端模擬
狀態管理（可選）：React Context / Redux / Recoil (可視需求使用，若規模較小也可直接使用 React useState 搭配 props 傳遞)
網站色調（CSS 變數建議在 :root 或全域樣式中定義）：

css
複製程式碼
:root {
  --primary-100: #B71C1C;
  --primary-200: #f05545;
  --primary-300: #ffbba0;
  --accent-100: #FF5252;
  --accent-200: #fff0e0;
  --text-100: #333333;
  --text-200: #5c5c5c;
  --bg-100: #FFFFFF;
  --bg-200: #f5f5f5;
  --bg-300: #cccccc;
}
專案架構：單頁式 (SPA, Single Page Application)

Header（頂部導覽列 / Logo 等）
Footer（版權宣告、商店地址、電話及其他聯絡方式）
主內容區域根據路由顯示 (Home / Products / Site Info / Cart & Checkout)
2. 檔案結構


複製程式碼
主要檔案說明
public/data/products.json

存放商品列表及其詳細資訊，例如：
json
複製程式碼
[
  {
    "id": 1,
    "name": "電競螢幕",
    "description": "27吋 144Hz 電競螢幕",
    "image": "/assets/images/products/monitor1.jpg",
    "stock": 10,
    "category": "螢幕"
  },
  {
    "id": 2,
    "name": "機械式鍵盤",
    "description": "RGB 機械式青軸鍵盤",
    "image": "/assets/images/products/keyboard1.jpg",
    "stock": 5,
    "category": "鍵盤"
  }
  ...
]
public/data/orders.json（可選）

用於前端模擬訂單寫入。若僅做前端顯示，亦可直接將訂單資訊暫存於狀態管理中，或用 localStorage 紀錄。
src/components/

可重複使用的小型元件，如 Header.jsx、Footer.jsx、CarouselBanner.jsx（橫向圖片輪播）等。
src/pages/

Home/：首頁
Products/：商品列表與過濾搜尋
SiteInfo/：網站資訊（待補充）
Cart/：購物車操作 (增減/刪除)
Checkout/：結帳頁面 (填寫個人資料 + 顯示訂單細節)
NotFound.jsx：對應無效路由時顯示的 404 頁面
src/services/productsService.js

用於讀取與寫入 products.json 或其他 JSON 資料的前端模擬邏輯。
src/App.jsx

最外層組件，可放置 <Header /> 與 <Footer /> 以及路由主體。
src/routes.jsx

建議放置 React Router 的路由設定。
3. 頁面與功能規劃
3.1 Header（導航列）
Logo：可放置店家 Logo 或文字商標。
導覽選單：包含「首頁」、「商品」、「網站資訊」，以及「購物車」圖示 / 連結。
色系：建議使用 --primary-100 或 --primary-200 作為主色搭配。
3.2 Footer（頁尾）
內容示範：
版權宣告 (e.g. © 2024 電競產品專賣店)
商店地址、電話、電子郵件
社群連結（可選）
背景色可視覺需求可搭配 --bg-200 或 --bg-300。
4. 功能與頁面詳細設計
4.1 首頁 (Home)
大橫幅廣告（需包含橫向圖片輪播）
建議使用 Ant Design 的 Carousel 元件。
於 src/components/CarouselBanner.jsx 中建立並在 Home 中導入。
熱賣商品
可於首頁中擷取部分商品資料（例如：依照銷售量或自訂排序），顯示前幾名熱銷品。
使用卡片 (Ant Design Card) 或其他展示樣式。
4.2 商品頁面 (Products)
商品總覽
從 products.json 讀取商品資訊，並根據種類、關鍵字等搜尋或過濾功能來顯示。
支援商品分類篩選（螢幕、滑鼠、鍵盤、滑鼠墊、耳機等）。
商品搜尋
依商品名稱或描述做前端簡易篩選。
庫存扣除 / JSON 更新
當使用者將商品加入購物車或結帳時，需能從 stock 中扣除。
純前端的情況下，可以直接更新前端狀態，或同時寫入（模擬）products.json（實際開發若無後端會需要使用 localStorage 或前端伺服器端點）。
基本購物車功能
商品列表上提供「加入購物車」按鈕，將商品加入購物車（需要在前端維護購物車清單）。
可以使用 React Context / Redux 等方式將購物車資料做全域狀態管理。
在 JSON 檔產生訂單
當使用者最終結帳時，將訂單資料寫入 orders.json（或前端暫存，或 localStorage）以示範訂單生成流程。
4.3 網站資訊 (Site Info)
此頁面內容待規劃
可放置商店簡介、隱私權政策、會員條款、常見問題、客服聯繫方式等。
4.4 購物車 (Cart) 與 結帳 (Checkout)
購物車頁面
顯示使用者已加入的商品列表，可在此頁進行增減商品數量、刪除商品等操作。
即時更新購物車金額與商品總數。
結帳頁面 (Checkout)
填寫表單收集以下欄位，以便產生訂單：
姓名
手機電話
電子郵件
收件地址
顯示目前購物清單與金額總計。
說明：目前僅支援「貨到付款」，訂單資訊會寄送簡訊與電子郵件（前端範例可不必真實寄送，視需求實作）。
提交訂單後，將訂單資訊寫入 orders.json（或前端暫存）以完成整個模擬交易流程。
5. JSON 資料結構
5.1 商品資料結構 products.json
範例：

json
複製程式碼
[
  {
    "id": 1,
    "name": "電競螢幕",
    "description": "27吋 144Hz 電競螢幕",
    "image": "/assets/images/monitor1.jpg",
    "stock": 10,
    "category": "螢幕"
  },
  {
    "id": 2,
    "name": "機械式鍵盤",
    "description": "RGB 機械式青軸鍵盤",
    "image": "/assets/images/keyboard1.jpg",
    "stock": 5,
    "category": "鍵盤"
  },
  ...
]
name：商品名稱
description：商品描述
image：商品圖片路徑（前端可直接引用）
stock：商品庫存數量
category：商品分類
5.2 訂單資料結構 orders.json（可選）
範例：

json
複製程式碼
[
  {
    "orderId": "OD202400001",
    "customerName": "王小明",
    "phone": "0912345678",
    "email": "test@example.com",
    "address": "台北市信義區XX路XX號",
    "paymentMethod": "貨到付款",
    "orderItems": [
      {
        "productId": 1,
        "name": "電競螢幕",
        "quantity": 1
      },
      {
        "productId": 2,
        "name": "機械式鍵盤",
        "quantity": 1
      }
    ],
    "orderDate": "2024-01-01 10:00:00",
    "status": "pending"
  }
]
orderId：訂單編號（前端可使用 timestamp 或簡易遞增方式生成）
customerName / phone / email / address：結帳表單資料
orderItems：訂單中包含的商品資訊（id、名稱、數量等）
paymentMethod：付款方式（此專案範例為貨到付款）
status：訂單狀態（pending / shipped / completed / canceled 等）
6. 使用 Ant Design 的關鍵點
佈局 (Layout)
可以使用 Layout 組件來快速搭建 Header、Content、Footer 結構。
導航 (Menu)
Menu 搭配 Layout.Header 可以製作頂部導覽列。
卡片 (Card)
Card 用於商品陳列。
走馬燈 (Carousel)
Carousel 用於首頁大橫幅圖片輪播。
表單 (Form)
Form 用於結帳頁面收集用戶資訊。
按鈕 (Button)、提示 (Message / Notification)
結帳或加入購物車後顯示操作結果等。
7. 開發流程建議
初始化專案
使用 create-react-app my-gaming-store 或 npm init vite@latest my-gaming-store --template react。
安裝依賴：npm install antd react-router-dom axios 等。
設定全域樣式與顏色變數
建立 src/styles/global.css（或 less / scss），引入色彩變數。
建立路由
於 src/routes.jsx 中使用 React Router 定義路由：
/ → <Home />
/products → <Products />
/site-info → <SiteInfo />
/cart → <Cart />
/checkout → <Checkout />
在 App.jsx 中匯入並顯示 <Header />、<Footer />、以及 <BrowserRouter> 包住主要內容。
實作商品資料讀取
建立 productsService.js，讀取 products.json。
在 Products 頁面初始時載入商品列表。
實作購物車邏輯
建議使用 React Context (e.g. CartContext) 管理購物車商品與數量。
在加購商品時更新購物車內容。
結帳流程
結帳按鈕 → 前往 /checkout → 填寫表單 → 產生訂單 → (可) 寫入 orders.json → 顯示完成頁面或跳轉首頁。
UI / UX
運用 Ant Design 的元件優化介面。
調整色系與排版，以符合「電競風格」。
最終測試與優化
確認各頁面資料流、購物車操作、訂單產生流程正常無誤。
