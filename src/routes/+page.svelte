<script lang="ts">
    import { onMount } from "svelte";
    import ProjectListItem from "$lib/components/ProjectListItem.svelte";
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

<main class=" max-w-md md:grid md:grid-cols-12 md:max-w-5xl md:gap-x-8">
    <div class="main-col">
        <div id="header-hero max-w-lg">
            <div class="grid grid-cols-12 gap-10 items-center">
                <div class="col-start-1 col-end-5 justify-self-end">
                    <img
                        class="rounded-full shadow-lg max-h-44 flex-auto"
                        src="imgs/people/me-headshot-la.png"
                        alt="My headshot"
                    />
                </div>
                <div
                    class="flex flex-col gap-4 justify-self-start col-start-5 col-end-13"
                >
                    <div>
                        <p class="text-4xl text-slate-700">Ben Hoover</p>
                        <p class="text-gray-400 text-2xl">
                            AI Researcher with <a
                                href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948"
                                >IBM Research</a
                            >
                            and
                            <a href="https://poloclub.github.io/">GA Tech</a>
                        </p>
                    </div>
                    <div class="flex flex-row gap-2 text-xl">
                        {#each data.socialLinks as link}
                            <div
                                class="bg-slate-100 p-2 rounded-full hover:bg-slate-300"
                            >
                                <a
                                    target="_blank"
                                    href={link.href}
                                    rel="noreferrer"
                                >
                                    <span
                                        class="iconify"
                                        data-icon={link.dataIcon}
                                        style={`color: ${
                                            link.color || "#515151"
                                        }`}
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
                >
                from the perspective of
                <a
                    href="https://en.wikipedia.org/wiki/Associative_memory_(psychology)"
                    target="_blank"
                    rel="noreferrer">Associative Memory</a
                >.
            </p>
            <div
                class="text-slate-700 flex flex-col gap-4 leading-6 font-light"
            >
                <p class="">
                    My research focuses on understanding <a
                        href="https://research.ibm.com/blog/what-are-foundation-models"
                        target="_blank"
                        rel="noreferrer">AI foundation models</a
                    > from the perspective of dynamical systems. When we look under
                    the hood of foundation models, do we expect them to look like
                    a cold computer or a living brain?
                </p>
                <p>
                    I'm a self-branded <span class="font-semibold">
                        AI re-interpretability and visualization engineer
                    </span> seeking a coherent theory around the intelligence we
                    create.
                </p>
            </div>
        </div>

        <!-- <h1 class="">News</h1> -->
    </div>
    <h1 class="main-col">Publications</h1>
    <div class="flex flex-col md:contents mx-2">
        {#each projects as project, i}
            <div
                class="col-start-1 col-end-3 text-xs font-light justify-self-end text-slate-400 mb-1"
            >
                {project.month}
                {project.year}
            </div>
            <div class="project-item col-start-3 col-end-11 mb-5">
                <ProjectListItem {project} {people} />
            </div>
        {/each}
    </div>
</main>

<style lang="postcss">
    :global(h1) {
        /* font-family: "Lato", -apple-system, "Segoe UI", Roboto, Oxygen, serif; */
        font-weight: semibold;
        line-height: 2.35rem;
        font-size: 2.2rem;

        @apply mb-6 mt-8;
    }

    a {
        border-bottom: 2px solid rgba(96, 165, 250, 0.631);
    }

    .main-col {
        @apply col-start-3 col-end-11 w-full mx-2;
    }

    main {
        /* max-width: 560px; */
        /* height: 90vh; */
        width: 1200px;
        padding: 0 1rem;
        margin: 5vh auto;
        border-radius: 5px;
    }

    .left-bar {
        @apply col-start-1 col-end-4;
    }

    .me {
        @apply font-bold;
    }
</style>
