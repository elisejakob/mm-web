<template>
  <section id="about" class="about">
    <h2 class="section-title">Our story</h2>
    <img :src="about.mainImage[0].fullWidth" class="section-image" alt="The boys in action" />
    <p class="lead">{{ about.lead }}</p>
    <div v-html="about.visibleText.content"></div>
    <div class="both" id="both">
      <div class="m-info">
        <p class="read-more" @click="readMore('both')">Read our full story</p>
        <div v-html="about.hiddenText.content" class="more"></div>
      </div>
    </div>
    
    <div class="split">
      <div class="half" id="marcus">
        <img :src="about.marcusPortrait[0].fullWidth" alt="Marcus looking cute" />
        <div class="m-info">
          <h3 class="name">Marcus</h3>
          <div class="read-more" @click="readMore('marcus')">Facts about Marcus</div>
          <div class="more">
            <div v-html="about.factsAboutMarcus.content" class="facts"></div>
            <blockquote>
              {{ about.quoteByMarcus }}
            </blockquote>  
            <ul class="social">
              <li>Instagram: <a href="https://www.instagram.com/marcusgunnarsen/" target="_blank">@marcusgunnarsen</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="half" id="martinus">
        <img :src="about.martinusPortrait[0].fullWidth" alt="Martinus looking cute" />
        <div class="m-info">
          <h3 class="name">Martinus</h3>
          <div class="read-more" @click="readMore('martinus')">Facts about Martinus</div>
          <div class="more">
            <div v-html="about.factsAboutMartinus.content" class="facts"></div>
            <blockquote>
              {{ about.quoteByMartinus }}
            </blockquote>
            <ul class="social">
              <li>Instagram: <a href="https://www.instagram.com/martinusgunnarsen/" target="_blank">@martinusgunnarsen</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  name: 'About',
  apollo: {
    about: gql`
    query {
      about: entry(title: "About") {
        ... on About {
          mainImage {
            fullWidth: url(transform: fullWidth)
          }
          lead
          visibleText {
            content
          }
          hiddenText {
            content
          }
          marcusPortrait {
            fullWidth: url(transform: fullWidth)
          }
          factsAboutMarcus {
            content
          }
          quoteByMarcus
          martinusPortrait {
            fullWidth: url(transform: fullWidth)
          }
          factsAboutMartinus {
            content
          }
          quoteByMartinus
        }
      }
    }`
  },
  methods: {
    readMore: function(name) {
      if (name === 'both' && !document.getElementById(name).classList.contains('visible')) {
        this.$store.dispatch('showGif', { image: '/gifs/small/selfie.gif', duration: 3000})
      }
      document.getElementById(name).classList.toggle('visible')
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.about {
  padding: 5rem 0 0;
  margin-bottom: 10rem;

  .section-image {
    margin: 0 auto;
  }

  @media (max-width: $media-s) {
    margin-bottom: 3rem;
  }
}
.name {
  font-size: 5rem;
  text-transform: uppercase;
  font-weight: 800;
  background: $color-black;
  color: $color-white;
  margin: 0;
  padding: 0 1rem;

  @media (max-width: $media-l) {
    font-size: 4rem;
  }
  @media (max-width: $media-m) {
    font-size: 3.5rem;
  }
  @media (max-width: $media-s) {
    font-size: 3rem;
  }
}
.half {
  .m-info {
    position: absolute;
    z-index: 3;
    top: 90%;
    left: auto;
    right: 0;
    width: 90%;
  }
  &:first-of-type {
    .m-info {
      right: auto;
      left: 0;
    }
  }
  .read-more {
    background: $color-white;
    color: $color-black;
    padding: 0.5rem 1rem;
  }
  .more {
    background: $color-black;
    color: $color-white;
    padding: 0.5rem 1rem;
    text-align: left;
  }

  p {
    margin: 1rem 0;
  }
}
.more {
  display: none;
}
.read-more {
  cursor: pointer;
  text-align: left;
  font-weight: 800;
  transition: all .2s ease-in-out;

  &:after {
    content: "▼▼";
    float: right;
  }

  &:hover {
    opacity: .6;
  }
}

.visible {
  margin-bottom: 25rem;
  .more {
    display: block;
  }
  .read-more {
    &:after {
      content: "▲▲";
    }
  }
}

.both {
  margin-bottom: 5rem;

  .read-more {
    padding-bottom: 0.25rem;
    margin-bottom: 1rem;
    border-bottom: 2px solid $color-white;
    &:hover {
      opacity: .6;
    }
  }

  &.visible {
    .read-more {
      opacity: .6;
    }
  }
}

blockquote {
  margin: 2rem auto;
  font-size: 1.25rem;
  line-height: 1.25;
  font-style: italic;
  font-weight: 300;
  &:before {
    content: "«";
  }
  &:after {
    content: "»";
  }
}

@media (max-width: $media-s) {
  .about {
    padding: 5rem 1rem 0;
  }
  .half {
    &.visible {
      margin-bottom: 1rem;
    }
    .m-info {
      width: 100%;
      position: relative;
    }
  }
}
</style>
