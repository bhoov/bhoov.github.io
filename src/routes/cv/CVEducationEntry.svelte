<script lang="ts">
  export let school;
  export let showDetails = false;

  let hasAdvisors = school.advisors != null;

  let advisorLabel =
    hasAdvisors && school.advisors.length > 1 ? "Advisors: " : "Advisor:";
</script>

<div class="sm:grid grid-cols-[3fr_1fr] gap-x-2 break-inside-avoid">
  <div
    class="text-gray-400 text-sm font-light italic sm:text-right self-center col-start-2"
  >
    {school.date}
  </div>
  <div class="text-black text-base font-semibold col-start-1 row-start-1">
    {school.degree}
  </div>
  <div class="font-light italic text-sm">
    <a target="_blank" rel="noreferrer" href={school.institutionUrl} class=""
      >{school.institution}</a
    >, {school.location}
  </div>
  {#if hasAdvisors}
    <div class="flex flex-row gap-x-2 col-start-1 text-sm">
      <div class="text-gray-400">{advisorLabel}</div>
      {#each school.advisors as advisor}
        <div>
          <a href={advisor.url} target="_blank" rel="noreferrer"
            >{advisor.name}</a
          >
        </div>
      {/each}
    </div>
  {/if}
  <div
    class="col-start-1 col-span-2 pl-4 border-l-2 border-gray-400 text-gray-400 text-sm font-light"
    class:hidden={!showDetails}
  >
    {@html school.description}
  </div>
</div>

<style>
</style>
