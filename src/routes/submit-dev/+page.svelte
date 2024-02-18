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
	class="form-control space-y-4"
	use:enhance={() => {
		return ({ update, result }) => {
			console.log('=====================');
			console.log(result);
			console.log('=====================');
			update({ reset: false });
		};
	}}
>
	<label>
		<div class="label">
			<span class="label-text">Pick the best fantasy franchise</span>
		</div>
		<input
			type="text"
			bind:value={form_data.name}
			name="name"
			placeholder="Name"
			required
			class="input input-primary w-full max-w-xs"
		/>
	</label>
	<input
		type="text"
		bind:value={form_data.title}
		name="title"
		placeholder="Title"
		required
		class="input input-primary w-full max-w-xs"
	/>
	<input
		type="text"
		bind:value={form_data.avatar}
		name="avatar"
		placeholder="Avatar URL"
		class="input input-primary w-full max-w-xs"
	/>
	<textarea
		bind:value={form_data.bio}
		name="bio"
		placeholder="Bio"
		class="textarea textarea-primary w-full max-w-xs"
	/>
	<select
		bind:value={form_data.selected_country}
		name="country_id"
		class="select select-primary w-full max-w-xs"
	>
		<option disabled value="">Select a country</option>
		{#each data.countries as country}
			<option value={country.id}>{country.name}</option>
		{/each}
	</select>

	<button
		type="submit"
		class="max-x-xs btn btn-primary w-full max-w-xs"
	>
		Submit
	</button>
</form>
