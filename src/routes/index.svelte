<script>
  import { developersQuery } from '$lib/gql/queries'
  import { operationStore, query } from '@urql/svelte'

  const developers = operationStore(developersQuery)
  query(developers)
</script>

<svelte:head>
  <title>Dope Devs! Welcome</title>
</svelte:head>

{#if $developers.fetching}
  <p>Loading</p>
{:else if $developers.error}
  <p>Oops! {$developers.error.message}</p>
{:else}
  <ul>
    {#each $developers.data.developers as developer}
      <li>
        <a href={`/developers/${developer.slug}`}>
          <p>{developer.name}</p>
        </a>
      </li>
    {/each}
  </ul>
{/if}
