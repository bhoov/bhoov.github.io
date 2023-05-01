<script lang="ts">
    import { onMount } from "svelte";
    import ProjectEntry from "$lib/components/ProjectEntry.svelte";
    export let data;

    $: people = data.people;
    $: projects = data.publications;

    onMount(() => {
        console.log("DATA: ", data);
    });
</script>

<h1 class="main-col">Publications</h1>
<div class="flex flex-col md:contents mx-2">
  {#each projects as project, i}
    <ProjectEntry {project} {people}/>
  {/each}
</div>

<style lang="postcss">
</style>