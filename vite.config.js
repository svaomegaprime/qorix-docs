import tailwindcss from '@tailwindcss/vite';
import react from '@vitejs/plugin-react';
import path from 'path';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [react(), tailwindcss()],

  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    },
  },

  preview: {
    host: '0.0.0.0',
    port: 6000,
    allowedHosts: [
      'qorix-popup-docs.nextvence.com',
    ],
  },
});
