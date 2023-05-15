<script lang="ts">
    import { onMount } from "svelte";
    import ProjectLink from "./ProjectLink.svelte";
    export let project;
    export let people; // Author lookup

    function getAuthorUrl(author) {
        if (people[author] !== undefined) {
            return people[author].url;
        }
        return "";
    }
</script>

<div class="li-container">
    <div class="flex flex-col">
        <div class="text-lg font-medium leading-5">
            {project.title}
        </div>
        <div class="">
            <div
                class="flex flex-row flex-wrap gap-x-1 text-slate-500 text-sm mb-0.5 mt-0.5"
            >
                {#each project.authors as author, j}
                    <div
                        class="whitespace-nowrap"
                        class:me={author == "Benjamin Hoover"}
                        class:hello={getAuthorUrl(author)}
                    >
                        {#if getAuthorUrl(author) != ""}
                            <a
                                href={getAuthorUrl(author)}
                                target="_blank"
                                rel="noreferrer"
                                class="hover:border-b-2"
                            >
                                {author}
                            </a>
                        {:else}
                            {author}
                        {/if}
                    </div>
                    {#if j != project.authors.length - 1}&#x2022;{/if}
                {/each}
            </div>
            <div class="" />
            {#if project.description}
                <div class="text-slate-600 text-sm pl-3 border-l-2">
                    {@html project.description}
                </div>
            {/if}
        </div>
        <div class="flex flex-row gap-2 mt-2">
            {#each project.links as link, i}
                <ProjectLink {link} />
            {/each}
        </div>
    </div>
</div>

<style lang="postcss">
    .me {
        @apply font-bold;
    }

    .li-container {
        @apply flex flex-row gap-4 max-w-xl mb-2;
    }

    @media print {
        .li-container {
            max-width: 100%;
            /* page-break-inside: avoid; */
            margin-bottom: 0;
        }
    }
</style>
