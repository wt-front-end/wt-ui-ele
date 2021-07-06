<p align="center">
  <a href="/">
    <img width="400" src="./logo.png">
  </a>
</p>

<h1 align="center">WT UI</h1>

<div align="center">

一个基于 vue3 + vite 开构建的 UI 组件库。

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/miqilin21/wt-ui-ele/blob/main/LICENSE)

</div>

## 📦 安装

```
npm install
```

或

```
yarn add
```

## 运行

```
npm run dev
```

或

```
yarn dev
```

## 编写规范

```
├── App.vue
├── assets
│   ├── logo.png
│   └── svg.js
├── components
│   ├── ButtonDemo.vue
│   └── doc   // 需要把演示demo文件统一放在此文件夹下,不然线上读不到文件
│       ├── Button1.demo.vue
│       └── Button2.demo.vue
├── element.ts
├── index.scss
├── lib   // 打包库文件
├── main.ts
├── markdown
│   ├── get-started.md
│   ├── install.md
│   └── intro.md
├── router.ts
├── shims-vue.d.ts
└── views
    ├── Doc.vue
    ├── Home.vue
    └── menu.ts
```

## 🔨 开始使用

就可以使用我提供的组件了。

代码示例：

```vue
<template>
  <div>
    <Button>按钮</Button>
  </div>
</template>
<script>
import { Button } from "wt-ui-ele";
export default {
  components: {
    Button,
  },
};
</script>
```
