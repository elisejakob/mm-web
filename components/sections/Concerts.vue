<template>
  <section id="concerts" class="concerts">
    <img :src="concerts.mainImage[0].fullWidth" class="section-image" alt="A recent MM-concert" />
    <div class="concert-wrapper">
      <h2 class="section-title">Concerts</h2>
      <ul v-if="futureConcerts.length" class="concert-list">
        <li class="concert-list-item" v-for="(concert, index) in futureConcerts" :key="index">
          <div class="date">{{ $moment.unix(concert.date).format('MMMM D') }}</div>
          <div class="location">
            <span class="city">{{ concert.city }}, {{ concert.country }}</span>
            <span v-if="concert.venue" class="venue">{{ concert.venue }}</span>
            <span v-if="concert.small" class="small">Live performance</span>
          </div>
          <a v-if="concert.ticketUrl" :href="concert.ticketUrl" target="_blank" class="button tickets" :style="{ background: globals.colors.backgroundColor2.hex, borderColor: globals.colors.backgroundColor2.hex }" @mouseover="$store.dispatch('showGif', { image: '/gifs/small/thumbsup.gif', duration: null})" @mouseleave="$store.commit('hideGif')">Get tickets</a>
        </li>
      </ul>
      <div v-else class="no-concerts">
        <p>{{ concerts.fallbackText }}</p>
      </div>
    </div>
    <Newsletter heading="Be the first to know when we come to your city" />
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Moment from 'moment'
import Newsletter from '~/components/Newsletter.vue'

export default {
  components: {
    Newsletter
  },
  computed: {
    futureConcerts: function() {
      var today = new Date();

      return this.concertlist.filter(function(concert) {
        var concertDate = new Date(concert.date*1000);
        return concertDate >= today;
      });
    }
  },
  apollo: {
    concerts: gql`
    query {
      concerts: entry(title: "Concerts") {
    		... on Concerts {
          mainImage {
            fullWidth: url(transform: fullWidth)
          }
          fallbackText
          newsletterHeading
        }
      }
    }`,
    concertlist: gql`
    query {
      concertlist: entries(section:concertlist) {
    		... on Concertlist {
          date
          city
          country
          venue
          ticketUrl
          small
        }
      }
    }`,
    globals: gql`
    query {
      globals {
        colors {
          backgroundColor1 {
            hex
          }
          backgroundColor2 {
            hex
          }
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
    padding: 0.5rem;

    text-transform: uppercase;

    &-item {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      background: $color-white;
      color: $color-black;
      margin-bottom: 0.5rem;
      &:last-of-type {
        margin-bottom: 0;
      }
    }

    .location {
      text-align: left;
    }

    .city {
      font-weight: 800;
    }

    .city:after {
      content: " / ";
      font-weight: 400;
    }

    .small {
      text-transform: none;
      font-style: italic;
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
      display: block;
      margin: 0 0 0 auto;

      &:hover {
        color: inherit;
        opacity: .6;
      }
    }
  }

  @media (max-width: $media-s) {
    margin-top: 0;

    .concert-list {
      line-height: 1.3;
      padding: 0;
      margin-top: 0.5rem;
      box-shadow: 0 0 0 0.5rem $color-black;

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
        width: 7rem;
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
.no-concerts {
  padding: 1rem;

  p {
    margin: 1rem auto;
    text-align: center;
  }
}
</style>
