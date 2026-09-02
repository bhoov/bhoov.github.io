<script lang="ts">
    export let link;
    import { LINKS } from "$lib/config";
    import { countRepoStars } from "$lib/etc/starCounter";
    import { onMount } from "svelte";

    export let inline = false;

    let hovered = false;
    let styleColor = `color: #515151`;
    let nStars;

    onMount(async () => {
        if (link.showStars) {
            nStars = await countRepoStars(link.url);
        }
    });
</script>

<span
    class="text-xs font-medium items-center gap-x-1 bg-blue-100 py-0.5 px-1.5 rounded-2xl hover:bg-blue-400 hover:text-white hover:svg-invert hover:no-underline"
    class:flex={!inline}
    class:inline-flex={inline}
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
>
    <a
        href={link.url}
        target="_blank"
        rel="noreferrer"
        on:click={(e) => e.stopPropagation()}
    >
        <div
            class="flex gap-1 justify-items-center items-center"
            class:svg-container-hovered={hovered}
        >
            <div
                class="iconify social-link-tag"
                data-icon={LINKS[link.type]}
                style={styleColor}
            />
            <span class="">{link.label}</span>
        </div>
    </a>
    {#if nStars}
        <div class="flex gap-x-0.5 items-center text-gray-500 text-xs">
            (
            <div class="contents text-rose-500 font-semibold">
                <img
                    src="icons/star.svg"
                    alt=""
                    class="h-2 award-img"
                />{nStars.stars}
            </div>
            )
        </div>
    {/if}
</span>

<style lang="postcss">
    :global(.svg-container-hovered > svg) {
        -webkit-filter: brightness(0) invert(100%);
        filter: brightness(0) invert(100%);
    }

    a {
        text-decoration: none !important;
    }
</style>
