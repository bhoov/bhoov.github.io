<script>
  import GlobalLayout from './GlobalLayout.svelte';
  export let templateHtml;
</script>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <script src="https://kit.fontawesome.com/ab1be9b975.js" crossorigin="anonymous"></script>
</svelte:head>

<GlobalLayout>
  <div class="container">
    <a href="/" class="text-red-500 text-xs font-serif">Take me home</a>
    {@html templateHtml}
  </div>
</GlobalLayout>
