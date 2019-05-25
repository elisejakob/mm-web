<template>
  <section id="concerts" class="concerts">
    <img src="http://marcusandmartinus.com/wp-content/uploads/2018/09/background.jpg" />
    <div class="concert-wrapper">
      <h2 class="section-title">Concerts</h2>
      <ul class="concert-list">
        <li class="concert-list-item">
          <div class="date">7. juni</div>
          <div class="location">
            <span class="city">Copenhagen</span>
            <span class="venue">Telenor Arena</span>
          </div>
          <a href="#" class="button tickets">Get tickets</a>
        </li>
      </ul>
    </div>
    <Newsletter heading="Be the first to know when we come to your city" />
  </section>
</template>

<script>
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    Newsletter
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.concert-wrapper {
  width: 100%;
  max-width: $width-m;
  margin: -2rem auto 2rem;
  padding: 0;
  position: relative;
  z-index: 100;
  background: $color-black;
  color: $color-white;

  .section-title {
    background: $color-white;
    color: $color-black;
    margin: 0 auto;
  }

  .concert-list {
    list-style: none;
    margin: 0;
    padding: 1rem;

    text-transform: uppercase;

    &-item {
      display: flex;
      justify-content: space-between;
      align-items: center;
      background: $color-white;
      color: $color-black;
    }

    .city {
      font-weight: 800;
    }

    .city:after {
      content: " / ";
      font-weight: 400;
    }

    div, a {
      padding: 1rem;
    }

    .tickets {
      background: $color-theme-light;
      text-decoration: none;
      font-weight: 800;
      line-height: inherit;
      width: auto;
    }
  }
}
</style>
