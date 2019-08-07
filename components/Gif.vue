<template>
  <div>
    <div class="gif" :class="{ visible: isVisible }">
      <img :src="gif" />
    </div>
    <div class="gifbutton" @click="$store.dispatch('showGif', { image: '/gifs/small/cute.gif', duration: 2400})"></div>
  </div>
</template>

<script>
export default {
  props: {
    day: Number,
    holiday: String
  },
  computed: {
    gif() {
      return this.$store.state.gif
    },
    isVisible() {
      return this.$store.state.isVisible
    }
  },
  mounted() {
    var image = '/gifs/small/hi.gif';
    if (this.holiday === 'christmas') {
      image = '/gifs/small/christmas1.gif';
    } else if (this.holiday === 'valentines') {
      image = '/gifs/small/kiss.gif';
    } else if (this.holiday === 'halloween') {
      image = '/gifs/small/halloween.gif';
    } else if (this.holiday === 'birthday') {
      image = '/gifs/small/birthday.gif';
    } else if (this.holiday === 'nationalday') {
      image = '/gifs/small/cute.gif';
    } else if (this.day === 5) {
      image = '/gifs/small/love.gif';
    };
    this.$store.dispatch('showGif', {image, duration: 6000});
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.gif {
  position: fixed;
  bottom: 0;
  right: 1rem;
  width: 20%;
  max-width: 200px;
  z-index: 1000;

  transform: translateY(300px);
  transition: transform .8s linear;

  &.visible {
    transform: translateY(0);
    transition: transform .6s linear;
  }

  img {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
  }
}
.gifbutton {
  position: fixed;
  bottom: 0;
  right: 0;
  width: 24px;
  height: 24px;
  cursor: pointer;
}
@media (max-width: $media-s) {
  .gif, .gifbutton {
    display: none;
  }
}
</style>
