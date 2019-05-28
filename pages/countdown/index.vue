<template>
  <main class="site-main">
    <Logo />
    <h1 class="section-title">Soon</h1>
    <div id="countdown" class="countdown">
      <div>
          <div id="days" class="countdown-number">{{ days }}</div>
          <div class="countdown-label">Days</div>
      </div>
      <div>
          <div id="hours" class="countdown-number">{{ hours }}</div>
          <div class="countdown-label">Hours</div>
      </div>
      <div>
          <div id="minutes" class="countdown-number">{{ minutes }}</div>
          <div class="countdown-label">Minutes</div>
      </div>
      <div>
          <div id="seconds" class="countdown-number">{{ seconds }}</div>
          <div class="countdown-label">Seconds</div>
      </div>
  </div>
  </main>
</template>

<script>
import Logo from '~/components/Logo.vue'

export default {
  layout: 'countdown',
  head() {
    return {
      title: 'Marcus & Martinus'
    }
  },
  data: function() {
    return {
      date: null,
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0
    }
  },
  methods: {
    count: function() {
      var now = new Date().getTime();
      var timeLeft = this.date - now;
      var days = Math.floor(timeLeft/(1000*60*60*24));
      var hours = Math.floor((timeLeft%(1000*60*60*24))/(1000*60*60));
      var minutes = Math.floor((timeLeft%(1000*60*60))/(1000*60));
      var seconds = Math.floor((timeLeft%(1000*60))/1000);

      this.days = days;
      this.hours = hours;
      this.minutes = minutes;
      this.seconds = seconds;
    }
  },
  created() {
    this.date = new Date("June 7, 2019 12:00:00").getTime();
    this.count();
    setInterval(this.count, 1000);
  },
  destroyed() {
    clearInterval(this.count);
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-main {
  position: relative;
}
.section-title {
  padding-top: 5rem;
  font-size: 10rem;
}
.countdown {
    display: flex;
    max-width: $width-m;
    margin: 0 auto;
}
.countdown div {
    flex: 1;
    display: flex;
    flex-direction: column;
}
.countdown .countdown-number {
    font-size: 6rem;
    line-height: 1;
    color: $color-theme-light;
    font-weight: 300;
    text-transform: uppercase;
    margin-bottom: 0.5rem;
}

.countdown .countdown-label {
    text-transform: uppercase;
    font-size: 1.5rem;
    font-weight: 800;
    margin-bottom: 0;
}
</style>