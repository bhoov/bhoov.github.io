<script lang="ts">
  import ProjectLink from "$lib/components/ProjectLink.svelte";
  import { onMount } from "svelte";
  export let project;

  function openProjectUrl() {
    window.open(project.defaultUrl, "_blank", "noreferrer noopener");
  }

  let hovered = false;
  onMount(() => {
    console.log("LandingPageCard mounted");
  });
</script>
<div
  class="card w-full sm:w-72 p-6 rounded-xl bg-gray-100 hover:cursor-pointer"
  on:mouseover={() => (hovered = true)}
  on:focus={() => (hovered = true)}
  on:mouseout={() => (hovered = false)}
  on:blur={() => (hovered = false)}
  on:click={openProjectUrl}
  on:keyup={openProjectUrl}
  class:hovered
>
  <div class="h-full w-full">
    <div class="flex flex-col justify-between h-full gap-8">
      <div>
        <img
          src={project.thumbnail}
          alt={`Thumbnail for ${project.shortTitle}`}
          class="mx-auto mb-4 w-full h-[100px] object-cover object-left-top"
          class:hovered
        />
        <h2 class="text-2xl font-semibold mb-2">
          {project.shortTitle}
        </h2>
        <div class=" text-gray-500 font-light leading-5">
          {project.featureDescription}
        </div>
      </div>
      <div class="flex gap-1 w-full flex-wrap">
        {#each project.links as link}
          <ProjectLink {link} />
        {/each}
      </div>
    </div>
  </div>
</div>

<style lang="postcss">
  img {
    transition-property: object-position;
    transition-duration: 1.5s;
    transition-delay: 0s;
  }

  .hovered {
    @apply bg-gray-200;
    object-position: right bottom;
  }
</style>
