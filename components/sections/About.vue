<template>
  <section id="about" class="about">
    <h2 class="section-title">Our story</h2>
    <img :src="about.mainImage[0].url" class="section-image" alt="The boys in action" />
    <p class="lead">Marcus&amp;Martinus is the biggest pop phenomenon coming from Scandinavia in years. Their EP <em>SOON</em> is out now – representing the phase of being on their way forward and growing up together with their fans.</p>
    <p>By the age of 17, the twins from Norway are already established as successful artists in large parts of Europe. Their catchy pop music and magnetic stage presence is impossible not to like, which their ever growing fan base of MMers all over the world agrees on!</p>
    <div class="both" id="both">
      <div class="m-info">
        <p class="read-more" @click="readMore('both')">Read our full story</p>
        <div class="more">
          <p>The story about Marcus&amp;Martinus begins in 2002, when they were born on February 21st. Raised in the small town of Trofors in Northern Norway, they both enjoyed singing and entertaining from an early age. At the age of nine they wrote their first song <em>To Dråper Vann</em> and entered the Norwegian singing contest MGPjr in 2012. The boys charmed all of Norway, and ended up winning the contest live on national TV.</p>
          <p>Their debut album <em>Hei</em> included the massive hit song <em>Elektrisk</em>. The album holds the record of staying the longest on top 10 on the Norwegian charts, with more than 66 coherent weeks!</p>
          <p>As their fan base grew, both in Norway and abroad, Marcus&amp;Martinus released their first English album, named <em>Together</em>. The album marked the start of a new era in their career, and was followed by their first ever arena tour. The Together Tour sold out arenas in both Norway, Sweden, Denmark and Finland!</p>
          <p>In 2017, Marcus&amp;Martinus won <em>Artists of the year</em> at the prestigious awards Spellemann (the Norwegian Grammy), as the youngest artists ever, for the impressive year they’d had.</p>
          <p>Their third album <em>Moments</em> came in November 2017, and were followed by Marcus&amp;Martinus’ first ever European tour, Moments Tour, with 26 shows in 14 countries. Later in 2018 they got to tour together with their big idol, Jason Derulo, on his 2Sides Tour through Europe.</p>
          <p>Touring and meeting old and new fans is amongst Marcus&amp;Martinus’ definite favorite things to do, and there is no doubt that you will see more of them in the months to come.</p>
          <p>Don’t give up on your dreams, soon they might come true ❤️</p>
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
              <li>Height: Ca 181 cm</li>
              <li>Relationship status: Single</li>
              <li>Favorite football team: Manchester United</li>
              <li>How to tell him from Martinus: A little bit taller, and longer hair</li>
            </ul>
            <blockquote>
              I think "SOON" most of all means that we’re going somewhere. For me "SOON" is another step on the way to where we want to go, you know? Where we want to be in like a year, and what things we want to make happen. "SOON" means that something is changing. And change is good!
            </blockquote>  
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
              <li>Height: Ca 180 cm</li>
              <li>Relationship status: Single</li>
              <li>Favorite football team: Chelsea</li>
              <li>How to tell him from Marcus: A mole on the upper lip</li>
            </ul>
            <blockquote>
              When you say "SOON" you make a promise. It means you’re waiting for something, and sometimes "SOON" can’t come fast enough, right? I think it is a lot of hope in "SOON", because it means that something is happening.
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
      margin-bottom: 40rem;
    }
    .m-info {
      width: 100%;
    }
  }
}
</style>
