<template>
  <div class="menu-banner">
    <div class="marquee">
      <div class="marquee-inner">
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
        <nav class="site-menu" tabindex=-1>
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
      </div>
    </div>
  </div>
</template>

<script>

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
  padding: 0.5rem;
  overflow: hidden;
}
.marquee {
  width: 1200px;
  height: 1.6rem;
  position: relative;
  overflow: hidden;

  &-inner {
    width: 200%;
    position: absolute;
    display: flex;
    animation: marquee 40s linear infinite;
    &:hover {
      animation-play-state: paused;
    }
  }
}
.site-menu {
  display: flex;
  width: 50%;
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
