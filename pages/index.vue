<template>
  <main class="site-main">
    <Hero />
    <Concerts class="fade-section" />
    <Music class="fade-section" />
    <Videos class="fade-section" />
    <About class="fade-section" />
    <Shop class="fade-section" />
    <Contact class="fade-section" />
  </main>
</template>

<script>
import Hero from '~/components/sections/Hero.vue'
import Concerts from '~/components/sections/Concerts.vue'
import Music from '~/components/sections/Music.vue'
import Videos from '~/components/sections/Videos.vue'
import About from '~/components/sections/About.vue'
import Shop from '~/components/sections/Shop.vue'
import Contact from '~/components/sections/Contact.vue'

export default {
  components: {
    Hero,
    Concerts,
    Music,
    Videos,
    About,
    Shop,
    Contact
  },
  head () {
    return {
      title: 'Marcus & Martinus',
      meta: [
        // hid is used as unique identifier. Do not use `vmid` for it as it will not work
        { 
          hid: 'description', 
          name: 'description', 
          content: 'Marcus & Martinus is currently the biggest pop act in the Nordic region. Get the latest updates here. News, pictures, concerts, etc.. @marcusandmartinus.' 
        }
      ]
    }
  }
}
</script>

<style lang="scss" scoped>
h2, p {
  position: relative;
}
</style>