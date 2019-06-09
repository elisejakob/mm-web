<template>
  <div class="gradient">
  </div>
</template>

<script>
export default {
  props: {
    scrolled: Number
    // percent value for how far down the site the user has scrolled
  },
  data: function() {
    return {
      style: {
        background: this.gradient
      },
      night: true
    }
  },
  computed: {
    gradient: function() {
      /*

      work in progress
      changing background color gradually with scroll
      
      min 0 - max 100
      scrolled

      min light[0] - max dark[0]
      min light[0] - max dark[0]
      */

      var left = ['245', '178', '1'];
      var left2 = ['118', '24', '24'];
      var right = ['166', '199', '188'];
      var right2 = ['72', '100', '112'];

      var r = [left[0], right[0]];
      var g = [left[1], right[1]];
      var b = [left[2], right[2]];

      var leftColor = 'rgb(245, 178, 1)';
      var rightColor = 'rgb(166, 199, 188)';
      var gradient = 'linear-gradient(90deg, ' + leftColor + ', ' + rightColor + ')';

      return gradient;
    }
  },
  beforeMount: function() {
    var now = new Date();
    var time = now.getUTCHours() + 2;
    if (time > 6 && time < 18) {
      this.night = false;
      document.body.classList.add('day');
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.gradient {
  position: fixed;
  bottom: 0;
  right: 0;
  left: 0;
  top: 50%;
  background: linear-gradient(90deg, $color-theme-dark, $color-theme-dark-2);
  transition: all .3s linear;

  &:after {
    content: "";
    position: absolute;
    top: 0; left: 0; right: 0; bottom: 0;
    background: linear-gradient($color-black, transparent);
  }
}
.day .gradient {
  background: linear-gradient(90deg, $color-theme-light, $color-theme-light-2);
}
</style>
