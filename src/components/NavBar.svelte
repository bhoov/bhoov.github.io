<script>
  import { onMount } from 'svelte';

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    { label: 'CV', href: '/cv' },
  ];

  // Mobile menu click event handler
  const handleMobileIconClick = () => {
    showMobileMenu = !showMobileMenu;
  };

  // Media match query handler
  const mediaQueryHandler = (e) => {
    // Reset mobile state
    if (!e.matches) {
      showMobileMenu = false;
    }
  };

  // Attach media query listener on mount hook
  onMount(() => {
    const mediaListener = window.matchMedia('(max-width: 767px)');

    mediaListener.addListener(mediaQueryHandler);
  });
</script>

<style>
  nav {
    background-color: rgba(0, 0, 0, 0.8);
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    height: 45px;
  }

  .inner {
    max-width: 980px;
    padding-left: 20px;
    padding-right: 20px;
    margin: auto;
    box-sizing: border-box;
    display: flex;
    align-items: center;
    height: 100%;
  }

  .mobile-icon {
    width: 25px;
    height: 14px;
    /* position: relative; */
    position: absolute;
    right: 15px;
    cursor: pointer;
  }

  .mobile-icon:after,
  .mobile-icon:before,
  .middle-line {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    background-color: #fff;
    transition: all 0.4s;
    transform-origin: center;
  }

  .mobile-icon:before,
  .middle-line {
    top: 0;
  }

  .mobile-icon:after,
  .middle-line {
    bottom: 0;
  }

  .mobile-icon:before {
    width: 66%;
  }

  .mobile-icon:after {
    width: 33%;
  }

  .middle-line {
    margin: auto;
  }

  .mobile-icon:hover:before,
  .mobile-icon:hover:after,
  .mobile-icon.active:before,
  .mobile-icon.active:after,
  .mobile-icon.active .middle-line {
    width: 100%;
  }

  .mobile-icon.active:before,
  .mobile-icon.active:after {
    top: 50%;
    transform: rotate(-45deg);
  }

  .mobile-icon.active .middle-line {
    transform: rotate(45deg);
  }

  .navbar-list {
    display: none;
    width: 100%;
    margin: 0;
    padding: 0 40px;
  }

  .navbar-list.mobile {
    background-color: rgba(0, 0, 0, 0.8);
    position: fixed;
    display: block;
    height: calc(100% - 45px);
    bottom: 0;
    left: 0;
  }

  .navbar-list li {
    list-style-type: none;
    position: relative;
  }

  .navbar-list li:before {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 1px;
    background-color: #424245;
  }

  .nav-link {
    opacity: 0.8;
    text-decoration: none;
    position: relative;
  }

  .nav-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 3px;
    bottom: -0.25rem;
    left: 0;
    background-color: rgba(214, 207, 207, 0.8);
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

  .navbar-list a {
    color: #fff;
    /* text-decoration: none; */
    display: inline-block;
    white-space: nowrap;
    /* flex: 0 1 auto; */
    height: 45px;
    align-items: center;
    padding: 0 10px;
    font-size: 1.05rem;
  }

  .me {
    font-size: 2rem;
    white-space: nowrap;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 767px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
      /* flex: 0 1 auto; */
    }
  }
</style>

<nav>
  <div class="inner">
    <div class="text-2xl text-white me font-extrabold nav-link"><a href="/">Ben Hoover</a></div>
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line" />
    </div>
    <ul class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <li class="nav-link"><a href={item.href}>{item.label}</a></li>
      {/each}
    </ul>
  </div>
</nav>

<!--<script>
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

<hr /> -->
