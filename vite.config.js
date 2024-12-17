import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/**/*', // Source folder
          dest: 'assets',        // Destination folder
        },
      ],
    }),
  ],
  resolve: {
    alias: {
      '@': '/src', // Alias for the `src` directory
    },
  },
  assetsInclude: ['**/*.JPG'], // Add this line to handle .JPG files
});