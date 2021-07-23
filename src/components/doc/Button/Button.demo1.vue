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
  name:'Button/Button.demo1',
  doc:'大小',
  components: {
    Button,
  }
};
</script>
