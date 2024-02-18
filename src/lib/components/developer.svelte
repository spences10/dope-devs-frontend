<script lang="ts">
	let { name, bio, image } = $props<{
		name: string;
		bio: string;
		image: string;
	}>();
</script>

<div class="card bordered compact card-side">
	<div class="card-body flex">
		<h2 class="card-title">{name}</h2>
		<div>{bio}</div>
	</div>
	<figure>
		<img class="h-full w-full" src={image} alt={name} />
	</figure>
</div>
