<template>
  <a :href="href" @click.prevent="scroll">
    <slot></slot>
  </a>
</template>

<script>
import Menu from '~/components/Menu.vue'

export default {
  props: {
    href: String
  },
  methods: {
    scroll: function() {
      document.querySelector(this.href).scrollIntoView({ behavior: 'smooth' })
    }
  }
}
</script>