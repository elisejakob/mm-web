<template>
  <section id="concerts" class="concerts">
    <img src="https://mm.jakobsenfrukt.no/assets/concerts.jpg" class="section-image" alt="A recent MM-concert" />
    <div class="concert-wrapper">
      <h2 class="section-title">Concerts</h2>
      <ul class="concert-list">
        <li class="concert-list-item" v-for="(concert, index) in concerts" :key="index">
          <div class="date">{{ concert.date }}</div>
          <div class="location">
            <span class="city">{{ concert.city }}, {{ concert.country }}</span>
            <span class="venue">{{ concert.venue }}</span>
          </div>
          <a href="#" class="button tickets">Get tickets</a>
        </li>
      </ul>
    </div>
    <Newsletter heading="Be the first to know when we come to your city" />
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    Newsletter
  },
  apollo: {
    concerts: gql`
    query {
      concerts: entries(section:concerts) {
    		... on Concerts {
          date @date(as:"F j")
          city
          country
          venue
          ticketUrl
        }
      }
    }`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.concert-wrapper {
  width: 100%;
  max-width: $width-m;
  margin: -10rem auto 5rem;
  padding: 0;
  position: relative;
  z-index: 100;
  background: $color-black;
  color: $color-white;

  .section-title {
    background: $color-white;
    color: $color-black;
    margin: 0 auto;
    max-width: none;
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
      margin-bottom: 0.5rem;
      &:last-of-type {
        margin-bottom: 0;
      }
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

      &:hover {
        color: inherit;
        background: $color-theme-light-2;
        border-color: $color-theme-light-2;
      }
    }
  }

  @media (max-width: $media-s) {
    margin-top: 0;

    .concert-list {
      padding: 0.5rem;
      line-height: 1.3;

      &-item {
        justify-content: flex-start;
      }

      div, a {
        padding: 0.6rem;
      }

      .location {
        text-align: left;
      }

      .city, .venue {
        display: block;
        &:after {
          content: none;
        }
      }

      .date {
        width: 4rem;
        text-align: left;
      }

      .tickets {
        width: 7rem;
        margin-left: auto;
        align-self: stretch;
      }
    }
  }
}
</style>
