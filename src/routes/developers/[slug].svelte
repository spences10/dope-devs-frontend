<script context="module">
  export const load = async ({ page: { params } }) => {
    const { slug } = params
    return { props: { slug } }
  }
</script>

<script>
  export let slug
  import { developerQuery } from '$lib/gql/queries'
  import { operationStore, query } from '@urql/svelte'

  const developer = operationStore(developerQuery, { slug })
  query(developer)
</script>

<!-- <pre>{JSON.stringify($developer, null, 2)}</pre> -->

{#if $developer.fetching}
  <p>Loading</p>
{:else if $developer.error}
  <p>Oops! {$developer.error.message}</p>
{:else}
  <div class="card shadow-xl image-full">
    <figure>
      <img
        src={$developer.data?.developer.avatar}
        alt={$developer.data?.developer.name}
      />
    </figure>
    <div class="justify-end card-body">
      <h2 class="card-title">{$developer.data?.developer.name}</h2>
      <div>{@html $developer.data?.developer.bio}</div>
      <div>
        {#each $developer.data?.developer.technologies as { name }}
          <span class="badge badge-primary">{name}</span>
        {/each}
      </div>
    </div>
  </div>
{/if}
