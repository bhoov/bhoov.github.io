<script>
  export let data;

  // add permalinks to the hook list so we can link to the posts.
  // const hooks = data.hookInterface.map((hook) => ({ ...hook, link: helpers.permalinks.hooks({ slug: hook.hook }) }));
</script>

<style>
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

<h1>Ben has a cv?</h1>

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

<div class="cv-left-date">May 2018</div>
<b>Master of Engineering: Electrical and Computer Engineering</b>
<div><a href="https://www.duke.edu/">Duke University</a>, Durham, NC</div>

<div class="cv-description">
  <div>GPA: 4.00/4.00, Emphasis on Big Data and Signal Processing</div>
</div>
<div class="cv-spacer" />

<div class="cv-left-date">May '17 - Aug. '13</div>
<div><b>B.S.E in Biomedical Engineering</b></div>
<div><a href="https://www.duke.edu/">Duke University</a>, Durham, NC</div>

<div class="cv-description">
  <div>GPA: 3.91/4.00, Magna Cum Laude, Emphasis on Electrobiology + Signal Processing</div>
</div>
<div class="cv-spacer" />

<h2 id="work-experience">Research Experience</h2>

<div class="cv-left-date">Present - Sep. '18</div>
<div><a href="https://www.research.ibm.com/artificial-intelligence/"><b>IBM Research</b></a>, Cambridge, MA</div>
<div>
  <i>Research Engineer, <a href="https://researcher.watson.ibm.com/researcher/view_group.php?id=5948">Visual AI Lab</a></i>
</div>
<div class="cv-description">
  Mentors: <a href="http://hendrik.strobelt.com/">Hendrik Strobelt</a>, <a href="http://www.mamartino.com/">Mauro
    Martino</a>
</div>

<!-- <div class="cv-description">Designed and developed interactive visualizations for data iteration in machine
    learning, published at CHI 2020.</div> -->

<div class="cv-spacer" />

<div class="cv-left-date">Summer 2017</div>
<div><a href="https://www.medtronicdiabetes.com/home"><b>Medtronic Diabetes</b></a>, Northridge, CA</div>
<div><i>Research Intern, Algorithms</i></div>
<div class="cv-description">
  Mentors: <a href="https://www.linkedin.com/in/peter-ajemba/">Peter Ajemba</a>, <a href="https://www.linkedin.com/in/keith-public-profile/">Keith
    Noguiera</a>
</div>
<!-- <div class="cv-description">Designed, developed, and deployed interactive interface for operationalizing machine
      learning interpretability, published at CHI 2019.</div> -->

<div class="cv-spacer" />

<div class="cv-left-date">May '17 - Apr '15</div>
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
    <a href="#"><span class="my-name">Benjamin Hoover</span></a>, <a href="http://hendrik.strobelt.com/">Hendrik
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
  <a href="https://pschwllr.github.io/#">Philippe Schwaller</a>, <a href="#"><span class="my-name">Benjamin Hoover</span></a>,
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
  <a href="https://lynchlab.pratt.duke.edu/people/e-adim-moreb">Eirik Adim Moreb</a>, <a href="#"><span
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

<div class="cv-left-date">July 2020</div>
<div>ACL 2020 System Demonstrations</div>

<div class="cv-left-date">Apr. 2020</div>
<div>ICLR IBM Exposition Demos</div>

<div class="cv-left-date">Dec. 2019</div>
<div>NeurIPS 2019 Demonstrations</div>

<div class="cv-spacer" />

<div><b>RXNMapper: Unsupervised Attention Guided Atom Mapping</b></div>

<div class="cv-left-date">July 2020</div>
<div>ICML: ML Interpretability for Scientific Discovery Workshop &amp; IBM Exposition Demo</div>

<div class="cv-spacer" />

<div>
  <b>Using Matlab's <a
      href="https://www.mathworks.com/matlabcentral/fileexchange/46392-pattern-recognition-toolbox">PRT</a> to Accelerate
    Algorithm Development</b>
</div>

<div class="cv-left-date">July 2017</div>
<div>Medtronic Diabetes R&amp;D</div>

<div class="cv-spacer" />

<h2 id="teaching">Teaching</h2>

<div class="cv-left-date">Spring 2018</div>
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

<div class="cv-left-date">Spring 2018</div>
<div><a href="#"><b>Graduate Teaching Assistant</b></a></div>
<div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

<div>
  <a href="#">Biopotential Amplifier Design (BME 590)</a>, Instructor: <a
    href="https://bme.duke.edu/faculty/jonathan-viventi">Jonathan Viventi</a>
</div>

<div class="cv-description">
  Supervised and graded capstone design projects in Biopotential Amplifier Design (BME 590) where students created a
  2-channel EEG reader
</div>

<div class="cv-spacer" />

<div class="cv-left-date">Spring 2018</div>
<div><a href="https://pratt.duke.edu/about/news/data-decision-sciences"><b>Graduate Teaching Assistant</b></a></div>
<div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

<div>
  <a href="https://pratt.duke.edu/about/news/data-decision-sciences">Fundamentals of Data Analysis and Decision Science
    (EGR 190L)</a>, Instructors: <a href="https://ece.duke.edu/faculty/stacy-tantum">Stacy Tantum</a>
  <a href="https://math.duke.edu/people/paul-l-bendich">Paul Bendich</a>
</div>

<div class="cv-description">
  Discussed curriculum planning, helped setup the IT infrastructure, held office hours, and graded exams for
  Fundamentals of Data Analysis and Decision Science (EGR 190L), a 25 student pilot course for <a
    href="https://bigdata.duke.edu/data">Duke's Data+ Program</a>
</div>
<div class="cv-spacer" />

<div class="cv-left-date">Spring 2017</div>
<div><a href="https://www.coursicle.com/duke/courses/BME/354L/"><b>Undergraduate Teaching Assistant</b></a></div>
<div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>

<div>
  <a href="#">Introduction to Medical Instrumentation (BME 354L)</a>, Instructor: <a
    href="https://bme.duke.edu/faculty/jonathan-viventi">Jonathan Viventi</a>
</div>

<div class="cv-description">
  Prepared, supervised, and graded labs where students designed medical devices such as Ultrasound, ECGs, and Baby
  Incubators for Introduction to Medical Instrumentation (BME 354L)
</div>

<div class="cv-spacer" />

<div class="cv-left-date">May '18 - Jan. '15</div>
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

<div class="cv-left-date">May '17 - Jan. '16</div>
<div><a href="https://boeingfellows.pratt.duke.edu/content/fellows"><b>Boeing Fellowship</b></a></div>
<div><i><a href="http://duke.edu">Duke University</a>, Durham, NC</i></div>
<div>Supervisor: <a href="https://boeingfellows.pratt.duke.edu/member/rawls">Carmen Rawls</a></div>

<div class="cv-description">Wrote STEM lesson plans to teach to high schools around the Durham area.</div>

<div class="cv-spacer" />
