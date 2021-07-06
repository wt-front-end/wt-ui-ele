<template>
  <div class="layout" @click="clickLayout">
    <Icon
      iconLink="menu"
      :className="IconClassName"
      @click.stop="toggleMenu"
      class="returns"
    />
    <Topnav class="nav" iconVisible />
    <div class="content">
      <aside v-if="menuVisible" ref="aside">
        <div v-for="item in menu" :key="item.name">
          <h2 class="title">{{ item.name }}</h2>
          <ol>
            <li
              v-for="links in item.children"
              :key="links.path"
              :style="{
                color: links.path.indexOf(router.path) > -1 ? '#2c80c5' : '',
              }"
            >
              <router-link :to="links.path">{{ links.name }}</router-link>
            </li>
          </ol>
        </div>
      </aside>
      <main><router-view /></main>
    </div>
  </div>
</template>

<script lang="ts">
import Icon from '../lib/Icon.vue'
import Topnav from '../components/Topnav.vue'
import { computed, ref } from 'vue'
import { useRoute } from 'vue-router'
import menu from './menu'
export default {
  components: { Topnav, Icon },
  setup() {
    let router = ref(useRoute())
    const width = ref(document.documentElement.clientWidth)
    const menuVisible = ref(width.value >= 500)
    window.onresize = () => {
      width.value = document.documentElement.clientWidth
      menuVisible.value = width.value >= 500
    }
    const toggleMenu = () => {
      menuVisible.value = !menuVisible.value
    }
    const aside = ref<HTMLDivElement>(null)
    const clickLayout = (e) => {
      if (width.value >= 500) return
      if (aside.value?.contains(e.target) || !menuVisible.value) return
      toggleMenu()
    }
    const IconClassName = computed(() => {
      return menuVisible.value ? 'toggleMenu fixed' : 'toggleMenu'
    })
    return {
      menuVisible,
      toggleMenu,
      clickLayout,
      IconClassName,
      aside,
      menu,
      router,
    }
  },
}
</script>

<style lang="scss" scoped>
.layout {
  display: flex;
  flex-direction: column;
  height: 100vh;
  > .toggleMenu {
    display: none;
    z-index: 3;
  }
  > .returns {
    position: fixed !important;
  }
  > .nav {
    flex-shrink: 0;
    z-index: 2;
    background-color: #fff;
    border-bottom: 1px solid rgb(217, 217, 217);
  }
  > .content {
    flex-grow: 1;
    padding-top: 60px;
    padding-left: 156px;
    display: flex;
    .title {
      color: #8d8d8e;
      font-weight: 900;
    }
    > aside {
      flex-shrink: 0;
      background: #fff;
      width: 150px;
      padding: 16px;
      position: fixed;
      top: 0;
      left: 0;
      padding-top: 70px;
      height: 100%;
      border-right: 1px solid rgb(217, 217, 217);
      z-index: 1;
      overflow-y: auto;
      > ol {
        > li {
          > a {
            display: block;
            padding: 4px 16px;
            text-decoration: none;
          }
          &:hover {
            color: #2c80c5;
          }
          .router-link-active {
            color: #2c80c5;
          }
        }
      }
    }
    > main {
      overflow: auto;
      flex-grow: 1;
      padding: 16px;
      background: white;
    }
    @media (max-width: 500px) {
      padding-left: 0;
    }
  }
  @media (max-width: 500px) {
    > .toggleMenu {
      width: 1.5em;
      height: 1.5em;
      display: inline-block;
      position: absolute;
      left: 1em;
      top: 1.5em;
      transform: translateY(-50%);
      cursor: pointer;
    }
    > .toggleMenu.fixed {
      position: fixed;
    }
  }
}
</style>
