<script lang="ts">
  export let talk;
</script>

<div class="break-inside-avoid">
  <div class="text-black text-lg font-semibold leading-5">
    {talk.title}
  </div>
  <div class="flex flex-col gap-0.5 text-gray-600 font-light text-sm">
    {#each talk.venues as venue}
      <div class="grid grid-cols-[3fr_1fr] gap-y-0.5">
        <div class="flex flex-row gap-x-2">
          {#if venue.locationUrl}
            <div class="leading-4">
              <a
                href={venue.locationUrl}
                target="_blank"
                rel="noreferrer"
                class="">{venue.location}</a
              >
            </div>
          {:else}
            <div>{venue.location}</div>
          {/if}
          {#if venue.invited}
            <div
              class="rounded-full px-2 self-start border-[1px] text-xs font-light border-gray-400 text-gray-400"
            >
              Invited
            </div>
          {/if}
        </div>

        <div class="text-right self-start italic text-gray-400">
          {venue.date}
        </div>
      </div>
    {/each}
  </div>
</div>

<style lang="postcss">
</style>
