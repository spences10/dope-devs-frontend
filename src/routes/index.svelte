<script>
  import { developersQuery } from '$lib/gql/queries'
  import { operationStore, query } from '@urql/svelte'

  const developers = operationStore(developersQuery)
  query(developers)
</script>

<pre>{JSON.stringify($developers, null, 2)}</pre>

<h1>Welcome to SvelteKit wheeee</h1>
<p>
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the
  documentation
</p>
