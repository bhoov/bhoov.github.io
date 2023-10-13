<script lang="ts">
  import { onMount } from "svelte";
  export let data;

  $: people = data.people;
  $: projects = data.publications;
  $: education = data.education;
  $: experiences = data.experiences;
  $: teaching = data.teaching;

  onMount(() => {
    console.log("DATA: ", data);
  });

  let school = data.education[0]
</script>

<div class="layout">
  <div class="header">
    <h1>Benjamin Hoover</h1>
    <h2>AI Researcher, Engineer, Student</h2>

    <div class="grid grid-cols-2">
      <div>
        <a href="https://bhoov.com">https://bhoov.com</a>
      </div>
      <div>
        <a href="mailto:bhoov@gatech.edu">bhoov@gatech.edu</a>
      </div>
    </div>
  </div>

  <h1>Education</h1>

  <div>
    <div>
      {school.date}
    </div>
    <div>
      {school.degree}
    </div>
    <div>
      <a
        target="_blank"
        rel="noreferrer"
        href={school.institutionUrl}
        class="">{school.institution}</a
      >, {school.location}
    </div>
    <div class="cv-entry-description">
      {school.description}
    </div>
  </div>


</div>

<style>
  .layout {
    max-width: 1100px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }
</style>
