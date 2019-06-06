<template>
  <div class="fruit" @click="updatePosition()" :style="position">
    <img src="/images/banana.png" alt="Banana emoji" />
  </div>
</template>

<script>
export default {
  data: function() {
    return {
      position: {
        top: '90vh',
        left: '1rem'
      }
    }
  },
  methods: {
    updatePosition: function() {
      var height = document.body.clientHeight;
      var width = document.body.clientWidth;
      var footer = document.querySelector('.site-footer').clientHeight;
      this.position.top = (Math.random() * ((height - footer) - 1) + 1) + 'px';
      this.position.left = (Math.random() * ((width - 20) - 1) + 1) + 'px';
    }
  },
  mounted() {
    this.updatePosition();
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.fruit {
  position: absolute;
  top: 0;
  left: 0;
  z-index: 10;
  width: 32px;
  height: 32px;
  transition: all .6s ease-in-out;

  img {
    width: 100%;
  }

  &:hover {
    cursor: pointer;
  }
}
</style>