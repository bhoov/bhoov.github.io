<script lang="ts">
    import { divide } from "lodash";
    import { networkInterfaces } from "os";
    import { onMount } from "svelte";
    export let data;

    onMount(() => {
        console.log("DATA: ", data);
    });
</script>

<main>
    <h1>Ben Hoover</h1>
    <div class="description">
        AI Researcher with IBM Research; PhD Student at GA Tech
    </div>
    <div class="social-links">
        (twitter, github, linkedin, google scholar, mail)
    </div>
    <div class="other-links">(CV, Projects)</div>

    <div class="intro-paragraph">
        <p>
            Reinterpreting modern Deep Learning through the lens of dynamical
            systems in physics using insights exposed by visualization.
        </p>
        <p>
            How do recent breakthroughs in AI help us understand intelligence?
            How do existing models of intelligence help us better understand
            Deep Learning? When we look under the hood of the most powerful AI
            models, why do they look like cold computers instead of living
            brains?
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

    <h1>News</h1>
    {#each data.news as news, i}
        <div>
            <span>{news.date}</span> <span>{@html news.HTMLdescription}</span>
        </div>
    {/each}

    <h1>Featured</h1>

    <h1>Publications</h1>
</main>

<style>
    :root {
        font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto,
            Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji",
            "Segoe UI Symbol";
    }
    main {
        width: 100%;
    }
</style>
