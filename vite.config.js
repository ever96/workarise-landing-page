import { defineConfig } from 'vite';
import { createHtmlPlugin } from 'vite-plugin-html';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';
import path from 'path';

export default defineConfig({
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@styles': path.resolve(__dirname, 'src/styles'),
    },
  },
  server: {
    port: '5173',
  },
  build: {
    outDir: './build',
  },
  plugins: [
    svgr(),
    createHtmlPlugin({
      inject: {
        data: {
          title: 'Workarise App',
        },
      },
    }),
    react({
      include: '**/*.{jsx,tsx,js}',
    }),
  ],
});