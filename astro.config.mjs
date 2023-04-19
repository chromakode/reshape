import { defineConfig } from 'astro/config'

// https://astro.build/config
export default defineConfig({
  experimental: { assets: true },
  image: {
    service: 'astro/assets/services/sharp',
  },
})
