<template>
  <div class="newsletter">
    <h3>{{ heading }}</h3>
    <a href="https://promotions.lpage.co/campaigns/1217476" target="_blank" class="button gradient" :style="{ background: 'linear-gradient(90deg,' + globals.colors.backgroundColor2.hex + ',' + globals.colors.backgroundColor1.hex + ')'}">Sign up to our newsletter!</a>
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  name: 'Newsletter',
  props: {
    heading: String
  },
  apollo: {
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
.newsletter {
  width: 100%;
  max-width: $width-s;
  margin: 2rem auto;
  padding: 1rem;

  h3, .h3 {
    font-size: 2rem;
    font-weight: 900;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    margin: 0 auto 1rem;
  }

  label {
    display: block;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  input {
    font-size: 1rem;
    width: 100%;
    padding: 1rem;
    line-height: 1rem;
    text-align: center;
    outline: none;
    margin-bottom: 0.5rem;
    border-radius: 0;
    &:focus, &:hover, &:active {
      border: 2px solid gold;
    }
  }

  .button {
    width: 100%;
    &:focus, &:hover, &:active {
      border: none;
    }
  }

  .privacy-info {
    font-size: 12px;
    margin: 0.5rem auto;
    text-align: center;
    opacity: 0.7;
  }

  @media (max-width: $media-s) {
    .privacy-info {
      font-size: 10px;
    }
  }
}
</style>
