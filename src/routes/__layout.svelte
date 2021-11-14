<script>
  import { initClient } from '@urql/svelte'
  import '../app.css'

  initClient({
    url: import.meta.env.VITE_GRAPHQL_API,
  })
</script>

<slot />
