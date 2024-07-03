// vite.config.ts

import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

const csp = "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' ; connect-src 'self' http://localhost:3000 ; frame-ancestors 'none'; base-uri 'self'; form-action 'self';";
export default defineConfig({
  plugins: [
    vue(),
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    }
  },
  server: {
    headers: {
      'Content-Security-Policy': csp,
    },
  },
})
