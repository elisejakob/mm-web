<template>
  <div class="menu-banner">
    <marquee-text
      :duration="30"
      :paused="isPaused"
      class="site-menu"
    >
      <scroll-link href="#hero" class="logo active"><Logo symbol /></scroll-link>
      <scroll-link href="#concerts">Concerts</scroll-link>
      <scroll-link href="#music">Music</scroll-link>
      <scroll-link href="#videos">Videos</scroll-link>
      <scroll-link href="#about">About</scroll-link>
      <scroll-link href="#shop">Shop</scroll-link>
      <scroll-link href="#contact">Contact</scroll-link>
      <a href="https://www.facebook.com/marcusandmartinus" target="_blank">Facebook</a>
      <a href="https://twitter.com/marcusmartinus" target="_blank">Twitter</a>
      <a href="https://www.youtube.com/channel/UCRUmSbfoolI9b8iRyrGqFUw" target="_blank">Youtube</a>
      <a href="https://www.instagram.com/marcusandmartinus/" target="_blank">Instagram</a>
      <a href="https://open.spotify.com/artist/3N4FiTxpPQRsrihmTMN349?si=N-WI45P2S1CgQLkwgk7R5A" target="_blank">Spotify</a>
      <a href="http://vm.tiktok.com/dH7p8e/" target="_blank">Tiktok</a>
      <a href="https://giphy.com/MarcusandMartinus" target="_blank">Giphy</a>
    </marquee-text>
  </div>
</template>

<script>
import MarqueeText from '~/components/MarqueeText.vue'
import ScrollLink from '~/components/ScrollLink.vue'
import Logo from '~/components/Logo.vue'

export default {
  layout: 'single',
  components: {
    MarqueeText,
    ScrollLink,
    Logo
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
  z-index: 1006;
  background: black;
  padding: 0.5rem 0 0.3rem;
  overflow: hidden;
  line-height: 1;

  @media (max-width: $media-s) {
    top: 0.5rem;
  }
}
.site-menu {
  a {
    display: inline-block;
    margin: 0 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;

    &:hover, &.active, &:focus {
      opacity: .6;
    }

    &:focus {
      outline: none;
    }

    &.logo {
      display: inline-block;
      margin: 0 1rem;
      width: 1.8rem;
      height: 1.8rem;
      vertical-align: middle;
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
