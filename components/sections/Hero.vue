<template>
  <section id="hero" class="hero">
    <!--<div class="video-wrapper">
      <iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/gRWRgFdhT-8" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>-->
    <div class="hero-media">
      <div class="logo"></div>
      <template>
        <img :src="home.mainImage[0].url" />
      </template>
      <div class="logo"></div>
    </div>
    <div class="hero-label" id="hero-more">
      <div class="hero-text">
        <h2 class="section-title">Soon</h2>
        <div class="info">
          Our new EP is out!
          <div class="read-more" @click="readMore('hero-more')">Listen</div>
        </div>
      </div>
      <p class="more">
        On <a href="#">Spotify</a>, <a href="#">Apple Music</a>, <a href="#">iTunes</a>, <a href="#">Tidal</a>
      </p>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'Hero',
  apollo: {
    home: gql`
    query {
      home: entry(title: "Home") {
        ... on Home {
          title
          mainImage {
            url
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
  width: 100%;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: left;

  &-media {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    .logo {
      width: 10%;
      height: 3rem;
      background: red;
    }
    img {
      width: 80%;
    }
  }

  .section-title {
    margin: 0;
    font-style: italic;
  }

  &-label {
    position: absolute;
    left: 0;
    top: 64%;
    z-index: 3;
    display: inline-block;
    background: $color-black;
    color: $color-white;
    padding: 0.5rem 1rem;
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
}
.video-wrapper {
  width: 100%;
  max-width: $width-l;
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
    color: $color-theme-light;
  }
}
.more {
  background: $color-theme-light;
  color: $color-black;
  position: absolute;
  left: 0;
  right: 0;
  bottom: -3.5rem;
  margin: 0;
  padding: 1rem;
  display: none;
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
