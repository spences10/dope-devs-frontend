<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
	let form_data = $state({
		selected_country: '',
		name: '',
		title: '',
		avatar: '',
		bio: '',
		selected_technologies: [],
	});
</script>

<form
	method="POST"
	action="?/submit_dope_dev"
	class="form-control"
	use:enhance={() => {
		return ({ update, result }) => {
			console.log('=====================');
			console.log(result);
			console.log('=====================');
			update({ reset: false });
		};
	}}
>
	<label for="name" class="label">
		<span class="label-text text-base"> Dev: </span>
	</label>
	<input
		type="text"
		bind:value={form_data.name}
		name="name"
		placeholder="Name"
		required
		class="input input-primary w-full max-w-xs text-base"
	/>

	<label for="avatar" class="label">
		<span class="label-text text-base"> Avatar URL: </span>
	</label>
	<input
		type="text"
		bind:value={form_data.avatar}
		name="avatar"
		placeholder="Avatar URL"
		class="input input-primary w-full max-w-xs text-base"
	/>

	<label for="avatar" class="label">
		<span class="label-text text-base"> Bio: </span>
	</label>
	<textarea
		bind:value={form_data.bio}
		name="bio"
		placeholder="Bio"
		class="textarea textarea-primary w-full max-w-xs text-base"
	/>

	<label for="selected_technologies" class="label">
		<span class="label-text text-base"> Technologies: </span>
	</label>
	<select
		multiple
		bind:value={form_data.selected_technologies}
		name="selected_technologies"
		class="select select-primary mb-10 w-full max-w-xs text-base"
	>
		<option disabled value="">Select technologies</option>
		{#each data.technologies as technology}
			<option value={technology.id}>{technology.name}</option>
		{/each}
	</select>

	<label for="country_id" class="label">
		<span class="label-text text-base"> Country: </span>
	</label>
	<select
		bind:value={form_data.selected_country}
		name="country_id"
		class="select select-primary mb-10 w-full max-w-xs text-base"
	>
		<option disabled value="">Select a country</option>
		{#each data.countries as country}
			<option value={country.id}>{country.name}</option>
		{/each}
	</select>

	<button
		type="submit"
		class="max-x-xs btn btn-primary w-full max-w-xs text-base"
	>
		Submit
	</button>
</form>

<pre>{JSON.stringify(form_data, null, 2)}</pre>
