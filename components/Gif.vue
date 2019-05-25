<template>
  <div class="gif">
    <img src="https://media.giphy.com/media/fnvxYRJ2dUSN3q58ol/giphy.gif" />
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.gif {
  position: fixed;
  bottom: 0;
  right: 1rem;
  width: 20%;
  max-width: 200px;
  z-index: 1000;

  img {
    width: 100%;
    vertical-align: bottom;
  }
}
</style>
