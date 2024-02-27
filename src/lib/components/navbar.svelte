<script lang="ts">
	import { page } from '$app/stores';
</script>

{#if $page.url.pathname === '/'}
	<nav class="flex justify-end">
		<a href="/submit-dev" class="btn">Add Dope Dev</a>
	</nav>
{/if}
