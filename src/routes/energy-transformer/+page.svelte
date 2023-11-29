<script>
  export let data;

  // Add more variables and logic as needed
</script>

<main>
  <p class="text-gray-500 text-sm italic my-8">
    WIP: barebones page to important links to this work
  </p>
  <h1>Energy Transformer</h1>
  <p class="abstract">
    Our work combines aspects of three promising paradigms in machine learning,
    namely, attention mechanism, energy-based models, and associative memory.
    Attention is the power-house driving modern deep learning successes, but it
    lacks clear theoretical foundations. Energy-based models allow a principled
    approach to discriminative and generative tasks, but the design of the
    energy functional is not straightforward. At the same time, Dense
    Associative Memory models or Modern Hopfield Networks have a
    well-established theoretical foundation, and allow an intuitive design of
    the energy function. We propose a novel architecture, called the Energy
    Transformer (or ET for short), that uses a sequence of attention layers that
    are purposely designed to minimize a specifically engineered energy
    function, which is responsible for representing the relationships between
    the tokens. In this work, we introduce the theoretical foundations of ET,
    explore its empirical capabilities using the image completion task, and
    obtain strong quantitative results on the graph anomaly detection and graph
    classification tasks.
  </p>

  <h2>Links</h2>
  <ul>
    <li>
      <a href="https://arxiv.org/abs/2302.07253" target="_blank" rel="noreferrer">Paper on ArXiv</a>
    </li>
    <li>
      <a href="https://neurips.cc/virtual/2023/poster/71901" target="_blank" rel="noreferrer">NeurIPS 2023 virtual page</a>
    </li>
    <li>
      <a href="https://github.com/bhoov/energy-transformer-jax" target="_blank" rel="noreferrer">JAX code for Energy Transformer</a>
    </li>
    <li>
      <a href="https://recorder-v3.slideslive.com/#/share?share=88188&s=6a61b5bf-c59b-4ef5-b71f-be4156c92dd5" target="_blank" rel="noreferrer">Ben presents for NeurIPS 2023 (5 min)</a>
    </li>
    <li>
      <a href="https://online.kitp.ucsb.edu/online/deeplearning23/krotov/rm/jwvideo.html" target="_blank" rel="noreferrer">Dima presents at KITP 2023 (45 min)</a>
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
