<script>
  import ConnectWithMe from "$lib/components/ConnectWithMe.svelte";
  export let data;
  // author info
    let authorSocialInfo = [
        {
            name: "Ben",
            img: "imgs/people/me-headshot-small.jpg",
            links: [
                { name: "homepage", icon: "icons/home.svg", href: "/" },
                {
                    name: "linkedin",
                    icon: "icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/benhoov/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:bhoov@gatech.edu",
                },
                {
                    name: "twitter",
                    icon: "icons/Xlogo.svg",
                    href: "https://twitter.com/ben_hoov",
                },
                {
                    name: "bluesky",
                    icon: "icons/bluesky.svg",
                    href: "https://bsky.app/profile/bhoov.bsky.social",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/bhoov",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=n10P0tYAAAAJ&hl=en",
                },
            ],
        },
        {
            name: "Krishna",
            img: "imgs/people/krishna-balasubramanian.jpg",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://sites.google.com/view/kriznakumar/home",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:kbala@ucdavis.edu",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=uuts9CAAAAAJ&hl=en",
                },
            ],
        },
        {
            name: "Dima",
            img: "imgs/people/dima-krotov.jpg",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://research.ibm.com/people/dmitry-krotov",
                },
                {
                    name: "linkedin",
                    icon: "icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/krotovdmitry/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:krotov@ibm.com",
                },
                {
                    name: "twitter",
                    icon: "icons/Xlogo.svg",
                    href: "https://x.com/DimaKrotov",
                },
                {
                    name: "bluesky",
                    icon: "icons/bluesky.svg",
                    href: "https://bsky.app/profile/krotov.bsky.social",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/DimaKrotov",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=WeD9ll0AAAAJ&hl=en",
                },
            ],
        },
        {
            name: "Pari",
            img: "imgs/people/pari.webp",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://rithram.github.io",
                },
                {
                    name: "linkedin",
                    icon: "icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/parikshit-ram-4861325/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:Parikshit.Ram@ibm.com",
                },
                {
                    name: "twitter",
                    icon: "icons/Xlogo.svg",
                    href: "https://x.com/p_ram_p?lang=en",
                },
                {
                    name: "bluesky",
                    icon: "icons/bluesky.svg",
                    href: "https://bsky.app/profile/p-ram-p.bsky.social",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/rithram",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=JaXmmnkAAAAJ&hl=en",
                },
            ],
        },
    ];

</script>

<main>
  <ConnectWithMe title="Let's connect! 🥳" {data} connectSocialInfo={authorSocialInfo} />
  <p class="text-gray-500 text-sm italic my-4">
    Barebones page to important links to this work
  </p>
  <h1 class="mt-4 mb-2">Dense Associative Memory with Epanechnikov Energy</h1>
  <div class="flex flex-col sm:flex-row gap-6 mb-6">
    <div class="text-lg font-medium">Benjamin Hoover</div>
    <div class="text-lg font-medium">Krishna Balasubramanian</div>
    <div class="text-lg font-medium">Dmitry Krotov</div>
    <div class="text-lg font-medium">Parikshit Ram</div>
  </div>
  
  <p class="abstract">
    We propose a novel energy function for Dense Associative Memory (DenseAM)
    networks, the log-sum-ReLU (LSR), inspired by optimal kernel density
    estimation. Unlike the common log-sum-exponential (LSE) function, LSR is
    based on the Epanechnikov kernel and enables exact memory retrieval with
    exponential capacity without requiring exponential separation functions.
    Uniquely, it introduces abundant additional <em>emergent</em> local minima while
    preserving perfect pattern recovery--a characteristic previously unseen in DenseAM
    literature. Empirical results show LSR generates significantly more local minima
    and produces samples with higher log-likelihood than LSE-based models, making
    it promising for both memory storage and generative tasks.
  </p>

  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="https://openreview.net/forum?id=LOAkHpRSlZ"
        target="_blank"
        rel="noreferrer">Paper on OpenReview</a
      >
    </li>
    <!-- <li> -->
    <!--   <a -->
    <!--     href="https://twitter.com/Ben_Hoov/status/1730570603210404236" -->
    <!--     target="_blank" -->
    <!--     rel="noreferrer">Initial Twitter Announcement</a -->
    <!--   > -->
    <!-- </li> -->
  </ul>
</main>

<style lang="postcss">
  h2 {
    @apply font-bold text-lg mb-2 mt-8;
  }

  a {
    border-bottom: 2px solid rgba(96, 165, 250, 0.631);
  }

  /* Add your custom styles here */
</style>
