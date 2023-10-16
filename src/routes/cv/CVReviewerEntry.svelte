<script lang="ts">
  import { eachRight } from "lodash";

  export let venue;
</script>

<div class="font-light leading-5 my-0.5 break-inside-avoid">
  <span class="mr-4">
    {venue.venue} (<span class="font-semibold">{venue.venueShorthand}</span>)
  </span>
  {#each venue.years as year, i}
    <span class="text-gray-400 font-light">
      <a href={year.url} target="_blank" rel="noreferrer">{year.year}</a>
    </span>
    {#if i < venue.years.length - 1}
      <span class="text-gray-400 mx-1">·</span>
    {/if}
  {/each}
</div>

<style lang="postcss">
</style>
