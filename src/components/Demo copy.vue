<template>
  <div class="demo">
    <h2>{{ component.__sourceCodeTitle }}</h2>
    <div class="demo-component">
      <component :is="component" />
    </div>
    <div class="demo-actions">
      <el-button @click="hideCode" v-if="codeVisible">隐藏代码</el-button>
      <el-button @click="showCode" v-else>查看代码</el-button>
    </div>
    <div class="demo-code" v-show="codeVisible">
      <pre class="language-html" v-html="newhtml" />
    </div>
  </div>
</template>

<script lang="ts">
import 'prismjs'
import '../../node_modules/prismjs/themes/prism-tomorrow.css'
import { computed, ref, render, reactive, onMounted } from 'vue'
const Prism = (window as any).Prism
export default {
  props: {
    component: Object,
  },
  setup(props) {
    console.log(import.meta.env.PROD,99)
    let html = ref('')
    // let getCode = function () {
    //   let src = ''
    //   if (import.meta.env.PROD) {
    //     src = `https://raw.githubusercontent.com/wt-front-end/wt-ui-ele/master/src/components/doc/${props.component.name}.vue`
    //   } else {
    //     src = props.component.__file
    //   }
    //   // 创建一个新的xhr对象
    //   let xhr = new XMLHttpRequest()
    //   xhr.open('GET', src)
    //   xhr.responseType = 'text' // 如果不兼容，可采用 xhr.overrideMimeType('text/plain;charset=utf-8');
    //   xhr.send()
    //   xhr.onreadystatechange = function () {
    //     if (xhr.readyState === 4 && xhr.status === 200) {
    //       let data = xhr.responseText.toString()
    //       if (import.meta.env.PROD) {
    //         html.value = data
    //       } else {
    //          let str = data.substring(
    //         data.lastIndexOf('data:application/json;base64,') + 29,
    //         data.length
    //       )
    //       let res = JSON.parse(
    //         decodeURIComponent(escape(window.atob(str)))
    //       ).sourcesContent
    //         html.value = res.length && res[0]
    //       }
    //     }
    //   }
    // }
    console.log(props.component, 88)
     onMounted(() => {
      // getCode()
    })
    const newhtml = computed(() => {
      return Prism.highlight(html.value, Prism.languages.html, 'html')
    })
    const showCode = () => (codeVisible.value = true)
    const hideCode = () => (codeVisible.value = false)
    const codeVisible = ref(false)
    return {
      Prism,
      html,
      newhtml,
      codeVisible,
      showCode,
      hideCode,
    }
  },
}
</script>

<style lang="scss" scoped>
$border-color: #d9d9d9;

.demo {
  border: 1px solid $border-color;
  margin: 16px 0 32px;

  > h2 {
    font-size: 20px;
    padding: 8px 16px;
    border-bottom: 1px solid $border-color;
  }

  &-component {
    padding: 16px;
  }

  &-actions {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;
  }

  &-code {
    padding: 8px 16px;
    border-top: 1px dashed $border-color;

    > pre {
      line-height: 1.1;
      font-family: Consolas, 'Courier New', Courier, monospace;
      margin: 0;
    }
  }
}
</style>
