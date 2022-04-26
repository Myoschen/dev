---
title: Docs Tips
sidebar_position: 1
slug: /
---

> 撰寫 Docusaurus Docs 會使用到的。

## Command

```shell
# 本地測試
npm run start 

# 建置
npm run build 

# 本地測試（檔案會使用 build/）
npm run serve 

# 部署
npm run deploy
```

:::tip
在部署至遠端儲存庫前，先透過 `build`、`serve` 指令在本地測試，沒問題的話則使用 `deploy` 將檔案推送至遠端。
:::

## Markdown Features

### 提示區塊

可以使用下方的區塊：

- note
- tip
- info
- caution
- danger

```markdown
// :::{ 類型 } { 標題 }
// { 內容 }
// :::
```

:::note Note
This is Note Block.
:::
:::tip Tip
This is Tip Block.
:::
:::info Info
This is Info Block.
:::
:::caution Caution
This is Caution Block.
:::
:::danger Danger
This is Danger Block.
:::

### 程式區塊

可以透過在程式碼上方用註解的方式標記特定的行數。

- 使用 `// highlight-next-line`，標記下一行。
- 使用 `// highlight-start` 與 `// highlight-end`，標記註解間的行數。

```text
// ```語言 title="標題"
// 程式碼
// ```
```

### MDX Tabs

:::note Tabs

  ```markdown title="mdx-code-block"
  import Tabs from '@theme/Tabs';
  import TabItem from '@theme/TabItem';

  <Tabs>
  <TabItem value="A Tab" default>
    A Tab
  </TabItem>
  <TabItem value="B Tab">
    B Tab
  </TabItem>
  <TabItem value="C Tab">
    C Tab
  </TabItem>
  </Tabs>
  ```

:::

## More

- [Introduction | Docusaurus](https://docusaurus.io/docs)
