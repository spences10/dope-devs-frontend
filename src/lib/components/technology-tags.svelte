<script lang="ts">
	import { enhance } from '$app/forms';

	let { all_technologies } = $props<{
		all_technologies: Array<{
			technology_id: number;
			technology_name: string;
		}>;
	}>();
</script>

<div class="mb-10">
	{#each all_technologies as { technology_name, technology_id }}
		<form
			method="POST"
			action="/?technology_id={technology_id}"
      class="inline-block"
			use:enhance={() => {
				return ({ update, result }) => {
					// handle_result(result)
					update({ reset: false });
				};
			}}
		>
			<button
				class="badge badge-primary badge-xs mb-2 mr-2 cursor-pointer py-2"
			>
				{technology_name}
			</button>
		</form>
	{/each}
</div>
