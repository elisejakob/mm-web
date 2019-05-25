<template>
  <section id="contact" class="contact">
    <h2 class="section-title">Contact</h2>
    <p>We love hearing from you! Send fandmail to:</p>
    <p class="address">
      M&amp;M<br />
      Sony Music Norway<br />
      Postboks 4334 Nydalen<br />
      0402 Oslo, Norway
    </p>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.contact {
  p {
    margin-bottom: 0;
  }
  .address {
    margin: 2rem auto;
    padding: 1.5rem;
    max-width: $width-m;
    text-transform: uppercase;
    font-size: 2rem;
    font-weight: bold;
    line-height: 1.3;
    background: $color-theme-light;
    color: $color-black;
    transform: rotate(-3deg);
  }
}
</style>
