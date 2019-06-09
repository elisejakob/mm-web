<template>
  <main class="site-main">
    <h1 class="section-title">Cookies</h1>
    <p class="lead">
      This website uses cookies. Cookies are tiny text files that are stored on your computer and record data about your activity and preferences. Most websites today use them. The use of cookies is optional and you can turn it on/off in your browser.
    </p>
    <p>We use <a href="https://www.google.com/analytics/">Google Analytics</a> to keep track of how many people visit this website, where they come from, etc. Google Analytics does not identify individual users or associate your IP address with any other data held by Google.</p>
    <p>We also use <a href="https://www.facebook.com/business/learn/facebook-ads-pixel">Facebook Pixel</a> in order to give you as a visitors more relevant content and information, and to keep track of whether our ads are working. You might see advertisements from us on Facebook later on. We do not access data about your account or who you are.</p>
    <p>We embed videos from <a href="https://policies.google.com/privacy">YouTube</a> and the audio player from <a href="https://www.spotify.com/no/legal/privacy-policy/">Spotify</a>, which use cookies to anonymously gather statistics on how you got there and what videos and songs you visited.</p>
    <p>We use <a href="https://mailchimp.com/legal/">Mailchimp</a> as our marketing platform. Your information is only transferred to Mailchimp if you sign up to our newsletter.</p>
    <p>You can read more about how these third party services process your information by clicking their respective links. Our webshop comes with a more elaborate privacy policy which you can read <a href="https://www.mmstore.com/pages/privacy-policy">here</a>.</p>
    <p>Thank you for visiting our website!</p>
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
  padding: 0 1rem;
}
.section-title {
  padding-top: 5rem;
}
</style>