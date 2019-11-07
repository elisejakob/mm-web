<template>
  <main class="site-main">
    <Hero />
    <div v-for="(section, index) in globals.frontPageSections.frontPageSections" :key="index">
      <Shop v-if="section.title === 'MMStore'" class="fade-section" />
      <Music v-else-if="section.title === 'Music'" class="fade-section" />
      <Videos v-else-if="section.title === 'Videos'" class="fade-section" />
      <Concerts v-else-if="section.title === 'Concerts'" class="fade-section" />
      <About v-else-if="section.title === 'About'" class="fade-section" />
      <Contact v-else-if="section.title === 'Contact'" class="fade-section" />
    </div>
  </main>
</template>

<script>
import gql from 'graphql-tag'
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
  },
  apollo: {
    globals: gql`
    query {
      globals {
        frontPageSections {
          frontPageSections {
            title
          }
        }
      }
    }`
  }
}
</script>

<style lang="scss" scoped>
h2, p {
  position: relative;
}
</style>