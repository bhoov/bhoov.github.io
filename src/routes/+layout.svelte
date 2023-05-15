<script>
	import Header from "../lib/components/Header.svelte";
	import "./app.css";
</script>

<svelte:head>
	<script src="//code.iconify.design/1/1.0.6/iconify.min.js"></script>
</svelte:head>

<!-- <Header /> -->

<div id="svelte">
	<main class="max-w-md md:grid md:grid-cols-12 md:max-w-5xl md:gap-x-8">
		<slot />
	</main>

	<footer>
		<!-- <p>visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to learn SvelteKit</p> -->
	</footer>
</div>

<style lang="postcss">
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
	main {
		width: 1200px;
		padding: 0 1rem;
		margin: 5vh auto;
		border-radius: 5px;
	}

	:global(h1) {
		/* font-family: "Lato", -apple-system, "Segoe UI", Roboto, Oxygen, serif; */
		font-weight: semibold;
		line-height: 2.35rem;
		font-size: 2.2rem;

		@apply mb-6 mt-8;
	}

	:global(.main-col) {
		@apply col-start-3 col-end-11 w-full mx-0;
	}

	:global(.left-bar) {
		@apply col-start-1 col-end-4;
	}

	@media print {
		:root {
			font-size: 80%;
		}
		main {
			margin: auto;
			padding: 1rem 2rem;
			/* @apply max-w-fit; */
			@apply max-w-fit;
			/* display:grid; */
		}
	}

	:global(.cv-block) {
		@apply col-start-1 col-span-full w-full md:gap-x-8 md:grid-cols-12 md:grid;
	}

	@media print {
		.cv-block {
			max-width: 100%;
			page-break-inside: avoid;
			margin-bottom: 0;
		}
	}
</style>
