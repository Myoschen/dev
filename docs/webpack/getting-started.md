---
title: Getting Started
description: getting started with webpack tool.
---

## 安裝

```shell
# npm
npm i webpack webpack-cli -D
npm i webpack webpack-cli -g

# yarn
yarn add webpack webpack-cli -D
yarn add webpack webpack-cli global
```

## 基本配置

我們在使用 Webpack 工具的時候，通常會先建立 `webpack.config.js` 的設定檔。
如果沒有設定的話，它會使用 **Webpack 的預設參數** 來進行打包工作，詳情可以至 Webpack 的官網查看。

> 而內容如下所示：

```js
const path = require('path');

module.exports = {
  mode: 'development',
  entry: path.resolve(__dirname, './src/main.js');
  output: {
    path: path.resolve(__dirname, './dist');
    filename: '[name].[contenthash].bundle.js',
  }
}
```

在使用 Webpack 打包時，我們通常會使用 Node 內建的 **path** 模組來取得絕對路徑，
避免在**其他作業系統環境發生無法預期的路徑錯誤**。

### mode

通常我們會分成 **開發 Development** 及 **部署 Production** 兩種環境，
同時也會將 `webpack.config.js` 配置檔切分成兩種不同環境，為了能依照不同的情況去使用不同的配置檔。

### entry

Webpack 解析程式的 **進入點**，預設是 `./src/index.js`，也可以同時有 **多個進入點**。

### output

經 Webpack 解析後輸出 bundle 的目錄 **path**、檔案名稱 **filename**。
其中，可以發現在 `filename` 的地方有 `[name]`、`[contenthash]` 兩個屬性：

- `[name]`：會依據 `entry` 名稱來決定。
- `[contenthash]`：依照 bundle 的內容去來產生 hash 值，當 bundle 改變時產生的 hash 值才會改變。

使用 hash 的原因主要是為了避免瀏覽器緩存的問題，因為通常在開發的時候我們會大量的進行重新整理，
而很有可能會造成緩存的問題、無法正確看到修改後的結果。

而除了 `[contenthash]` 以外，你也可以使用下方其他 hash 的方式：

- `[fullhash]`：基本的 hash 值，只要檔案有變化就會改變。
- `[chunkhash]`：依照 chunk 的內容去來產生 hash 值，當 chunk 改變時產生的 hash 值才會改變。

:::tip

Chunk 與 Bundle 同樣都是在指被 Webpack 所解析的程式，只是因不同的時間點有不同的稱呼。

- Chunk：是在程式被 Webpack 解析中的名稱。
- Bundle：是程式被 Webpack 解析後輸出檔案的名稱。

:::

## 打包及使用

在 package.json 檔案中加入下面指令。

```json
scripts: {
  "build": "webpack",
  "start": "webpack serve"
}
```

接著透過終端機執行指令。

```shell
# 打包
npm run build

# 本地測試
npm run start
```

並在終端機輸入 `npm run build` 就會開始進行打包，完成後可以在目錄 `dist` 看到打包完的檔案。

## 參考文章

- [Webpack](https://webpack.js.org/)
- [Webpack 5 走起！ - 基本配置(2) - config](https://israynotarray.com/webpack/20210228/4075850339/)
- [尋覓 webpack - 藉由 webpack 學習網頁前端工程的精妙之處](https://ithelp.ithome.com.tw/users/20107789/ironman/3332)
