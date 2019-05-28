<template>
  <div>
    <Gradient />
    <Header />
    <nuxt />
    <Gif />
    <Greeting />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Gif from '~/components/Gif.vue'
import Greeting from '~/components/Greeting.vue'
import Gradient from '~/components/Gradient.vue'

export default {
  layout: 'default',
  components: {
    Header,
    Gif,
    Greeting,
    Gradient,
    Footer
  }
}
</script>