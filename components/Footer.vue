<template>
  <footer class="site-footer">
    <a href="#" class="to-top">
      <div class="icon">🚀</div>
      To top
    </a>
    <nav class="footer-nav">
      <a href="https://www.mmstore.com/pages/privacy-policy">Cookies</a>
      <nuxt-link to="/contact">Contact our team</nuxt-link>
      <a href="https://jakobsenfrukt.no" class="credit">Website by JF&amp;G</a>
    </nav>
  </footer>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.site-footer {
  background: black;
  width: 100%;
  margin-top: 10rem;
  padding: 3rem 1rem 1rem;
  position: relative;
}
.to-top {
  display: block;
  text-decoration: none;
  text-transform: uppercase;
  font-weight: 700;
  letter-spacing: 0.05em;
  margin-bottom: 3rem;

  .icon {
    font-size: 3rem;
    width: 3rem;
    margin: 0 auto;
    transform: rotate(-43deg);
  }
}
.footer-nav {
  display: flex;

  a {
    display: inline-block;
    margin: 0 1rem;
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    font-style: italic;
    letter-spacing: 0.05em;

    &:hover {
      color: $color-theme-light;
    }

    &.credit {
      margin-left: auto;
    }
  }
}
</style>
