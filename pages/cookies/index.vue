<template>
  <main class="site-main">
    <h1 class="section-title">{{ cookies.title }}</h1>
    <p class="lead">
      {{ cookies.lead }}
    </p>
    <div v-html="cookies.bodyText.content"></div>
  </main>
</template>

<script>
import gql from 'graphql-tag'
export default {
  layout: 'single',
  head() {
    return {
      title: 'Marcus & Martinus: Cookies'
    }
  },
  apollo: {
    cookies: gql`
    query {
      cookies: entry(title: "Cookies") {
        ... on Cookies {
          title
          lead
          bodyText {
            content
          }
        }
      }
    }`
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-main {
  position: relative;
  padding: 0 1rem;
}
.section-title {
  padding-top: 5rem;
}
</style>