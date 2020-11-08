<script>
  import PrivateEmail from '../../components/PrivateEmail.svelte';
  import Clock from '../../components/Clock.svelte';
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
  $: mailtoAddress = decodedEmail == null ? '#' : `mailto:${decodedEmail}`;
</script>

<style>
  body {
    color: #414141;
    background-color: #fff;
  }

  #main {
    @apply grid grid-cols-5 gap-x-5;
  }

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

  h2 {
    font-size: 2rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }

  p {
    margin-top: 0.75rem;
    margin-bottom: 0.75rem;
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
  abbr {
    font-size: 85%;
    font-weight: bold;
    color: #555;
    text-transform: uppercase;
  }
  blockquote {
    padding: 0rem 1rem;
    margin: 0rem;
    color: #777;
    border-left: 0.25rem solid #eee;
  }
  @media (max-width: 768px) {
    blockquote {
      padding-right: 5rem;
      padding-left: 1.25rem;
    }
  }
  a[href^='#fn:'],
  a[href^='#fnref:'] {
    display: inline-block;
    margin-left: 0.1rem;
    font-weight: bold;
  }
  .footnotes {
    margin-top: 2rem;
    font-size: 85%;
  }
  .lead {
    font-size: 1.3rem;
    font-weight: 300;
    color: #333;
  }
  time {
    color: #777;
  }
  ul,
  ol {
    padding-left: 0;
  }
  @media (max-width: 768px) {
    ul,
    ol {
      padding-left: 1rem;
    }
  }

  code,
  pre {
    font-family: Consolas, monaco, monospace;
    white-space: pre-wrap; /* Since CSS 2.1 */
    white-space: -moz-pre-wrap; /* Mozilla, since 1999 */
    white-space: -pre-wrap; /* Opera 4-6 */
    white-space: -o-pre-wrap; /* Opera 7 */
    word-wrap: break-word; /* Internet Explorer 5.5+ */
  }

  .css .o,
  .css .o + .nt,
  .css .nt + .nt {
    color: #999;
  }
  #masthead {
    border-bottom: 1px solid #ddd;
    padding-top: 1rem;
    padding-bottom: 1rem;
  }
  #masthead > h1 {
    grid-column: text-start / 8;
    font-size: 1.25rem;
    margin-top: 0.25rem;
    margin-bottom: 0.25rem;
  }
  #masthead > h1 > a {
    color: #414141;
  }
  #masthead > nav {
    grid-column: 8 / text-end;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    font-size: 1rem;
  }
  nav > a {
    margin-left: 1rem;
    margin-right: 0rem;
  }
  @media screen and (max-width: 768px) {
    #masthead {
      padding-top: 0.5rem;
      padding-bottom: 0.5rem;
    }
    #masthead > h1 {
      grid-column: page;
      margin-bottom: 0.5rem;
    }
    #masthead > nav {
      grid-column: page;
      justify-content: flex-start;
    }
    nav > a {
      margin-left: 0rem;
      margin-right: 1rem;
    }
  }
  footer {
    background-color: #1e1e24;
    color: #e6e6e6;
    padding-bottom: 3rem;
    padding-top: 3rem;
    margin-top: 2em;
  }
  #footer-left {
    grid-column: text-start / 8;
  }
  #footer-left > time {
    color: #e6e6e6;
  }
  #footer-right {
    grid-column: 8 / text-end;
  }
  .footer-icon {
    margin-right: 0.75rem;
    color: #e6e6e6;
  }
  @media screen and (max-width: 768px) {
    #footer-left,
    #footer-right {
      grid-column: page;
    }
    #footer-left {
      margin-bottom: 1rem;
    }
  }
  .message {
    margin-bottom: 1rem;
    padding: 1rem;
    color: #777;
    border: 1px solid;
    border-color: #ddd;
  }
  table {
    margin-bottom: 1rem;
    width: 100%;
    font-size: 85%;
    border: 1px solid #ddd;
    border-collapse: collapse;
  }
  td,
  th {
    padding: 0.75rem 0.75rem;
    border: 1px solid #ddd;
  }
  th {
    text-align: left;
    text-transform: uppercase;
  }
  tbody tr:nth-child(odd) td,
  tbody tr:nth-child(odd) th {
    background-color: #f6f6f6;
  }
  button {
    font-size: 0.75rem;
    padding-top: 0.65rem;
    padding-bottom: 0.75rem;
    padding-right: 1rem;
    padding-left: 1rem;
    background: #fff;
    border: solid 1px #357edd;
    -webkit-transition: 0.35s color ease, 0.35s background-color ease;
    -moz-transition: 0.35s color ease, 0.35s background-color ease;
    -ms-transition: 0.35s color ease, 0.35s background-color ease;
    -o-transition: 0.35s color ease, 0.35s background-color ease;
    transition: 0.35s color ease, 0.35s background-color ease;
  }
  button:hover,
  button.hover {
    border-color: #357edd;
    background-color: #357edd;
    color: #fff;
    cursor: pointer;
  }
  button:hover a {
    text-decoration: none;
    color: #fff;
  }
  fieldset {
    border: 1px solid #ccc;
    padding: 1rem;
  }
  fieldset legend {
    padding: 0.25rem 0.5rem;
    margin-left: 1rem;
  }
  figure {
    display: block;
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-left: 0;
    margin-right: 0;
  }
  figure figcaption {
    display: block;
    text-align: center;
    color: #777;
    font-size: 1rem;
    margin-top: 0.5rem;
  }
  .figure-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 0.5rem;
  }
  .figure-grid-left {
    grid-column: 1 / 2;
  }
  .figure-grid-right {
    grid-column: 2 / 3;
  }
  #intro-wrapper > div,
  .intro-text {
    font-size: 1.2em;
  }
  #intro-wrapper {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-column-gap: 2rem;
    grid-auto-rows: minmax(3rem, auto);
    grid-row-gap: 1rem;
    margin-top: 3rem;
  }
  .intro-left {
    grid-column: 1 / 6;
  }
  .intro-right {
    grid-column: 6 / 9;
  }
  #intro-image {
    grid-row: 2;
  }
  #intro-title-wrapper {
    display: flex;
    flex-direction: column;
    justify-content: center;
    grid-column: 1 / 9;
    margin-bottom: 1.5rem;
  }
  #intro-title {
    color: #111;
    font-weight: 600;
    margin-bottom: 0rem;
    margin-top: 0rem;
    font-size: 3.75rem;
  }
  #intro-subtitle {
    font-size: 1.57rem;
    color: #999;
  }
  #intro-subtitle-link {
    color: #357edd;
  }
  #intro-image-links {
    grid-row: 3;
    background-color: #f4f4f4;
    border-left: 2px solid #ccc;
    padding: 1rem;
    font-size: 1rem !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #intro-cv-wrapper {
    grid-row: 4;
    background-color: #e4f2ff;
    border-left: 2px solid #96ccff;
    padding: 1rem;
    font-size: 1rem !important;
  }
  #intro-cv > a {
    color: #414141;
  }
  .intro-logo {
    display: inline;
    width: 21px;
    vertical-align: middle;
  }
  .feature-title {
    margin-top: 2rem;
    margin-bottom: 0.5rem;
    font-size: 2rem;
    font-weight: 400;
  }
  .feature-title > a {
    font-weight: 600;
  }
  #everything-else {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
  }
  #everything-else > a {
    border: 1px solid #ddd;
    padding: 1rem 0.75rem;
    margin: 0.25rem;
    text-align: center;
    grid-column: 1fr;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  #everything-else > a:hover {
    border: 1px solid #333;
    text-decoration: none;
  }
  @media screen and (max-width: 1100px) {
    #intro-wrapper,
    .feature-title,
    .intro-text,
    .home-hr {
      grid-column: page !important;
    }
    .cover-wrapper {
      max-width: 800px;
    }
    #everything-else {
      grid-column: page !important;
    }
  }
  @media screen and (max-width: 768px) {
    .intro-left,
    .intro-right {
      grid-column: 1/9;
    }
    #intro-title-wrapper {
      grid-row: 1 / 2;
    }
    #intro-image {
      grid-row: 2 / 3;
    }
    #intro-image-links {
      grid-row: 3 / 4;
    }
    #intro-right-cv {
      grid-row: 4 / 5;
    }
    #intro-image,
    #intro-image-links,
    #intro-right-cv {
      grid-column: 1 / 6;
    }
    #intro-subtitle {
      line-height: 1.5;
    }
    #everything-else {
      grid-template-columns: repeat(1, 1fr);
    }
  }
  .cover-wrapper {
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
  }
  .cover {
    height: 405px;
    width: 255px;
    margin: 0.5rem;
    border: 1px solid #ddd;
    text-align: left;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
  .cover:hover {
    border: 1px solid #333;
    text-decoration: none;
  }
  .cover-inner {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    flex-grow: 1;
  }
  .cover-title {
    font-size: 1.4rem;
    text-transform: capitalize;
    font-weight: 600;
    color: #313131;
    line-height: 1.3;
  }
  .cover-title a {
    color: #313131;
  }
  .cover-top a:hover {
    text-decoration: none !important;
  }
  .cover-subtitle {
    font-size: 0.875rem;
    color: #777;
  }
  .cover-footer-wrapper {
    display: flex;
    justify-content: space-between;
  }
  .cover-venue,
  .cover-year,
  .cover-links {
    font-size: 0.75rem;
    padding-top: 0.5rem;
  }
  .cover-venue {
    font-style: italic;
  }
  .cover-year {
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    text-align: right;
  }
  .cover-image {
    width: 100%;
    border-bottom: 1px solid #ddd;
  }
  .cover-link {
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    .cover {
      width: 100%;
      height: auto;
      margin-top: 1rem;
      margin-bottom: 1rem;
      margin-left: 0rem !important;
      margin-right: 0rem !important;
    }
  }
  @media screen and (max-width: 1100px) {
    .cover-wrapper {
      grid-column: page;
      justify-content: left;
    }
    .cover {
      margin-left: 0rem;
      margin-right: 1rem;
    }
  }

  .cv-ai {
    color: #ff6300;
  }
  .cv-vis {
    color: #357edd;
  }
  .cv-exp {
    color: #30e5f2;
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
  #venue,
  #paper-award,
  #paper-award {
    color: #ffb700;
    margin-top: 0.5rem;
  }
  .cd-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
  .cd-link {
    text-decoration: none !important;
  }
  .cd {
    background: #fff;
    display: inline-block;
    height: 130px;
    width: 130px;
    border: 1px solid #ddd;
    cursor: pointer;
    margin: 0.5rem;
  }
  .cd:hover {
    text-decoration: none;
    border: 1px solid #111;
  }
  .cd-inner {
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 130px;
    border-radius: 50%;
    margin: 12px;
    width: 106px;
    height: 106px !important;
    background-color: #eee;
  }
  .cd-inner-hole {
    height: 26px;
    width: 26px;
    margin-left: 40px;
    margin-right: 40px;
    margin-top: 5px;
    margin-bottom: 5px;
    background: #fff;
    border-radius: 50%;
  }
  .cd-label {
    font-family: 'Gaegu', cursive;
    font-weight: 700;
    font-size: 1.15rem;
    opacity: 0.8;
    background-color: #fff;
    border: 1px solid #555;
    color: #111;
    height: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cd-label-year {
    font-family: 'Gaegu', cursive;
    font-weight: 300;
    font-size: 1rem;
    color: #fff;
    height: 30px;
  }
  .january {
    background: linear-gradient(135deg, #13f1fc 0%, #0470dc 100%);
  }
  .february {
    background: linear-gradient(135deg, #f5515f 0%, #a1051d 100%);
  }
  .march {
    background: linear-gradient(135deg, #65799b 0%, #5e2563 100%);
  }
  .april {
    background: linear-gradient(135deg, #c56cd6 0%, #3425af 100%);
  }
  .may {
    background: linear-gradient(135deg, #f02fc2 0%, #6094ea 100%);
  }
  .june {
    background: linear-gradient(135deg, #c3ec52 0%, #0ba29d 100%);
  }
  .july {
    background: linear-gradient(135deg, #184e68 0%, #57ca85 100%);
  }
  .august {
    background: linear-gradient(135deg, #f36265 0%, #961276 100%);
  }
  .september {
    background: linear-gradient(135deg, #fcdf8a 0%, #f38381 100%);
  }
  .october {
    background: linear-gradient(135deg, #fad961 0%, #f76b1c 100%);
  }
  .november {
    background: linear-gradient(135deg, #f2d50f 0%, #da0641 100%);
  }
  .december {
    background: linear-gradient(135deg, #5b247a 0%, #1bcedf 100%);
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

<!-- <div class="cv-spacer" /> -->

<!-- <div id="cv"> -->
<div id="main" class="mt-1 mb-3 place-items-start place-self-center max-w-screen-md mx-auto">
  <div class="cv-content">
    <h1 class="text-3xl">Benjamin Hoover</h1>

    <p>
      <i>AI <span class="cv-ai">Interpretability</span> &amp; <span class="cv-vis">Visualization</span> Research Engineer</i>
    </p>

    <div class="font-light text-2xl">What can AI teach us about our world?</div>

    <div class="cv-spacer" />

    <div class="grid md:grid-cols-2">
      <div>
        <!-- 
      <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a href="https://fredhohman.com"><i class="fas fa-home icon" style="color: #515151"></i></a>
        </div>
        <div class="cv-social-link-text-wrapper">
          <a href="https://fredhohman.com">fredhohman.com</a>
        </div>
      </div> -->

        <PrivateEmail hydrate-client={{}} />

        <div class="cv-social-link">
          <div class="cv-social-link-icon-wrapper">
            <a href="https://scholar.google.com/citations?user=n10P0tYAAAAJ&hl=en"><i
                class="fa fa-graduation-cap icon"
                style="color: #515151" /></a>
          </div>
          <div class="cv-social-link-text-wrapper">
            <a href="https://scholar.google.com/citations?user=n10P0tYAAAAJ&hl=en">Google Scholar</a>
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
            <a href="https://twitter.com/ben_hoov"><i class="fab fa-twitter icon" style="color: #1da1f2" /></a>
          </div>
          <div class="cv-social-link-text-wrapper"><a href="https://twitter.com/ben_hoov">@ben_hoov</a></div>
        </div>

        <div class="cv-social-link">
          <div class="cv-social-link-icon-wrapper">
            <a href="https://github.com/bhoov"><i class="fab fa-github icon" style="color: #6e5494" /></a>
          </div>
          <div class="cv-social-link-text-wrapper"><a href="https://github.com/bhoov">@bhoov</a></div>
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
      <div><a class="link" href={school.institutionUrl}>{school.institution}</a>, {school.location}</div>

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
      <div><a href={work.institutionUrl}><b>{work.institution}</b></a>, {work.location}</div>
      <div><i>{work.role}, <a href={work.teamUrl}>{work.team}</a></i></div>
      <div class="cv-description">
        <span class="font-semibold">Mentors:</span> {#each work.mentors as mentor, i}
          {@debug mentor}
          <a href={people[mentor].url} class="hover:border-b-2">{mentor}</a>{i != work.mentors.length - 1 ? ', ' : ''}
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
      <div><a href={pub.title}><b>{pub.title}</b></a></div>
      <div>
        {#each pub.authors as author, i}
          <a href={people[author].url}><span class:my-name={people[author].me}>{author}</span>{i != pub.authors.length - 1 ? ', ' : ''}</a>
        {/each}
      </div>
      <div><i>{pub.venue}</i></div>
      <div class="pub-misc">
        {#if pub.url}<a href={pub.url} class="pub-misc-txt"> <i class="fas fa-link" aria-hidden="true" /> Project </a>{/if}
        {#if pub.demo}<a href={pub.demo} class="pub-misc-txt"> <i class="fas fa-play" aria-hidden="true" /> Demo </a>{/if}
        {#if pub.pdf}<a href={pub.pdf} class="pub-misc-txt"> <i class="far fa-file-pdf" aria-hidden="true" /> PDF </a>{/if}
        {#if pub.video}<a href={pub.video} class="pub-misc-txt"> <i class="fas fa-film" aria-hidden="true" /> Video </a>{/if}
        {#if pub.code}<a href={pub.code} class="pub-misc-txt"> <i class="fas fa-code" aria-hidden="true" /> Code </a>{/if}
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
      <div><a href={course.courseUrl}><b>{course.role}</b></a></div>
      <div><i><a href={course.institionUrl}>{course.institution}</a>, {course.location}</i></div>

      <div>
        {#if course.course}
          <a href={course.courseUrl}>{course.course}
            {#if course.courseCode}<span class="text-gray-600 text-s">({course.courseCode})</span>{/if}
          </a>
        {/if}
        <div>
          {course.instructors.length > 1 ? 'Instructors: ' : 'Instructor: '}

          {#each course.instructors as instructor}<a href={people[instructor].url}>{instructor}</a>{/each}
        </div>
      </div>
      <div class="cv-description">
        {@html course.description}
      </div>
    </div>

    <div class="cv-spacer" />
  {/each}
</div>
