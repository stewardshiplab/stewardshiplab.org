<script setup lang="ts">
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg'
</script>

<template>
  <div class="container">
    <h1 class="page-title">Support impactful applied Open Source research</h1>
    <div class="sponsor-hero">
      <img alt="Daniel Roe speaking in front of a very large screen" src="/images/daniel-talk@1400px.webp">
    </div>
    <h2>Why sponsor the Stewardship Lab?</h2>
    <div class="usps">
      <div class="usp">
        <h3>Improve the ecosystem you rely on</h3>
        <hr>
        <p>
          Without sustainable stewardship, the Open Source tech you rely on can go away, or worse, introduce
          vulnerabilities to your code. That's bad news for your organisation. We can help.
        </p>
      </div>
      <div class="usp">
        <h3>Signal thought leadership to customers</h3>
        <hr>
        <p>
          Give customers another reason to choose you over their competitors by positioning yourself as a thought
          leader that sees issues in the ecosystem before they happen, and does something to help.
        </p>
      </div>
      <div class="usp">
        <h3>Show prospective employees you care about Open Source</h3>
        <hr>
        <p>
          We've seen it time and time again: developers care about joining companies that grok Open Source. Supporting
          sustainable stewardship is one way for you to attract the best talent.
        </p>
      </div>
    </div>
    <div class="sponsor-cta">
      <h3>Want to sponsor our work?</h3>
      <a class="button button--cta" href="/contact">
        Get in touch<IconCaretRightBold class="icon icon--l" />
      </a>
      <small>Open Collective donations coming in July</small>
    </div>
    <hr>
    <h2>Sponsorship Tiers</h2>
    <div class="tiers">
      <SponsorshipTier name="Advising Patron" :price="90000">
        <ul>
          <li>
            A seat on our advisory board
            <small>
              This substantial advisory role will allow your company regular access to our directors' meetings
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Consulting Patron" :price="60000">
        <ul>
          <li>
            Participate in a quarterly call with our directors
            <small>
              This gives you an opportunity to make suggestions for our future research
            </small>
          </li>
          <li>
            10 total hours of consultation sessions
            <small>
              Our researchers will help your team with any questions regarding engagement with Open Source, supply chain
              issues, and other areas we have expertise in
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Participating Patron" :price="40000">
        <ul>
          <li>
            Participate in a yearly call with our directors
            <small>
              This gives you an opportunity to make suggestions for our future research
            </small>
          </li>
          <li>
            5 hours of consultation sessions
            <small>
              Our researchers will help your team with any questions regarding engagement with Open Source, supply chain
              issues, and other areas we have expertise in
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Sustaining Patron" :price="25000">
        <ul>
          <li>
            A press release about your company's Open Source involvement
            <small>
              We will co-author and co-publish a press release highlighting what your company is doing for the Open
              Source community, and why you're an innovator in this space
            </small>
          </li>
          <li>
            Your logo on our research papers
            <small>
              We will feature your logo on all our self-published research papers (ie, excluding papers published in
              journals)
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Associate Patron" :price="5000">
        <ul>
          <li>
            Your logo on our website
            <small>
              We will display your logo on our list of sponsors
            </small>
          </li>
          <li>
            A <em>Software Stewardship Lab Patron</em> badge
            <small>
              Show off your support for Open Source sustainability by displaying this badge on your website and in
              marketing materials
            </small>
          </li>
        </ul>
      </SponsorshipTier>
      <SponsorshipTier name="Supporting Patron">
        <ul>
          <li>
            Your name on our website
            <small>You will be permanently shown on our list of past sponsors</small>
          </li>
        </ul>
      </SponsorshipTier>
    </div>
    <hr>
    <h2>Frequently asked questions</h2>
    <div class="faq-item">
      <h3>Are donations from individuals welcome? Are one-time donations welcome?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Yes! We are very grateful for donations received from individuals, and for one-time donations. Every little
          bit helps us do our research. We'll be happy to feature your name in our “other sponsors” section.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Are donations tax deductible?</h3>
      <hr class="hr--short">
      <div>
        <p>
          No. To be able to use our funds most efficiently, we made the choice to incorporate as a UK non-profit company
          limited by guarantee, which does not have tax-exempt status.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>Can I pay by bank transfer?</h3>
      <hr class="hr--short">
      <div>
        <p>
          Of course. <a href="/contact">Contact us</a> and we'll send you our bank details.
        </p>
      </div>
    </div>
    <div class="faq-item">
      <h3>How long do benefits last?</h3>
      <hr class="hr--short">
      <div>
        <p>
          All benefits last while you have an active yearly sponsorship. There's one exception: one-time donations are
          permanently featured in our “other donors” section.
        </p>
      </div>
    </div>
  </div>
</template>

<style scoped>
h1.page-title {
  @media (max-width: 900px) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
}
</style>
<style>
.sponsor-hero {
  img {
    border-radius: var(--border-radius-s);
  }
}
.usps {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(180px, 1fr));
  gap: 20px;
  margin-block: 40px;
  .usp {
    position: relative;
    padding: 15px;
    border-radius: var(--border-radius-s);
    background:
      url(/images/star-for-bg.svg),
      var(--color-beige-xpale);
    background-repeat: no-repeat;
    background-position: 120% -15%;
    background-size: 110px 110px;
    h3 {
      font-family: var(--font-family-sans);
      font-size: var(--font-size-m);
      line-height: var(--line-height-m);
      font-weight: 500;
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      text-wrap: balance;
    }
    hr {
      max-width: 40px;
      margin: 10px 0;
      border-color: var(--color-blue);
      border-width: 3px;
    }
    p {
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
    }
  }
}
.sponsor-cta {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  margin-top: 60px;
  margin-bottom: 40px;
  h3 {
    margin: 0;
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
  }
  small {
    color: var(--color-text-pale);
  }
}
.tiers {
  display: flex;
  flex-direction: column;
  gap: 20px;
  margin-block: 30px;
  @media (max-width: 900px) {
    gap: 30px;
  }
}
.faq-item {
  margin-block: 30px;
  background: var(--color-beige-xpale);
  border-radius: var(--border-radius-s);
  padding: 15px;
  h3 {
    margin: 0;
    border-top-left-radius: var(--border-radius-s);
    border-top-right-radius: var(--border-radius-s);
    font-family: var(--font-family-sans);
    font-weight: 500;
    color: var(--color-text);
  }
  hr {
    max-width: 40px;
    margin: 10px 0;
    border-color: var(--color-blue);
    border-width: 3px;
  }
  & > div {
    padding: 5px 0;
  }
}
</style>
