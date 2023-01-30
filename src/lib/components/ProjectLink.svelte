<script lang="ts">
    export let link;
    import { LINKS } from "$lib/config";

    let hovered = false;
    $: {
        console.log("HOVERED: ", hovered);
    }
</script>

<div
    class="text-xs font-medium bg-blue-100 py-0.5 px-1.5 rounded-2xl hover:bg-blue-500 hover:text-white hover:svg-invert"
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
                class="iconify"
                data-icon={LINKS[link.type]}
                style={`color: ${link.color || "#515151"}`}
            />
            <span>{link.label}</span>
        </div>
    </a>
</div>

<style lang="postcss">
    :global(.svg-container-hovered > svg) {
        -webkit-filter: brightness(0) invert(100%);
        filter: brightness(0) invert(100%);
    }
</style>
