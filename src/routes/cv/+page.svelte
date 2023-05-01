<script lang="ts">
  import { onMount } from "svelte";
  import ProjectEntry from "$lib/components/ProjectEntry.svelte";
  export let data;

  $: people = data.people;
  $: projects = data.publications;
  $: education = data.education;

  onMount(() => {
    console.log("DATA: ", data);
  });
</script>

<h1 class="main-col">Education</h1>

<div class="flex flex-col md:contents mx-2">
  {#each education as school, i}
    <div
      class="col-start-1 col-end-3 text-xs font-light justify-self-end text-slate-400 mb-1"
    >
      {school.date}
    </div>
    <div class="col-start-3 col-end-11 mb-5">
      <div class="text-lg font-medium leading-5">
        {school.degree}
      </div>
      <div class="text-slate-500">
        <a
          target="_blank"
          rel="noreferrer"
          href={school.institutionUrl}
          class="hover:border-b-2">{school.institution}</a
        >, {school.location}
      </div>

      <div class="text-slate-600 text-sm pl-3 border-l-2">
        {@html school.description}
      </div>
    </div>

    <div class="cv-spacer" />
  {/each}
</div>

<h1 class="main-col">Publications</h1>
<div class="flex flex-col md:contents mx-2">
  {#each projects as project, i}
    <ProjectEntry {project} {people} />
  {/each}
</div>

<style lang="postcss">
  :global(.hover-link) {
    @apply hover:border-b-2;
  }
</style>
