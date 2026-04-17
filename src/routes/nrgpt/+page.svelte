<script>
    import ConnectWithMe from "$lib/components/ConnectWithMe.svelte";
    export let data;
    // author info
    let authorSocialInfo = [
        {
            name: "Nima",
            img: "imgs/people/nima-dehmamy.jpg",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://nimadehmamy.github.io/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:nima.dehmamy@ibm.com",
                },
                {
                    name: "twitter",
                    icon: "icons/Xlogo.svg",
                    href: "https://x.com/nimatabari",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/nimadehmamy",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=gvHpUtgAAAAJ&hl=en",
                },
            ],
        },
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
            name: "Bishwajit",
            img: "imgs/people/bishwajit-saha.jpg",
            links: [
                {
                    name: "linkedin",
                    icon: "icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/bishwajit-saha-2b5493147/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:bishwajit.saha@ibm.com",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=cYMfgbcAAAAJ&hl=en",
                },
            ],
        },
        {
            name: "Leo",
            img: "imgs/people/leo-kozachkov.jpg",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://kozleo.github.io/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:leo_kozachkov@brown.edu",
                },
                {
                    name: "twitter",
                    icon: "icons/Xlogo.svg",
                    href: "https://x.com/Leokoz8",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/kozleo",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=V5dtdeUAAAAJ&hl=en",
                },
            ],
        },
        {
            name: "JJ",
            img: "imgs/people/jean-jacques-slotine.jpg",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "https://web.mit.edu/nsl/www/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:jjs@mit.edu",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=TcREpMQAAAAJ&hl=en",
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
    ];
</script>

<main>
  <ConnectWithMe title="Let's connect! 🥳" {data} connectSocialInfo={authorSocialInfo} />
  <p class="text-gray-500 text-sm italic my-4">
    Barebones page to important links to this work
  </p>
  <h1 class="mt-4 mb-2">NRGPT: An Energy-based Alternative for GPT</h1>
  <div class="flex flex-col sm:flex-row flex-wrap gap-x-6 gap-y-2 mb-6">
    <div class="text-lg font-medium">Nima Dehmamy</div>
    <div class="text-lg font-medium">Benjamin Hoover</div>
    <div class="text-lg font-medium">Bishwajit Saha</div>
    <div class="text-lg font-medium">Leo Kozachkov</div>
    <div class="text-lg font-medium">Jean-Jacques Slotine</div>
    <div class="text-lg font-medium">Dmitry Krotov</div>
  </div>

  <p class="abstract">
    Generative Pre-trained Transformer (GPT) architectures are the most popular design for language modeling. Energy-based modeling is a different paradigm that views inference as a dynamical process operating on an energy landscape. We propose a minimal modification of the GPT setting to unify it with the EBM framework. The inference step of our model, which we call eNeRgy-GPT (NRGPT), is conceptualized as an exploration of the tokens on the energy landscape. We prove, and verify empirically, that under certain circumstances this exploration becomes gradient descent, although they don't necessarily lead to the best performing models. We demonstrate that our model performs well for simple language (Shakespeare dataset), algebraic ListOPS tasks, and richer settings such as OpenWebText language modeling. We also observe that our models may be more resistant to overfitting, doing so only during very long training.
  </p>

  <h2>Cite this work</h2>

<pre class="ml-8 text-sm"><code>@inproceedings&#123;
dehmamy2026nrgpt,
title=&#123;&#123;NRGPT&#125;: An Energy-based Alternative for &#123;GPT&#125;&#125;,
author=&#123;Nima Dehmamy and Benjamin Hoover and Bishwajit Saha and Leo Kozachkov and Jean-Jacques Slotine and Dmitry Krotov&#125;,
booktitle=&#123;The Fourteenth International Conference on Learning Representations&#125;,
year=&#123;2026&#125;,
url=&#123;https://openreview.net/forum?id=B3Muyi2zgo&#125;
&#125;</code></pre>

  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="https://arxiv.org/abs/2512.16762"
        target="_blank"
        rel="noreferrer">ArXiv</a
      >
    </li>
    <li>
      <a
        href="https://openreview.net/forum?id=B3Muyi2zgo"
        target="_blank"
        rel="noreferrer">OpenReview</a
      >
    </li>
    <li>
      <a
        href="https://github.com/bhoov/nrgpt"
        target="_blank"
        rel="noreferrer">Code</a
      >
    </li>
    <li>
      <a
        href="https://recorder-v3.slideslive.com/#/share?share=109460&s=a5cb5c43-b963-498a-ac2a-cfdb97ffa581"
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
</style>
