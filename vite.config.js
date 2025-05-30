import { defineConfig } from 'vite';
import vue from '@vitejs/plugin-vue';

export default defineConfig({
  plugins: [vue()],
  server: {
    port: 3000,
    open: true,
    // 强制刷新以避免缓存问题
    hmr: {
      overlay: false
    }
  },
  // 修复项目根目录配置
  root: './src'
});