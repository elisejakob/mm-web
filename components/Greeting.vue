<template>
  <div v-if="message" class="greeting">
    <JumpingText :text="message" />
  </div>
</template>

<script>
import JumpingText from '~/components/JumpingText.vue'
export default {
  components: {
    JumpingText
  },
  props: {
    day: Number,
    holiday: String
  },
  data: function() {
    return {
      message: null,
    }
  },
  methods: {
    updateMessage: function() {
      if (this.holiday === 'christmas') {
        this.message = 'Merry christmas!';
      } else if (this.holiday === 'valentines') {
        this.message = 'Happy valentines day!';
      } else if (this.holiday === 'halloween') {
        this.message = 'Trick or treat!';
      } else if (this.holiday === 'birthday') {
        this.message = 'Happy birthday to us!';
      } else if (this.holiday === 'nationalday') {
        this.message = 'International MMers day!';
      } else if (this.day === 5) {
        this.message = 'MMers Friday!';
      } else {
        this.message = null;
      }
    }
  },
  mounted() {
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