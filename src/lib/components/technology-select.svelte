<script lang="ts">
	let { technologies } = $props<{
		technologies: { id: number; name: string }[];
	}>();

	let search_query = $state('');
	let filtered_technologies = $derived.by(() => {
		if (!search_query) return technologies;
		return technologies.filter(tech =>
			tech.name.toLowerCase().includes(search_query.toLowerCase()),
		);
	});
</script>

<!-- when clicked into show list of items -->
<div
	class="relative block min-w-52 max-w-full rounded-box border border-primary p-2 align-top"
>
	<!-- hidden multi select with selected values added -->
	<select multiple class="hidden">
		<option value="1" class=""> White </option>
		<option value="3" class=""> Yellow </option>
		<option value="5" class=""> Blue </option>
	</select>
	<!-- tags displayed -->
	<div class="flex flex-wrap place-items-center">
		{#each ['White', 'Yellow', 'Blue'] as item, index}
			<div draggable="true" class="" style="">
				<div
					class="badge badge-primary mb-0 mr-1 flex justify-between"
				>
					<span class="mb-1 mt-1 flex-grow pr-1">{item}</span>
					<span
						class="cursor-pointer pb-2 text-xs hover:text-warning"
					>
						&times;
					</span>
				</div>
			</div>
		{/each}
		<!-- input for the next item selection -->
		<input
			type="text"
			class="w-20 bg-base-100 outline-0"
			id=""
			autocomplete="off"
			tabindex="0"
			bind:value={search_query}
		/>
		<!-- clear currnet selection -->
		<span class="">&times;</span>
	</div>
	<!-- list of available items -->
	<div
		class="relative max-h-56 w-full overflow-auto"
		style="top: 0px;"
	>
		{#each filtered_technologies as technology, index}
			<div class="hover:bg-secondary hover:text-secondary-content">
				{technology.name}
			</div>
		{/each}
	</div>
</div>
