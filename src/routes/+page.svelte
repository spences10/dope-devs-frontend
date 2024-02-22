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

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
>
	{#each data.all_dope_devs as dev}
		<Developer {dev} />
	{/each}
</div>
