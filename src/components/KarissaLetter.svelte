<script>
  import { onMount } from 'svelte';

  let hasAnsweredCorrectly = false;
  let guess = '';
  let correctAnswer = '150';

  $: {
    if (guess == correctAnswer) {
      hasAnsweredCorrectly = true;
    }
  }

  let timerId;
  let observer 
  let endNotice;
  let secRemaining = 10;
  function beginCountdown() {
    console.log('Beginning Countdown');
    timerId = setInterval(() => {
      secRemaining -= 1;
    }, 1000);
  }

  $: {endNotice && observer && observer.observe(endNotice);}

  $: {
    if (secRemaining <= 0) {
      timerId && clearInterval(timerId);
      secRemaining == 0;
    }
  }

  onMount(() => {
    const options = {
      root: null,
    };
    observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((e) => {
      if (e.isIntersecting) {
        beginCountdown();
      }
    });
  }, options);


  });
</script>

<style lang="postcss">
  .msg-wrapper {
    @apply text-lg;
    max-width: 700px;
    margin: auto;
    line-height: 1.5rem;
  }

  li {
    @apply mb-3;
  }
</style>

{#if hasAnsweredCorrectly}
  <div class="msg-wrapper">
    <div class="letter-contents">
      <h1 class="mb-8">Dear Karissa,</h1>
      <p>
        Happy 19th birthday to my no-longer-so-littlest sister. You have before you some of the most formative years of
        your life and you alone get to set the tone for it. Oh. My. 2020 has made this transition into college harder
        than I could have imagined. Given that you haven't really experienced normal college, I thought I could give you
        a leg up.
      </p>
      <p>
        Below I have recorded a non-exhaustive list of small wisdoms that I gathered through my experiences at Duke that
        I hope will serve you well at UNC, but many of these will not be really possible until the Covid crisis has
        settled and in person events return to normal... I hope it can be encouraging and somewhat helpful to you,
        though some of these are just commons sense.Good luck this semester! Love you!
      </p>
      <ul>
        <li>
          Take advantage of office hours. Find the TA/professor you like the best and hound them. They may even give you
          the answers to the homework if you're there long enough, just to get rid of you.
        </li>
        <li>
          Don't buy textbooks unless you have to. Most problem set textbooks can be shared with friends / downloaded
          free online. In my experience, textbooks offer a lot of information and it is easier to know the important
          things by being highly engaged in lecture/office hours.
        </li>
        <li>
          Form all the study buddy parties. This helps balance the social life and gets things done at the same time.
          Some of your best friends are forged in the suffering of course work.
        </li>
        <li>
          The best study times are the quietest times on campus (which are typically morning hours). Having trouble
          getting that perfect spot in the library? Go at 8 am. It'll be empty.
        </li>
        <li>
          Choose study spaces that have an outdoor / large indoor space where you can pace in circles. I find this
          really helps to clear my head, and it makes it very easy to take phone calls in between study focus sessions.
        </li>
        <li>
          Meet every professor after one of the first few classes. I'm always more motivated to participate in class
          when I know the lecturer at least recognizes me.
        </li>
        <li>
          Ask questions in class. Especially the silly/stupid sounding ones. I guarantee you are not the only person
          with that question. Strategically time these questions when the professor is starting to build speed in
          complicated topics and help everyone learn better.
        </li>
        <li>
          Sit in the front of the class. It helps you be engaged. It helps the professor get to know you. It helps you
          get recommendation letters when you need it. All good things.
        </li>
        <li>
          Forgot to turn in an assignment? It happens. Talk with the TA or the professor (whoever seems more lenient)
          and they may let it slide or encourage you in other ways. Don't stress about it, the professors want the
          motivated to succeed.
        </li>
        <li>
          Always take notes and start homeworks on pen and paper. It may be slower at first, but just remember -- the
          greatest inventions in history started on just pen and paper. If you can get the confidence to solve hard
          problems with just a leaf of paper and some ink you are in a better state than most graduates in America
        </li>
        <li>
          Aim to do the homework immediately after it is assigned. Sometimes, this means sitting in the classroom until
          the next class arrives. But this way you can instantly get a feel for how long the assignment will take, and
          sometimes the professor will even help you with questions before he/she moves on to another appointment.
        </li>
        <li>
          NEVER be the first one to turn in a test. Using the extra time to check your work or draw funny pictures for
          the TA is better than making stupid mistakes and alienating your friends.
        </li>
        <li>
          Don't seek out extra curriculars with abandon. Let friends/interests/desire for challenge entice you, then
          commit with both feet. Extracurriculars can be a HUGE time sink, you may as well like the people involved.
        </li>
        <li>
          If you ever feel lonely on campus, just remember the 'open door' policy. Someone may be friendly enough to pop
          in and introduce themself if you make eye contact with them enough
        </li>
        <li>
          The friendliest people on campus are typically the cleaning crew, the kitchen staff, and sometimes even the
          lab techs. Make some friends and maybe even get some free fries.
        </li>
        <li>
          If you ever have the chance to turn your course project into a website (HTML file), do it. Companies/grad
          schools/internships DIG when students have their own portfolio, even if the projects on it were general class
          assignments
        </li>
        <li>
          Get a credit card -- many credit card companies have special deals for college students (e.g., <a
            href="https://www.discover.com/credit-cards/student/"
            target="_blank">Discover Cash Back</a>) and you can start building your credit score early just by having
          one in your pocket
        </li>
        <li>
          Summer activities can either be the most memorable or the most depressing parts of college. In this world,
          companies and grad schools expect students to have considerable work experience. It's always worth applying
          for internships (to see if you actually like the field you are pursuing), but don't be discouraged if you
          can't find one. I recommend choosing at least 1 summer to be full-time intensive language study -- you will
          never get that opportunity again. Or travel to see the world, or take a normal job near home to be with
          family. I don't recommend taking classes unless it is needed for graduating. It's really easy to get burnt out
          on classes.
        </li>
        <li>
          Stay humble, stay diligent, stay patient, stay hopeful. Season your words with grace and kindness, do not
          complain. This last point is very difficult at times, even still for me. However, we are called to be set
          apart, not in name only, but also in our hearts, actions, thoughts, and words.
        </li>
      </ul>
      <p>
        I'm really proud of the way you worked through the difficulties of last semester. You will learn many of your
        own things that you can add to this list, or you may find that the majority of the above is terrible advice. If
        so, please tell me so I can manage what I originally intended to do (that is, to fit my advice on a notecard...
        Finding succinct principles is really hard).
      </p>
    </div>

    <div bind:this={endNotice}>
      <div class="text-3xl w-full text-center p-4 border-2 mt-8 text-red-700">
        <p>This page will self destruct in <span class="">{secRemaining}</span></p>
      </div>
    </div>

    {#if secRemaining <= 0}
      <p class="text-2xl w-full text-center">Just kidding. That would take too long to code.</p>
    {/if}

    <p>Love, Benji</p>
  </div>
{:else}
  <div class="m-auto">
    <h1>What is the biggest number?</h1>
    <input type="text" placeholder="Enter answer here" bind:value={guess} />
  </div>
{/if}
