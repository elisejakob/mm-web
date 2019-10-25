<template>
  <main class="site-main">
    <h1 class="section-title">Contact our team</h1>
    <ul class="person-list">
      <li v-for="(person, index) in contactPage.team" :key="index" class="person">
        <span class="person-title">{{ person.personTitle }}</span>
        <h2 class="person-name">{{ person.personName }}</h2>
        <a v-if="person.email" :href="`mailto:${person.email}`" target="_blank" class="person-link">{{ person.email }}</a>
        <a v-if="person.websiteUrl && person.websiteLinkText" :href="person.websiteUrl" target="_blank" class="person-link">{{ person.websiteLinkText }}</a>
      </li>
    </ul>
  </main>
</template>

<script>
import gql from 'graphql-tag'
export default {
  layout: 'single',
  apollo: {
    contactPage: gql`
    query {
      contactPage: entry(title: "Contact page") {
        ... on ContactPage {
          team {
            ... on TeamTeamMember {
              personName
              personTitle
              email
              websiteUrl
              websiteLinkText
            }
          }
        }
      }
    }`
  },
  head() {
    return {
      title: 'Marcus & Martinus: Contact'
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