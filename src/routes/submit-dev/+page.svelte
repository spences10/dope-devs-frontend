<script lang="ts">
	import { enhance } from '$app/forms';

	let { data } = $props();
	let form_data = $state({
		selected_country: '',
		name: '',
		title: '',
		avatar: '',
		bio: '',
	});
</script>

<pre>{JSON.stringify(form_data, null, 2)}</pre>

<form
	method="POST"
	action="?/submit_dope_dev"
	use:enhance={() => {
		return ({ update, result }) => {
			console.log('=====================');
			console.log(result);
			console.log('=====================');
			update({ reset: false });
		};
	}}
>
	<input
		type="text"
		bind:value={form_data.name}
		name="name"
		placeholder="Name"
		required
	/>
	<input
		type="text"
		bind:value={form_data.title}
		name="title"
		placeholder="Title"
		required
	/>
	<input
		type="text"
		bind:value={form_data.avatar}
		name="avatar"
		placeholder="Avatar URL"
	/>
	<textarea bind:value={form_data.bio} name="bio" placeholder="Bio"
	></textarea>
	<select
		bind:value={form_data.selected_country}
		class="select select-primary w-full max-w-xs"
	>
		<option disabled value="">Select a country</option>
		{#each data.countries as country}
			<option value={country.id}>{country.name}</option>
		{/each}
	</select>
	<button type="submit">Submit</button>
</form>

<pre>{JSON.stringify(data.countries, null, 2)}</pre>
