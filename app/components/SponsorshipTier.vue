<script setup lang="ts">
import { formatUsdAmount } from '../utils/format.ts';

const tier = defineProps(['name', 'price']);
</script>

<template>
  <div class="tier">
    <div class="tier__meta">
      <h3>{{ tier.name }}</h3>
      <div class="tier__price">
        <template v-if="tier.price">{{ formatUsdAmount(tier.price) }}+/year</template>
        <template v-if="!tier.price">All lower amounts</template>
      </div>
    </div>
    <div class="tier__body">
      <slot />
      <small v-if="tier.price">+ all benefits from lower tiers</small>
    </div>
  </div>
</template>

<style>
.tier {
  display: flex;
  gap: 45px;
  padding: 20px;
  border-radius: var(--border-radius-s);
  background: var(--color-beige-xpale);
  @media (max-width: 900px) {
    flex-direction: column;
    gap: 15px;
  }
  .tier__meta {
    flex-basis: 280px;
    @media (max-width: 900px) {
      flex-basis: unset;
      text-align: center;
      padding-bottom: 15px;
      border-bottom: 1px solid var(--color-beige-pale);
    }
    h3 {
      display: inline-block;
      margin: 0;
      padding: 3px 8px;
      border-radius: var(--border-radius-s);
      font-family: var(--font-family-sans);
      font-variant-caps: small-caps;
      font-feature-settings: "smcp";
      text-transform: lowercase;
      background: var(--color-blue);
      color: white;
    }
    .tier__price {
      margin-top: 10px;
      font-family: var(--font-family-sans);
    }
  }
  .tier__body {
    flex: 1;
    ul {
      margin: 0;
      padding: 0;
      list-style: none;
      li {
        &:after {
          content: '';
          display: block;
          max-width: 50px;
          margin: 15px 0;
          border-bottom: 1px solid var(--color-beige-pale);
        }
        & > small {
          display: block;
          margin-top: 2px;
        }
      }
    }
    & > small {
      display: block;
      margin-top: 10px;
    }
    &:not(:has(> small)) {
      ul li:last-child:after {
        display: none;
      }
    }
  }
}
</style>
