<script>
  import GlobalLayout from "./GlobalLayout.svelte"
  export let templateHtml, settings;
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<GlobalLayout>
  <div class="container">
    <div class="text-teal-600 font-bold">THIS IS MY NAVBAR</div>
    {@html templateHtml}
  </div>  
</GlobalLayout>

