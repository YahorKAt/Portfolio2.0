import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import babel from '@rolldown/plugin-babel';

export default defineConfig({
  plugins: [
    react(),
    babel({
      plugins: ['babel-plugin-styled-components'],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src',
    },
  },
});