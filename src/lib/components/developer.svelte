<script lang="ts">
	let { dev } = $props<{
		dev: {
			name: string;
			bio: string;
			avatar: string;
			country_id: string;
			country_name: string;
			technologies: string;
			likes: number;
		};
	}>();

	let technologies_array = dev.technologies.split(',');

	const country_code_to_flag_emoji = (
		countryCode: string,
	): string => {
		const offset = 127397;
		return (
			String.fromCodePoint(countryCode.charCodeAt(0) + offset) +
			String.fromCodePoint(countryCode.charCodeAt(1) + offset)
		);
	};
</script>

<article class="card card-compact w-64 bg-base-100 shadow-xl">
	<figure>
		<img src={dev.avatar} alt={dev.name} />
	</figure>
	<div class="card-body">
		<h2 class="card-title">
			{dev.name}
			<span>{country_code_to_flag_emoji(dev.country_id)}</span>
		</h2>

		<p>{dev.bio}</p>
		<div>
			{#each technologies_array as technology}
				<span
					class="badge badge-primary badge-xs mb-2 mr-2 cursor-pointer py-2"
				>
					{technology}
				</span>
			{/each}
		</div>
		<div class="card-actions justify-end">
			<button class="btn btn-primary">Like</button>
		</div>
	</div>
</article>
