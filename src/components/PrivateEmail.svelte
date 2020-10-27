<script>
  export let encodedEmail = 'ben-XyX-hoover-XyX-34-XyX-@gmail.com';
  export let removeCode = /-XyX-/g;

  function decodeEmail(email) {
    return email.replace(removeCode, '');
  }

  let decodedEmail = null;
  $: mailtoAddress = decodedEmail == null ? '#' : `mailto:${decodedEmail}`;
</script>

<style>
  .interactive {
    @apply text-gray-700;
  }

  .interactive:hover {
    @apply font-bold;
  }
</style>

<div class="cv-social-link" style="display: flex">
  <div class="cv-social-link-icon-wrapper">
    <a href={mailtoAddress}> <i class="fas fa-envelope icon" style="color: #515151" /> </a>
  </div>
  <div class="cv-social-link-text-wrapper">
    {#if decodedEmail == null}
      <span
        class="interactive"
        on:click={() => {
          decodedEmail = decodeEmail(encodedEmail);
        }}>Click to Reveal</span>
    {:else}<a href={mailtoAddress}><span>{decodedEmail}</span></a>{/if}
  </div>
</div>
