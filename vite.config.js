import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  build: {
    // Enable chunks and dynamic imports
    rollupOptions: {
      output: {
        manualChunks: {
          'vendor': ['react', 'react-dom', 'react-router-dom'],
          'three': ['three', '@react-three/fiber', '@react-three/drei'],
          'animation': ['framer-motion', 'react-vertical-timeline-component'],
          'icons': ['react-icons']
        }
      }
    },
    // Optimize chunk size warnings
    chunkSizeWarningLimit: 1000,
    // Enable source maps for production
    sourcemap: true,
    // Add module preload polyfill
    modulePreload: {
      polyfill: true
    },
    // Optimize dependencies
    commonjsOptions: {
      include: [/node_modules/],
      transformMixedEsModules: true
    }
  },
  // Enable build caching
  cacheDir: '.vite',
  // Optimize server settings
  server: {
    hmr: true,
    compress: true
  },
  // Add preload directives
  experimental: {
    renderBuiltUrl(filename) {
      return { relative: true, preload: true }
    }
  }
})
