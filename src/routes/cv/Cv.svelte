<script>
  export let data;
  import EducationCvBlurb from "../../components/EducationCvBlurb.svelte"
  import ResearchExperienceCvBlurb from "../../components/ResearchExperienceCvBlurb.svelte"

  console.log("LET MY PEOPLE GO: ", data.db.people)

</script>

<style>
  * {
    box-sizing: border-box;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
  }
  /* html {
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif,
      'Apple Color Emoji', 'Segoe UI Emoji', 'Segoe UI Symbol';
    font-size: 16px;
    line-height: 1.5;
  } */
  /* @media screen and (max-width: 768px) {
    html {
      font-size: 14px;
    }
  } */
  body {
    color: #414141;
    background-color: #fff;
    -webkit-text-size-adjust: 100%;
    -ms-text-size-adjust: 100%;
  }
  img {
    display: block;
    max-width: 100%;
    width: 100%;
  }
  .fake-image {
    height: 50px;
    background-color: rgba(0, 0, 0, 0.05);
    border: 1px solid rgba(0, 0, 0, 0.3);
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  main,
  header,
  footer,
  .cv-item,
  #paper-title-wrapper {
    display: grid;
    justify-items: stretch;
    grid-template-columns:
      [screen-start] 1fr [page-start kicker-start] minmax(min-content, 3.5rem) [middle-start] minmax(
        min-content,
        3.5rem
      )
      [text-start kicker-end] repeat(8, minmax(min-content, 3.5rem)) [text-end gutter-start] minmax(min-content, 3.5rem)
      [middle-end] minmax(min-content, 3.5rem) [page-end gutter-end] 1fr [screen-end];
    grid-column-gap: 1.5rem;
    /* position: relative; */
  }
  @media screen and (max-width: 768px) {
    main,
    header,
    footer,
    /* .cv-item, */
    #paper-title-wrapper {
      grid-template-columns:
        [screen-start] 8px [page-start kicker-start text-start gutter-start middle-start] repeat(8, 1fr)
        [text-end page-end gutter-end kicker-end middle-end] 8px [screen-end];
      grid-column-gap: 0.5rem;
    }
  }
  main > * {
    grid-column: text;
  }
  .cv-item > * {
    grid-column: text;
  }
  .l-kicker {
    grid-column: kicker;
  }
  .l-gutter {
    grid-column: gutter;
  }
  .l-text {
    grid-column: text;
  }
  .l-middle {
    grid-column: middle;
  }
  .l-page {
    grid-column: page;
  }
  .l-screen {
    grid-column: screen;
  }
  .l-screen-inset {
    grid-column: screen;
    margin-left: 1rem;
    margin-right: 1rem;
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
  h3 {
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h4 {
    font-size: 1.25rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h5 {
    font-size: 1rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
  }
  h6 {
    font-size: 0.875rem;
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
  }
  code {
    padding: 0.25rem 0.5rem;
    font-size: 85%;
    color: #bf616a;
    background-color: #f4f4f4;
    border-radius: 3px;
  }
  pre {
    margin-top: 0;
    margin-bottom: 1rem;
  }
  pre code {
    padding: 0;
    font-size: 100%;
    color: inherit;
    background-color: transparent;
  }
  .highlight {
    background: #ffffff;
  }
  .highlight .c {
    color: #999988;
    font-style: italic;
  }
  .highlight .err {
    color: #a61717;
    background-color: #e3d2d2;
  }
  .highlight .k {
    font-weight: bold;
  }
  .highlight .o {
    font-weight: bold;
  }
  .highlight .cm {
    color: #999988;
    font-style: italic;
  }
  .highlight .cp {
    color: #999999;
    font-weight: bold;
  }
  .highlight .c1 {
    color: #999988;
    font-style: italic;
  }
  .highlight .cs {
    color: #999999;
    font-weight: bold;
    font-style: italic;
  }
  .highlight .gd {
    color: #000000;
    background-color: #fdd;
  }
  .highlight .gd .x {
    color: #000000;
    background-color: #faa;
  }
  .highlight .ge {
    font-style: italic;
  }
  .highlight .gr {
    color: #a00;
  }
  .highlight .gh {
    color: #999;
  }
  .highlight .gi {
    color: #000000;
    background-color: #dfd;
  }
  .highlight .gi .x {
    color: #000000;
    background-color: #afa;
  }
  .highlight .go {
    color: #888;
  }
  .highlight .gp {
    color: #555;
  }
  .highlight .gs {
    font-weight: bold;
  }
  .highlight .gu {
    color: #aaa;
  }
  .highlight .gt {
    color: #a00;
  }
  .highlight .kc {
    font-weight: bold;
  }
  .highlight .kd {
    font-weight: bold;
  }
  .highlight .kp {
    font-weight: bold;
  }
  .highlight .kr {
    font-weight: bold;
  }
  .highlight .kt {
    color: #445588;
    font-weight: bold;
  }
  .highlight .m {
    color: #099;
  }
  .highlight .s {
    color: #d14;
  }
  .highlight .na {
    color: teal;
  }
  .highlight .nb {
    color: #0086b3;
  }
  .highlight .nc {
    color: #445588;
    font-weight: bold;
  }
  .highlight .no {
    color: teal;
  }
  .highlight .ni {
    color: purple;
  }
  .highlight .ne {
    color: #990000;
    font-weight: bold;
  }
  .highlight .nf {
    color: #990000;
    font-weight: bold;
  }
  .highlight .nn {
    color: #555;
  }
  .highlight .nt {
    color: navy;
  }
  .highlight .nv {
    color: teal;
  }
  .highlight .ow {
    font-weight: bold;
  }
  .highlight .w {
    color: #bbb;
  }
  .highlight .mf {
    color: #099;
  }
  .highlight .mh {
    color: #099;
  }
  .highlight .mi {
    color: #099;
  }
  .highlight .mo {
    color: #099;
  }
  .highlight .sb {
    color: #d14;
  }
  .highlight .sc {
    color: #d14;
  }
  .highlight .sd {
    color: #d14;
  }
  .highlight .s2 {
    color: #d14;
  }
  .highlight .se {
    color: #d14;
  }
  .highlight .sh {
    color: #d14;
  }
  .highlight .si {
    color: #d14;
  }
  .highlight .sx {
    color: #d14;
  }
  .highlight .sr {
    color: #009926;
  }
  .highlight .s1 {
    color: #d14;
  }
  .highlight .ss {
    color: #990073;
  }
  .highlight .bp {
    color: #999;
  }
  .highlight .vc {
    color: teal;
  }
  .highlight .vg {
    color: teal;
  }
  .highlight .vi {
    color: teal;
  }
  .highlight .il {
    color: #099;
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
  #cv {
    margin-top: 1rem;
    margin-bottom: 3rem;
  }
  #cv > * {
    grid-column: text-start / page-end;
  }
  #cv a {
    color: #414141;
  }
  #cv a:hover {
    color: #00449e;
  }
  #cv a b {
    color: #333;
  }
  #cv a b:hover {
    color: #00449e;
  }
  #cv-title {
    margin-bottom: 0rem;
  }
  #cv-title > a,
  #cv-title > a:hover {
    color: #333;
    font-weight: 600;
    text-decoration: none;
  }
  #cv-subtitle {
    font-size: 1.25rem;
    margin-top: 0rem;
    margin-bottom: 0.25rem;
  }
  #cv h2 {
    font-weight: 500;
  }
  #cv h3 {
    font-weight: 300;
    margin-top: 0rem;
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
  .cv-social-link {
    display: flex;
  }
  .cv-social-link-icon-wrapper {
    flex: 0 0 25px;
    text-align: center;
    margin-right: 0.5rem;
  }
  .cv-social-link-text-wrapper {
    flex: 1;
  }
  .cv-social-link-text-wrapper > a {
    color: #414141;
  }

  :global(.cv-date-info) {
    grid-column: kicker !important;
    text-align: right;
    font-size: 0.7rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
  }
  .cv-description {
    color: #999 !important;
    font-size: 0.875rem;
    font-weight: 300;
  }
  .cv-spacer {
    margin-top: 0.75rem;
    display: block;
  }
  .cv-spacer-small {
    margin-top: 0.25rem;
    display: block;
  }
  .appears-on,
  .appears-on a {
    font-size: 0.75rem;
    font-weight: 400;
  }
  .cv-award {
    color: #ffb700;
    font-weight: 600;
  }
  .cv-service-title {
    margin-top: 0.7rem;
    margin-bottom: 0rem;
  }
  .pub-misc,
  .pub-misc {
    font-size: 0.75rem;
  }
  .pub-misc a {
    color: #357edd !important;
    margin-right: 0.5rem;
    white-space: nowrap;
  }
  .pub-misc a:hover {
    color: #00449e !important;
    text-decoration: none;
  }
  .equal-contribution {
    color: #777;
  }
  .cv-blue-link a {
    color: #357edd !important;
  }
  .cv-blue-link a:hover {
    color: #00449e !important;
  }
  .bibtex-wrapper {
    overflow-x: scroll;
    background-color: #f4f4f4;
    border-left: 2px solid #ccc;
    padding-left: 1rem;
    padding-top: 0.75rem;
    padding-bottom: 0rem;
    margin-top: 1rem;
    margin-bottom: 0.5rem;
    font-size: 0.75rem;
  }
  .highlight {
    width: 0;
  }
  @media screen and (max-width: 768px) {
    .cv-date-info {
      text-align: left;
    }
    .cv-image-links-wrapper {
      display: block;
    }
  }
  #paper-title-wrapper {
    background-color: #f4f4f4;
    padding-top: 3rem;
    padding-bottom: 3rem;
    margin-bottom: 1rem;
    border-bottom: 1px solid #ddd;
  }
  #paper-title-wrapper > h1 {
    grid-column: middle;
    line-height: 1.25;
    margin-top: 0rem;
    text-align: center;
  }
  #author-wrapper {
    grid-column: text;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-column-gap: 0.875rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }
  .author {
    text-align: center;
    font-size: 1.1em;
    line-height: 1.25;
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
  }
  .author-image {
    height: 80px;
    width: 80px;
    border-radius: 40px;
    margin: 0 auto;
    margin-bottom: 0.5rem;
  }
  .author > a {
    color: #414141;
  }
  #venue,
  #paper-award,
  #paper-equal-contribution {
    grid-column: text;
    color: #555;
    font-size: 1.1em;
  }
  #paper-award {
    color: #ffb700;
    margin-top: 0.5rem;
  }
  #paper-equal-contribution {
    margin-top: 0.5rem;
  }
  #paper-materials {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
  }
  #paper-materials > a {
    border: 1px solid #ddd;
    padding: 0.75rem;
    margin: 0.25rem;
    text-align: center;
    grid-column: 1fr;
  }
  #paper-materials > a:hover {
    border: 1px solid #333;
    text-decoration: none;
  }
  @media screen and (max-width: 768px) {
    #author-wrapper {
      grid-template-columns: repeat(3, 1fr);
    }
    #paper-title-wrapper > h1 {
      text-align: left;
    }
    #paper-materials {
      grid-template-columns: repeat(2, 1fr);
    }
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

  .cv-research-statement {
    font-weight: 300;
    font-size: 1.5rem;
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
  <script data-cfasync="false" src="/cdn-cgi/scripts/5c5dd728/cloudflare-static/email-decode.min.js">
  </script>
  <script>
    function toggleBibtex(id) {
      let bibtex = document.getElementById(id);

      if (bibtex.style.display === 'none') {
        bibtex.style.display = 'inline-block';
      } else {
        bibtex.style.display = 'none';
      }
    }

    function exportToPdf() {
      console.log('TRYING TO EXPORT');
      printJS({ printable: 'cv', type: 'html' });
    }
  </script>
</svelte:head>

<!-- <div class="cv-spacer" /> -->

<div id="cv">
  <h1 id="cv-title">Benjamin Hoover</h1>

  <p id="cv-subtitle">
    <i>AI <span class="cv-ai">Interpretability</span> &amp; <span class="cv-vis">Visualization</span> Research Engineer</i>
  </p>

  <div class="cv-research-statement">"What can AI teach us about our world?"</div>

  <div class="cv-spacer" />

  <div class="cv-image-links-wrapper">
    <div class="cv-image-links">
      <!-- 
      <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a href="https://fredhohman.com"><i class="fas fa-home icon" style="color: #515151"></i></a>
        </div>
        <div class="cv-social-link-text-wrapper">
          <a href="https://fredhohman.com">fredhohman.com</a>
        </div>
      </div> -->

      <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a href="mailto:benhoover34@gmail.com"><i class="fas fa-envelope icon" style="color: #515151" /></a>
        </div>
        <div class="cv-social-link-text-wrapper">
          <a href="mailto:benhoover34@gmail.com"><span>benhoover34@gmail.com</span></a>
        </div>
      </div>

      <div class="cv-social-link" style="display: flex">
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
    <div class="cv-image-links">
      <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a href="https://twitter.com/ben_hoov"><i class="fab fa-twitter icon" style="color: #1da1f2" /></a>
        </div>
        <div class="cv-social-link-text-wrapper"><a href="https://twitter.com/ben_hoov">@ben_hoov</a></div>
      </div>

      <div class="cv-social-link" style="display: flex">
        <div class="cv-social-link-icon-wrapper">
          <a href="https://github.com/bhoov"><i class="fab fa-github icon" style="color: #6e5494" /></a>
        </div>
        <div class="cv-social-link-text-wrapper"><a href="https://github.com/bhoov">@bhoov</a></div>
      </div>
    </div>
  </div>

  <hr />

  <h2 id="education">Education</h2>

  {#each data.db.education as education}
    <EducationCvBlurb {...education}></EducationCvBlurb>
    <div class="cv-spacer"/>
  {/each}

  <h2 id="research-experience">Research Experience</h2>

  {#each data.db.experiences as experience}

    <!-- <div class="cv-date-info">Present - Sep. '18</div>
    <div><a href="https://www.research.ibm.com/artificial-intelligence/"><b>IBM Research</b></a>, Cambridge, MA</div>
    <div>
      <i>Research Engineer, <a href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948">Visual AI Lab</a></i>
    </div>
    <div class="cv-description">
      Mentors: <a href="http://hendrik.strobelt.com/">Hendrik Strobelt</a>, <a href="http://www.mamartino.com/">Mauro
        Martino</a>
    </div> -->

    <ResearchExperienceCvBlurb {...experience} people={data.db.people}/>
    <div class="cv-spacer"/>
  {/each}


  <!-- <div class="cv-description">Designed and developed interactive visualizations for data iteration in machine
    learning, published at CHI 2020.</div> -->

  <div class="cv-spacer" />

  <div class="cv-date-info">Summer 2017</div>
  <div><a href="https://www.medtronicdiabetes.com/home"><b>Medtronic Diabetes</b></a>, Northridge, CA</div>
  <div><i>Research Intern, Algorithms</i></div>
  <div class="cv-description">
    Mentors: <a href="https://www.linkedin.com/in/peter-ajemba/">Peter Ajemba</a>, <a href="https://www.linkedin.com/in/keith-public-profile/">Keith
      Noguiera</a>
  </div>
  <!-- <div class="cv-description">Designed, developed, and deployed interactive interface for operationalizing machine
      learning interpretability, published at CHI 2019.</div> -->

  <div class="cv-spacer" />

  <div class="cv-date-info">May '17 - Apr '15</div>
  <div><a href="http://2016.igem.org/"><b>International Genetically Engineered Machine (iGEM)</b></a>, Durham, NC</div>
  <div>
    <i>Undergraduate Research Assistant, <a href="https://bassconnections.duke.edu/">Bass Connections</a> &amp; <a href="https://lynchlab.pratt.duke.edu/#">Lynch
        Lab</a></i>
  </div>

  <div class="cv-description">
    Advisors: <a href="https://lynchlab.pratt.duke.edu/people/e-adim-moreb">Adim Moreb</a>, <a href="https://lynchlab.pratt.duke.edu/people/michael-lynch">Michael
      D Lynch</a>
  </div>
  <div class="cv-spacer" />

  <div class="pg-break" />
  <h2 id="publications">Publications</h2>

  <div class="cv-item">
    <div><a href="https://exbert.net/"><b>exBERT: A Visual Analysis of Transformer Models</b></a></div>
    <div>
      <a href="/"><span class="my-name">Benjamin Hoover</span></a>, <a href="http://hendrik.strobelt.com/">Hendrik
        Strobelt</a>, <a href="https://sebastiangehrmann.com/">Sebastian Gehrmann</a>
    </div>
  </div>

  <div><i>Association for Computational Linguistics: System Demonstrations (ACL). Online, 2020.</i></div>

  <div class="pub-misc">
    <a href="https://exbert.net/"> <i class="fas fa-link" aria-hidden="true" /> Project </a>
    <a href="https://exbert.net/exBERT.html"> <i class="fas fa-play" aria-hidden="true" /> Demo </a>
    <a href="https://www.aclweb.org/anthology/2020.acl-demos.22.pdf">
      <i class="far fa-file-pdf" aria-hidden="true" /> PDF
    </a>
    <a href="https://youtu.be/e31oyfo_thY"> <i class="fas fa-film" aria-hidden="true" /> Video </a>
    <a href="https://github.com/bhoov/exbert"> <i class="fas fa-code" aria-hidden="true" /> Code </a>
    <a style="cursor:pointer" onclick="toggleBibtex('_/papers/exbert')">
      <i class="fas fa-book" aria-hidden="true" /> BibTeX
    </a>
  </div>

  <div class="highlighter-rouge bibtex bibtex-wrapper" style="display: none;" id="_/papers/exbert">
    <div class="highlight">
      <!-- <pre>
        @inproceedings{hoover-etal-2020-exbert,
        title = "ex{BERT}: {A} {V}isual {A}nalysis {T}ool to {E}xplore {L}earned {R}epresentations in {T}ransformer {M}odels",
        author = "Hoover, Benjamin  and
          Strobelt, Hendrik  and
          Gehrmann, Sebastian",
        booktitle = "Proceedings of the 58th Annual Meeting of the Association for Computational Linguistics: System Demonstrations",
        month = jul,
        year = "2020",
        address = "Online",
        publisher = "Association for Computational Linguistics",
        url = "https://www.aclweb.org/anthology/2020.acl-demos.22",
        doi = "10.18653/v1/2020.acl-demos.22",
        pages = "187--196",
        }
    </pre> -->
    </div>
  </div>

  <div class="cv-spacer" />

  <div><a href="https://rxnmapper.ai/"><b>RXNMapper: Unsupervised Attention Guided Atom Mapping</b></a></div>
  <div>
    <a href="https://pschwllr.github.io/#">Philippe Schwaller</a>, <a href="/"><span class="my-name">Benjamin Hoover</span></a>,
    <a href="http://www.gdb.unibe.ch/">JL Reymond</a>, <a href="http://hendrik.strobelt.com/">Hendrik Strobelt</a>, <a
      href="https://researcher.watson.ibm.com/researcher/view.php?person=zurich-teo">Teodoro Laino</a>
  </div>

  <div><i>ChemRxiv Preprint, May 2020</i></div>

  <div class="pub-misc">
    <a href="http://rxnmapper.ai/"> <i class="fas fa-link" aria-hidden="true" /> Project </a>
    <a href="http://rxnmapper.ai/demo.html"> <i class="fas fa-play" aria-hidden="true" /> Demo </a>
    <a href="https://chemrxiv.org/articles/Unsupervised_Attention-Guided_Atom-Mapping/12298559">
      <i class="far fa-file-pdf" aria-hidden="true" /> PDF
    </a>
    <a href="https://vimeo.com/434757113"> <i class="fas fa-film" aria-hidden="true" /> Video </a>
    <a href="https://github.com/rxn4chemistry/rxnmapper"> <i class="fas fa-code" aria-hidden="true" /> Code </a>
    <a style="cursor:pointer" onclick="toggleBibtex('_/papers/rxnmapper')">
      <i class="fas fa-book" aria-hidden="true" /> BibTeX
    </a>
  </div>

  <div class="highlighter-rouge bibtex bibtex-wrapper" style="display: none;" id="_/papers/rxnmapper">
    <div class="highlight">
      <!-- <pre>
        @article{Schwaller2020Unsupervised,
        author = "Philippe Schwaller and Benjamin Hoover and Jean-Louis Reymond and Hendrik Strobelt and Teodoro Laino",
        title = "{Unsupervised Attention-Guided Atom-Mapping}",
        year = "2020",
        month = "5",
        url = "https://chemrxiv.org/articles/Unsupervised_Attention-Guided_Atom-Mapping/12298559",
        doi = "10.26434/chemrxiv.12298559.v1"
        }      
    </pre> -->
    </div>
  </div>

  <div class="cv-spacer" />

  <div>
    <a href="https://pubs.acs.org/doi/abs/10.1021/acssynbio.7b00174"><b>Managing the SOS Response for Enhanced
        CRISPR-Cas-Based Recombineering in E. coli through Transient Inhibition of Host RecA Activity</b></a>
  </div>
  <div>
    <a href="https://lynchlab.pratt.duke.edu/people/e-adim-moreb">Eirik Adim Moreb</a>, <a href="/"><span
        class="my-name">Benjamin Hoover</span></a>, <a href="https://yin.hms.harvard.edu/cv/cv.yaseen.adam.pdf">Adam
      Yaseen</a>, <a href="https://www.linkedin.com/in/nisavalyasevi/">Nisakorn Valyasevi</a>, <a
      href="https://www.linkedin.com/in/zoe-roecker-5a417b104/">Zoe Roecker</a>, <a
      href="https://www.linkedin.com/in/romel-menacho-melgar-0881b4a8/">Romel Menacho-Melgar</a>, <a
      href="https://lynchlab.pratt.duke.edu/people/michael-lynch">Michael D. Lynch</a>
  </div>

  <div><i>American Chemical Society: Synthetic Biology, 2017</i></div>

  <div class="pub-misc">
    <a href="https://pubs.acs.org/doi/pdf/10.1021/acssynbio.7b00174">
      <i class="far fa-file-pdf" aria-hidden="true" /> PDF
    </a>
    <a style="cursor:pointer" onclick="toggleBibtex('_/papers/reca')">
      <i class="fas fa-book" aria-hidden="true" /> BibTeX
    </a>
  </div>

  <div class="highlighter-rouge bibtex bibtex-wrapper" style="display: none;" id="_/papers/reca">
    <div class="highlight">
      <!-- <pre>
        @article{doi:10.1021/acssynbio.7b00174,
        author = {Moreb, Eirik Adim and Hoover, Benjamin and Yaseen, Adam and Valyasevi, Nisakorn and Roecker, Zoe and Menacho-Melgar, Romel and Lynch, Michael D.},
        title = {Managing the SOS Response for Enhanced CRISPR-Cas-Based Recombineering in E. coli through Transient Inhibition of Host RecA Activity},
        journal = {ACS Synthetic Biology},
        volume = {6},
        number = {12},
        pages = {2209-2218},
        year = {2017},
        doi = {10.1021/acssynbio.7b00174}, 
        note ={PMID: 28915012},
        URL = { https://doi.org/10.1021/acssynbio.7b00174 },
        eprint = { https://doi.org/10.1021/acssynbio.7b00174 }
        }
    </pre> -->
    </div>
  </div>

  <h2 id="talks">Talks</h2>

  <div><b>exBERT: Exploring Learned Embeddings and Attentions in Transformer Models</b></div>

  <div class="cv-date-info">July 2020</div>
  <div>ACL 2020 System Demonstrations</div>

  <div class="cv-date-info">Apr. 2020</div>
  <div>ICLR IBM Exposition Demos</div>

  <div class="cv-date-info">Dec. 2019</div>
  <div>NeurIPS 2019 Demonstrations</div>

  <div class="cv-spacer" />

  <div><b>RXNMapper: Unsupervised Attention Guided Atom Mapping</b></div>

  <div class="cv-date-info">July 2020</div>
  <div>ICML: ML Interpretability for Scientific Discovery Workshop &amp; IBM Exposition Demo</div>

  <div class="cv-spacer" />

  <div>
    <b>Using Matlab's <a
        href="https://www.mathworks.com/matlabcentral/fileexchange/46392-pattern-recognition-toolbox">PRT</a> to Accelerate
      Algorithm Development</b>
  </div>

  <div class="cv-date-info">July 2017</div>
  <div>Medtronic Diabetes R&amp;D</div>

  <div class="cv-spacer" />

  <h2 id="teaching">Teaching</h2>

  <div class="cv-date-info">Spring 2018</div>
  <div><a href="https://www.coursicle.com/duke/courses/ECE/681/"><b>Graduate Teaching Assistant</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

  <div>
    <a href="https://www.coursicle.com/duke/courses/ECE/681/">Pattern Recognition Technology</a>, Instructor: <a
      href="https://ece.duke.edu/faculty/patrick-wang">Patrick Wang</a>
  </div>

  <div class="cv-description">
    Design homeworks, supervise projects, and periodically teach Pattern Recognition Technology (ECE 681), a graduate
    course with 60 students enrolled.
  </div>

  <div class="cv-spacer" />

  <div class="cv-date-info">Spring 2018</div>
  <div><a href="/"><b>Graduate Teaching Assistant</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

  <div>
    <a href="/">Biopotential Amplifier Design (BME 590)</a>, Instructor: <a
      href="https://bme.duke.edu/faculty/jonathan-viventi">Jonathan Viventi</a>
  </div>

  <div class="cv-description">
    Supervised and graded capstone design projects in Biopotential Amplifier Design (BME 590) where students created a
    2-channel EEG reader
  </div>

  <div class="cv-spacer" />

  <div class="cv-date-info">Spring 2018</div>
  <div><a href="https://pratt.duke.edu/about/news/data-decision-sciences"><b>Graduate Teaching Assistant</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

  <div>
    <a href="https://pratt.duke.edu/about/news/data-decision-sciences">Fundamentals of Data Analysis and Decision
      Science (EGR 190L)</a>, Instructors: <a href="https://ece.duke.edu/faculty/stacy-tantum">Stacy Tantum</a>
    <a href="https://math.duke.edu/people/paul-l-bendich">Paul Bendich</a>
  </div>

  <div class="cv-description">
    Discussed curriculum planning, helped setup the IT infrastructure, held office hours, and graded exams for
    Fundamentals of Data Analysis and Decision Science (EGR 190L), a 25 student pilot course for <a
      href="https://bigdata.duke.edu/data">Duke's Data+ Program</a>
  </div>
  <div class="cv-spacer" />

  <div class="cv-date-info">Spring 2017</div>
  <div><a href="https://www.coursicle.com/duke/courses/BME/354L/"><b>Undergraduate Teaching Assistant</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

  <div>
    <a href="/">Introduction to Medical Instrumentation (BME 354L)</a>, Instructor: <a
      href="https://bme.duke.edu/faculty/jonathan-viventi">Jonathan Viventi</a>
  </div>

  <div class="cv-description">
    Prepared, supervised, and graded labs where students designed medical devices such as Ultrasound, ECGs, and Baby
    Incubators for Introduction to Medical Instrumentation (BME 354L)
  </div>

  <div class="cv-spacer" />

  <div class="cv-date-info">May '18 - Jan. '15</div>
  <div><a href="https://ece.duke.edu/undergrad/students/courses"><b>Undergraduate Teaching Assistant</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>
  <div>
    <a href="https://ece.duke.edu/undergrad/students/courses">Introduction to Electrical Circuits (ECE 110)</a>,
    Instructor: <a href="https://ece.duke.edu/faculty/stacy-tantum">Stacy Tantum</a>
  </div>

  <div class="cv-description">
    Graded homeworks, held weekly office hours, supervised labs, and tutored students in Introductory Circuits (ECE 110)
  </div>
  <div class="cv-spacer" />

  <div class="cv-date-info">May '17 - Jan. '16</div>
  <div><a href="https://boeingfellows.pratt.duke.edu/content/fellows"><b>Boeing Fellowship</b></a></div>
  <div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>
  <div>Supervisor: <a href="https://boeingfellows.pratt.duke.edu/member/rawls">Carmen Rawls</a></div>

  <div class="cv-description">Wrote STEM lesson plans to teach to high schools around the Durham area.</div>

  <div class="cv-spacer" />
</div>
