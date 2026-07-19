import { defineConfig } from 'vite';
import marked from 'vite-plugin-marked';
import tailwindcss from '@tailwindcss/vite';

export default defineConfig({
  base: '/about/',
  plugins: [marked(), tailwindcss()],
});
