<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Contact</h2>
    <p>{{ contact.lead }}</p>
    <div v-html="contact.address.content" class="address" :style="{ background: globals.colors.backgroundColor1.hex }"></div>
    <p>For other inquiries, please <a href="/contact/">contact our team</a>.</p>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  apollo: {
    contact: gql`
    query {
      contact: entry(title: "Contact") {
        ... on Contact {
          lead
          address {
            content
          }
        }
      }
    }`,
    globals: gql`
    query {
      globals {
        colors {
          backgroundColor1 {
            hex
          }
          backgroundColor2 {
            hex
          }
        }
      }
    }`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.contact {
  p {
    margin-bottom: 0;
    text-align: center;
  }
  .address {
    margin: 2rem auto;
    padding: 1.5rem;
    max-width: $width-m;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.3;
    background: $color-theme-light;
    color: $color-black;
    transform: rotate(-3deg);

    @media (max-width: $media-s) {
      font-size: 1.25rem;
    }
  }
}
</style>
