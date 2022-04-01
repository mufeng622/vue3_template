import { defineConfig, loadEnv } from "vite";
import vue from "@vitejs/plugin-vue";
const path = require('path')

// 测试环境是否开启代理  .env.development
const devProxy = loadEnv('development', process.cwd()).VITE_WEB_PROXY

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, 'src')
    }
  },
  css: {
    preprocessorOptions: {
      scss: {
        additionalData: '@import "@/assets/style/main.scss";'
      }
    }
  },
  server: {
    proxy: devProxy === 'true' ? {
      '/api': {
        target: 'http://abc.xxx.com/',
        changeOrigin: true,
        rewrite: path => path.replace('/api', '/')
      }
    } : {}
  }
});
