<template>
  <main class="site-main">
    <div>
      <Logo />
      <h1>mm-web</h1>
      <Menu />
    </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'
import Menu from '~/components/Menu.vue'

export default {
  components: {
    Logo,
    Menu
  }
}
</script>

<style lang="scss" scoped>
h1 {
  font-size: 100px;
}
</style>