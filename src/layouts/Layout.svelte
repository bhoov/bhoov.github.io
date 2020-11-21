<script>
  import GlobalLayout from "./GlobalLayout.svelte"
  import NavBar from "../components/NavBar.svelte"
  export let templateHtml;
</script>

<style>
.container {
  max-width: 900px;
  margin: 0 auto;
  padding: 1rem;
}
</style>

<GlobalLayout>
  <NavBar hydrate-client={{}}/>
  <div class="container">
    {@html templateHtml}
  </div>  
</GlobalLayout>

