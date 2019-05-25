<template>
  <main class="site-main">
    <h1 class="section-title">Contact our team</h1>
    <ul class="person-list">
      <li v-for="person in people" :key="person.name" class="person">
        <span class="person-title">{{ person.title }}</span>
        <h2 class="person-name">{{ person.name }}</h2>
        <a v-if="person.link" :href="person.link.url" class="person-link">{{ person.link.text }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
export default {
  layout: 'single',
  data() {
    return {
      people: [
        {
          title: 'CEO M&M Artister AS',
          name: 'Kjell-Erik Gunnarsen'
        },
        {
          title: 'Business manager / PR',
          name: 'Marte Schei',
          link: {
            url: 'mailto:marte@anti.as',
            text: 'marte@anti.as'
          }
        },
        {
          title: 'Social media manager / PR',
          name: 'Kirsti Kristoffersen',
          link: {
            url: 'mailto:kirsti@anti.as',
            text: 'kirsti@anti.as'
          }
        },
        {
          title: 'Webshop',
          name: 'MMStore Support',
          link: {
            url: 'https://support.mmstore.com',
            text: 'Visit contact page'
          }
        },
        {
          title: 'Label',
          name: 'Leif Ribe',
          link: {
            url: 'mailto:leif.ribe@sonymusic.com',
            text: 'leif.ribe@sonymusic.com'
          }
        },
        {
          title: 'Booking Europe',
          name: 'Thomas Olavsen',
          link: {
            url: 'mailto:post@timeoutagency.no',
            text: 'post@timeoutagency.no'
          }
        }
      ]
    }
  },
  head() {
    return {
      title: 'Marcus & Martinus Contact'
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-main {
  position: relative;
}
.section-title {
  padding-top: 5rem;
}
.person-list {
  list-style: none;
  margin: 4rem auto;
  padding: 0 1rem;
  display: flex;
  flex-wrap: wrap;
  max-width: $width-l;
}
.person {
  width: 100%;
  margin-bottom: 4rem;

  &-title {
    font-size: 1.5rem;
    font-weight: 300;
    text-transform: uppercase;
  }
  &-name {
    font-size: 1.5rem;
    margin: 0;
    text-transform: none;
  }
  &-link {
    font-size: 1.5rem;
    font-weight: 300;
  }
}
</style>