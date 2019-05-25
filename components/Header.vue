<template>
  <header class="site-header">
    <Logo />
    <Menu />
  </header>
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