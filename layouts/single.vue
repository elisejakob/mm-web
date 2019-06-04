<template>
  <div id="top">
    <Gradient />
    <nuxt-link to="/" class="index">&#11013; &nbsp;Return to front page</nuxt-link>
    <nuxt />
    <Footer />
  </div>
</template>

<script>
import Gradient from '~/components/Gradient.vue'
import ScrollLink from '~/components/ScrollLink.vue'
import Footer from '~/components/Footer.vue'

export default {
  layout: 'single',
  components: {
    Gradient,
    ScrollLink,
    Footer
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
a.index {
  display: block;
  text-align: left;
  opacity: 0.5;
  text-decoration: none;
  padding: 0.5rem 1rem;
  font-style: italic;
  text-transform: uppercase;

  &:hover {
    opacity: 1;
  }
}
.site-footer {
  background: black;
  width: 100%;
  margin-top: 10rem;
  padding: 3rem 1rem 1rem;
  position: relative;
}
.to-top {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin: 5rem auto;

  .icon {
    display: block;
    width: 3rem;
    margin: 0 auto;
  }
}
.footer-nav {
  display: flex;

  a {
    display: inline-block;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.05em;

    &:hover {
      color: $color-theme-light;
    }

    &.credit {
      margin-left: auto;
    }
  }
}
</style>
