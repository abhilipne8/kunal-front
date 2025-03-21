import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "http://13.60.11.86:5000", // Replace with your backend URL
        changeOrigin: true,
        secure: false
      }
    }
  }
});
