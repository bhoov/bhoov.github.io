<script lang="ts">
    import { onMount } from "svelte";
    export let data;

    $: people = data.people;
    $: projects = data.publications;

    onMount(() => {
        console.log("DATA: ", data);
    });
</script>

<svelte:head>
    <title>Ben Hoover</title>
</svelte:head>

<main>
    <div class="intro">
        <h1>Ben Hoover</h1>
        <img
            class="rounded-full shadow-lg"
            src="imgs/people/me-headshot-la.png"
            alt="My headshot"
        />
        <div class="flex flex-row gap-2">
            {#each data.socialLinks as link}
                <div class="flex flex-row gap-2 text-3xl my-4">
                    <a target="_blank" href={link.href}
                        ><i
                            class={`fa ${link.faIcon} icon`}
                            style={`color: ${link.color || "#515151"}`}
                        /></a
                    >
                </div>
            {/each}
        </div>

        <div class="intro-paragraph">
            <p class="text-gray-400 border-l-2 pl-4">
                Reinterpreting modern Deep Learning through the lens of
                dynamical systems in physics using insights exposed by
                visualization.
            </p>
            <p>
                How do recent breakthroughs in AI help us understand
                intelligence? How do existing models of intelligence help us
                better understand Deep Learning? When we look under the hood of
                the most powerful AI models, why do they look like cold
                computers instead of living brains?
            </p>
            <p>
                I'm a self-branded "AI re-interpretability engineer" who loves
                dabbling in the complete unknown. Find me on GA Tech's campus,
                hacking away with the <a
                    href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948"
                    >Visual AI Lab</a
                >
                in Cambridge, or working from a nearby bubble tea shop.
            </p>
        </div>
    </div>
        <hr />

        <div class="projects">
            <h1>Projects</h1>

            {#each projects as project}

            {/each}
        </div>
</main>

<div id="main" class="md:grid grid-cols-4 gap-16 w-full mx-6">
    <div class="col-start-2 col-end-5 w-11/12">

        <div class="projects">
            <h1>Projects</h1>
            {#each projects as project}
                <div class="mb-8 md:grid grid-cols-7 gap-4">
                    <!-- <div class="thumbnail-wrapper col-start-1 col-end-2 mb-2">
                        <a target="_blank" href={project.url || project.pdf}
                            ><img
                                src={project.thumbnail}
                                alt={project.name}
                                class="thumbnail shadow-lg rounded-md w-10/12 md:w-full md:h-16 bg-cover bg-center"
                            /></a
                        >
                    </div>
                    <div class="project-description col-start-2 col-end-8">
                        <div class="align-top text-lg font-bold">
                            <a
                                target="_blank"
                                href={project.url || project.pdf}
                                class="text-gray-800 hover:text-blue-800"
                                >{project.title}</a
                            >
                        </div>
                        <div class="text-gray-800 my-1 opacity-75">
                            {#each project.authors as author, i}
                                <a
                                    target="_blank"
                                    href={people[author].url}
                                    class="text-gray-800"
                                    class:me={people[author].me}
                                    ><span class:my-name={people[author].me}
                                        >{author}</span
                                    >{i != project.authors.length - 1
                                        ? ", "
                                        : ""}</a
                                >
                            {/each}
                        </div>
                        {#if project.description}
                            <div
                                class="description mb-1 mt-2 text-lg text-gray-900"
                            >
                                {@html project.description}
                            </div>
                        {/if}
                        <div class="">
                            {#if project.url}
                                <a
                                    target="_blank"
                                    href={project.url}
                                    class="pub-misc-txt"
                                >
                                    <i class="fas fa-link" aria-hidden="true" />
                                    Project
                                </a>
                            {/if}
                            {#if project.demo}
                                <a
                                    target="_blank"
                                    href={project.demo}
                                    class="pub-misc-txt"
                                >
                                    <i class="fas fa-play" aria-hidden="true" />
                                    Demo
                                </a>
                            {/if}
                            {#if project.pdf}
                                <a
                                    target="_blank"
                                    href={project.pdf}
                                    class="pub-misc-txt"
                                >
                                    <i
                                        class="far fa-file-pdf"
                                        aria-hidden="true"
                                    /> PDF
                                </a>
                            {/if}
                            {#if project.video}
                                <a
                                    target="_blank"
                                    href={project.video}
                                    class="pub-misc-txt"
                                >
                                    <i class="fas fa-film" aria-hidden="true" />
                                    Video
                                </a>
                            {/if}
                            {#if project.code}
                                <a
                                    target="_blank"
                                    href={project.code}
                                    class="pub-misc-txt"
                                >
                                    <i class="fas fa-code" aria-hidden="true" />
                                    Code
                                </a>
                            {/if}
                        </div>
                    </div> -->
                </div>
            {/each}
        </div>
    </div>
</div>

<style lang="postcss">
    :global(h1) {
        font-family: "Lato", -apple-system, "Segoe UI", Roboto, Oxygen, serif;
        font-weight: bold;
        line-height: 2.35rem;

        /* font-size: 2.5rem; */
        margin-top: 1rem;
        margin-bottom: 1.5rem;
    }

    main {
        width: 100%;
    }

    .intro > img {
        max-width: 150px;
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
