<script>
  export let data;

  // Add more variables and logic as needed
</script>

<main>
  <p class="text-gray-500 text-sm italic my-8">
    WIP: barebones homepage for this work
  </p>

  <p class="text-xl text-gray-500">
    Check this out in person! If you will be at NeurIPS'23, let's connect at the
    AMHN (Associative Memory & Hopfield Network) Workshop! Fri Dec 15 Room 223.
    Details at <a
      href="https://neurips.cc/virtual/2023/workshop/66524"
      target="_blank"
      rel="noreferrer">NeurIPS 2023 virtual page</a
    >.
  </p>

  <h1>
    Memory in Plain Sight: A Survey of the Uncanny Resemblances between
    Diffusion Models and Associative Memories
  </h1>
  <p class="abstract">
    Diffusion Models (DMs) have recently set state-of-the-art on many generation
    benchmarks. However, there are myriad ways to describe them mathematically,
    which makes it difficult to develop a simple understanding of how they work.
    In this submission, we provide a concise overview of DMs from the
    perspective of dynamical systems and Ordinary Differential Equations (ODEs)
    which exposes a mathematical connection to the highly related yet often
    overlooked class of energy-based models, called Associative Memories (AMs).
    Energy-based AMs are a theoretical framework that behave much like denoising
    DMs, but they enable us to directly compute a Lyapunov energy function on
    which we can perform gradient descent to denoise data. We finally identify
    the similarities and differences between AMs and DMs, discussing new
    research directions revealed by the extent of their similarities.
  </p>

  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="https://openreview.net/forum?id=B1BL9go65H"
        target="_blank"
        rel="noreferrer">OpenReview (short version)</a
      >
    </li>
    <li>
      <a
        href="https://twitter.com/Ben_Hoov/status/1708912750507024401"
        target="_blank"
        rel="noreferrer">Initial Twitter Announcement</a
      >
    </li>
    <li>
      <a
        href="https://arxiv.org/abs/2309.16750"
        target="_blank"
        rel="noreferrer">Paper on ArXiv (long version)</a
      >
    </li>
    <li>
      <a
        href="https://neurips.cc/virtual/2023/workshop/66524"
        target="_blank"
        rel="noreferrer">NeurIPS 2023 virtual page</a
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
