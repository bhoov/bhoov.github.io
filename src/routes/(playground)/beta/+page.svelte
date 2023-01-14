<script lang="ts">

  import {API} from "$lib/api";
  import Blobb from "$lib/components/Blobb.svelte";
  import {afterUpdate, onMount} from "svelte";
  import {page} from "$app/stores";

  let result = null

  const api = new API()

  let answer = null

  // Call API
  api.loopbackTest("Homer").then(x => {
    result = x
  })

  // on mount do stuff
  onMount(() => {
    console.log(" mounted --- ");
    const sp = $page.url.searchParams
    answer = sp.get('answer')


  })

  // after update do stuff
  afterUpdate(() => {
    console.log(" updated --- ");
  })

</script>

<div>
    <h1>Welcome Beta (incl. API test)</h1>



    <Blobb/>

    <pre>The answer is: {answer} -- Try using beta?answer=23 if null</pre>

    {#if result}
        <pre>{JSON.stringify(result)}</pre>
    {:else}
        <pre>waiting for result...</pre>
    {/if}

</div>

<style>

</style>
