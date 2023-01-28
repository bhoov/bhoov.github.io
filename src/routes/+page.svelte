<script lang="ts">
    import { onMount } from "svelte";
    export let data;
    import { LINKS } from "$lib/config";

    $: people = data.people;
    $: projects = data.publications;

    const linkSymbols = {
        url: "fa-link",
        demo: "fa-play",
        pdf: "fa-file-pdf",
        video: "fa-film",
        code: "fa-code",
    };

    onMount(()=> {
        console.log("DATA: ", data);
    });
</script>

<svelte:head>
    <title>Ben Hoover</title>
</svelte:head>

<main>
    <div id="header-hero max-w-sm">
        <div class="flex gap-10 place-content-between">
            <img
                class="rounded-full shadow-lg max-h-44 flex-auto"
                src="imgs/people/me-headshot-la.png"
                alt="My headshot"
            />
            <div class="flex flex-col gap-4 justify-center shrink">
                <div>
                    <p class="text-4xl text-slate-700">Ben Hoover</p>
                    <p class="text-gray-400 text-2xl">
                        AI Researcher with <a
                            href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948"
                            >IBM Research</a
                        >
                        and <a href="https://poloclub.github.io/">GA Tech</a>
                    </p>
                </div>
                <div class="flex flex-row gap-2 text-xl">
                    {#each data.socialLinks as link}
                        <div class="bg-slate-100 p-2 rounded-full">
                            <a
                                target="_blank"
                                href={link.href}
                                rel="noreferrer"
                            >
                                <span
                                    class="iconify"
                                    data-icon={link.dataIcon}
                                    style={`color: ${link.color || "#515151"}`}
                                />
                            </a>
                        </div>
                    {/each}
                </div>
            </div>
        </div>
    </div>

    <div class="intro-paragraph">
        <p class="text-gray-500 border-l-2 pl-4 text-2xl my-8">
            <a
                href="https://transformer-circuits.pub/2022/mech-interp-essay/index.html"
                >Mechanistic interpretability</a
            > from the perspective of Associative Memory.
        </p>
        <div class="text-slate-700 flex flex-col gap-4 leading-6">
            <p class="">
                How do recent breakthroughs in AI help us understand
                intelligence? How do existing models of intelligence help us
                better understand Deep Learning? When we look under the hood of
                the most powerful AI models, why do they look like cold
                computers instead of living brains? I'm a self-branded "AI
                re-interpretability and visualization engineer"
            </p>
        </div>
    </div>
    <hr />

    <div class="projects">
        <h1 class="mb-4">Projects</h1>
        {#each projects as project, i}
            {#if i == 0}
                <div class="project-item">
                    <div class="flex flex-row gap-4">
                        <!-- <div style="max-width:100px">
                            <img class="" src={project.thumbnail} alt="" />
                        </div> -->
                        <div class="flex flex-col">
                            <div class="text-lg font-medium leading-5">
                                {project.title}
                            </div>
                            <div class="pl-2">
                                <div class="flex flex-row gap-4 mb-2">
                                    {#each project.links as link, i}
                                        <div class="text-sm">
                                            <a
                                                href={link.url}
                                                target="_blank"
                                                rel="noreferrer"
                                            >
                                            <div class="flex gap-1 justify-center align-center">
                                                <div
                                                    class="iconify"
                                                    data-icon={LINKS[link.type]}
                                                    style={`color: ${
                                                        link.color || "#515151"
                                                    }`}
                                                />
                                                <span>{link.label}</span>
                                            </div>
</a
                                            >
                                        </div>
                                    {/each}
                                </div>
                                <div
                                    class="flex flex-row gap-1 text-slate-600 text-sm mb-1"
                                >
                                    {#each project.authors as author, j}
                                        <span class="whitespace-nowrap"
                                            >{author}{#if j != project.authors.length - 1};{/if}
                                        </span>
                                    {/each}
                                </div>
                                <div class="" />
                                <div
                                    class="text-slate-400 text-sm pl-2 border-l-2"
                                >
                                    {@html project.description}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="my-4">
                        <div class="flex flex-row gap-2">
                            {#each project.links as link}
                                <div>
                                    <a
                                        target="_blank"
                                        href={link.url}
                                        rel="noreferrer"
                                        class="pub-misc-txt"
                                    >
                                        <i
                                            class={`fa icon ${
                                                linkSymbols[link.type]
                                            }`}
                                            aria-hidden="true"
                                        />
                                    </a>
                                </div>
                                <!-- <div class="mx-1">{link.type}</div> -->
                            {/each}
                        </div>
                    </div>
                </div>
            {/if}
        {/each}
    </div>
</main>

<div id="main" class="md:grid grid-cols-4 gap-16 w-full mx-6" />

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
        max-width: 450px;
        height: 90vh;
        margin: 5vh auto;
        border-radius: 5px;
        display: flex;
        flex-direction: column;
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
