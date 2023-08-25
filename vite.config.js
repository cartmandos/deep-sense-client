import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@pages', replacement: '/src/pages' },
      { find: '@ui', replacement: '/src/ui' },
      { find: '@lib', replacement: '/src/lib' },
      { find: '@assets', replacement: '/src/assets' },
    ],
  },
});
