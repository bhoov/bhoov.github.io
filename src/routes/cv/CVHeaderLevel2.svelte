<script lang="ts">
  export let title: string;

  let id = title.toLowerCase();
  let href = `/cv#${id}`;
</script>

<div class="flex gap-1 items-end mb-3 mt-6">
  <div class="w-max">
    <a {href} id={id} class="decoration-rose-900">
      <h1 class="text-rose-900 p-0 m-0 text-2xl font-light leading-6 xs:whitespace-nowrap">{title}</h1>
    </a>
  </div>
  <!-- <div class="border-b-2 border-rose-900 w-full hidden xs:block" /> -->
</div>

<style>
</style>
