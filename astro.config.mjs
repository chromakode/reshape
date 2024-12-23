import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  site: 'https://chromakode.com/shape/',
  base: '/shape',
  outDir: './dist/shape/',
  image: {
    service: { entrypoint: 'astro/assets/services/sharp' },
  },
})
