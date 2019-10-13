<template>
  <div>
    <Gradient :scrolled="scrolled" />
    <Header />
    <nuxt />
    <Gif :holiday="holiday" :day="day" />
    <Greeting :holiday="holiday" :day="day" />
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
      activeSection: 'hero',
      scrolled: 0,
      date: null,
      day: null
    }
  },
  computed: {
    holiday: function() {
      if (this.date.getMonth() == 11 && this.date.getDate() == 24) {
        return 'christmas';
      } else if (this.date.getMonth() == 1 && this.date.getDate() == 14) {
        return 'valentines';
      } else if (this.date.getMonth() == 9 && this.date.getDate() == 31) {
        return 'halloween';
      } else if (this.date.getMonth() == 1 && this.date.getDate() == 21) {
        return 'birthday';
      } else if (this.date.getMonth() == 8 && this.date.getDate() == 1) {
        return 'nationalday';
      }
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

      var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
      var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      this.scrolled = (winScroll / height) * 100;
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
  created() {
    this.date = new Date();
    this.day = new Date().getDay();
  },
  mounted() {
    this.fadeIn();
    window.addEventListener('scroll', this.throttle(this.handleScroll, 200));
  },
  destroyed() {
    window.removeEventListener('scroll', this.throttle)
  }
}
</script>