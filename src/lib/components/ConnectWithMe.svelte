<script lang="ts">
    export let title: string = "Let's connect!";
    export let data;

    $: socialInfo = data.socialLinkInfo;
</script>

<div
    class="flex flex-col items-start justify-center bg-blue-100 p-4 p-3 w-max rounded-xl mt-6"
>
    <h1 class="text-4xl italic my-2">{title}</h1>
    <div class="flex flex-row items-center justify-center gap-4">
        <div>Find Ben on:</div>
        {#each ["email", "twitter", "github", "linkedin", "scholar", "cvpdf", "homepage"] as link}
        <a target="_blank" href={socialInfo[link].href} rel="noreferrer">
            <div
                class="bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-md"
            >
                <span class="svg-icon self-center pointer-events-none">
                    <object
                        type="image/svg+xml"
                        data={socialInfo[link].icon}
                        class="opacity-100"
                    /></span
                >
            </div>
        </a>
        {/each}
    </div>
</div>
