import adapter from '@sveltejs/adapter-vercel'
import path from 'path'
import preprocess from 'svelte-preprocess'

/** @type {import('@sveltejs/kit').Config} */
const config = {
  kit: {
    // hydrate the <div id="svelte"> element in src/app.html
    target: '#svelte',
    adapter: adapter(),

    vite: {
      resolve: {
        alias: {
          '@components': path.resolve('./src/lib/components'),
          '@lib': path.resolve('./src/lib'),
          '@gql': path.resolve('./src/lib/gql'),
        },
      },
    },
  },

  preprocess: [
    preprocess({
      postcss: true,
    }),
  ],
}

export default config
