import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/candlestick': {
        target: 'http://139.224.3.150:8080',
        changeOrigin: true,
      }
    }
  }
})
