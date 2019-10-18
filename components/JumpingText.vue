<template>
  <div class="text">
    <span v-for="(letter, index) in letters" :key="index" class="letter" :style="{ animationDelay: index/10 + 's' }">{{ letter }}</span>
  </div>
</template>

<script>
  export default {
    name: 'JumpingText',
    props: {
      text: String
    },
    computed: {
      letters: function() {
        return this.text.split('');
      }
    }
  }
</script>

<style lang="scss" scoped>
@import '@/assets/css/animations.scss';
.letter {
  display: inline-block;
  animation: jump 3s linear infinite;
  min-width: 0.5rem;
}
</style>