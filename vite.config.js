import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    {
      name: 'capsulas-fallback-middleware',
      configureServer(server) {
        server.middlewares.use((req, res, next) => {
          if (req.url && req.url.startsWith('/Capsulas/')) {
            req.url = req.url.replace(/^\/Capsulas/, '') || '/';
          }
          next();
        });
      }
    }
  ],
  base: '/',
  server: {
    port: 3000,
    open: false,
    host: true
  }
})
