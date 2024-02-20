<script lang="ts">
	let { dev } = $props<{
		dev: {
			name: string;
			bio: string;
			avatar: string;
			country_name: string;
			technologies: string;
			likes: number;
		};
	}>();
</script>

<div class="card bordered compact card-side">
	<div class="card-body flex">
		<h2 class="card-title">{dev.name}</h2>
		<div>{dev.bio}</div>
	</div>
	<figure>
		<img class="h-full w-full" src={dev.avatar} alt={dev.name} />
	</figure>
</div>
