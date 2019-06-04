<template>
  <div class="text">
    <span v-for="(letter, index) in letters" :key="index" class="letter" :style="{ animationDelay: index/20 + 's' }">{{ letter }}</span>
  </div>
</template>

<script>
  export default {
    name: 'ShinyText',
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
  animation: shine 2s linear infinite;
}

@keyframes shine {
  0% { 
    color: $color-white; 
  }
  30% {
    color: $color-theme-light;
  }
  100% {
    color: $color-theme-light;
  }
}
</style>