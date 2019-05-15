<template>
  <nav class="site-menu">
    <a href="#">Concerts</a>
    <a href="#">Music</a>
    <a href="#">Our story</a>
    <a href="#">Shop</a>
    <a href="#">Contact</a>
    <a href="#">Contact</a>
    <a href="#">Contact</a>
    <a href="#">Contact</a>
  </nav>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-menu {
  position: fixed;
  top: 1rem;
  left: 0;
  right: 0;
  background: black;
  padding: 0.5rem 0;
  a {
    text-transform: uppercase;
    display: inline-block;
    margin: 0 0.5rem;
    text-decoration: none;

    &:hover {
      color: $color-theme-light;
    }
  }
}
</style>
