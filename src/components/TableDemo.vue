<!--
 * @Author: xkloveme
 * @Date: 2021-07-23 13:53:52
 * @LastEditTime: 2021-07-23 14:51:12
 * @LastEditors: xkloveme
 * @Description: Table 示例
 * @FilePath: /wt-ui-ele/src/components/TableDemo.vue
 * @Copyright © xkloveme
-->
<template>
  <div>
    <h1>Table 示例</h1>
    <Demo :component="TableDemo1" />
  </div>
</template>

<script lang="ts">
import TableDemo1 from './doc/Table/Table.demo1.vue'
export default {
  setup() {
    return {
      TableDemo1,
    }
  },
}
</script>
