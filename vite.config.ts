import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'path';

/**
 * https://vitejs.dev/config/
 * Refer: https://dev.to/keefdrive/create-react-app-vs-vite-2amn
 *
 * Allows us to refer to paths as:
 * import x from '@/component/x
 * !Prefix '@' in path.
 */
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
});
