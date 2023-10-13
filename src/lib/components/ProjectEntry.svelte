<script lang="ts">
  import ProjectListItem from "$lib/components/ProjectListItem.svelte";
  export let project;
  export let people;
</script>

<div class="cv-block">
  <!-- <div
    class="col-start-1 col-end-3 text-xs font-light justify-self-end text-slate-400 mb-1"
  >
    {project.month}
    {project.year}
  </div> -->
  <div class="project-item col-start-3 col-end-11 mb-5">
    <ProjectListItem {project} {people} />
  </div>
</div>

<style lang="postcss">
</style>
