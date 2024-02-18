<script>
	import '../app.pcss';

	let { children } = $props();
</script>

<a href="/submit-dev" class="btn">Add Dope Dev</a>

<form method="POST" action="/logout">
	<button>Logout</button>
</form>

<main class="container max-w-xl mx-auto px-4">
	{@render children()}
</main>
