/*
 * @Author: xkloveme
 * @Date: 2021-07-06 17:48:21
 * @LastEditTime: 2021-07-06 21:52:20
 * @LastEditors: xkloveme
 * @Description: 侧边栏菜单包含路由
 * @FilePath: /wt-ui-ele/src/views/menu.ts
 * @Copyright © xkloveme
 */
import ButtonDemo from "./../components/ButtonDemo.vue"
export let components:any = [
  { path: '/doc/button', name: 'Button 组件',component: ButtonDemo },
]


export default [
  {
    name: '文档',
    children: [
      { path: '/doc/intro', name: '介绍' },
      { path: '/doc/install', name: '安装' },
      { path: '/doc/get-started', name: '开始使用' },
    ]
  },
  {
    name: '组件列表',
    children: components
  }
]
