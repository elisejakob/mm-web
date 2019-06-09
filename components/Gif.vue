<template>
  <div>
    <div class="gif" :class="{ visible: isVisible }">
      <img :src="gif" />
    </div>
    <div class="gifbutton" @click="showGif('/gifs/small/birthday.gif')"></div>
  </div>
</template>

<script>
export default {
  props: {
    day: Number,
    holiday: String
  },
  data: function() {
    return {
      gif: '/gifs/small/hi.gif',
      isVisible: false,
      timeout: null
    }
  },
  methods: {
    showGif: function(image) {
      clearInterval(this.timeout);
      this.gif = image;
      this.isVisible = true;
      this.timeout = setTimeout(()=>{
        this.isVisible = false;
      }, 3600)
    }
  },
  mounted() {
    if (this.holiday === 'christmas') {
      this.gif = '/gifs/small/hi.gif';
    } else if (this.holiday === 'valentines') {
      this.gif = '/gifs/small/kiss.gif';
    } else if (this.holiday === 'halloween') {
      this.gif = '/gifs/small/hi.gif';
    } else if (this.holiday === 'birthday') {
      this.gif = '/gifs/small/birthday.gif';
    } else if (this.holiday === 'nationalday') {
      this.gif = '/gifs/small/cute.gif';
    } else if (this.day === 5) {
      this.gif = '/gifs/small/love.gif';
    }
    this.isVisible = true;
    this.timeout = setTimeout(()=>{
      this.isVisible = false;
    }, 3600)
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

  transform: translateY(300px) scale(0);
  transition: transform .5s linear;

  &.visible {
    transform: translateY(0) scale(1);
    transition: transform .5s linear;
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
