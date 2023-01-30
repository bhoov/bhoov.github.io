<script>
	import Header from "../lib/components/Header.svelte";
	import "./app.css";
</script>

<svelte:head>
	<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>
</svelte:head>

<!-- <Header /> -->

<div id="svelte">
	<slot />

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>

<style>
	footer {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 12px;
	}

	footer a {
		font-weight: bold;
	}
</style>
