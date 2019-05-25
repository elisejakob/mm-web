<template>
  <div>
    <Gradient />
    <Header />
    <nuxt />
    <Gif />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Gif from '~/components/Gif.vue'
import Gradient from '~/components/Gradient.vue'

export default {
  layout: 'default',
  components: {
    Header,
    Gif,
    Gradient,
    Footer
  }
}
</script>