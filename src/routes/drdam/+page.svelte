<script>
  import ConnectWithMe from "$lib/components/ConnectWithMe.svelte";
  export let data;

  // Add more variables and logic as needed
</script>

<main>
  <ConnectWithMe title="Let's connect! 🥳" {data} />
  <p class="text-gray-500 text-sm italic my-4">
    Barebones page to important links to this work
  </p>
  <h1 class="mt-4">Dense Associative Memories through the Lens of Random Features</h1>
  <p class="abstract">
Dense Associative Memories are high storage capacity variants of the Hopfield networks that are capable of storing a large number of memory patterns in the weights of the network of a given size. Their common formulations typically require storing each pattern in a separate set of synaptic weights, which leads to the increase of the number of synaptic weights when new patterns are introduced. In this work we propose an alternative formulation of this class of models using random features, commonly used in kernel methods. In this formulation the number of network's parameters remains fixed. At the same time, new memories can be added to the network by modifying existing weights. We show that this novel network closely approximates the energy function and dynamics of conventional Dense Associative Memories and shares their desirable computational properties.
  </p>

  <h2>Links</h2>
  <ul>
    <li>
      <a
        href="https://arxiv.org/abs/2410.24153"
        target="_blank"
        rel="noreferrer">Paper on ArXiv</a
      >
    </li>
    <li>
      <a
        href="https://neurips.cc/virtual/2024/poster/96886"
        target="_blank"
        rel="noreferrer">NeurIPS 2024 virtual page</a
      >
    </li>
    <li>
      <a
        href="https://github.com/bhoov/distributed_DAM"
        target="_blank"
        rel="noreferrer">Code to replicate experiments</a
      >
    </li>

    <li>
      <a
        href="https://recorder-v3.slideslive.com/?share=97038&s=3c7ede33-220c-4c28-a72e-86835e88c4db"
        target="_blank"
        rel="noreferrer">Ben presents Distributed DenseAM for NeurIPS 2024 (5 min)</a
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
