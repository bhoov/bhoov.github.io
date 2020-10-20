<script>
  import GlobalLayout from './GlobalLayout.svelte';
  export let templateHtml;
</script>

<GlobalLayout>
  <div class="container">
    <div class="text-red-600 font-bold">NO NAVBAR</div>
    {@html templateHtml}
  </div>
</GlobalLayout>
