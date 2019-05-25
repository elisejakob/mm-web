<template>
  <section id="about" class="about">
    <h2 class="section-title">Our story</h2>
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
        <img src="http://marcusandmartinus.com/wp-content/uploads/2018/03/img_4646.jpg" />
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
              <li>Instagram: <a href="https://www.instagram.com/marcusgunnarsen/">@marcusgunnarsen</a></li>
            </ul>
          </div>
        </div>
      </div>
      <div class="half" id="martinus">
        <img src="http://marcusandmartinus.com/wp-content/uploads/2018/03/img_4646-1.jpg" />
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
              <li>Instagram: <a href="https://www.instagram.com/martinusgunnarsen/">@martinusgunnarsen</a></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'About',
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
  padding: 0;
  margin-bottom: 15rem;
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
.split {
  display: flex;
  align-items: flex-start;
  justify-content: space-around;
  width: 100%;
}
.half {
  width: 50%;
  text-align: right;
  position: relative;
  padding: 0 2rem 0 1rem;
  .m-info {
    position: absolute;
    z-index: 3;
    top: 90%;
    left: auto;
    right: 0;
    max-width: 90%;
  }
  &:first-of-type {
    text-align: left;
    padding: 0 1rem 0 2rem;

    .m-info {
      right: auto;
      left: 0;
    }
  }
  img {
    width: 100%;
    margin: 0 auto;
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
    margin: 1rem auto;
    padding: 0;
    max-width: 30rem;

    a {
      font-weight: 800;
    }
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
    display: inline-block;
    margin-left: 0.5rem;
    font-size: 0.8rem;
    vertical-align: middle;
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
  margin-bottom: 2rem;

  .read-more {
    padding-bottom: 0.5rem;
    margin-bottom: 0.5rem;
    text-decoration: underline;
    &:hover {
      color: $color-theme-light;
    }
  }
}
</style>
