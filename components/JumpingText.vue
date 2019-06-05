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
@import '@/assets/css/variables.scss';
.letter {
  display: inline-block;
  animation: jump 3s linear infinite;
  min-width: 0.5rem;
}

@keyframes jump {
  0% { 
    transform: translateY(0);
  }
  5% {
    transform: translateY(-0.5rem);
  }
  10% {
    transform: translateY(0);
  }
  100% {
    transform: translateY(0);
  }
}
</style>