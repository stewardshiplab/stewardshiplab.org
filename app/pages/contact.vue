<script setup lang="ts">
import IconEnvelopeOpenBold from '~/assets/images/icons/phosphor/envelope-open-bold.svg'
import IconBluesky from '../components/IconBluesky.vue'
import IconMastodon from '~/assets/images/icons/mastodon.svg'
import IconDiscord from '~/assets/images/icons/discord.svg'
</script>

<template>
  <div class="container">
    <h1 class="page-title">Contact</h1>
    <div class="contact-options">
      <div class="contact-option-set">
        <div class="contact-option">
          <div class="contact-option__parts">
            <div class="contact-option__copy">
              <h2>Want to fund our work?</h2>
              <p>
                By funding our work, you are supporting impactful applied research that makes a demonstrable difference
                to the global Open Source infrastructure we all depend on.
              </p>
              <p>
                Learn more on our
                <a href="/sponsor">sponsor</a>
                page, then feel free to reach out to Vlad to schedule a call.
              </p>
            </div>
            <div class="contact-person">
              <img
                src="/images/people/vlad@300px.webp"
                alt="A portrait of Vlad"
                width="130"
                height="130"
              >
              <div class="contact-person__body">
                <div class="contact-person__head">
                  <strong>Vlad-Stefan Harbuz</strong>
                  <span>Executive Director</span>
                  <span>(UK timezone)</span>
                </div>
                <div class="contact-method-set">
                  <a href="mailto:vlad@vlad.website" class="contact-method plain-link">
                    <IconEnvelopeOpenBold class="icon" />
                    <span>vlad@vlad.website</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="contact-option-set">
        <div class="contact-option">
          <div class="contact-option__copy">
            <h2>Want to chat?</h2>
            <p>
              Our Discord server brings together Open Source experts, and collects research ideas, resources and news in
              Open Source sustainability.
            </p>
          </div>
          <div class="contact-method-set">
            <a href="https://discord.gg/2GNQHcKmcH" target="_blank" class="contact-method plain-link">
              <IconDiscord class="icon" />
              <span>Discord</span>
            </a>
          </div>
        </div>
        <div class="contact-option">
          <div class="contact-option__copy">
            <h2>Want to follow our work?</h2>
            <p>
              Follow us on socials to see our latest research, as well as our recommended reading.
            </p>
          </div>
          <div class="contact-method-set">
            <a href="https://bsky.app/profile/stewardshiplab.org" target="_blank" class="contact-method plain-link">
              <IconBluesky class="icon" />
              <span>Bluesky</span>
            </a>
            <a href="https://fosstodon.org/@stewardshiplab" target="_blank" class="contact-method plain-link">
              <IconMastodon class="icon" />
              <span>Mastodon</span>
            </a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.contact-options {
  display: flex;
  flex-direction: column;
  gap: 20px;
  .contact-option-set {
    display: flex;
    gap: 20px;
    @media (max-width: 800px) {
      flex-direction: column;
    }
    .contact-option {
      flex: 1;
      display: flex;
      flex-direction: column;
      gap: 20px;
      padding: 20px;
      background: var(--color-beige-xpale);
      border-radius: var(--border-radius-s);
      font-size: var(--font-size-s);
      line-height: var(--line-height-s);
      .contact-option__parts {
        display: flex;
        align-items: center;
        gap: 60px;
        @media (max-width: 800px) {
          gap: 40px;
          flex-direction: column;
          align-items: unset;
        }
      }
      .contact-option__copy {
        align-self: flex-start;
        flex: 1;
      }
      .contact-person {
        display: flex;
        align-items: center;
        gap: 20px;
        @media (max-width: 900px) {
          flex-direction: column;
          text-align: center;
        }
        img {
          flex: 1;
          width: 130px;
          height: 130px;
          border-radius: var(--border-radius-s);
        }
        .contact-person__body {
          display: flex;
          flex-direction: column;
          gap: 20px;
          .contact-person__head {
            strong {
              display: block;
              font-weight: 500;
            }
            span {
              display: block;
              color: var(--color-text-pale);
              font-size: var(--font-size-xs);
              line-height: var(--line-height-xs);
            }
          }
        }
      }
      .contact-method-set {
        display: flex;
        flex-direction: column;
        justify-self: flex-end;
        gap: 10px;
      }
      .contact-method {
        display: flex;
        justify-content: space-between;
        gap: 10px;
        padding: 10px;
        border-radius: var(--border-radius-s);
        background: var(--color-beige);
        border: 1px solid var(--color-beige-pale);
        color: var(--color-blue);
        font-size: var(--font-size-s);
        line-height: var(--line-height-s);
        &:hover {
          background-color: var(--color-beige-pale);
        }
        .icon {
          position: relative;
          top: 1px;
        }
      }
    }
  }
}
</style>
