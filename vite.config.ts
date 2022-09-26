import { defineConfig } from 'vite';
import { VitePWA } from 'vite-plugin-pwa';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * @see https://vitejs.dev/config/
 * @see https://dev.to/keefdrive/create-react-app-vs-vite-2amn
 *
 * Allows us to refer to paths as:
 * import x from '@/component/x
 * !Prefix '@' in path.
 */
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      devOptions: {
        enabled: true,
      },
    }),
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
