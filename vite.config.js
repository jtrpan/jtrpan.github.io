import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  // gh-pages deploys this folder (see "deploy" in package.json)
  build: { outDir: 'build' },
  server: { port: 3000 },
});
