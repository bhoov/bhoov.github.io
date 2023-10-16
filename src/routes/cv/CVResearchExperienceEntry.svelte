<script lang="ts">
  export let experience;
  export let people;
  export let showDetails = false;

  let hasMentors = experience.mentors != null;
  $: mentorLabel = 
    hasMentors && experience.mentors.length > 1 ? "Mentors: " : "Mentor:";
</script>

<div class="sm:grid grid-cols-[3fr_1fr] gap-x-2 break-inside-avoid">
  <div class="text-gray-400 text-sm sm:text-right italic font-light self-center col-start-2">
    {experience.date}
  </div>
  <div class="text-black text-lg font-semibold leading-5 mb-1 sm:mb-0 col-start-1 row-start-1">
    {experience.institution}
  </div>
  <div class="font-light italic text-sm">
    <a target="_blank" rel="noreferrer" href={experience.teamUrl} class=""
      >{experience.team}</a
    >, {experience.location}
  </div>
  {#if experience.mentors}
    <div class="flex flex-row gap-x-1 col-start-1 text-sm">
      <span class="text-gray-400 mr-2">{mentorLabel}</span>
      {#each experience.mentors as mentor, i}
        <div class="">
          <a
            href={people[mentor].url}
            target="_blank"
            rel="noreferrer"
            class="text-gray-500">{mentor}</a
          >
          {#if i < experience.mentors.length - 1}
            <span class="text-gray-400">•</span>
          {/if}
        </div>
      {/each}
    </div>
  {/if}
  <!-- <div
    class="col-start-1 col-span-2 pl-2 border-l-2 border-gray-400 text-gray-400"
  >
  </div> -->
  <div
    class="col-start-1 col-span-2 pl-4 border-l-2 border-gray-400 text-gray-400 text-sm font-light"
    class:hidden={!showDetails}
  >
    {@html experience.description}
  </div>
</div>


<style>
  .sec-title {
  }
  .layout {
    max-width: 1100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
