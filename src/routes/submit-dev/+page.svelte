<script lang="ts">
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';
	import { TechnologySelect } from '$lib/components';
	import { selected_technologies_store } from '$lib/stores.svelte';
	import type { ActionResult } from '@sveltejs/kit';

	let { data } = $props();
	let form_data = $state({
		selected_country: '',
		name: '',
		avatar: '',
		bio: '',
		selected_technologies: [],
	});

	let reset = $state(true);

	const handle_result = (result: ActionResult) => {
		if (result.type === 'success') {
			goto('/');
		} else if (result.type === 'failure') {
			reset = false;
		}
	};
</script>

<nav class="flex justify-end">
	<a href="/" class="btn">Back</a>
	<form method="POST" action="/logout">
		<button class="btn">Logout</button>
	</form>
</nav>

<div class="flex justify-center">
	<form
		method="POST"
		action="?/submit_dope_dev"
		class="form-control"
		use:enhance={() => {
			return ({ update, result }) => {
				handle_result(result);
				update({ reset });
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
		<TechnologySelect technologies={data.technologies} />
		<!-- hidden multi select with selected values added -->
		<select multiple class="hidden" name="selected_technologies">
			{#each $selected_technologies_store as item, index}
				<option value={item.id} selected class="">{item.name}</option>
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
</div>
