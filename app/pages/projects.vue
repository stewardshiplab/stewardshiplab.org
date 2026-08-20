<script setup lang="ts">
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg';

const title = `Projects ✸ Software Stewardship Lab`;
const description = 'Our research projects make the global Open Source ecosystem more sustainable and secure.';
useSeoMeta({
  title: title,
  description: description,
  ogTitle: title,
  ogDescription: description,
});
</script>

<template>
  <section>
    <div class="container">
      <h1 class="page-title">Our research projects</h1>
      <p class="page-desc">
        Our research projects make the global Open Source ecosystem more sustainable and secure.
        Here are our current research priorities.
      </p>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="sechead">ecosyste.ms</h2>
    </div>
  </section>
  <section class="observatory" id="observatory">
    <div class="observatory-canvas-container">
      <ClientOnly>
        <ObservatoryCanvas />
      </ClientOnly>
    </div>
    <div class="container">
      <div class="observatory__wrapper">
        <h2 class="sechead">
          The Open Infrastructure Observatory
        </h2>
        <div class="observatory__copy">
          <div class="observatory__column">
            <p>
              We are currently building the components of an observatory that allows users to identify and monitor the
              world's critical Open Source packages in real time.
            </p>
            <p>
              A public observatory would inform users and companies when dependencies become insecure or unmaintained.
            </p>
            <p>
              It would allow funders to intelligently allocate money to the most critical projects.
            </p>
            <p>
              And it would empower researchers, governments and foundations to understand how Open Source software
              underpins our global tech infrastructure.
            </p>
            <p>
              We are doing this work in a piecemeal fashion, starting with the features listed here. We are looking
              for funding to develop the broader project as a public-benefit resource.
            </p>
          </div>
          <div class="observatory__column">
            <div class="observatory__feature">
              <h3>Identifying Bernies</h3>
              <p>
                Critical packages can covertly become <a href="/ideas/weekend-at-bernies">Bernies</a> —
                packages that appear maintained but are really abandoned.
              </p>
            </div>
            <div class="observatory__feature">
              <h3>Unveiling Binary Dependencies</h3>
              <p>
                Many packages
                <a href="/reports/binary-dependencies-identifying-the-hidden-packages-we-all-depend-on"
                  >depend on binaries</a
                >,
                but this dependency relationship is hidden and
                cannot be recorded by package managers.
              </p>
            </div>
            <div class="observatory__feature">
              <h3>Connecting Repackaged Packages</h3>
              <p>
                CVEs are filed against a canonical package like <em>pypi/pip</em>,
                but
                <a
                  href="https://nesbitt.io/2026/05/28/package-managers-that-package-package-managers.html"
                  target="_blank"
                >repackaged</a>
                versions (eg in Homebrew or Nix) lose this security information.
              </p>
            </div>
            <div class="observatory__feature">
              <h3>Tracking Patches</h3>
              <p>
                Many packages are augmented by system package managers' patches. However, the security implications of
                these patches are not currently tracked.
              </p>
            </div>
          </div>
        </div>
        <div class="cta">
          <NuxtLink to="/sponsor" class="button button--arrow">Fund this project</NuxtLink>
        </div>
      </div>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="sechead">Burnout in Open Source</h2>
    </div>
  </section>
  <section>
    <div class="container">
      <h2 class="sechead">Software Mentions</h2>
    </div>
  </section>
</template>

<style scoped>
h1.page-title {
  @media (max-width: 900px) {
    font-size: var(--font-size-xl);
    line-height: var(--line-height-xl);
  }
}
.page-desc {
  text-wrap: balance;
}
</style>

<style>
.observatory {
  position: relative;
  margin-top: 0;
  padding-block: 60px;
  background: var(--color-blue);
  overflow: hidden;
  font-size: var(--font-size-s);
  line-height: var(--line-height-s);
  @media (max-width: 800px) {
    padding-block: 100px;
  }
  .observatory-canvas-container {
    display: flex;
    align-items: stretch;
    justify-content: stretch;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    z-index: 5;
  }
  .observatory__wrapper {
    position: relative;
    z-index: 50;
    padding: 60px;
    background: var(--color-beige-bright);
    border-radius: var(--border-radius-s);
    @media (max-width: 800px) {
      padding: 30px;
    }
  }
  .observatory__copy {
    display: flex;
    gap: 50px;
    margin-block: 30px;
    @media (max-width: 800px) {
      flex-direction: column;
      gap: 20px;
    }
    & > * {
      flex: 1;
    }
  }
  .observatory__column {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    gap: 20px;
    p {
      margin: 0;
    }
  }
  .observatory__feature {
    display: flex;
    flex-direction: column;
    gap: 5px;
    h3 {
      margin: 0;
      font-family: var(--font-family-sans);
      font-weight: 500;
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
    }
    p {
      margin: 0;
    }
  }
  .cta {
    margin-top: 60px;
    margin-bottom: 0;
    @media (max-width: 800px) {
      margin-top: 30px;
    }
  }
}
</style>
