<template>
  <section id="hero" class="hero">
    <div class="hero-media">
      <div class="column">
        <Logo />
      </div>
      <template v-if="home.youtube">
        <div class="video-wrapper">
          <iframe width="560" height="315" :src="`https://www.youtube-nocookie.com/embed/${home.youtube.split('=').pop()}?autoplay=1?controls=0`" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope;" allowfullscreen></iframe>
        </div>
      </template>
      <template v-else>
        <img :src="home.mainImage[0].fullWidth" alt="The latest MM release" />
      </template>
      <div class="column">
        <Logo />
      </div>
    </div>
    <div v-for="(label, index) in home.topLabel" :key="index" class="hero-label" id="hero-more">
      <ShinyText class="before" :text="label.shinyText" :style="{ color: globals.colors.backgroundColor2.hex }" />
      <div class="hero-text">
        <h2 class="section-title">{{ label.heading }}</h2>
        <div class="info">
          {{ label.smallText }}
          <div class="read-more" @click="readMore('hero-more')">Listen</div>
        </div>
      </div>
      <div class="more" v-html="label.links.content" :style="{ background: globals.colors.backgroundColor1.hex }"></div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'
import Logo from '~/components/Logo.vue'
import ShinyText from '~/components/ShinyText.vue'

export default {
  name: 'Hero',
  components: {
    Logo,
    ShinyText
  },
  apollo: {
    home: gql`
    query {
      home: entry(title: "Home") {
        ... on Home {
          mainImage {
            fullWidth: url(transform: fullWidth)
          }
          youtube
          topLabel {
            ... on TopLabelTopLabel {
              shinyText
              heading
              smallText
              links {
                content
              }
            }
          }
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
  },
  methods: {
    readMore: function(name) {
      document.getElementById(name).classList.toggle('visible')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.hero {
  margin: 0 auto;
  padding-top: 0;
  text-align: left;

  &-media {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .column {
      width: 10%;
      height: 3rem;
      margin-top: 3.6rem;
      padding: 0 0 0 1rem;
      &:first-of-type {
        padding: 0 1rem 0 0;
        opacity: 0;
      }
    }
    img, .video-wrapper {
      width: 80%;
    }
    .video-wrapper {
      margin-top: 3.6rem;
    }
  }

  .section-title {
    margin: 0;
    font-style: italic;
  }

  &-label {
    position: absolute;
    left: 0;
    top: 73%;
    z-index: 3;
    display: inline-block;
    background: $color-black;
    color: $color-white;
    padding: 0.5rem 1rem;

    .before {
      text-transform: uppercase;
      letter-spacing: 0.1em;
      font-weight: 900;
      font-size: 1rem;
      color: $color-theme-light;
      text-shadow: 0.18em 0.16em 0 $color-black;
      position: absolute;
      top: -2rem;
      left: 4rem;
      transform: rotate(6deg);
    }
  }

  &-text {
    display: flex;
    align-items: flex-end;
    line-height: 1.3;

    .info {
      width: 6rem;
      margin-left: 1rem;
      padding: 0.5rem 0;
      text-align: right;
    }
  }

  @media (max-width: $media-s) {
    &-media {
      display: block;
      img, .video-wrapper {
        width: 100%;
      }
      .column {
        display: none;
        &:first-of-type {
          display: block;
          padding: 0 1rem;
          opacity: 1;
          width: 8rem;
          height: auto;
          margin: 3.5rem auto 1rem;
        }
      }
    }
    &-label {
      display: block;
      position: relative;
      width: 100%;

      .before {
        transform: rotate(-6deg);
        left: 1rem;
        top: -1rem;
      }
    }
    &-text {
      justify-content: center;
    }
    .section-title {
      font-size: 5rem;
    }
  }
}
.read-more {
  cursor: pointer;
  text-align: right;
  font-weight: 800;
  transition: all .2s ease-in-out;
  text-decoration: underline;

  &:after {
    content: "▼▼";
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    vertical-align: middle;
  }

  &:hover {
    opacity: .6;
  }
}
.more {
  background: $color-theme-light;
  color: $color-black;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -2.5rem;
  margin: 0;
  padding: 0.5rem 1rem;
  display: none;
  max-width: none;

  @media (max-width: $media-s) {
    text-align: center;
    width: 100%;
  }
}
.visible {
  .more {
    display: block;
  }
  .read-more {
    &:after {
      content: "▲▲";
    }
  }
}
</style>
