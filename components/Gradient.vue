<template>
  <div class="gradient" :style="style">
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      colors: {
        light: 'rgb(245, 178, 1)',
        light2: 'rgb(166, 199, 188)',
        dark: 'rgb(118, 24, 24)',
        dark2: 'rgb(72, 100, 112)',
      },
      style: {
        background: this.gradient
      }
    }
  },
  computed: {
    gradient: function() {
      return 'linear-gradient(90deg, ' + this.dark + ', ' + this.light + ')'
    }
  },
  created() {
    this.day = new Date().getDay();
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

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient($color-black, transparent);
  }
}
</style>
