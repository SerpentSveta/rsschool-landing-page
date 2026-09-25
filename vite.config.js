import { defineConfig } from 'vite';

export default defineConfig({
  base: '/rsschool-landing-page/',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        menu: 'menu.html',
      },
    },
  },
});
