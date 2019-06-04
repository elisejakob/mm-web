<template>
  <section id="about" class="about">
    <h2 class="section-title">Our story</h2>
    <img :src="about.mainImage[0].url" class="section-image" alt="The boys in action" />
    <p class="lead">Marcus&amp;Martinus is the biggest pop phenomenon coming from Scandinavia in years. Only 17 years old, the twins from Norway have already established themselves as successful artists in large parts of Europe. Their catchy pop music and magnetic stage presence is impossible not to like, which their ever growing fan base of MMers all over the world agrees on!</p>
    <p>Their third album «Moments» is out now – and on their first ever European tour, «Moments Tour» they are playing for sold out venues in a total of 14 different countries.</p>
    <div class="both" id="both">
      <div class="m-info">
        <p class="read-more" @click="readMore('both')">Read our full story</p>
        <div class="more">
          <p>Marcus&amp;Martinus are all about creating new moments together as brothers and with their fans – and their story has only just begun.</p>
        </div>
      </div>
    </div>
    
    <div class="split">
      <div class="half" id="marcus">
        <img :src="about.marcusPortrait[0].url" alt="Marcus looking cute" />
        <div class="m-info">
          <h3 class="name">Marcus</h3>
          <div class="read-more" @click="readMore('marcus')">Facts about Marcus</div>
          <div class="more">
            <ul class="facts">
              <li>Eyes: Brown</li>
              <li>Height: Ca 176 cm</li>
              <li>Relationship status: Single</li>
              <li>Favorite football team: Chelsea</li>
              <li>How to tell him from Marcus: A mole on the upper lip</li>
            </ul>
            <p>My favorite moments with our fans is always when we’re on stage, performing, and to see them smile and be happy because of us. That makes me extremely happy. When they sing along and go all crazy!</p>
            <p>My favorite moment of our career is the Voldsløkka-concert we had in Oslo, everything just felt so right from the beginning to the end and the crowd was amazing. And when we played in front of 70.000 people in Greece and the local police had to escort us out of the arena afterwards. That was pretty cool!</p>
            <ul class="social">
              <li>Instagram: <a href="https://www.instagram.com/marcusgunnarsen/" target="_blank">@marcusgunnarsen</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="half" id="martinus">
        <img :src="about.martinusPortrait[0].url" alt="Martinus looking cute" />
        <div class="m-info">
          <h3 class="name">Martinus</h3>
          <div class="read-more" @click="readMore('martinus')">Facts about Martinus</div>
          <div class="more">
            <ul class="facts">
              <li>Eyes: Brown</li>
              <li>Height: Ca 176 cm</li>
              <li>Relationship status: Single</li>
              <li>Favorite football team: Chelsea</li>
              <li>How to tell him from Marcus: A mole on the upper lip</li>
            </ul>
            <p>My favorite moments with our fans is always when we’re on stage, performing, and to see them smile and be happy because of us. That makes me extremely happy. When they sing along and go all crazy!</p>
            <p>My favorite moment of our career is the Voldsløkka-concert we had in Oslo, everything just felt so right from the beginning to the end and the crowd was amazing. And when we played in front of 70.000 people in Greece and the local police had to escort us out of the arena afterwards. That was pretty cool!</p>
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
            url
          }
          marcusPortrait {
            url
          }
          martinusPortrait {
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
.about {
  padding: 5rem 0 0;
  margin-bottom: 10rem;

  .section-image {
    margin: 1rem auto 2rem;
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
  ul {
    font-weight: 800;
    list-style: none;
    margin: 1rem 0;
    padding: 0;
    max-width: 30rem;

    a {
      font-weight: 800;
    }
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
    color: $color-theme-light;
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
      color: $color-theme-light;
      border-color: $color-theme-light;
    }
  }

  &.visible {
    .read-more {
      color: $color-theme-light;
      border-color: $color-theme-light;
    }
  }
}

@media (max-width: $media-s) {
  .about {
    padding: 5rem 1rem 0;
  }
  .half {
    &.visible {
      margin-bottom: 40rem;
    }
    .m-info {
      width: 100%;
    }
  }
}
</style>
