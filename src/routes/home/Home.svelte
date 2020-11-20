<script>
  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
  export let data;
  let people = data.db.people;
  let projects = data.db.publications;
</script>

<style lang="postcss">
  :global(h1) {
  font-family: "Lato", -apple-system, "Segoe UI", Roboto, Oxygen, serif;
  font-weight: bold;
  line-height: 2.35rem;

  /* font-size: 2.5rem; */
  margin-top: 1rem;
  margin-bottom: 1.5rem;
  line-height: 1.25;

  }

  .thumbnail-wrapper {
    position: relative;
  }
  .thumbnail-wrapper::after {
    content: '';
    display: block;
    padding-bottom: 100%;
  }

  .thumbnail {
    @apply shadow-lg rounded-md;
    position: absolute;
    width: 100%;
    /* height: 100%; */
    /* max-height: 100%; */
    object-fit: cover;
  }
  .headshot {
    @apply mb-4;
  }

  .social-links {
    @apply grid gap-x-3 grid-cols-6;
  }

  .social-link-icon-wrapper {
    @apply col-start-1 col-end-2 place-self-end;
  }

  .social-link-text-wrapper {
    @apply col-start-2 col-end-7;
  }

  #main {
    @apply grid grid-cols-12 gap-x-8;
    max-width: 960px;
    margin: auto;
  }

  .left-bar {
    @apply col-start-1 col-end-4;
  }

  .content {
    @apply col-start-4 col-end-13;
  }

  .me {
    @apply font-bold;
  }
</style>

<svelte:head>
  <title>Ben Hoover</title>
</svelte:head>
<div id="main" class="grid grid-cols-12 gap-24">
  <div class="about-me col-start-1 col-end-4">
    <div class="face-and-links">
      <div class="headshot m-auto my-4">
        <img class="rounded-full shadow-lg" src="imgs/people/me-headshot-la.png" alt="My headshot" />
      </div>
      <div class="social-links m-auto my-4">
        {#each data.db.socialLinks as link}
          <div class="social-link-icon-wrapper">
            <a href={link.href}><i class={`fa ${link.faIcon} icon`} style={`color: ${link.color || '#515151'}`} /></a>
          </div>
          <div class="social-link-text-wrapper"><a href={link.href} class="text-gray-800 hover:text-blue-800">{link.label}</a></div>
        {/each}
      </div>
    </div>
  </div>

  <div class="col-start-4 col-end-13">
    <div class="mb-4">
      <h1 class="text-4xl m-auto place-items-center">Welcome</h1>
      <p>
        I am a Research Engineer at IBM Research working on AI interpretability and interaction through visualization.
        My goal is to make exploring, editing, and characterizing models an easy part of the normal development
        pipeline. To date, my experiences lie primarily in the domains of Natural Language Processing, Chemistry, and
        Biology, though my interests are for any data can be construed as a language, whether scientifically defined or
        naturally evolved.
      </p>
    </div>

    <hr/>

    <div class="projects">
      <h1>Projects</h1>
      {#each projects as project}
        <div class="mb-3 grid grid-cols-7 gap-4">
          <div class="thumbnail-wrapper col-start-1 col-end-2">
            <a href={project.url || project.pdf}><img src={project.thumbnail} alt={project.name} class="thumbnail" /></a>
          </div>
          <div class="project-description col-start-2 col-end-8">
            <div class="align-top text-lg font-bold"><a href={project.url || project.pdf} class="text-gray-800 hover:text-blue-800">{project.title}</a></div>
            <div class="mb-2">
              {#each project.authors as author, i}
                <a href={people[author].url} class="text-gray-800" class:me={people[author].me}><span class:my-name={people[author].me}>{author}</span>{i != project.authors.length - 1 ? ', ' : ''}</a>
              {/each}
            </div>
            <div class="">
              {#if project.url}
                <a href={project.url} class="pub-misc-txt"> <i class="fas fa-link" aria-hidden="true" /> Project </a>
              {/if}
              {#if project.demo}
                <a href={project.demo} class="pub-misc-txt"> <i class="fas fa-play" aria-hidden="true" /> Demo </a>
              {/if}
              {#if project.pdf}
                <a href={project.pdf} class="pub-misc-txt"> <i class="far fa-file-pdf" aria-hidden="true" /> PDF </a>
              {/if}
              {#if project.video}
                <a href={project.video} class="pub-misc-txt"> <i class="fas fa-film" aria-hidden="true" /> Video </a>
              {/if}
              {#if project.code}
                <a href={project.code} class="pub-misc-txt"> <i class="fas fa-code" aria-hidden="true" /> Code </a>
              {/if}
              <!-- {#if project.bibtex}
              <span style="cursor:pointer;" class="pub-misc-txt" onclick={`toggleBibtex(${stripPunc(pub.title)})`}>
                <i class="fas fa-book" aria-hidden="true" /> BibTeX
              </span>
            {/if} -->
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div class="about" />

<div />
