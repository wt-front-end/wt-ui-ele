<template>
  <div class="topnav">
    <router-link class="logo" to="/">
      <Icon iconLink="logo" className="logoE" />
      <span class="hide">minent</span>
    </router-link>
    <ul class="menu hide">
       <li>
        <router-link to="/">首页</router-link>
      </li>
      <li>
        <router-link to="/doc">文档</router-link>
      </li>
       <li>
          <a
          style="padding:0 1rem;"
          href="https://github.com/wt-front-end/wt-ui-ele"
          target="_blank"
          title="地址"
        >
          <svg
            version="1.1"
            id="Layer_1"
            xmlns="http://www.w3.org/2000/svg"
            xmlns:xlink="http://www.w3.org/1999/xlink"
            x="0px"
            y="0px"
            viewBox="0 0 36 36"
            enable-background="new 0 0 36 36"
            xml:space="preserve"
            class="mdui-icon"
            style="width: 30px;height:30px;"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              fill="#2c3e50"
              d="M18,1.4C9,1.4,1.7,8.7,1.7,17.7c0,7.2,4.7,13.3,11.1,15.5
	c0.8,0.1,1.1-0.4,1.1-0.8c0-0.4,0-1.4,0-2.8c-4.5,1-5.5-2.2-5.5-2.2c-0.7-1.9-1.8-2.4-1.8-2.4c-1.5-1,0.1-1,0.1-1
	c1.6,0.1,2.5,1.7,2.5,1.7c1.5,2.5,3.8,1.8,4.7,1.4c0.1-1.1,0.6-1.8,1-2.2c-3.6-0.4-7.4-1.8-7.4-8.1c0-1.8,0.6-3.2,1.7-4.4
	c-0.2-0.4-0.7-2.1,0.2-4.3c0,0,1.4-0.4,4.5,1.7c1.3-0.4,2.7-0.5,4.1-0.5c1.4,0,2.8,0.2,4.1,0.5c3.1-2.1,4.5-1.7,4.5-1.7
	c0.9,2.2,0.3,3.9,0.2,4.3c1,1.1,1.7,2.6,1.7,4.4c0,6.3-3.8,7.6-7.4,8c0.6,0.5,1.1,1.5,1.1,3c0,2.2,0,3.9,0,4.5
	c0,0.4,0.3,0.9,1.1,0.8c6.5-2.2,11.1-8.3,11.1-15.5C34.3,8.7,27,1.4,18,1.4z"
            />
          </svg>
        </a>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import Icon from "../lib/Icon.vue";
export default {
  name: "Topnav",
  components: { Icon },
};
</script>

<style lang="scss" scoped>
$color: #1296d8;
.topnav {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 16px;
  z-index: 20;
  color: $color;
  > .logo {
    max-width: 6em;
    margin-right: auto;
    font-weight: 600;
    font-style: italic;
    line-height: 16px;
    > .logoE {
      width: 1.3em;
      height: 1.3em;
    }
  }
  > .menu {
    display: flex;
    white-space: nowrap;
    flex-wrap: nowrap;
    > li {
      margin: 0 1em;
      &:hover,
      &:focus {
        color: darken($color, 10%);
      }
    }
  }
  @media (max-width: 500px) {
    .hide {
      display: none;
    }
    > .logo {
      margin: 0 auto;
    }
  }
}
</style>
