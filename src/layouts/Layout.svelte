<script>
  import GlobalLayout from "./GlobalLayout.svelte"
  import NavBar from "../components/NavBar.svelte"
  export let templateHtml, settings;
</script>

<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<GlobalLayout>
  <NavBar></NavBar>
  <div class="container">
    {@html templateHtml}
  </div>  
</GlobalLayout>

