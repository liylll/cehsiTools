import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    // 直接使用源码
    alias: [
      {
        find: 'cehsiTools',
        replacement: join(__dirname, '..', 'packages/cehsiTools/index.ts'),
      },
      {
        find: /^@cehsiTools\/(.+)$/,
        replacement: join(__dirname, '..', 'packages', '$1', 'index.ts'),
      },
    ],
  },
  plugins: [vue()],
  server: {
    port: 4521,
  },
})
