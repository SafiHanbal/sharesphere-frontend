import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mkcert from 'vite-plugin-mkcert';
import ViteSvgr from 'vite-plugin-svgr';

export default defineConfig({
  plugins: [
    react(),
    mkcert(), // Add mkcert plugin here
    ViteSvgr(),
  ],
  server: {
    https: true, // This will enable HTTPS automatically
  },
});
