/*
 * @Author: xkloveme
 * @Date: 2021-07-05 17:17:24
 * @LastEditTime: 2021-07-06 10:12:03
 * @LastEditors: xkloveme
 * @Description: 插件转换md文件
 * @FilePath: /wt-ui-ele/plugins/md.ts
 * @Copyright © xkloveme
 */
// @ts-nocheck
import marked from "marked";

/**
 * @description: 导出js类型
 * @param {*} str
 * @return {*}
 */
const mdToJs = (str) => {
  const content = JSON.stringify(marked(str));
  return `export default ${content}`;
};
const fileRegex = /\.(md)$/
export function md() {
  return {
    name: 'vite-plugin-md',
    transform(src, id) {
      if (fileRegex.test(id)) {
        return {
          code: mdToJs(src),
          map: null // 如果可行将提供 source map
        }
      }
    }
  };
}
