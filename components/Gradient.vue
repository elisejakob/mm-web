<template>
  <div class="gradient" :style="{ background: 'linear-gradient(90deg,' + globals.colors.backgroundColor1.hex + ',' + globals.colors.backgroundColor2.hex + ')'}">
  </div>
</template>

<script>
import gql from 'graphql-tag'
export default {
  props: {
    scrolled: Number
    // percent value for how far down the site the user has scrolled
  },
  apollo: {
    globals: gql`
    query {
      globals {
        colors {
          backgroundColor1 {
            hex
          }
          backgroundColor2 {
            hex
          }
        }
      }
    }`
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
