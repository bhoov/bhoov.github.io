<script lang="ts">
  import ProjectLink from "$lib/components/ProjectLink.svelte";
  export let publication;
  export let people;
  export let maxAuthorLength = 7;

  let showOverflow = false;
  let authorOverflow = publication.authors.length > maxAuthorLength;
  $: authors =
    authorOverflow && !showOverflow
      ? publication.authors.slice(0, maxAuthorLength)
      : publication.authors;
</script>

<!-- <div on:mouseleave={() => showOverflow = false}> -->
<div class="break-inside-avoid">
  <a href={publication.defaultUrl} target="_blank" rel="noreferrer">
    <div class="text-black text-lg font-semibold leading-5 mb-1">
      {publication.title}
    </div>
  </a>
  <div class="">
    <div class="flex flex-row gap-x-1 col-start-1 text-sm flex-wrap">
      <!-- <span class="text-gray-400 mr-2">Author(s):</span> -->
      {#each authors as author, i}
        <div class="flex text-gray-500 font-light">
          <!-- <span>{author}</span> -->
          {#if people[author]}
            <a
              href={people[author].url}
              target="_blank"
              rel="noreferrer"
              class="whitespace-nowrap"
              class:me={people[author].me}>{author}</a
            >
          {:else}
            <span class="">{author}</span>
          {/if}
          {#if i < authors.length - 1}
            <span class="">,</span>
          {/if}
          {#if authorOverflow && i >= authors.length - 1 && !showOverflow}
            <span on:click={() => (showOverflow = true)}>, and Others</span>
          {/if}
        </div>
      {/each}
    </div>
    <div class="italic font-light text-sm text-gray-700">
      {publication.venue} ({publication.venueShorthand}). {publication.year}.
    </div>
    <div class="flex flex-row gap-2 mt-0.5 flex-wrap">
      {#each publication.links as link}
        <ProjectLink {link} />
      {/each}
      {#if publication.awards}
        <div class="flex gap-4 justify-center text-sm font-semibold">
          {#each publication.awards as award}
            <div class="flex gap-1 items-center">
              <a href={award.url} target="_blank"><img src="./icons/award.svg" class="h-4 award-img" /></a>
              <a href={award.url} target="_blank" class="text-rose-500">{award.name}</a>
            </div>
          {/each}
        </div>
      {/if}
    </div>
  </div>
</div>

<style lang="postcss">
  .me {
    @apply font-semibold text-gray-800;
  }

  :global(.award-img) {
    filter: invert(31%) sepia(84%) saturate(1916%) hue-rotate(329deg)
      brightness(100%) contrast(92%);
  }

  :global(a) {
    @apply hover:cursor-pointer hover:underline;
  }
</style>
