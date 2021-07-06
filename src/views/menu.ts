/*
 * @Author: xkloveme
 * @Date: 2021-07-06 17:48:21
 * @LastEditTime: 2021-07-06 18:07:29
 * @LastEditors: xkloveme
 * @Description: 侧边栏菜单
 * @FilePath: /wt-ui-ele/src/views/menu.ts
 * @Copyright © xkloveme
 */

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
    children: [
      { path: '/doc/button', name: 'Button 组件' },
    ]
  }
]
