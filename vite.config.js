import { fileURLToPath, URL } from 'node:url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import { ElementPlusResolver } from 'unplugin-vue-components/resolvers'
import { visualizer } from "rollup-plugin-visualizer";

// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
      resolvers: [ElementPlusResolver()],
    }),
    visualizer({
      gzipSize: true,
      brotliSize: true,
      emitFile: false,
      filename: "test.html", //分析图生成的文件名
      open:true //如果存在本地服务端口，将在打包后自动展示
    }),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  },
  build: {
    target: 'modules',
    outDir: 'dist', //指定输出路径
    assetsDir: 'static', // 指定生成静态资源的存放路径
  },
})
