// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from "@tailwindcss/vite";
import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  output: 'server',
  adapter: vercel(),
  server: {
    port: process.env.PORT ? Number(process.env.PORT) : 4322,
    host: true
  },
  vite: {
    plugins: [tailwindcss()],
  },
});
