<script>

    let routes = [
        {name: "Home", link: "/"},
        {name: "CV", link: "/cv"},
    ]

</script>

<style>

    .nav-link {
        @apply text-xl mr-4 align-middle ml-8;
    }

    .nav-link:hover {
        @apply font-bold;
    }

</style>


<div class="w-screen py-3 mb-4 bg-teal-200 bg-opacity-50">
    {#each routes as route}
    <a href={route.link} class="nav-link first:ml-16">{route.name}</a>
    {/each}
</div>