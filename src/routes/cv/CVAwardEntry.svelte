<script lang="ts">
  export let award;
</script>

<div class="grid grid-cols-[3fr_1fr] gap-x-2 break-inside-avoid">
  <div class="text-black text-lg font-semibold leading-6">
    {award.name}
  </div>
  <div class="text-gray-400 font-light italic text-right text-sm self-center">
    {award.date}
  </div>
  <div class="col-start-1 col-span-2 text-gray-500 text-sm font-light">
    {@html award.description}
  </div>
  <!-- <div
          class="col-start-1 col-span-2 pl-2 border-l-2 border-gray-400 text-gray-400"
          class:hidden={!showDetails}
        >
          {@html experience.description}
        </div> -->
</div>

<style>
</style>
