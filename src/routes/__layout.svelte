<script>
  import { initClient } from '@urql/svelte'
  import '../app.css'

  initClient({
    url: import.meta.env.VITE_GRAPHQL_API,
  })
</script>

<main class="container max-w-xl mx-auto px-4">
  <slot />
</main>
