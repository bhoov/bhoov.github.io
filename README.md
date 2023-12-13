# bhoov-github-io

Built from scratch using [SvelteKit](https://kit.svelte.dev/) and [tailwindcss](https://tailwindcss.com/). Always evolving. As such, it takes a decent amount of HTML+Javascript knowledge to fork and adapt to your own purposes. A few notes:

1. All routes for the site are defined as subfolders in `src/routes/`. The homepage is `src/routes/+page.svelte`
2. The content for the site is stored as yaml files in `_data/`. We write a function in `src/routes/+layout.server.ts` that turns these yamls into JSON objects that are passed into any page that contains the following lines at the top:

```
<script lang="ts">
    //...
    export let data;
    //...
</script>
```

## Building & deploying

The site is deployed using [`gh-pages`](https://www.npmjs.com/package/gh-pages). This creates a new `gh-pages` branch that contains the folder structure of the site we want to serve.

**WARNING: Never commit directly to the `gh-pages` branch!!**

Pushing to the `deploy` branch automatically builds the site and runs `gh-pages`. 

Github Workflow: *(BUG: currently does not automatically update CV)*

1. Commit changes to `deploy` branch
2. Push

You can also run the deploy script manually.

```bash
npm run deploy
```

