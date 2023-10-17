<script lang="ts">
  import CVReviewerEntry from "./CVReviewerEntry.svelte";

  import CVTeachingEntry from "./CVTeachingEntry.svelte";

  import CVTalkEntry from "./CVTalkEntry.svelte";

  import CVPublicationEntry from "./CVPublicationEntry.svelte";
  import CVAwardEntry from "./CVAwardEntry.svelte";
  import CVResearchExperienceEntry from "./CVResearchExperienceEntry.svelte";
  import CVEducationEntry from "./CVEducationEntry.svelte";
  import CVHeader from "./CVHeader.svelte";
  import CVHeaderLevel2 from "./CVHeaderLevel2.svelte";

  import { onMount } from "svelte";
  export let data;

  $: people = data.people;
  $: publications = data.publications;
  $: education = data.education;
  $: experiences = data.experiences;
  $: awards = data.awards;
  $: talks = data.talks;
  $: teaching = data.teaching;
  $: reviewer = data.reviewer;
  $: social = data.socialLinkInfo;

  $: workshopPublications = publications.filter((p) => p.type == "workshop");
  $: preprintPublications = publications.filter((p) => p.type == "preprint");
  $: conferencePublications = publications.filter(
    (p) => p.type == "conference"
  );
  $: journalPublications = publications.filter((p) => p.type == "journal");

  function getLinkClassList(link) {
    let _linkClassList = "flex flex-row gap-2";
    if (link == "cvpdf") {
      return _linkClassList + " print:hidden";
    }
    return _linkClassList;
  }

  onMount(() => {
    console.log("DATA: ", data);
  });
</script>

<div class="layout flex flex-col justify-between h-[100%]">
  <div>
    <div class="header mb-8">
      <h1 class="mb-1">Benjamin Hoover</h1>
      <h2 class="text-2xl text-gray-400 font-light mb-2">
        AI Researcher, Engineer, Student
      </h2>
      <div class="">
        <div class="xs:grid w-full xs:w-5/6 grid-cols-2 text-gray-600">
          {#each ["email", "homepage", "twitter", "github", "linkedin", "scholar", "cvpdf"] as link}
            <div class={getLinkClassList(link)}>
              <div class="svg-icon self-center">
                <img src={social[link].icon} alt="" class="opacity-100" />
              </div>
              <a href={social[link].href} target="_blank" rel="noreferrer"
                >{social[link].label}</a
              >
            </div>
          {/each}
        </div>
      </div>
    </div>
    <CVHeader title="Education" />
    <div class="flex flex-col gap-3">
      {#each education as school}
        <div>
          <CVEducationEntry {school} />
        </div>
      {/each}
    </div>
    <CVHeader title="Industry Research Experience" />
    <div class="flex flex-col gap-3">
      {#each experiences.filter((e) => e.type == "industry") as experience}
        <CVResearchExperienceEntry {experience} {people} showDetails={true} />
      {/each}
    </div>
    <CVHeader title="Academic Research Experience" />
    <div class="flex flex-col gap-3">
      {#each experiences.filter((e) => e.type == "academic") as experience}
        <CVResearchExperienceEntry {experience} {people} showDetails={true} />
      {/each}
    </div>
    <CVHeader title="Awards and Honors" />
    <div class="flex flex-col gap-3">
      {#each awards as award}
        <CVAwardEntry {award} />
      {/each}
    </div>
    <CVHeader title="Publications" />
    <CVHeaderLevel2 title="Conference" />
    <div class="flex flex-col gap-4">
      {#each conferencePublications as publication}
        <CVPublicationEntry {publication} {people} />
      {/each}
    </div>
    <CVHeaderLevel2 title="Journal" />
    <div class="flex flex-col gap-4">
      {#each journalPublications as publication}
        <CVPublicationEntry {publication} {people} />
      {/each}
    </div>
    <CVHeaderLevel2 title="Workshop" />
    <div class="flex flex-col gap-4">
      {#each workshopPublications as publication}
        <CVPublicationEntry {publication} {people} />
      {/each}
    </div>
    <CVHeaderLevel2 title="Preprints" />
    <div class="flex flex-col gap-4">
      {#each preprintPublications as publication}
        <CVPublicationEntry {publication} {people} />
      {/each}
    </div>
    <CVHeader title="Talks" />
    <div class="flex flex-col gap-3">
      {#each talks as talk}
        <CVTalkEntry {talk} />
      {/each}
    </div>
    <CVHeader title="Teaching" />
    <div class="flex flex-col gap-3">
      {#each teaching as ta}
        <CVTeachingEntry {ta} {people} />
      {/each}
    </div>
    <CVHeader title="Service" />
    <div class="font-bold text-lg">Reviewer</div>
    <div class="flex flex-col gap-y-1 sm:gap-y-0">
      {#each reviewer as venue}
        <CVReviewerEntry {venue} />
      {/each}
    </div>
  </div>
  <div
    class="text-gray-400 font-light my-16 text-center hidden bottom-[0] print:block static last-updated footer"
  >
    Last rendered: {new Date().toDateString()}
  </div>
</div>

<!-- <div class="h-16"></div> -->

<style lang="postcss">
  .me {
    @apply font-semibold text-gray-800;
  }
  .layout {
    max-width: 900px;
    width: 95%;
    margin-left: auto;
    margin-right: auto;
  }

  :global(.svg-icon > img) {
    -webkit-filter: brightness(0) invert(30%);
    filter: brightness(0) invert(30%);
  }

  @page {
    margin: 60px 80px;
  }
</style>
