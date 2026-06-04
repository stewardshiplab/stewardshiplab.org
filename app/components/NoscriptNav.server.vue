<script setup lang="ts">
import IconCaretRightBold from '~/assets/images/icons/phosphor/caret-right-bold.svg'
import IconHandWaving from '~/assets/images/icons/phosphor/hand-waving.svg'
</script>

<template>
  <noscript>
    <nav class="mobile-nav mobile-nav--compact">
      <a class="plain-link" href="/reports">
        <div class="mobile-nav__name">Reports</div><IconCaretRightBold class="icon icon--s" />
      </a>
      <a class="plain-link" href="/tools">
        <div class="mobile-nav__name">Tools</div><IconCaretRightBold class="icon icon--s" />
      </a>
      <a class="plain-link" href="/ideas">
        <div class="mobile-nav__name">Ideas</div><IconCaretRightBold class="icon icon--s" />
      </a>
      <a class="plain-link" href="/media">
        <div class="mobile-nav__name">Media</div><IconCaretRightBold class="icon icon--s" />
      </a>
      <a class="plain-link" href="/sponsor">
        <div class="mobile-nav__name">Sponsor</div><IconCaretRightBold class="icon icon--s" />
      </a>
      <a class="plain-link" href="/contact">
        <div class="mobile-nav__name">Contact<IconHandWaving class="icon icon--white" /></div>
        <IconCaretRightBold class="icon icon--s" />
      </a>
    </nav>
  </noscript>
</template>
