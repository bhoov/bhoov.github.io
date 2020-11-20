<script>
  import GlobalLayout from "./GlobalLayout.svelte"
  import NavBar from "../components/NavBar.svelte"
  export let templateHtml;
</script>

<GlobalLayout>
  <NavBar hydrate-client={{}}/>
  <div class="container">
    {@html templateHtml}
  </div>  
</GlobalLayout>

