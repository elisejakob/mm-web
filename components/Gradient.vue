<template>
  <div class="gradient">
  </div>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.gradient {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 50%;
  background: linear-gradient(90deg, $color-theme-light, $color-theme-light-2);

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient($color-black, transparent);
  }
}
</style>
