<script lang="ts">
	import { Developer, Header } from '$lib/components';

	let { data } = $props() as {
		data: {
			all_dope_devs: Array<{
				id: number;
				name: string;
				bio: string;
				avatar: string;
				country_id: string;
				country_name: string;
				technologies: string;
				likes: number;
			}>;
			all_technologies: Array<{
				technology_id: number;
				technology_name: string;
			}>;
		};
	};
	
	let filtered_devs = $state(data.all_dope_devs);

	const filter_devs = (technology_name: string) => {
		filtered_devs = data.all_dope_devs.filter(dev =>
			dev.technologies.includes(technology_name),
		);
	};
</script>

<Header />

<div class="mb-10">
	{#each data.all_technologies as { technology_name, technology_id }}
		<button
			class="badge badge-primary badge-xs mb-2 mr-2 cursor-pointer py-2"
			on:click={() => filter_devs(technology_name)}
		>
			{technology_name}
		</button>
	{/each}
</div>

<div
	class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4"
>
	{#each filtered_devs as dev}
		<Developer {dev} />
	{/each}
</div>
