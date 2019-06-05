<template>
  <section id="shop" class="shop">
    <h2 class="section-title">Shop</h2>
    <div class="shop-list">
      <a href="https://mmstore.com/collections/all-products3/products/hoodie-18-black" target="_blank" class="shop-item">
        <img src="/images/shop/hoodieblack.jpg">
        <div class="shop-item-text">
          <h3>Hoodie 18'</h3>
          <p class="details">Black</p>
          <p class="price">€15.00</p>
        </div>
      </a>
      <a href="https://mmstore.com/collections/all-products3/products/mobile-cover-18-yellow" target="_blank" class="shop-item">
        <img src="/images/shop/mobileyellow.jpg">
        <div class="shop-item-text">
          <h3>Mobile Cover 18'</h3>
          <p class="details">Yellow</p>
          <p class="price">€15.00</p>
        </div>
      </a>
      <a href="https://mmstore.com/collections/all-products3/products/tee-logo-grey" target="_blank" class="shop-item">
        <img src="/images/shop/teegrey.jpg">
        <div class="shop-item-text">
          <h3>T-shirt 18'</h3>
          <p class="details">Grey</p>
          <p class="price">€29.90</p>
        </div>
      </a>
      <a href="https://mmstore.com/collections/all-products3/products/track-pants-grey-18" target="_blank" class="shop-item">
        <img src="/images/shop/greypants.jpg">
        <div class="shop-item-text">
          <h3>Track pants 18'</h3>
          <p class="details">Grey</p>
          <p class="price">€35.00</p>
        </div>
      </a>
    </div>
    <a href="https://www.mmstore.com/" class="button glowy" target="_blank">Visit the MM Store</a>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.shop-list {
  display: flex;
  flex-wrap: wrap;
  max-width: $width-l;
  margin: 0 auto 2rem;
}
.shop-item {
  width: 25%;
  display: block;
  padding: 1rem;
  text-decoration: none;

  img {
    width: 100%;
    transition: box-shadow 0.1s ease-in-out;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  .details {
    text-align: center;
  }

  .price {
    text-align: center;

    display: none;
  }

  &:hover {
    img {
      box-shadow: 0 0 0.5rem $color-theme-light-2;
    }
    h3, .details, .price {
      color: $color-theme-light-2;
    }
  }
}
.button {
  display: block;
  width: $width-s;
  max-width: 100%;
  margin: 0 auto;
}

@media (max-width: $media-s) {
  .shop-item {
    width: 50%;
  }
}
</style>
