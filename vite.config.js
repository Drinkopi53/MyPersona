import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/upload-profile-image': 'http://localhost:5000',
      '/upload-portfolio-item': 'http://localhost:5000',
      '/get-drive-file': 'http://localhost:5000',
      '/api': 'http://localhost:5000',
    }
  }
})
