<script>
  import GlobalLayout from './GlobalLayout.svelte';
  export let templateHtml;
</script>

<GlobalLayout>
  <div class="container">
    <a href="/" class="text-red-500 text-xs font-serif">Take me home</a>
    {@html templateHtml}
  </div>
</GlobalLayout>
