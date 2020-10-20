<style global lang="postcss">
  @tailwind base;
  @tailwind components;
  @tailwind utilities;
</style>

<svelte:head>
  <link rel="stylesheet" href="/style.css" />
  <link rel="stylesheet" href="https://unpkg.com/balloon-css/balloon.min.css" />
</svelte:head>

<!-- Make sure every layout has access to tailwind and other global utillities -->
<div>
  <slot />
</div>
