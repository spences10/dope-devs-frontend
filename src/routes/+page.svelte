<script lang="ts">
	import Developer from '$lib/components/developer.svelte';

	let { data } = $props() as {
		data: {
			all_dope_devs: Array<{
				name: string;
				bio: string;
				avatar: string;
			}>;
		};
	};
</script>

<h1>Welcome to Dope Devs</h1>

{#each data.all_dope_devs as dev}
	<Developer name={dev.name} bio={dev.bio} image={dev.avatar} />
{/each}
