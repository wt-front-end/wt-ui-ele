// @ts-nocheck

import { md } from "./plugins/md";
import fs from "fs";
import { baseParse } from "@vue/compiler-core";
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
export default {
  base: "./",
  assetsDir: "assets",
  plugins: [
    vue(),
    md(),
    styleImport({
      libs: [
        {
          libraryName: 'element-plus',
          esModule: true,
          ensureStyleFile: true,
          resolveStyle: (name) => {
            return `element-plus/lib/theme-chalk/${name}.css`;
          },
          resolveComponent: (name) => {
            return `element-plus/lib/${name}`;
          },
        }
      ]
    })
  ],
    vueCustomBlockTransforms: {
      demo: (options) => {
        const { code, path } = options;
        const file = fs.readFileSync(path).toString();
        const parsed = baseParse(file).children.find((n) => n.tag === "demo");
        const title = parsed.children[0].content;
        const main = file.split(parsed.loc.source).join("").trim();
        return `export default function (Component) {
        Component.__sourceCode = ${JSON.stringify(main)}
        Component.__sourceCodeTitle = ${JSON.stringify(title)}
      }`.trim();
      },
    },
};
