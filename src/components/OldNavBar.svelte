<script>
  let routes = [
    { name: 'Ben Hoover', link: '/' },
    { name: 'CV', link: '/cv' },
    { name: 'Empty', link: '/empty' },
  ];
</script><style lang="postcss">
  .nav-link {
    @apply text-lg mr-4 align-middle text-gray-700 flex-initial;
    opacity: 0.8;
    text-decoration: none;
    position: relative;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: rgba(52, 52, 52, 0.8);
    visibility: hidden;
    transform: scaleX(0);
    transition: all 0.15s ease-in-out 0s;
  }

  .nav-link:hover {
    opacity: 1;
  }

  .nav-link:hover::before {
  visibility: visible;
  transform: scaleX(1);
}


</style><div class="w-screen py-6 flex gap-x-2 bg-gray-300">
  {#each routes as route}<a href={route.link} class="nav-link first:ml-16 first:font-bold">{route.name}</a>{/each}
</div>

<hr />
