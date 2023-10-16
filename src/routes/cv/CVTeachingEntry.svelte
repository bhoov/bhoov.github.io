<script lang="ts">
  export let ta
  export let people
  export let showDetails = true

  let hasInstructors = ta.instructors != null;
  $: instructorLabel = 
    hasInstructors && ta.instructors.length > 1 ? "Instructors: " : "Instructor:";
</script>

<div class="sm:grid grid-cols-[3fr_1fr] gap-x-2 break-inside-avoid">
  <div class="text-gray-400 text-sm sm:text-right italic font-light self-center col-start-2">
    {ta.date}
  </div>
  <div class="text-black text-lg font-semibold leading-5 mb-1 sm:mb-0 col-start-1 row-start-1">
    {ta.role}
  </div>
  <div class="font-light italic text-sm">
    <a target="_blank" rel="noreferrer" href={ta.institutionUrl} class=""
      >{ta.institution}</a
    >, {ta.location}
  </div>
  {#if hasInstructors}
    <div class="flex flex-row gap-x-1 col-start-1 text-sm">
      <span class="text-gray-400 mr-1">{instructorLabel}</span>
      {#each ta.instructors as instructor, i}
        <div class="">
          <a
            href={people[instructor].url}
            target="_blank"
            rel="noreferrer"
            class="text-gray-500">{instructor}</a
          >
          {#if i < ta.instructors.length - 1}
            <span class="text-gray-400">•</span>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
  <div
    class="col-start-1 col-span-2 pl-2 border-l-2 border-gray-400 text-gray-400"
  >
  </div>
  <div
    class="col-start-1 col-span-2 pl-4 border-l-2 border-gray-400 text-gray-400 text-sm font-light"
    class:hidden={!showDetails}
  >
    {@html ta.description}
  </div>
</div>


<style lang="postcss">
  .me {
    @apply font-semibold text-gray-800;
  }
  .layout {
    max-width: 900px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
</style>

