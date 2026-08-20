<script setup lang="ts">
import Logo from '~/assets/images/logo.svg';
import Star from '~/assets/images/star.svg';
import LesserArms from '~/assets/images/lesser-arms.svg';
import IconOpenCollective from '~/assets/images/icons/opencollective.svg';
import IconBluesky from '../components/IconBluesky.vue';
import IconMastodon from '~/assets/images/icons/mastodon.svg';
import IconDiscord from '~/assets/images/icons/discord.svg';
import IconList from '~/assets/images/icons/phosphor/list.svg';
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg';
import IconHandWaving from '~/assets/images/icons/phosphor/hand-waving.svg';
import LogoStatichost from '~/assets/images/logos/statichost.svg';
import { debounceLeading } from '../utils/misc.ts';

const isNavOpen = ref(false);

const closeNav = debounceLeading(() => {
  isNavOpen.value = false;
}, 100);

const toggleNav = debounceLeading(() => {
  isNavOpen.value = !isNavOpen.value;
}, 100);

const route = useRoute();
</script>

<template>
  <div class="page-container" id="top">
    <div class="squiggles">
      <Star class="squiggle squiggle--a" />
      <Star class="squiggle squiggle--b" />
    </div>
    <header class="site-header">
      <div class="container container--narrow">
        <div class="header-container">
          <div class="header-logo">
            <NuxtLink @click="closeNav" to="/" class="plain-link">
              <Logo aria-label="Software Stewardship Lab" width="240" height="51" />
            </NuxtLink>
          </div>
          <nav class="desktop-nav">
            <NuxtLink class="plain-link" to="/projects">
              Projects<IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink class="plain-link" to="/reports">
              Reports<IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink class="plain-link" to="/ideas">
              Ideas<IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink class="plain-link" to="/media">
              Media<IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink class="plain-link sponsor-button" to="/sponsor">
              Sponsor<IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink class="plain-link" to="/contact">
              <IconHandWaving class="icon" />
            </NuxtLink>
          </nav>
          <div class="mobile-nav-trigger">
            <button type="button" class="plain-button" @click="toggleNav" aria-label="Open menu">
              <IconList width="28" height="28" />
            </button>
          </div>
          <nav class="mobile-nav" v-show="isNavOpen">
            <NuxtLink @click="closeNav" class="plain-link" to="/reports">
              <div class="mobile-nav__name">Reports</div><IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink @click="closeNav" class="plain-link" to="/tools">
              <div class="mobile-nav__name">Tools</div><IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink @click="closeNav" class="plain-link" to="/ideas">
              <div class="mobile-nav__name">Ideas</div><IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink @click="closeNav" class="plain-link" to="/media">
              <div class="mobile-nav__name">Media</div><IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink @click="closeNav" class="plain-link" to="/sponsor">
              <div class="mobile-nav__name">Sponsor</div><IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
            <NuxtLink @click="closeNav" class="plain-link" to="/contact">
              <div class="mobile-nav__name">Contact<IconHandWaving class="icon icon--white" /></div>
              <IconCaretRightBold class="icon icon--s" />
            </NuxtLink>
          </nav>
        </div>
      </div>
      <NoscriptNav />
    </header>
    <a
      href="/ideas/a-research-lab-for-open-source"
      class="notice plain-link"
      v-if="route.path != '/ideas/a-research-lab-for-open-source/' && route.path != '/ideas/a-research-lab-for-open-source'"
    >
      <div class="container">
        <div class="notice-parts">
          <div>
            <strong>We've launched<em>!</em></strong>&thinsp;
            Read our announcement.
          </div>
          <IconCaretRightBold class="icon icon--s icon--white" />
        </div>
      </div>
    </a>
    <main>
      <slot />
    </main>
    <footer class="site-footer">
      <div class="container">
        <div class="footer-items">
          <div class="footer-access">
            <a href="#top" class="plain-link text-xs">Back to top ↑</a>
          </div>
          <div class="footer-logo">
            <Logo width="250" aria-label="Software Stewardship Lab" />
          </div>
          <div class="footer-links">
            <h2>Find us on</h2>
            <a
              href="https://opencollective.com/stewardshiplab"
              class="social-link"
              target="_blank"
            >
              <IconOpenCollective width="28" height="28" /> Open Collective
            </a>
            <a
              href="https://bsky.app/profile/stewardshiplab.org"
              class="social-link bluesky-flutter"
              target="_blank"
            >
              <IconBluesky /> Bluesky
            </a>
            <a
              href="https://fosstodon.org/@stewardshiplab"
              class="social-link"
              target="_blank"
            >
              <IconMastodon width="28" height="28" /> Mastodon
            </a>
            <a
              href="https://discord.gg/2GNQHcKmcH"
              class="social-link"
              target="_blank"
            >
              <IconDiscord width="28" height="28" /> Discord
            </a>
          </div>
          <div class="footer-links">
            <h2>Resources</h2>
            <a
              href="https://find-and-update.company-information.service.gov.uk/company/SC893294/filing-history/MzUyNjQ3NTMwNWFkaXF6a2N4/document?format=pdf&download=0"
              target="_blank"
            >Articles of Incorporation</a>
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="/cookie-policy">Cookie Policy</a>
            <a href="/brand">Brand</a>
            <a href="https://codeberg.org/stewardshiplab/stewardshiplab.org" target="_blank">Website Source</a>
          </div>
          <div class="footer-links">
            <h2>Hosting Sponsor</h2>
            <a href="https://www.statichost.eu/" target="_blank">
              <LogoStatichost aria-label="statichost.eu" />
            </a>
          </div>
        </div>
        <div class="footer-imprint">
          <LesserArms width="40" height="40" />
          <div>
            Scottish non-profit <a
              href="https://find-and-update.company-information.service.gov.uk/company/SC893294"
              target="_blank"
            >SC893294</a><br>
            58 Morrison St, Edinburgh, EH3 8BP, UK
          </div>
        </div>
      </div>
    </footer>
  </div>
</template>

<style>
header.site-header {
  --header-height: 72px;
  position: relative;
  border-bottom: 1px solid var(--color-beige-pale);
  .header-container {
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: 30px;
    min-height: var(--header-height);
    padding: 10px 0;
  }
  .header-logo {
    a {
      display: block;
      img, svg {
        width: 240px;
        height: auto;
      }
    }
  }
  nav.desktop-nav {
    display: flex;
    gap: 5px;
    @media (max-width: 800px) {
      display: none;
    }
    .sponsor-button {
      border: 2px solid var(--color-blue);
      background: transparent;
      &:hover {
        color: white;
        background: var(--color-blue);
        .icon.icon--s {
          path {
            fill: white;
            stroke: white;
          }
        }
      }
    }
    a {
      display: flex;
      align-items: center;
      padding-inline: 12px;
      padding-block-start: 6px;
      padding-block-end: 8px;
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: 500;
      color: var(--color-blue);
      border-radius: var(--border-radius-s);
      .icon.icon--s {
        position: relative;
        top: 1px;
        margin-left: 1px;
        path {
          fill: var(--color-blue);
          stroke: var(--color-blue);
        }
      }
      &:hover {
        background: var(--color-beige-pale);
      }
    }
  }
  .mobile-nav-trigger {
    display: flex;
    align-items: center;
    justify-content: center;
    @media (min-width: 801px) {
      display: none;
    }
    button {
      padding: 10px;
    }
  }
  nav.mobile-nav {
    position: absolute;
    top: var(--header-height);
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 100;
    display: flex;
    flex-direction: column;
    height: calc(100vh - var(--header-height));
    background: var(--color-blue);
    &.mobile-nav--compact {
      position: static;
      height: unset;
    }
    @media (min-width: 801px) {
      display: none;
    }
    .mobile-nav__name {
      display: flex;
      align-items: center;
      gap: 10px;
    }
    a {
      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 15px;
      min-height: var(--header-height);
      padding: 15px 15px;
      border-bottom: 1px solid var(--color-blue-light);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      font-weight: 500;
      line-height: 1;
      color: white;
      .icon.icon--s {
        position: relative;
        top: 1px;
        margin-left: 1px;
        path {
          fill: white;
          stroke: white;
        }
      }
    }
  }
}

a.notice {
  display: block;
  padding-block: 10px;
  background: var(--color-blue);
  color: white;
  font-size: var(--font-size-xs);
  line-height: 1;
  &:hover {
    background: var(--color-blue-dark);
  }
  .notice-parts {
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 10px;
  }
}

main {
  margin-block: 40px;
  @media (max-width: 900px) {
    margin-block: 30px;
  }
}

footer.site-footer {
  margin-top: 20px;
  padding-top: 40px;
  padding-bottom: 40px;
  border-top: 1px solid var(--color-beige-pale);
  font-size: var(--font-size-xs);
  line-height: var(--line-height-xs);
  h2 {
    margin: 0;
    font-size: var(--font-size-s);
    line-height: var(--line-height-s);
    font-family: var(--font-family-sans);
    font-variant-caps: small-caps;
    font-feature-settings: "smcp";
    text-transform: lowercase;
    color: var(--color-text);
  }
  .footer-access {
    display: none;
    @media (max-width: 900px) {
      display: block;
    }
    a {
      margin-top: -10px;
      padding: 10px 0;
    }
  }
  .footer-items {
    display: flex;
    gap: 40px;
    @media (max-width: 900px) {
      flex-direction: column;
      gap: 30px;
    }
  }
  .footer-logo {
    flex: 1;
  }
  .footer-imprint {
    display: flex;
    gap: 15px;
    margin-top: 30px;
  }
  .footer-links {
    display: flex;
    flex-direction: column;
    gap: 10px;
    @media (max-width: 900px) {
      flex-direction: column;
      align-items: unset;
      gap: 10px;
    }
    svg {
      height: 16px;
      path[fill] {
        fill: var(--color-text);
      }
      path[stroke] {
        stroke: var(--color-text);
      }
    }
    a {
      &:hover {
        .bluesky-flutter {
          --color-bluesky-icon: var(--color-blue);
        }
        svg {
          path[fill] {
            fill: var(--color-blue);
          }
          path[stroke] {
            stroke: var(--color-blue);
          }
        }
      }
      &.social-link {
        display: flex;
        align-items: center;
        gap: 7px;
        svg {
          width: var(--icon-size-s);
          height: var(--icon-size-s);
        }
      }
    }
  }
}
</style>
