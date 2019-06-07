<template>
  <div class="gif" :class="{ visible: isVisible }">
    <img :src="gif" />
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
      gif: '/gifs/hi.gif',
      isVisible: false
    }
  },
  mounted() {
    if (this.holiday === 'christmas') {
      this.gif = '/gifs/hi.gif';
    } else if (this.holiday === 'valentines') {
      this.gif = '/gifs/kiss.gif';
    } else if (this.holiday === 'halloween') {
      this.gif = '/gifs/hi.gif';
    } else if (this.holiday === 'birthday') {
      this.gif = '/gifs/birthday.gif';
    } else if (this.holiday === 'nationalday') {
      this.gif = '/gifs/cute.gif';
    } else if (this.day === 5) {
      this.gif = '/gifs/love.gif';
    }
    this.isVisible = true;
    setTimeout(()=>{
      this.isVisible = false;
      console.log('poop')
    }, 24000)
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
  max-width: 240px;
  z-index: 1000;

  transform: translateY(300px);
  transition: transform .8s linear;

  &.visible {
    transform: translateY(0);
    transition: transform .8s linear;
  }

  img {
    display: inline-block;
    width: 100%;
    vertical-align: bottom;
  }
}
</style>
