<template>
  <div>
    <div class="gif" :class="{ visible: isVisible }">
      <img :src="gif" />
    </div>
    <div class="gifbutton" @click="isVisible = !isVisible"></div>
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
      isVisible: false
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
    setTimeout(()=>{
      this.isVisible = false;
      console.log('poop')
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

  transform: translateY(300px);
  transition: transform .5s linear;

  &.visible {
    transform: translateY(0);
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
  width: 10px;
  height: 10px;
  cursor: pointer;
}
</style>
