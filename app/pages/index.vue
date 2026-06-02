<script setup lang="ts">
import Star from '~/assets/images/star.svg'
import IconHandWaving from '~/assets/images/icons/phosphor/hand-waving.svg'
import LogoAlphaOmega from '~/assets/images/logos/alphaomega.svg'
import LogoChaoss from '~/assets/images/logos/chaoss.svg'
import LogoCncf from '~/assets/images/logos/cncf.svg'
import LogoCycloneDx from '~/assets/images/logos/cyclonedx.svg'
import LogoEcosystems from '~/assets/images/logos/ecosystems.svg'
import LogoGatesFoundation from '~/assets/images/logos/gatesfoundation.svg'
import LogoGitHub from '~/assets/images/logos/github.svg'
import LogoIntel from '~/assets/images/logos/intel.svg'
import LogoLibrariesIo from '~/assets/images/logos/librariesio.svg'
import LogoLinuxFoundation from '~/assets/images/logos/linuxfoundation.svg'
import LogoNpmx from '~/assets/images/logos/npmx.svg'
import LogoNuxt from '~/assets/images/logos/nuxt.svg'
import LogoOpenSsf from '~/assets/images/logos/openssf.svg'
import LogoOse from '~/assets/images/logos/ose.svg'
import LogoOsp from '~/assets/images/logos/osp.svg'
import LogoThanksDev from '~/assets/images/logos/thanksdev.svg'
import LogoTidelift from '~/assets/images/logos/tidelift.svg'
import LogoVite from '~/assets/images/logos/vite.svg'
import LogoVmware from '~/assets/images/logos/vmware.svg'

useSeoMeta({
  ogDeterminer: 'the',
})

const { data: posts } = await useFetch('/api/content/featured')
</script>

<template>
  <div class="container">
    <section>
      <h1 class="visually-hidden">
        Software Stewardship Lab
      </h1>
      <div class="hero">
        <h2>
          <small>A new non-profit applied research lab</small>
          <hr class="hr--short">
          We ensure the stability of the Open Source ecosystem we all rely on.
        </h2>
      </div>
      <div class="subhero">
        <div class="feature-set">
          <div class="feature">
            <h2>Mission</h2>
            <p>
              We safeguard global tech infrastructure by caring for the Open Source technology it relies upon. We
              develop ways to make the Open Source ecosystem more secure, sustainably funded, and responsibly governed.
            </p>
            <p>
              We do this to benefit the public and protect critical services that depend on Open Source, like
              transportation, healthcare and the internet.
            </p>
          </div>
          <div class="feature">
            <h2>Strategy</h2>
            <p>
              We identify threats to the Open Source ecosystem and mitigate them by producing software, APIs, research
              reports, and peer-reviewed papers.
            </p>
            <p>
              Our work on supply chain transparency enables developers to identify and support vulnerable projects.
            </p>
            <p>
              And our work on sustainable funding and governance has helped maintainers avoid burnout, so they can
              continue their critical work.
            </p>
          </div>
        </div>
        <figure class="postcard">
          <img
            class="postcard__main"
            src="/images/AltCtrOrg-Event-115@1400px.webp"
            alt="Vlad presenting in front of an audience"
            width="1400"
            height="933"
            fetchpriority="high"
          >
          <figcaption>
            Vlad speaking at AltCtrlOrg in Basel, Switzerland
            &middot;
            <span class="text-pale">Photo by Kostas&nbsp;Fryganiotis</span>
          </figcaption>
        </figure>
      </div>
    </section>
  </div>
  <section class="section--contrasting">
    <Star class="squiggle squiggle--c" />
    <Star class="squiggle squiggle--d" />
    <div class="container">
      <h2 class="big-heading">
        Our Team
      </h2>
      <div class="members">
        <Member
          name="Vlad-Stefan Harbuz"
          title="Executive Director, Researcher"
          image-url="/images/people/vlad@300px.webp"
          url="https://vlad.website"
        >
          <p>
            Director of the
            <a href="https://opensourcepledge.com">Open Source Pledge</a>,
            which has raised $7,156,281 for maintainers.
            <a href="https://thanks.dev">thanks.dev</a> core developer.
            Helped build software used by the
            <a href="https://gatesfoundation.org">Gates Foundation</a>
            to allocate $1B in healthcare funding.
          </p>
        </Member>
        <Member
          name="Andrew Nesbitt"
          title="Non-Executive Director, Researcher"
          image-url="/images/people/andrew@300px.webp"
          url="https://nesbitt.io"
        >
          <p>
            Creator of leading Open Source intelligence providers
            <a href="https://ecosyste.ms">ecosyste.ms</a>
            and
            <a href="https://libraries.io">libraries.io</a>.
            Organiser of the FOSDEM
            <a href="https://fosdem.org/2026/schedule/track/package-management/">Package Management devroom</a>.
            Previously an engineer at
            <a href="https://github.com">GitHub</a>
            and
            <a href="https://tidelift.com">Tidelift</a>.
          </p>
        </Member>
        <Member
          name="Miranda Heath"
          title="Non-Executive Director, Researcher"
          image-url="/images/people/miranda@300px.webp"
          url="https://mirandaheath.website"
        >
          <p>
            BPS award-winning psychologist and author of the to-date most comprehensive
            <a href="https://opensourcepledge.com/blog/burnout-in-open-source-a-structural-problem-we-can-fix-together/">report on burnout in Open Source</a>.
            PhD researcher in moral psychology and philosophy at the University of Edinburgh.
          </p>
        </Member>
        <Member
          name="Daniel Roe"
          title="Non-Executive Director"
          image-url="/images/people/daniel@300px.webp"
          url="https://roe.dev"
        >
          <p>
            Leader of globally-used web framework <a href="https://nuxt.com/">Nuxt</a>.
            Steward of package manager frontend <a href="https://npmx.dev">npmx</a>.
            Regular keynote speaker. Microsoft MVP, Google GDE, and GitHub Star.
          </p>
        </Member>
        <Member
          name="Dawn Foster"
          title="Non-Executive Director"
          image-url="/images/people/dawn@300px.webp"
          url="https://fastwonder.com/"
        >
          <p>
            Board member of <a href="https://chaoss.community/">CHAOSS</a> and <a href="https://openuk.uk/">OpenUK</a>.
            Previous open source leadership positions at <a href="https://www.intel.com/">Intel</a>, <a href="https://www.vmware.com/">VMware</a>, and <a href="https://www.puppet.com/">Puppet</a>.
            <a href="https://fastwonderblog.com/academic/">PhD</a> using metrics to study the Linux kernel.
          </p>
        </Member>
        <Member
          name="Matias Capeletto"
          title="Non-Executive Director"
          image-url="/images/people/patak@300px.webp"
          url="https://patak.cat"
        >
          <p>
            Steward of <a href="https://npmx.dev">npmx</a>.
            Core developer of foundational web development tools used by millions, such as
            <a href="https://vite.dev/">Vite</a>,
            <a href="https://vitest.dev/">Vitest</a>
            and
            <a href="https://e18e.dev/">e18e</a>.
            Previously at <a href="https://stackblitz.com/">StackBlitz</a>.
          </p>
        </Member>
        <Member
          name="Mike McQuaid"
          title="Adviser"
          image-url="/images/people/mike@300px.webp"
          url="https://mikemcquaid.com"
        >
          <p>
            CTPO at <a href="https://www.getadministrate.com/">Administrate</a>.
            Project Leader of <a href="https://brew.sh/">Homebrew</a>.
            Former <a href="https://github.com">GitHub</a> Principal Engineer (#232).
            Author of <a href="https://www.manning.com/books/git-in-practice">Git in Practice</a>.
          </p>
        </Member>
      </div>
      <h2 class="big-heading">
        Our Experience
      </h2>
      <div class="logowall-group">
        <span>In leadership roles</span>
        <div class="logowall">
          <a
            class="logo plain-link"
            target="_blank"
            href="https://opensourcepledge.com"
          ><LogoOsp
            style="padding-block: 2px;"
            aria-label="The Open Source Pledge logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://endowment.dev"
          ><LogoOse
            aria-label="The Open Source Endowment logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://thanks.dev"
          ><LogoThanksDev
            aria-label="The thanks.dev logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://ecosyste.ms"
          ><LogoEcosystems
            aria-label="The ecosyste.ms logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://libraries.io"
          ><LogoLibrariesIo
            aria-label="The libraries.io logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://chaoss.community/"
          ><LogoChaoss
            aria-label="The CHAOSS logo"
            style="padding-block: 8px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://nuxt.com/"
          ><LogoNuxt
            aria-label="The Nuxt logo"
            style="padding-block: 8px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://vite.dev/"
          ><LogoVite
            aria-label="The Vite logo"
            style="padding-block: 10px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://npmx.dev/"
          ><LogoNpmx
            src="/images/logos/npmx.svg"
            aria-label="The npmx logo"
            style="padding-block: 5px;"
            width="104"
            height="40"
          /></a>
        </div>
      </div>
      <div class="logowall-group">
        <span>As contributors</span>
        <div class="logowall">
          <a
            class="logo plain-link"
            target="_blank"
            href="https://www.gatesfoundation.org/"
          ><LogoGatesFoundation
            aria-label="The Gates Foundation logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://intel.com"
          ><LogoIntel
            aria-label="The Intel logo"
            style="padding-block: 6px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://www.vmware.com/"
          ><LogoVmware
            aria-label="The VMware logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://github.com"
          ><LogoGitHub
            aria-label="The GitHub logo"
            style="padding-block: 8px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://tidelift.com"
          ><LogoTidelift
            aria-label="The Tidelift logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://alpha-omega.dev/"
          ><LogoAlphaOmega
            aria-label="The Alpha Omega logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://openssf.org/"
          ><LogoOpenSsf
            aria-label="The OpenSSF logo"
            style="padding-block: 3px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://www.cncf.io/"
          ><LogoCncf
            aria-label="The CNCF logo"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://www.linuxfoundation.org/"
          ><LogoLinuxFoundation
            aria-label="The Linux Foundation logo"
            style="padding-block: 5px;"
            width="104"
            height="40"
          /></a>
          <a
            class="logo plain-link"
            target="_blank"
            href="https://cyclonedx.org/"
          ><LogoCycloneDx
            aria-label="The CycloneDX logo"
            width="104"
            height="40"
          /></a>
        </div>
      </div>
    </div>
  </section>
  <section>
    <h2 class="big-heading">
      Featured Posts
    </h2>
    <PostList :posts="posts" />
  </section>
  <div class="container">
    <section>
      <h2 class="big-heading">
        Values
      </h2>
      <div class="value">
        <h3 class="smcp">
          Public good
        </h3>
        <p>
          Our projects must provide a clear benefit to the public; and not put the public at disproportionate risk of
          harm, eg through drastic environmental consequences or the creation of monopolies.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Public access
        </h3>
        <p>
          All our research outputs are accessible and usable by all. This means Open Source code, open data, and open
          access research papers.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Systemic improvements
        </h3>
        <p>
          We aim for widely-applicable systemic solutions, instead of fixes for particular technologies. Our goal is
          to improve the software ecosystem for current and future developers, not to help current developers shape
          themselves to fit a bad system.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Interdisciplinarity
        </h3>
        <p>
          Our work is rooted in software, but we also address the social, ethical and policy dimensions of Open
          Source. This includes responsible governance, healthy communities, good working conditions and respect.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Decentralisation
        </h3>
        <p>
          We promote sharing and distributing power over technology. We want users to be able to shape the tech they
          use so that it meets their needs and works in their best interests.
        </p>
      </div>
      <div class="value">
        <h3 class="smcp">
          Interdependence
        </h3>
        <p>
          We aim to advance public knowledge about the webs of interdependence that constitute our global tech
          infrastructure; about how the tech we have today is made possible by thousands of developers collaborating
          openly.
        </p>
      </div>
    </section>
    <section>
      <div class="cta">
        <h2>Want to work together?</h2>
        <NuxtLink
          to="/contact"
          class="button"
        >Say hi<IconHandWaving class="icon" /></NuxtLink>
      </div>
    </section>
  </div>
</template>

<style scoped>
.hero {
  margin-block: 50px;
  @media (max-width: 900px) {
    margin-top: 0;
  }
  h2 {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
    text-wrap: balance;
    small {
      display: block;
      font-family: var(--font-family-sans);
      font-size: var(--font-size-m);
      line-height: var(--line-height-m);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
    }
    hr {
      margin: 10px 0;
      border-color: var(--color-blue);
    }
  }
}
.subhero {
  display: flex;
  flex-direction: column;
  gap: 0;
  @media (max-width: 900px) {
    flex-direction: column-reverse;
    .postcard {
      margin-top: 0;
      margin-bottom: 40px;
      figcaption {
        display: none;
      }
    }
  }
}
.postcard {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 15px;
  margin-top: 60px;
  margin-bottom: 0;
  .postcard__main {
    width: auto;
    height: auto;
    border-radius: var(--border-radius-s);
    transform: rotate(2deg);
  }
  figcaption {
    position: relative;
    z-index: 10;
    top: -20px;
    border-radius: var(--border-radius-s);
  }
}
.feature-set {
  display: flex;
  gap: 50px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 30px;
  }
}
.feature {
  flex: 1;
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  h2 {
    font-family: var(--font-family-sans);
    font-variant-caps: small-caps;
    font-feature-settings: "smcp";
    text-transform: lowercase;
  }
}
.logowall-group {
  display: flex;
  gap: 30px;
  margin-top: 30px;
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 5px;
    margin-top: 20px;
  }
  & > span {
    flex-basis: 200px;
    font-family: var(--font-family-sans);
    font-variant-caps: small-caps;
    font-feature-settings: "smcp";
    text-transform: lowercase;
    @media (max-width: 900px) {
      flex-basis: unset;
    }
  }
  & > .logowall {
    flex: 1;
  }
}
.logowall {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(120px, 1fr));
  gap: 10px;
  .logo {
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 15px;
    background: var(--color-beige-xpale);
    border: 1px solid var(--color-beige-pale);
    border-radius: var(--border-radius-s);
    transition: background-color 200ms;
    &:hover {
      background: var(--color-beige-pale);
    }
    svg {
      height: 35px;
      opacity: 0.9;
    }
  }
}
.members {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(340px, 1fr));
  row-gap: 20px;
  column-gap: 30px;
  margin-block: 30px;
}
.value {
  margin: 1rem 0;
  padding: 15px;
  background: var(--color-beige-xpale);
  border-radius: var(--border-radius-s);
  h3 {
    font-family: var(--font-family-sans);
    font-size: var(--font-size-l);
    line-height: var(--line-height-l);
  }
  p {
    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
  }
}
</style>
