<script>
  import Developer from '$lib/components/developer.svelte'
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
    {#each $developers.data.developers as { slug, name, profileImage, bio }}
      <li class="py-4">
        <a sveltekit:prefetch href={`/developers/${slug}`}>
          <Developer {name} image={profileImage.url} {bio} />
        </a>
      </li>
    {/each}
  </ul>
{/if}
