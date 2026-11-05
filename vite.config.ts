import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import { fileURLToPath } from 'node:url';
import { defineConfig } from 'vite';
import { pageServer } from './scripts/page-server.ts';

export default defineConfig({
  appType: 'custom',
  plugins: [react(), tailwindcss(), pageServer()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('.', import.meta.url)),
    },
  },
  server: {
    port: 3001,
    // AI Studio can disable HMR and file watching to keep its preview stable.
    hmr: process.env.DISABLE_HMR !== 'true',
    watch: process.env.DISABLE_HMR === 'true' ? null : {},
  },
});
