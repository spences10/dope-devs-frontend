<script lang="ts">
	import Developer from '$lib/components/developer.svelte';

	let { data } = $props() as {
		data: {
			all_dope_devs: Array<{
				name: string;
				bio: string;
				avatar: string;
				country_name: string;
				technologies: string;
				likes: number;
			}>;
		};
	};
</script>

<!-- <pre>{JSON.stringify(data, null, 2)}</pre> -->

<h1>Welcome to Dope Devs</h1>

{#each data.all_dope_devs as dev}
	<Developer {dev} />
{/each}
