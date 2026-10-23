// vite.config.js
import { defineConfig } from "file:///F:/Aaarti/Aaarti/my-project/node_modules/vite/dist/node/index.js";
import react from "file:///F:/Aaarti/Aaarti/my-project/node_modules/@vitejs/plugin-react/dist/index.mjs";
import { viteStaticCopy } from "file:///F:/Aaarti/Aaarti/my-project/node_modules/vite-plugin-static-copy/dist/index.js";
var vite_config_default = defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: "src/assets/**/*",
          // Source folder
          dest: "assets"
          // Destination folder
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": "/src"
      // Alias for the `src` directory
    }
  },
  assetsInclude: ["**/*.JPG"],
  // Add this line to handle .JPG files
  server: {
    port: 3e3
    // Specify the port you want to use
  },
  base: "/ "
  // Set the base path for your app when deployed
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJGOlxcXFxBYWFydGlcXFxcQWFhcnRpXFxcXG15LXByb2plY3RcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfZmlsZW5hbWUgPSBcIkY6XFxcXEFhYXJ0aVxcXFxBYWFydGlcXFxcbXktcHJvamVjdFxcXFx2aXRlLmNvbmZpZy5qc1wiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9pbXBvcnRfbWV0YV91cmwgPSBcImZpbGU6Ly8vRjovQWFhcnRpL0FhYXJ0aS9teS1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IHsgZGVmaW5lQ29uZmlnIH0gZnJvbSAndml0ZSc7XG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnO1xuaW1wb3J0IHsgdml0ZVN0YXRpY0NvcHkgfSBmcm9tICd2aXRlLXBsdWdpbi1zdGF0aWMtY29weSc7XG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbXG4gICAgcmVhY3QoKSxcbiAgICB2aXRlU3RhdGljQ29weSh7XG4gICAgICB0YXJnZXRzOiBbXG4gICAgICAgIHtcbiAgICAgICAgICBzcmM6ICdzcmMvYXNzZXRzLyoqLyonLCAvLyBTb3VyY2UgZm9sZGVyXG4gICAgICAgICAgZGVzdDogJ2Fzc2V0cycsICAgICAgICAgLy8gRGVzdGluYXRpb24gZm9sZGVyXG4gICAgICAgIH0sXG4gICAgICBdLFxuICAgIH0pLFxuICBdLFxuICByZXNvbHZlOiB7XG4gICAgYWxpYXM6IHtcbiAgICAgICdAJzogJy9zcmMnLCAvLyBBbGlhcyBmb3IgdGhlIGBzcmNgIGRpcmVjdG9yeVxuICAgIH0sXG4gIH0sXG4gIGFzc2V0c0luY2x1ZGU6IFsnKiovKi5KUEcnXSwgLy8gQWRkIHRoaXMgbGluZSB0byBoYW5kbGUgLkpQRyBmaWxlc1xuICBzZXJ2ZXI6IHtcbiAgICBwb3J0OiAzMDAwLCAvLyBTcGVjaWZ5IHRoZSBwb3J0IHlvdSB3YW50IHRvIHVzZVxuICB9LFxuICBiYXNlOiAgJy8gJywgLy8gU2V0IHRoZSBiYXNlIHBhdGggZm9yIHlvdXIgYXBwIHdoZW4gZGVwbG95ZWRcbn0pO1xuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEyUSxTQUFTLG9CQUFvQjtBQUN4UyxPQUFPLFdBQVc7QUFDbEIsU0FBUyxzQkFBc0I7QUFHL0IsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUztBQUFBLElBQ1AsTUFBTTtBQUFBLElBQ04sZUFBZTtBQUFBLE1BQ2IsU0FBUztBQUFBLFFBQ1A7QUFBQSxVQUNFLEtBQUs7QUFBQTtBQUFBLFVBQ0wsTUFBTTtBQUFBO0FBQUEsUUFDUjtBQUFBLE1BQ0Y7QUFBQSxJQUNGLENBQUM7QUFBQSxFQUNIO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxPQUFPO0FBQUEsTUFDTCxLQUFLO0FBQUE7QUFBQSxJQUNQO0FBQUEsRUFDRjtBQUFBLEVBQ0EsZUFBZSxDQUFDLFVBQVU7QUFBQTtBQUFBLEVBQzFCLFFBQVE7QUFBQSxJQUNOLE1BQU07QUFBQTtBQUFBLEVBQ1I7QUFBQSxFQUNBLE1BQU87QUFBQTtBQUNULENBQUM7IiwKICAibmFtZXMiOiBbXQp9Cg==
