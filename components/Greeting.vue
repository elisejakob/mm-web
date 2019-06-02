<template>
  <div class="greeting">
    {{ dailymessage }}
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      day: null
    }
  },
  computed: {
    dailymessage: function() {
      var message = 'yo';
      if (this.day === 1) {
        message = 'is britny bich'
      } else if (this.day === 5) {
        message = 'MMers Friday'
      }
      return message
    }
  },
  created() {
    this.day = new Date().getDay();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.greeting {
  position: fixed;
  bottom: 0;
  left: 1rem;
  z-index: 1000;

  display: none;
}
</style>
