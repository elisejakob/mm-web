<template>
  <main class="site-main">
    <marquee-text
      :duration="30"
      :paused="isPaused"
      class="marquee"
    >
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
      <span>Soon</span>
    </marquee-text>
    <img src="/images/soon.jpg" />
    <div class="countdown-wrapper">
      <div id="countdown" class="countdown">
        <div class="countdown-item">
            <div id="days" class="countdown-number">{{ days }}</div>
            <div class="countdown-label">Days</div>
        </div>
        <div class="countdown-item">
            <div id="hours" class="countdown-number">{{ hours }}</div>
            <div class="countdown-label">Hours</div>
        </div>
        <div class="countdown-item">
            <div id="minutes" class="countdown-number">{{ minutes }}</div>
            <div class="countdown-label">Minutes</div>
        </div>
        <div class="countdown-item">
            <div id="seconds" class="countdown-number">{{ seconds }}</div>
            <div class="countdown-label">Seconds</div>
        </div>
      </div>
    </div>
  </main>
</template>

<script>
import MarqueeText from '~/components/MarqueeText.vue'
export default {
  layout: 'countdown',
  components: {
    MarqueeText
  },
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
      seconds: 0,
      isPaused: false
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
    this.date = new Date("June 7, 2019 00:00:00 GMT+02:00").getTime();
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
  height: 100vh;
}
img {
  display: block;
  width: 80vh;
  height: 80vh;
  margin: 0 auto;
  position: relative;
}
.countdown {
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: $width-m;
  margin: 0 auto;
  padding: 0.5rem;
  position: absolute;
  bottom: 3rem;
  left: 0;
  right: 0;
}
.countdown-wrapper {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 50%;
  background: linear-gradient(transparent, rgba(0, 0, 0, 0.8), black);
}
.countdown-item {
  flex: 1;
  margin: 0 0.5rem;
  display: flex;
  flex-direction: column;
  padding-right: 1rem;
  border-right: 1px solid rgba(255, 255, 255, 0.3);

  &:last-of-type {
    padding: 0;
    border: none;
  }
}
.countdown-number {
  font-size: 4rem;
  line-height: 1;
  color: $color-theme-light;
  font-weight: 700;
  text-transform: uppercase;
  text-shadow: 0.1em 0.1em 0.1em rgba(0, 0, 0, 0.8);
}

.countdown-label {
  text-transform: uppercase;
  font-size: 1.2rem;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 0;
}

.marquee {
  a, span {
    display: inline-block;
    margin: 0 0.5rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    letter-spacing: 0.05em;
    font-size: 1.5rem;
  }
  margin-bottom: 1rem;
}

@media (max-width: $media-s) {
  img {
    width: 90%;
    height: auto;
    margin-top: 10vh;
  }
  .countdown {
    bottom: auto;
    top: 50%;
  }
  .countdown-number {
    font-size: 2rem;
  }
  .countdown-label {
    font-size: 0.8rem;
  }
  .marquee {
    a, span {
      font-size: 1rem;
    }
  }
}
</style>