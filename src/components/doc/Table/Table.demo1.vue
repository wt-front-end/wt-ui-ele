<!--
 * @Author: xkloveme
 * @Date: 2021-07-23 13:53:18
 * @LastEditTime: 2021-07-23 14:47:42
 * @LastEditors: xkloveme
 * @Description: 基础Table
 * @FilePath: /wt-ui-ele/src/components/doc/Table/Table.demo1.vue
 * @Copyright © xkloveme
-->
<template >
  <div>
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../../../lib/index";
export default {
  name:'Table/Table.demo1',
  doc:'大小',
  components: {
    Button,
  }
};
</script>
