<script lang="ts">
	import { enhance } from '$app/forms';

	import type { ActionData } from './$types';

	export let form: ActionData;
</script>

<h1 class="my-4 text-xl">Sign in</h1>

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
		class="input input-primary mb-8 w-full max-w-xs text-base"
	/>
	<button
		class="max-x-xs btn btn-primary mb-2 w-full max-w-xs text-base"
	>
		Continue
	</button>
	<p>{form?.message ?? ''}</p>
</form>
<a href="/register" class="link link-primary"> Create an account </a>
