- public資料夾：

  - 主頁

- src資料夾：

  - app/各個分頁
  - components放元件，base裡面是放shadCN的元件，裡面的東西不會有邏輯，有邏輯的放外層，例如header,footer
  - constants/常數，存放不變的值，例如tailwind的css, mock檔案則是假資料，在串接後端資料庫之前讓畫面有東西
  - hooks/鉤子存放處
  - service/目前是存放api
  - store/狀態管理常見的library :'zustand','redux','context'
  - utils/存放通用小工具，例如常用的function,cn是處理class name的,i18n是處理多語系的（如果我們有要做的話）,timing是處理delay

- 其他小檔案：
  - .ts結尾的檔案是type script的檔案，這些檔案跟.json的檔案是一樣功能的
    放著就好沒差
