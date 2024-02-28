<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1 class="text-xl my-4">Register</h1>

<p class="mb-4">Really this is just here so I can block your IP if you post anything indecent!</p>

<form method="post" use:enhance class="form-control">
	<label for="username" class="label">
		<span class="label-text text-base">Username</span>
	</label>
	<input
		name="username"
		id="username"
		class="input input-primary w-full max-w-xs text-base"
	/>
	<label for="password" class="label">
		<span class="label-text text-base">Password</span>
	</label>
	<input
		type="password"
		name="password"
		id="password"
		class="input input-primary w-full max-w-xs text-base mb-8"
	/>
	<button class="max-x-xs btn btn-primary w-full max-w-xs text-base mb-2">
		Continue
	</button>
	<p>{form?.message ?? ''}</p>
</form>
