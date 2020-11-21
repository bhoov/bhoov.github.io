<script>
  import { onMount } from 'svelte';

  // Show mobile icon and display menu
  let showMobileMenu = false;

  // List of navigation items
  const navItems = [
    { label: 'Home', href: '/' },
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
  :root {
    --nav-height: 45px;
  }
  nav {
    background-color: rgba(0, 0, 0, 0.8);
    font-family: 'Helvetica Neue', 'Helvetica', 'Arial', sans-serif;
    height: var(--nav-height);
    width: 100%;
    padding: 0;
    margin: 0;
  }

  .inner {
    /* max-width: 980px; */
    /* padding-left: 20px; */
    margin: auto;
    /* box-sizing: border-box; */
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
    height: calc(100% - var(--nav-height));
    bottom: 0;
    left: 0;
  }

  .nav-link {
    opacity: 0.8;
    display: block;
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
    background-color: rgba(190, 70, 225, 0.9);
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
    display: inline-block;
    white-space: nowrap;
    align-items: center;
    padding: 0 0px;
    margin: 0 10px;
    font-size: 1.05rem;
  }

  .me {
    font-size: 2rem;
    white-space: nowrap;
    margin-right: 2rem;
  }

  @media only screen and (min-width: 600px) {
    .mobile-icon {
      display: none;
    }

    .navbar-list {
      display: flex;
      padding: 0;
    }

    .navbar-list a {
      display: inline-flex;
      /* height: 45px; */
      /* flex: 0 1 auto; */
    }
  }
</style>

<nav>
  <div class="inner">
    <div class="text-2xl me font-extrabold nav-link ml-4"><a class="text-white" href="/">Ben Hoover</a></div>
    <div on:click={handleMobileIconClick} class={`mobile-icon${showMobileMenu ? ' active' : ''}`}>
      <div class="middle-line" />
    </div>
    <div class={`navbar-list${showMobileMenu ? ' mobile' : ''}`}>
      {#each navItems as item}
        <div>
          <a class="w-full place-self-center place-items-center margin-auto my-4" href={item.href}>
            <span class="nav-link block">{item.label} </span>
          </a>
        </div>
      {/each}
    </div>
  </div>
</nav>
