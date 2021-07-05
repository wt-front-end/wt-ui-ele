# 开始使用

请先[安装](#/doc/install)本组件库。

然后在你的代码中写入下面的代码：

```
// 引入所需组件
import {Button, Tabs, Tab, Switch, Dialog, openDialog, Tag, Progress, CheckBox} from "wt-ui-ele"

//引入组件样式
import 'wt-ui-ele/dist/lib/eminent.css';
```

就可以使用我提供的组件了。

## Vue 单文件组件

代码示例：

```
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
