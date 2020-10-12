<script>
  import HookDetail from '../../components/HookDetail.svelte';
  import BlogTeaser from '../../components/BlogTeaser.svelte';
  import Clock from '../../components/Clock.svelte';
  export let data, helpers;

  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
</script>

<style>
  .banner {
    padding: 1rem 2rem;
    background: #eee;
    border-radius: 2rem;
    margin-bottom: 1rem;
  }
  .entries {
    display: grid;
    grid-template-columns: 1fr;
    margin: 3rem 0;
  }

  @media (min-width: 768px) {
    .entries {
      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      margin: 3rem 0;
    }
    :global(.entries .entry) {
      margin-right: 1rem;
    }
  }

  :global(.entry) {
    padding: 1rem;
    border: 1px solid #ddd;
    border-radius: 1rem;
    margin-bottom: 1rem;
    background: white;
  }
  .about {
    margin-bottom: 2rem;
  }

  @media (min-width: 768px) {
    .hydrate {
      display: grid;
      grid-template-columns: 80% 20%;
    }
  }

  .hooks {
    display: grid;
    grid-template-columns: 100%;
  }

  .title {
    display: grid;
    grid-template-columns: 80% 20%;
  }

  @media (min-width: 768px) {
    .hooks {
      grid-template-columns: 50% 50%;
    }
  }
</style>

<svelte:head>
  <title>Ben Hoover</title>
</svelte:head>

<div class="banner">
  <div class="title">
    <div class="left">
      <h1>Ben Hoover</h1>
      <p>Making Moves</p>
    </div>
    <div class="right">
      <Clock hydrate-client={{}} />
    </div>
  </div>
</div>

<!-- {#each data.sections as s}
<div>
  <h1>
    {s}
  </h1>
</div>
{/each} -->

<!-- <div class="blog">
  <div class="entries">
    {#each data.markdown.blog as blog}
      <BlogTeaser {blog} {helpers} />
    {/each}
  </div>
</div> -->

<!-- <div class="about"> -->
  <!-- <ul>
    <li><a href={helpers.permalinks.simple({ slug: 'simple' })}>Simple</a> - A barebones route.</li>
    <li>Home - The page you are on.</li>
    <li>
      Blog - Linked from above, but you can also see a blog post by checking out: <a
        href={helpers.permalinks.blog({ slug: 'getting-started' })}>'Getting Started'</a> .
    </li>
    <li>
      Hooks - These are how you customize Elder.js. Details are below, and we've used the <span
        class="code">hookInterface</span> to build out dedicated pages for each hook as well.
    </li>
  </ul> -->
<!-- </div> -->

<!-- <div class="hooks">
  {#each hooks as hook, i}
    <HookDetail {hook} {i} hookEntityDefinitions={data.hookEntityDefinitions} />
  {/each}
</div>

<pre>
  {Object.keys(hooks[0])}
</pre> -->
