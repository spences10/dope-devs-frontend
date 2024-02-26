<script>
	import { Nav } from '$lib/components';
	import '../app.pcss';

	let { children } = $props();
</script>

<Nav />

<main class="container mx-auto max-w-7xl px-4">
	{@render children()}
</main>
