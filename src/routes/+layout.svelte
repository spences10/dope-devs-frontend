<script>
	import '../app.pcss';

	let { children } = $props();
</script>

<a href="/submit-dev" class="btn">Add Dope Dev</a>

<form method="POST" action="/logout">
	<button class="btn">Logout</button>
</form>

<main class="container mx-auto max-w-7xl px-4">
	{@render children()}
</main>
