import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
  server: {
    port: 3000,
    watch: {
      ignored: ['**/public/downloads/**', '**/dist/**', '**/*.zip', '**/*.exe', '**/.git/**'],
    },
  },
})
