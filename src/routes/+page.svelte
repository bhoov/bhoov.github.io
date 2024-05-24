<script lang="ts">
    import LandingPageCard from "./LandingPageCard.svelte";

    import { onMount } from "svelte";
    export let data;

    $: people = data.people;
    $: publications = data.publications;

    $: featuredMemory = data.publications.filter(
        (x) => x.featured && x.category == "memory"
    );
    $: featuredVis = data.publications.filter(
        (x) => x.featured && x.category == "vis"
    );

    let defaultMaxNews = 6
    let maxNews = defaultMaxNews

    onMount(() => {
        console.log("DATA: ", data);
        console.log(featuredMemory);
    });
</script>

<svelte:head>
    <title>Ben Hoover</title>
</svelte:head>

<base target="_blank" />

<div class="page-container sm:grid grid-cols-12 gap-x-4 md:my-12">
    <div
        class="grid grid-cols-[90px_1fr] gap-4 md:grid-cols-[150px_1fr] md:gap-8 main-col"
    >
        <div class="self-center">
            <a href="imgs/people/me-headshot.jpg" target="_blank" rel="noreferrer">
                <img
                    class="rounded-lg shadow-lg"
                    src="imgs/people/me-headshot-small.jpg"
                    alt="Ben's headshot"
                />
            </a>
        </div>
        <div
            class="flex flex-col gap-2 justify-items-start align-items-start md:gap-8"
        >
            <div class="">
                <h1
                    class="text-3xl md:text-4xl text-slate-700 font-semibold mb-0.5"
                >
                    Hi, I'm Ben Hoover
                </h1>
                <h2 class="text-xl md:text-3xl text-slate-400 font-light">
                    I'm an AI Researcher studying <span
                        class="font-medium text-slate-500">memory</span
                    >
                </h2>
            </div>

            <div class="flex text-xl gap-2 xs:gap-4">
                <div
                    class="bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-gray-600 text-sm"
                >
                    <a
                        target="_blank"
                        href={"/cv"}
                        rel="noreferrer"
                        class="no-border"
                        >CV
                    </a>
                </div>
                {#each data.socialLinks as link}
                    <div
                        class="bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-md"
                    >
                        <a target="_blank" href={link.href} rel="noreferrer">
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

    <div class="intro-paragraph main-col">
        <p class="text-gray-500 border-l-2 pl-4 text-2xl my-8 main-col">
            Understanding
            <a
                href="https://research.ibm.com/blog/what-are-foundation-models"
                target="_blank"
                rel="noreferrer">AI foundation models</a
            >
            from the perspective of large
            <a
                href="https://en.wikipedia.org/wiki/Associative_memory_(psychology)"
                target="_blank"
                rel="noreferrer">Associative Memories</a
            >.
        </p>
        <div
            class="text-slate-700 flex flex-col gap-4 leading-6 font-light main-col"
        >
            <p>
                I am a Machine Learning PhD student at 
                <a href="https://poloclub.github.io/">Georgia Tech</a> advised by
                <a href="https://poloclub.github.io/polochau/">Polo Chau</a> and
                an AI Research Engineer with
                <a
                    href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948"
                    >IBM Research</a
                >. My research focuses on building more interpretable and
                parameter efficient AI by rethinking the way we train and build
                deep models, taking inspiration from Associative Memories and
                <a href="http://www.scholarpedia.org/article/Hopfield_network"
                    >Hopfield Networks</a
                >. I like to visualize what happens inside AI models.
            </p>
        </div>
    </div>
    <h1 class="main-col mt-8">News</h1>
    <div class="news-list flex flex-col sm:contents mx-2 gap-0.5 overflow-y-auto">
        {#each data.news.slice(0,maxNews) as blurb}
            <!-- <div class="flex gap-4"> -->
            <div
                class="left-gutter justify-self-end font-light text-slate-400 text-xs"
            >
                {blurb.date}
            </div>
            <div class="main-col mb-2">
                {@html blurb.HTMLdescription}
            </div>
            <!-- </div> -->
        {/each}
            {#if data.news.length > maxNews}
                <div class="w-full justify-self-end main-col text-slate-400 hover:cursor-pointer hover:text-slate-700" on:click={() => {maxNews = data.news.length}}>See more...</div>
            {:else}
                <div class="w-full justify-self-end main-col text-slate-400 hover:cursor-pointer hover:text-slate-700" on:click={() => {maxNews = defaultMaxNews}}>Collapse...</div>
            {/if}
    </div>

    <h1 class="main-col mt-12 text-center" id="selected-memory">
        Memory Research Highlights
    </h1>
    <div
        class="col-start-3 col-end-11 flex flex-wrap gap-4 md:col-start-2 md:col-end-12"
    >
        {#each featuredMemory as project, i}
            <LandingPageCard {project} />
        {/each}
    </div>

    <h1 class="main-col mt-12 text-center" id="selected-memory">
        Visualization Research Highlights
    </h1>
    <div
        class="col-start-3 col-end-11 flex flex-wrap gap-4 md:col-start-2 md:col-end-12"
    >
        {#each featuredVis as project, i}
            <LandingPageCard {project} />
        {/each}
    </div>
</div>

<!-- <div class="main-col flex gap-2 flex-col"> -->
<!-- <div class="flex flex-col md:contents mx-2">
    {#each projects as project, i}
        <ProjectEntry {project} {people} />
    {/each}
</div> -->

<style lang="postcss">
    .news-list :global(a) {
        border-bottom: 2px solid rgba(96, 165, 250, 0.631);
    }

    a {
        border-bottom: 2px solid rgba(96, 165, 250, 0.631);
    }

    no-border {
        border: 0px !important;
    }

    .me {
        @apply font-bold;
    }

    .news-grid {
        display: grid;
        grid-template-columns: max-content auto;
    }

    .left-gutter {
        @apply col-start-1 col-end-3;
    }

    .right-gutter {
        @apply col-start-11 col-end-13;
    }

    .main-col {
        @apply col-start-3 col-end-11;
    }

    .full-col {
        @apply col-start-1 col-end-13;
    }


</style>
