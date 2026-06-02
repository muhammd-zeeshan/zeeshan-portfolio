import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react')) return 'vendor-react'
          if (id.includes('node_modules/framer-motion')) return 'vendor-framer-motion'
          if (id.includes('node_modules')) return 'vendor'
        },
        chunkFileNames: 'assets/[name].[hash].js',
        entryFileNames: 'assets/[name].[hash].js',
        assetFileNames: 'assets/[name].[hash][extname]'
      }
    },
    chunkSizeWarningLimit: 600,
    reportCompressedSize: false,
    sourcemap: false
  },

  server: {
    hmr: {
      protocol: 'ws',
      host: 'localhost',
      port: 5173
    }
  }
})



