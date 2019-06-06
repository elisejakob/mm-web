<template>
  <div v-if="message" class="greeting">
    <JumpingText :text="message" :style="style" />
  </div>
</template>

<script>
import JumpingText from '~/components/JumpingText.vue'
export default {
  components: {
    JumpingText
  },
  data: function() {
    return {
      day: null,
      message: null,
      style: null
    }
  },
  methods: {
    updateMessage: function() {
      if (this.day === 5) {
        this.message = 'MMers Friday!';
      }
    }
  },
  created() {
    this.day = new Date().getDay();
    this.updateMessage();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.greeting {
  position: fixed;
  bottom: 0;
  right: 1rem;
  z-index: 1000;

  font-size: 1rem;
  font-weight: 900;
  text-transform: uppercase;
  letter-spacing: 0.05em;
  text-shadow: -0.05em 0.1em 0 $color-black, 0 0 0.2em rgba(0, 0, 0, 0.8);
}
</style>