<template>
  <main class="site-main">
    <h1 class="section-title">Cookies</h1>
    <p class="lead">
      
    </p>
    <p>This website uses cookies. Cookies are tiny text files that are stored on your computer and record data about your activity and preferences. Most websites today use them. Cookies are optional and you can turn it on/off in your browser.<br /></p>
    <p>We use <a href="https://www.google.com/analytics/">Google Analytics</a> to keep track of how many people visit this website, where they come from, etc. Google Analytics does not identify individual users or associate your IP address with any other data held by Google.</p>
    <p>We also use <a href="https://www.facebook.com/business/learn/facebook-ads-pixel">Facebook Pixel</a> in order to give you as a visitors more relevant content and information, and to keep track of whether our ads are working. You might see advertisements from us on Facebook later on. We do not access data about your account or who you are.</p>
  </main>
</template>

<script>
export default {
  layout: 'single',
  head() {
    return {
      title: 'Marcus & Martinus: Cookies'
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