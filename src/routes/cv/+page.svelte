<script lang="ts">
  import { onMount } from "svelte";
  import ProjectEntry from "$lib/components/ProjectEntry.svelte";
  export let data;

  $: people = data.people;
  $: projects = data.publications;
  $: education = data.education;
  $: experiences = data.experiences;
  $: teaching = data.teaching;

  onMount(() => {
    console.log("DATA: ", data);
  });
</script>

<div class="flex main-col items-center flex-col">
  <h1 class="font-semibold mb-4 text-4xl">Ben Hoover</h1>
  <div class="flex flex-row gap-5">
    <a href="https://bhoov.com">https://bhoov.com</a>
    <a href="mailto:bhoov@gatech.edu">bhoov@gatech.edu</a>
  </div>
</div>

<h1 class="main-col">Education</h1>
<div class="cv-flow">
  {#each education as school, i}
    <div class="cv-block">
      <div class="cv-date">
        {school.date}
      </div>
      <div class="cv-entry">
        <div class="cv-entry-title">
          {school.degree}
        </div>
        <div class="cv-entry-subtitle">
          <a
            target="_blank"
            rel="noreferrer"
            href={school.institutionUrl}
            class="">{school.institution}</a
          >, {school.location}
        </div>

        <div class="cv-entry-description">
          {@html school.description}
        </div>
      </div>
    </div>
    <div class="cv-spacer" />
  {/each}
</div>

<h1 class="main-col">Work Experience</h1>
<div class="cv-flow">
  {#each experiences as experience, i}
    <div class="cv-block">
      <div class="cv-date">
        {experience.date}
      </div>
      <div class="cv-entry">
        <div class="cv-entry-title">
          <a href={experience.institutionUrl} target="_blank" rel="noreferrer"
            >{experience.institution}</a
          >
        </div>

        <div class="cv-entry-subtitle">
          {experience.role}
          &#x2022;
          {#if experience.teamUrl}
            <a href={experience.teamUrl}>
              {experience.team}
            </a>
          {:else}
            {experience.team}
          {/if}
          &#x2022;
          {experience.location}
        </div>

        <div class="cv-entry-subtitle text-sm">
          Mentors:
          {#each experience.mentors as mentor, i}
            <span>
              <a href={people[mentor].url}> {mentor} </a>
            </span>
            {#if i + 1 != experience.mentors.length}
              &#x2022;
              <!-- <span class="mr-1 ml-1">&#x2022;</span> -->
            {/if}
          {/each}
        </div>
        <!-- <div class="cv-entry-description">
        {@html school.description}
      </div> -->
      </div>
    </div>
    <div class="cv-spacer" />
  {/each}
</div>

<h1 class="main-col">Publications</h1>
<div class="cv-flow">
  {#each projects as project, i}
    <ProjectEntry {project} {people} />
  {/each}
</div>

<h1 class="main-col">Teaching</h1>
<div class="cv-flow">
  {#each teaching as course, i}
    <div class="cv-block">
      <div class="cv-date">
        {course.date}
      </div>
      <div class="cv-entry">
        <div class="cv-entry-title">
          <a target="_blank" rel="noreferrer" href={course.courseUrl}
            >{course.role}</a
          >
        </div>
        <div>
          <span class="font-md">
            {#if course.course}
              {#if course.courseUrl}
                <a href={course.courseUrl}
                  >{course.course}<span class="whitespace-nowrap ml-1"
                    >({course.courseCode}).</span
                  >
                </a>
              {:else}
                <span>
                  {course.course}
                  <span class="whitespace-nowrap ml-1"
                    >({course.courseCode}).</span
                  >
                </span>
              {/if}
            {/if}
            <span
              class="
          font-light"
            >
              <a
                target="_blank"
                rel="noreferrer"
                href={course.institionUrl}
                class="hover:border-b-2">{course.institution}</a
              >, {course.location}
            </span>
            <div class="text-slate-600 font-light">
              <span class="text-slate-400">
                {course.instructors.length > 1
                  ? "Main Instructors: "
                  : "Main Instructor: "}
              </span>
              {#each course.instructors as instructor, i}
                <a
                  target="_blank"
                  rel="noreferrer"
                  href={people[instructor].url}
                  class="mr-0 pr-0">{instructor}</a
                >
                {#if i != course.instructors.length - 1}<span class="ml-0 pl-0"
                    >&#x2022;
                  </span>{/if}
              {/each}
            </div></span
          >
        </div>
        <div />
        <div class="cv-entry-description">
          {@html course.description}
        </div>
      </div>
    </div>
  {/each}
</div>

<style lang="postcss">
  :global(.hover-link) {
    @apply hover:border-b-2;
  }

  .cv-flow {
    @apply flex flex-col md:contents mx-2;
  }

  .cv-date {
    @apply col-start-1 col-end-3 text-xs font-light justify-self-end text-slate-400 mb-1;
  }

  .cv-entry {
    @apply col-start-3 col-end-11 mb-5;
  }

  .cv-entry-title {
    @apply text-lg font-medium leading-5;
  }

  .cv-entry-description {
    @apply text-slate-600 text-sm pl-3 border-l-2;
  }

  a {
    @apply hover:border-b-2;
  }

  .cv-entry-subtitle {
    @apply text-slate-500;
  }
</style>
