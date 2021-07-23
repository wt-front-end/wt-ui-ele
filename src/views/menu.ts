/*
 * @Author: xkloveme
 * @Date: 2021-07-06 17:48:21
 * @LastEditTime: 2021-07-23 14:41:33
 * @LastEditors: xkloveme
 * @Description: 侧边栏菜单包含路由
 * @FilePath: /wt-ui-ele/src/views/menu.ts
 * @Copyright © xkloveme
 */
import ButtonDemo from "./../components/ButtonDemo.vue"
import TableDemo from "./../components/TableDemo.vue"
export let components:any = [
  { path: '/components/button', name: 'Button 组件',component: ButtonDemo },
  { path: '/components/table', name: 'Table 组件',component: TableDemo },
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
