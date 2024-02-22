<script lang="ts">
	let { technologies } = $props<{
		technologies: { id: number; name: string }[];
	}>();

	let input_focused = $state(false);
	let search_query = $state('');
	let selected_items = $state<{ id: number; name: string }[]>([]);
	let filtered_technologies = $derived.by(() => {
		if (!search_query) return technologies;
		return technologies.filter(tech =>
			tech.name.toLowerCase().includes(search_query.toLowerCase()),
		);
	});

	const handle_focus = () => (input_focused = true);
	const handle_blur = () => {
		setTimeout(() => {
			input_focused = false;
		}, 200);
	};

	const add_technology = (technology: {
		id: number;
		name: string;
	}) => {
		selected_items = [...selected_items, technology].filter(
			(item, index, self) =>
				index === self.findIndex(t => t.id === item.id),
		);
	};
</script>

<!-- when clicked into show list of items -->
<div
	class="relative block min-w-52 max-w-full rounded-box border border-primary p-2 align-top"
>
	<!-- hidden multi select with selected values added -->
	<select multiple class="hidden">
		{#each selected_items as item, index}
			<option value={item.id} class=""> {item.name} </option>
		{/each}
	</select>
	<!-- tags displayed -->
	<div class="flex flex-wrap place-items-center">
		{#each selected_items as item, index}
			<div draggable="true" class="" style="">
				<div
					class="badge badge-primary mb-0 mr-1 flex justify-between"
				>
					<span class="mb-1 mt-1 flex-grow pr-1">{item.name}</span>
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
			onfocus={handle_focus}
			onblur={handle_blur}
		/>
		<!-- clear currnet selection -->
		<span class="">&times;</span>
	</div>
	<!-- list of available items -->
	{#if input_focused}
		<div
			class="relative max-h-56 w-full overflow-auto"
			style="top: 0px;"
		>
			{#each filtered_technologies as technology, index}
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<!-- svelte-ignore a11y-no-noninteractive-element-interactions -->
				<p
					class="hover:bg-secondary hover:text-secondary-content"
					onclick={() => add_technology(technology)}
				>
					{technology.name}
				</p>
			{/each}
		</div>
	{/if}
</div>

<pre>{JSON.stringify(selected_items, null, 2)}</pre>
