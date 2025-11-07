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
            name: "Zhaoyang",
            img: "imgs/people/zhaoyang-shi.png",
            links: [
                { name: "homepage", icon: "icons/home.svg", href: "https://10mzys.github.io/website/" },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:zshi@fas.harvard.edu",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/10Mzys",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=DgKVZeYAAAAJ&hl=en",
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
    <div class="text-lg font-medium">Zhaoyang Shi</div>
    <div class="text-lg font-medium">Krishna Balasubramanian</div>
    <div class="text-lg font-medium">Dmitry Krotov</div>
    <div class="text-lg font-medium">Parikshit Ram</div>
  </div>
  
  <p class="abstract">
    We propose a novel energy function for Dense Associative Memory (DenseAM) networks, the log-sum-ReLU (LSR), inspired by optimal kernel density estimation. Unlike the common log-sum-exponential (LSE) function, LSR is based on the Epanechnikov kernel and enables exact memory retrieval with exponential capacity without requiring exponential separation functions. Uniquely, it introduces abundant additional emergent local minima while preserving perfect pattern recovery --- a characteristic previously unseen in DenseAM literature. Empirical results show that LSR energy has significantly more local minima (memories) that have comparable log-likelihood to LSE-based models. Analysis of LSR's emergent memories on image datasets reveals a degree of creativity and novelty, hinting at this method's potential for both large-scale memory storage and generative tasks.
  </p>

  <h2>Cite this work</h2>

<pre class="ml-8 text-sm"><code>@inproceedings&#123;
hoover2025dense,
title=&#123;Dense Associative Memory with Epanechnikov Energy&#125;,
author=&#123;Benjamin Hoover and Zhaoyang Shi and Krishna Balasubramanian and Dmitry Krotov and Parikshit Ram&#125;,
booktitle=&#123;The Thirty-ninth Annual Conference on Neural Information Processing Systems&#125;,
year=&#123;2025&#125;,
url=&#123;https://openreview.net/forum?id=ZbQ5Zq3zA3&#125;
&#125;</code></pre>

  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="https://arxiv.org/abs/2506.10801"
        target="_blank"
        rel="noreferrer">ArXiv</a
      >
    </li>
    <li>
      <a
        href="/posters/lsrdam.jpg"
        target="_blank"
        rel="noreferrer">Poster</a
      >
    </li>
    <li>
      <a
        href="https://openreview.net/forum?id=ZbQ5Zq3zA3"
        target="_blank"
        rel="noreferrer">OpenReview</a
      >
    </li>
    <li>
      <a
        href="https://github.com/bhoov/EpanechnikovDenseAM"
        target="_blank"
        rel="noreferrer">Code</a
      >
    </li>
    <li>
      <a
        href="/slides/lsrdam-5min.pdf"
        target="_blank"
        rel="noreferrer">Slides</a
      >
    </li>
    <li>
      <a
        href="https://recorder-v3.slideslive.com/?share=106310&s=f2d9d915-d762-4d40-b2e8-9fbed019f1f6"
        target="_blank"
        rel="noreferrer">Slideslive Video</a
      >
    </li>
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
