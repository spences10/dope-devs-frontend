<script lang="ts">
	import { Developer, Footer, Header } from '$lib/components';

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
	let selected_technology = $state('');

	const filter_devs = (technology_name: string) => {
		selected_technology =
			selected_technology === technology_name ? '' : technology_name;
		filtered_devs = selected_technology
			? data.all_dope_devs.filter(dev =>
					dev.technologies.includes(technology_name),
				)
			: data.all_dope_devs;
	};

	const sort_devs = (order: string) => {
		if (order === 'most_likes') {
			filtered_devs = [...filtered_devs].sort(
				(a, b) => b.likes - a.likes,
			);
		} else if (order === 'least_likes') {
			filtered_devs = [...filtered_devs].sort(
				(a, b) => a.likes - b.likes,
			);
		} else {
			filtered_devs = data.all_dope_devs;
			selected_technology = '';
		}
	};
</script>

<Header />

<div class="mb-10">
	{#each data.all_technologies as { technology_name, technology_id } (technology_id)}
		<button
			class="badge badge-xs mb-2 mr-2 cursor-pointer py-2 {technology_name ===
			selected_technology
				? 'badge-secondary'
				: 'badge-primary'}"
			onclick={() => filter_devs(technology_name)}
		>
			{technology_name}
		</button>
	{/each}
</div>

<button onclick={() => sort_devs('most_likes')} class="btn">
	Most Likes
</button>
<button onclick={() => sort_devs('least_likes')} class="btn">
	Least Likes
</button>
<button onclick={() => sort_devs('default')} class="btn mb-10">
	Default
</button>

<div
	class="grid grid-cols-1 justify-items-center gap-4 sm:grid-cols-2 sm:justify-items-start sm:gap-8 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6"
>
	{#each filtered_devs as dev (dev.id)}
		<Developer {dev} />
	{/each}
</div>

<Footer />
