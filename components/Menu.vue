<template>
  <div class="menu-banner">
    <marquee-text
      :duration="20"
      :paused="isPaused"
    >
      <nav class="site-menu">
        <a href="#">Concerts</a>
        <a href="#">Music</a>
        <a href="#">About</a>
        <a href="#">Shop</a>
        <a href="#">Contact</a>
        <a href="#" target="_blank">Facebook</a>
        <a href="#" target="_blank">Twitter</a>
        <a href="https://www.youtube.com/channel/UCRUmSbfoolI9b8iRyrGqFUw" target="_blank">Youtube</a>
        <a href="https://www.instagram.com/marcusandmartinus/" target="_blank">Instagram</a>
        <a href="#" target="_blank">Spotify</a>
        <a href="http://vm.tiktok.com/dH7p8e/" target="_blank">Tiktok</a>
        <a href="https://giphy.com/MarcusandMartinus" target="_blank">Giphy</a>
      </nav>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from '~/components/MarqueeText.vue'

export default {
  layout: 'single',
  components: {
    MarqueeText
  },
  data: function() {
    return {
      isPaused: false
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.menu-banner {
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  z-index: 1000;
  background: black;
  padding: 0;
  overflow: hidden;
}
.site-menu {
  a {
    display: inline-block;
    margin: 0 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;

    &:hover {
      color: $color-theme-light;
    }
  }
}
@keyframes marquee {
  from {
    transform: translateX(0);
  }
  to {
    transform: translateX(-100%);
  }
}
</style>
