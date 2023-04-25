import { defineConfig } from 'astro/config'

import compress from 'astro-compress'

// https://astro.build/config
export default defineConfig({
  site: 'https://chromakode.com/shape/',
  base: '/shape',
  experimental: {
    assets: true,
  },
  image: {
    service: 'astro/assets/services/sharp',
  },
  integrations: [
    compress({ html: { ignoreCustomComments: [/[-\. ]+/] }, img: false }),
  ],
})
