<template >
  <div v-demo>
    111
    <Button>你好</Button>
    <Button theme="link">你好</Button>
    <Button theme="text">你好</Button>
  </div>
</template>

<script lang="ts">
import { Button } from "../../lib/index";
export default {
  components: {
    Button,
  },
  directives:{
    demo:{
  mounted(el) {
      console.log('🐛 ~ file: Button1.demo.vue ~ line 19 ~ mounted ~ el', el)
    }
    }
  }
};
</script>
