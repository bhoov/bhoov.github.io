<script>
  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
  export let data;
  let people = data.db.people;
  let projects = data.db.publications;
</script>

<style lang="postcss">
  :global(h1) {
    font-family: 'Lato', -apple-system, 'Segoe UI', Roboto, Oxygen, serif;
    font-weight: bold;
    line-height: 2.35rem;

    /* font-size: 2.5rem; */
    margin-top: 1rem;
    margin-bottom: 1.5rem;
  }

  .social-links {
    @apply grid gap-x-3 grid-cols-6 m-auto my-4 col-start-3 col-end-7 mb-0 pb-0;
  }

  .social-link-icon-wrapper {
    @apply col-start-1 col-end-2 place-self-start;
  }

  .social-link-text-wrapper {
    @apply col-start-2 col-end-7;
  }

  #main {
    /* @apply grid grid-cols-12 gap-x-8; */
    max-width: 960px;
    margin: auto;
  }

  .left-bar {
    @apply col-start-1 col-end-4;
  }

  .me {
    @apply font-bold;
  }
</style>

<svelte:head>
  <title>Ben Hoover</title>
</svelte:head>
<div id="main" class="md:grid grid-cols-4 gap-16 w-full mx-6">
  <div class="md:col-start-1 md:col-end-2">
    <div class="face-and-links grid grid-cols-6 md:block">
      <div class="md:my-4 col-start-1 col-end-3">
        <img
          class="rounded-full shadow-lg mx-auto mt-4 w-full md:w-full block"
          src="imgs/people/me-headshot-la.png"
          alt="My headshot" />
      </div>
      <div class="social-links gap-x-2 gap-0 md:gap-2">
        {#each data.db.socialLinks as link}
          <div class="social-link-icon-wrapper md:pb-2 md:mb-2">
            <a target="_blank" href={link.href}><i
                class={`fa ${link.faIcon} icon`}
                style={`color: ${link.color || '#515151'}`} /></a>
          </div>
          <div class="social-link-text-wrapper place-self-start">
            <a target="_blank" href={link.href} class="text-gray-800 hover:text-blue-800">{link.label}</a>
          </div>
        {/each}
        <div class="social-link-icon-wrapper md:pb-2 md:mb-2">
          <a target="_blank" href="/cv"><i class={`far fa-address-card`} style="color: #515151" /></a>
        </div>
        <div class="social-link-text-wrapper place-self-start">
          <a target="_blank" href="/cv" class="text-gray-800 hover:text-blue-800">My CV</a>
        </div>
      </div>
    </div>
  </div>

  <div class="col-start-2 col-end-5 w-11/12">
    <div class="mb-4">
      <h1 class="text-4xl">Welcome</h1>
      <p>
        I am a Research Engineer at <a target="_blank" href="https://www.research.ibm.com/artificial-intelligence/">IBM
          Research</a> working on AI Interpretability and Interaction through visualization. My goal is to make exploring,
        editing, and understanding models an easy part of the normal development pipeline. I have experience in Natural Language
        Processing, Chemistry, and Biology, though my interests are for any domain that can be construed as a language.
      </p>
    </div>

    <hr />

    <div class="projects">
      <h1>Projects</h1>
      {#each projects as project}
        <div class="mb-8 md:grid grid-cols-7 gap-4">
          <div class="thumbnail-wrapper col-start-1 col-end-2 mb-2">
            <a target="_blank" href={project.url || project.pdf}><img
                src={project.thumbnail}
                alt={project.name}
                class="thumbnail shadow-lg rounded-md w-10/12 md:w-full md:h-16 bg-cover bg-center" /></a>
          </div>
          <div class="project-description col-start-2 col-end-8">
            <div class="align-top text-lg font-bold">
              <a
                target="_blank"
                href={project.url || project.pdf}
                class="text-gray-800 hover:text-blue-800">{project.title}</a>
            </div>
            <div class="text-gray-800 my-1 opacity-75">
              {#each project.authors as author, i}
                <a target="_blank" href={people[author].url} class="text-gray-800" class:me={people[author].me}><span
                    class:my-name={people[author].me}>{author}</span>{i != project.authors.length - 1 ? ', ' : ''}</a>
              {/each}
            </div>
            {#if project.description}
              <div class="description mb-1 mt-2 text-lg text-gray-900">
                {@html project.description}
              </div>
            {/if}
            <div class="">
              {#if project.url}
                <a target="_blank" href={project.url} class="pub-misc-txt">
                  <i class="fas fa-link" aria-hidden="true" /> Project
                </a>
              {/if}
              {#if project.demo}
                <a target="_blank" href={project.demo} class="pub-misc-txt">
                  <i class="fas fa-play" aria-hidden="true" /> Demo
                </a>
              {/if}
              {#if project.pdf}
                <a target="_blank" href={project.pdf} class="pub-misc-txt">
                  <i class="far fa-file-pdf" aria-hidden="true" /> PDF
                </a>
              {/if}
              {#if project.video}
                <a target="_blank" href={project.video} class="pub-misc-txt">
                  <i class="fas fa-film" aria-hidden="true" /> Video
                </a>
              {/if}
              {#if project.code}
                <a target="_blank" href={project.code} class="pub-misc-txt">
                  <i class="fas fa-code" aria-hidden="true" /> Code
                </a>
              {/if}
            </div>
          </div>
        </div>
      {/each}
    </div>
  </div>
</div>

<div />
