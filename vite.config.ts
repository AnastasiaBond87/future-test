/// <reference types="vitest" />
/// <reference types="vite/client" />

import { defineConfig } from 'vite';
import path from 'path';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: { '@': path.resolve(__dirname, './src') },
  },
  preview: {
    host: true,
    port: 8080,
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './setupTests.ts',
    css: true,
    coverage: {
      enabled: true,
      all: true,
      provider: 'v8',
      exclude: ['src/shared/ui/Icons'],
      include: ['src/**/*'],
    },
  },
});
