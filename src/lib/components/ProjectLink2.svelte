<script lang="ts">
    export let link;
    import { LINKS } from "$lib/config";

    let hovered = false;
    let styleColor = `color: #515151`
</script>

<div
    class="text-sm font-medium py-0 px-1 text-gray-600 hover:text-rose-600"
    on:mouseover={() => (hovered = true)}
    on:focus={() => (hovered = true)}
    on:mouseout={() => (hovered = false)}
    on:blur={() => (hovered = false)}
>
    <a href={link.url} target="_blank" rel="noreferrer">
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
</div>

<style lang="postcss">
    a {
        text-decoration: none !important;
    }
    :global(.svg-container-hovered > svg) {
        fill: rgb(225, 29, 72)
        /* -webkit-filter: brightness(0) invert(100%);
        filter: brightness(0) invert(100%); */
    }
</style>
