<script lang="ts">
    export let title: string = "Let's connect!";
    export let data;

    $: socialInfo = data.socialLinkInfo;

    let connectSocialInfo = [
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
            name: "Hendrik",
            img: "imgs/people/hendrik-strobelt.png",
            links: [
                {
                    name: "homepage",
                    icon: "icons/home.svg",
                    href: "http://hendrik.strobelt.com",
                },
                {
                    name: "linkedin",
                    icon: "icons/linkedin.svg",
                    href: "https://www.linkedin.com/in/hendrik-strobelt-5951a021/",
                },
                {
                    name: "email",
                    icon: "icons/email.svg",
                    href: "mailto:hendrik.strobelt@ibm.com",
                },
                {
                    name: "bluesky",
                    icon: "icons/bluesky.svg",
                    href: "https://bsky.app/profile/henstr.bsky.social",
                },
                {
                    name: "github",
                    icon: "icons/github-alt.svg",
                    href: "https://github.com/HendrikStrobelt",
                },
                {
                    name: "scholar",
                    icon: "icons/scholar.svg",
                    href: "https://scholar.google.com/citations?user=H4vEe_oAAAAJ&hl=en",
                },
            ],
        },
    ];
</script>

<div
    class="flex flex-col items-start justify-center bg-blue-100 p-4 p-3 w-full rounded-xl mt-6"
>
    <h1 class="text-4xl my-2">{title}</h1>
    {#each connectSocialInfo as person}
        <div class="flex flex-row gap-8 my-4">
            <img
                src={person.img}
                alt={person.name}
                class="rounded-3xl self-center w-20 h-20 object-contain"
            />
            <div class="self-center">
                <div class="whitespace-nowrap mb-2 text-xl font-light">
                    Find <span class="font-bold">{person.name}</span> on:
                </div>
                <div
                    class="flex flex-row items-center justify-start gap-4 flex-wrap"
                >
                    {#each person.links as link}
                        <a target="_blank" href={link.href} rel="noreferrer">
                            <div
                                class="bg-slate-100 p-2 rounded-full hover:bg-slate-300 text-md"
                            >
                                <span
                                    class="svg-icon self-center pointer-events-none"
                                >
                                    <object
                                        type="image/svg+xml"
                                        width="24px"
                                        height="24px"
                                        data={link.icon}
                                        class="opacity-100"
                                    /></span
                                >
                            </div>
                        </a>
                    {/each}
                </div>
            </div>
        </div>
    {/each}
</div>
