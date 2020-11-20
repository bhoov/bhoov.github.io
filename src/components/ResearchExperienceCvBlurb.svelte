<script>
    export let institution
    export let location
    export let role
    export let team
    export let teamUrl
    export let start
    export let end
    export let mentors
    export let people

    console.log("Found my people: ", people)
    // your script goes here

    $: dateText = end ? `${start} - ${end}` : start
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

<div class="cv-date-info">{dateText}</div>
<div> <i>{role}, <a href={teamUrl}>{team}</a></i></div>
<div class="cv-description">
    Mentors:
    {#each mentors as mentor, i}
        <a href={people[mentor].url}>{mentor}</a>{i != mentors.length - 1 ? ", " : ""}
    {/each}
</div>