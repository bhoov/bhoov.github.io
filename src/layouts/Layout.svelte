<script>
  export let templateHtml, settings;
</script>

<style global lang="postcss">

  @tailwind base;
  @tailwind components;

  @tailwind utilities;


  :global(h1) {
    font-style: italic;
  }
  .container {
    max-width: 900px;
    margin: 0 auto;
    padding: 1rem;
  }

  :root {
    --balloon-color: #06395a;
    --balloon-font-size: 14px;
  } 

</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />

</svelte:head>
<div class="container">
  <div class="text-red-600 font-bold">THIS IS MY NAVBAR</div>
  {@html templateHtml}
</div>
