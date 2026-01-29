
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/subz-lab/',
  plugins: [react()],
  server: {
    host: true
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          'vendor-three': ['three', '@react-three/fiber', '@react-three/drei'],
          'vendor-motion': ['framer-motion'],
          'vendor-utils': ['lucide-react', 'use-sound']
        }
      }
    }
  }
})
