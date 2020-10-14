<script>
    export let degree
    export let institution
    export let location
    export let date
    export let description
    export let institutionUrl
    // your script goes here
</script>


<style>
  a {
    color: #414141;
  }

  a:hover {
    color: #00449e;
  }

  .cv-description {
    color: #999 !important;
    font-size: 0.875rem;
    font-weight: 300;
  }
</style>

<div class="cv-date-info">{date}</div>
<b>{degree}</b>
<!-- <div><a href="https://www.duke.edu/">Duke University</a>, Durham, NC</div> -->
<div><a class="link" href={institutionUrl}>{institution}</a>, {location}</div>

<div class="cv-description">
  <div>{description}</div>
</div>