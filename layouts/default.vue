<template>
  <div>
    <Gradient />
    <Header />
    <nuxt />
    <Gif />
    <Greeting />
    <Fruit />
    <Footer />
  </div>
</template>

<script>
import Header from '~/components/Header.vue'
import Footer from '~/components/Footer.vue'
import Gif from '~/components/Gif.vue'
import Greeting from '~/components/Greeting.vue'
import Gradient from '~/components/Gradient.vue'
import Fruit from '~/components/Fruit.vue'

export default {
  layout: 'default',
  components: {
    Header,
    Gif,
    Greeting,
    Gradient,
    Fruit,
    Footer
  },
  data: function() {
    return {
      activeSection: 'hero'
    }
  },
  methods: {
    throttle: function(callback, limit) {
      var wait = false;
      return function () {
        if (!wait) {
          callback.apply(null, arguments);
          wait = true;
          setTimeout(function () {
            wait = false;
          }, limit);
        }
      }
    },
    handleScroll: function() {
      this.fadeIn();
      this.updateMenu();
    },
    fadeIn: function() {
      const sections = document.querySelectorAll('section');
      for (const section of sections) {
        if (section.getBoundingClientRect().top <= window.innerHeight * 0.8 || section.getBoundingClientRect().bottom === window.innerHeight) {
          section.classList.add('inview');
          this.activeSection = section.getAttribute('id');
        }
      }
    },
    updateMenu() {
      const menu = document.querySelectorAll('.site-menu a');
      for (const menuItem of menu) {
        if (menuItem.getAttribute('href') === '#' + this.activeSection) {
          document.querySelector('.active').classList.remove('active');
          menuItem.classList.add('active');
        }
      }
    }
  },
  mounted() {
    this.fadeIn();
    this.updateMenu();
    window.addEventListener('scroll', this.throttle(this.handleScroll, 200));
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttle)
  }
}
</script>