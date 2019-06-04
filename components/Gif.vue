<template>
  <div class="gif" :class="{ visible: isVisible }">
    <img :src="gif" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      day: null,
      isVisible: false
    }
  },
  computed: {
    gif: function() {
      var gif = '/gifs/hi.gif';
      if (this.day === 1) {
        gif = '/gifs/birthday.gif';
      }
      return gif
    }
  },
  created() {
    this.day = new Date().getDay();
    this.isVisible = true
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

  display: none;

  &.visible {
    display: block;
  }

  img {
    width: 100%;
    vertical-align: bottom;
  }
}
</style>
