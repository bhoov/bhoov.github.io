<script>
  import PrivateEmail from '../../components/PrivateEmail.svelte';
  export let data;

  let people = data.db.people;
  let encodedEmail = 'ben-XyX-hoover-XyX-34-XyX-@gmail.com';
  let removeCode = /-XyX-/g;

  function formatPubDate(pub) {
    return pub.year;
  }

  function decodeEmail(email) {
    return email.replace(removeCode, '');
  }

  function stripPunc(s) {
    return s.replace(/[^a-zA-Z1-9]/g, '');
  }

  let decodedEmail = decodeEmail(encodedEmail);
</script>

<style lang="postcss">

  .cv-content {
    @apply col-span-4 col-start-2;
  }

  .cv-date-info {
    @apply place-self-end self-start text-xs col-end-2;
  }

  h1 {
    font-size: 2.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    line-height: 1.25;
  }

  a {
    color: inherit;
  }

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
    line-height: 1rem;
  }
  :global(a.link) {
    color: #357edd;
    text-decoration: none;
  }
  :global(a.link:hover),
  :global(a.link:focus) {
    color: #00449e;
    text-decoration: underline;
    text-decoration-color: #aaa;
  }
  hr {
    margin: 1.5rem 0;
    border: 0;
    border-top: 1px solid #ddd;
  }
  a[href^='#fn:'],
  a[href^='#fnref:'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }
  pre {
    font-family: Consolas, monaco, monospace;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  .cv-ai {
    color: #ff6300;
  }
  .cv-vis {
    color: #357edd;
  }
  .cv-image-links-wrapper {
    display: flex;
    font-size: 0.85rem;
  }
  .cv-image-links {
    flex: 1;
  }
  :global(.cv-social-link) {
    @apply grid grid-cols-6;
  }
  :global(.cv-social-link-icon-wrapper) {
    @apply place-self-center;
  }
  :global(.cv-social-link-text-wrapper) {
    @apply col-start-2 col-end-7 place-self-start;
  }

  .cv-description {
    @apply text-gray-700 text-sm font-thin;
  }
  .cv-spacer {
    margin-top: 0.75rem;
    display: block;
  }
  .cv-spacer-small {
    margin-top: 0.25rem;
    display: block;
  }
  .pub-misc {
    @apply text-sm text-blue-500;
  }
  .pub-misc-txt {
    @apply mr-2 text-blue-600;
    white-space: nowrap;
  }
  .pub-misc-txt:hover {
    @apply text-blue-900;
    text-decoration: none;
  }
  @media print {
    i {
      font-family: -apple-system, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif, 'Apple Color Emoji',
        'Segoe UI Emoji', 'Segoe UI Symbol';
    }
  }

  .my-name {
    font-weight: 545;
    border-bottom-style: dashed;
    border-bottom-width: 1px;
    border-bottom-color: rgb(97, 97, 97);
  }

  .cv-item {
    display: block;
    position: relative;
    margin-top: -5px;
    margin-bottom: -5px;
    /* padding-top: -5px;
    padding-bottom: -5px; */
    /* page-break-inside: avoid; */
    break-inside: avoid;
  }

  .cv-wrapper {
    position: relative;
  }

  .pg-break {
    page-break-after: always;
    page-break-before: always;
    overflow: hidden;
  }

  #cv {
    position: relative;
  }
</style>

<svelte:head>
  <title>CV: Ben Hoover</title>
  <!--<script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js"></script>-->
  <script>
    function toggleBibtex(id) {
      let el = id instanceof HTMLElement ? id : document.getElementById(id);
      console.log('el: ', el);

      if (el.style.display === 'none') {
        el.style.display = 'inline-block';
      } else {
        el.style.display = 'none';
      }
    }

    function exportToPdf() {
      console.log('TRYING TO EXPORT');
      printJS({ printable: 'cv', type: 'html' });
    }

    let encodedEmail = 'ben-XyX-hoover-XyX-34-XyX-@gmail.com';
    let removeCode = '-XyX-';

    function decodeEmail(email) {
      return email.replaceAll(removeCode, '');
    }
  </script>
</svelte:head>

<div id="main" class="mt-1 mb-3 place-items-start w-10/12 md:w-8/12 place-self-center mx-auto md:grid grid-cols-5 gap-x-5">
  <div class="cv-content">
    <h1 class="text-3xl">Benjamin Hoover</h1>

    <p>
      <i>AI <span class="cv-ai">Interpretability</span> &amp; <span class="cv-vis">Visualization</span> Research Engineer</i>
    </p>

    <!-- <div class="font-light text-2xl">What can AI teach us about our world?</div> -->

    <div class="cv-spacer" />

    <div class="grid sm:grid-cols-2">
      <div>

        <PrivateEmail hydrate-client={{}} />

        <div class="cv-social-link">
          <div class="cv-social-link-icon-wrapper">
            <a target="_blank" href="https://scholar.google.com/citations?user=n10P0tYAAAAJ&hl=en"><i
                class="fa fa-graduation-cap icon"
                style="color: #515151" /></a>
          </div>
          <div class="cv-social-link-text-wrapper">
            <a target="_blank" href="https://scholar.google.com/citations?user=n10P0tYAAAAJ&hl=en">Google Scholar</a>
          </div>
        </div>

        <!-- <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a onclick="exportToPdf()"><i class="far fa-file-pdf icon" style="color: #ba2818"></i></a>
        </div>
        <div class="cv-social-link-text-wrapper">
          <a onclick="exportToPdf()">CV PDF</a>
        </div>
      </div> -->
      </div>
      <div>
        <div class="cv-social-link">
          <div class="cv-social-link-icon-wrapper">
            <a target="_blank" href="https://twitter.com/ben_hoov"><i class="fab fa-twitter icon" style="color: #1da1f2" /></a>
          </div>
          <div class="cv-social-link-text-wrapper"><a target="_blank" href="https://twitter.com/ben_hoov">@ben_hoov</a></div>
        </div>

        <div class="cv-social-link">
          <div class="cv-social-link-icon-wrapper">
            <a target="_blank" href="https://github.com/bhoov"><i class="fab fa-github icon" style="color: #6e5494" /></a>
          </div>
          <div class="cv-social-link-text-wrapper"><a target="_blank" href="https://github.com/bhoov">@bhoov</a></div>
        </div>
      </div>
    </div>
  </div>
  <hr />

  <h2 id="education" class="cv-content">Education</h2>

  {#each data.db.education as school}
    <div class="cv-date-info col-end-2">{school.date}</div>

    <div class="cv-content">
      <b>{school.degree}</b>
      <div><a target="_blank" href={school.institutionUrl}>{school.institution}</a>, {school.location}</div>

      <div class="cv-description">
        <div>{school.description}</div>
      </div>
    </div>

    <div class="cv-spacer" />
  {/each}

  <h2 id="research-experience" class="cv-content">Research Experience</h2>

  {#each data.db.experiences as work}
    <div class="cv-date-info">{work.end ? `${work.start} - ${work.end}` : work.start}</div>

    <div class="cv-content">
      <div><a target="_blank" href={work.institutionUrl}><b>{work.institution}</b></a>, {work.location}</div>
      <div><i>{work.role}, <a target="_blank" href={work.teamUrl}>{work.team}</a></i></div>
      <div class="cv-description">
        <span class="font-semibold">Mentors:</span>
        {#each work.mentors as mentor, i}
          <a target="_blank" href={people[mentor].url} class="hover:border-b-2">{mentor}</a>{i != work.mentors.length - 1 ? ', ' : ''}
        {/each}
      </div>
    </div>
    <div class="cv-spacer" />
  {/each}

  <div class="pg-break" />
  <h2 id="publications" class="cv-content">Publications</h2>

  {#each data.db.publications as pub}
    <div class="cv-date-info">{formatPubDate(pub)}</div>
    <div class="cv-content">
      <div><a target="_blank" href={pub.title}><b>{pub.title}</b></a></div>
      <div>
        {#each pub.authors as author, i}
          <a target="_blank" href={people[author].url}><span class:my-name={people[author].me}>{author}</span>{i != pub.authors.length - 1 ? ', ' : ''}</a>
        {/each}
      </div>
      <div><i>{pub.venue}</i></div>
      <div class="pub-misc">
        {#if pub.url}
          <a target="_blank" href={pub.url} class="pub-misc-txt"> <i class="fas fa-link" aria-hidden="true" /> Project </a>
        {/if}
        {#if pub.demo}
          <a target="_blank" href={pub.demo} class="pub-misc-txt"> <i class="fas fa-play" aria-hidden="true" /> Demo </a>
        {/if}
        {#if pub.pdf}
          <a target="_blank" href={pub.pdf} class="pub-misc-txt"> <i class="far fa-file-pdf" aria-hidden="true" /> PDF </a>
        {/if}
        {#if pub.video}
          <a target="_blank" href={pub.video} class="pub-misc-txt"> <i class="fas fa-film" aria-hidden="true" /> Video </a>
        {/if}
        {#if pub.code}
          <a target="_blank" href={pub.code} class="pub-misc-txt"> <i class="fas fa-code" aria-hidden="true" /> Code </a>
        {/if}
        {#if pub.bibtex}
          <span style="cursor:pointer;" class="pub-misc-txt" onclick={`toggleBibtex(${stripPunc(pub.title)})`}>
            <i class="fas fa-book" aria-hidden="true" /> BibTeX
          </span>
        {/if}
      </div>
    </div>
    <pre
      class="border-solid border-gray-600 rounded-xl bg-gray-200 my-5 px-3 py-2 border-2 text-xs cv-content"
      id={`${stripPunc(pub.title)}`}
      style="display:none;">{pub.bibtex}</pre>

    <div class="cv-spacer" />
  {/each}

  <h2 id="talks" class="cv-content">Talks</h2>

  {#each data.db.talks as talk}
    <div class="cv-content"><b>{talk.title}</b></div>

    {#each talk.venues as venue}
      <div class="cv-date-info">{venue.date}</div>
      <div class="cv-content">{venue.name}</div>
    {/each}
    <div class="cv-spacer" />
    <div class="cv-spacer" />
  {/each}

  <div class="cv-spacer" />

  <h2 id="teaching" class="cv-content">Teaching</h2>

  {#each data.db.teaching as course}
    <div class="cv-date-info">{course.date}</div>
    <div class="cv-content">
      <div><a target="_blank" href={course.courseUrl}><b>{course.role}</b></a></div>
      <div><i><a target="_blank" href={course.institionUrl}>{course.institution}</a>, {course.location}</i></div>

      <div>
        {#if course.course}
          <a target="_blank" href={course.courseUrl}>{course.course}
            {#if course.courseCode}<span class="text-gray-600 text-s">({course.courseCode})</span>{/if}
          </a>
        {/if}
        <div>
          {course.instructors.length > 1 ? 'Instructors: ' : 'Instructor: '}

          {#each course.instructors as instructor, i}
            <a target="_blank" href={people[instructor].url} class="mr-0 pr-0">{instructor}</a>
            {#if i != course.instructors.length - 1}<span class="ml-0 pl-0">, </span>{/if}
          {/each}
        </div>
      </div>
      <div class="cv-description">
        {@html course.description}
      </div>
    </div>

    <div class="cv-spacer" />
  {/each}
</div>
