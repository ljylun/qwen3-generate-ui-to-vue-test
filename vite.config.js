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
  // 明确指定项目根目录为 src
  root: './index.html'
});