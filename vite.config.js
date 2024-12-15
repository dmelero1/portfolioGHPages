import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  build: {
    root: "./",
    outDir: './docs',
    rollupOptions: {
      input: {
        index: resolve(__dirname, 'index.html'),
        about: resolve(__dirname, 'about.html'),
        skill: resolve(__dirname, 'skill.html'),
        project: resolve(__dirname, 'project.html'),
        contact: resolve(__dirname, 'contact.html'),
      },
    },
  },
  base: './portfolioghpages', 
});