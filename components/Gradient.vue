<template>
  <div class="gradient">
  </div>
</template>

<script>
export default {
  props: {
    scrolled: Number
    // percent value for how far down the site the user has scrolled
  },
  data: function() {
    return {
      night: true
    }
  },
  beforeMount: function() {
    var now = new Date();
    var time = now.getUTCHours() + 2;
    if (time > 6 && time < 18) {
      this.night = false;
      document.body.classList.add('day');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.gradient {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 50%;
  background: linear-gradient(90deg, $color-theme-dark, $color-theme-dark-2);
  transition: all .3s linear;

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient($color-black, transparent);
  }
}
.day .gradient {
  background: linear-gradient(90deg, $color-theme-light, $color-theme-light-2);
}
</style>
