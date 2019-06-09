<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Contact</h2>
    <p>We love hearing from you! Send fanmail to:</p>
    <p class="address">
      M&amp;M<br />
      Sony Music Norway<br />
      Postboks 4334 Nydalen<br />
      0402 Oslo, Norway
    </p>
    <p>For other inquiries, please <nuxt-link to="/contact">contact our team</nuxt-link>.</p>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.contact {
  p {
    margin-bottom: 0;
    text-align: center;
  }
  .address {
    margin: 2rem auto;
    padding: 1.5rem;
    max-width: $width-m;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    text-align: left;
    line-height: 1.3;
    background: $color-theme-light;
    color: $color-black;
    transform: rotate(-3deg);

    @media (max-width: $media-s) {
      font-size: 1.25rem;
    }
  }
}
</style>
