<template>
  <section id="shop" class="shop">
    <h2 class="section-title">Shop</h2>
    <div class="shop-list">
      <a href="#" class="shop-item">
        <img src="https://cdn.shopify.com/s/files/1/1436/8724/products/mobilegreen.jpg?v=1540907157">
        <div class="shop-item-text">
          <h3>Mobile Cover 18´ | Green</h3>
          <p class="price">€15.00</p>
        </div>
      </a>
      <a href="#" class="shop-item">
        <img src="https://cdn.shopify.com/s/files/1/1436/8724/products/mobilegreen.jpg?v=1540907157">
        <div class="shop-item-text">
          <h3>Mobile Cover 18´ | Green</h3>
          <p class="price">€15.00</p>
        </div>
      </a>
      <a href="#" class="shop-item">
        <img src="https://cdn.shopify.com/s/files/1/1436/8724/products/mobilegreen.jpg?v=1540907157">
        <div class="shop-item-text">
          <h3>Mobile Cover 18´ | Green</h3>
          <p class="price">€15.00</p>
        </div>
      </a>
      <a href="#" class="shop-item">
        <img src="https://cdn.shopify.com/s/files/1/1436/8724/products/mobilegreen.jpg?v=1540907157">
        <div class="shop-item-text">
          <h3>Mobile Cover 18´ | Green</h3>
          <p class="price">€15.00</p>
        </div>
      </a>
    </div>
    <a class="button glowy">Visit our shop</a>
  </section>
</template>

<style lang="scss" scoped>
@import '@/assets/css/variables.scss';
.shop-list {
  display: flex;
  flex-wrap: wrap;
  max-width: $width-l;
  margin: 0 auto;
}
.shop-item {
  width: 25%;
  display: block;
  padding: 1rem;
  text-decoration: none;

  img {
    width: 100%;
  }

  h3 {
    font-size: 1rem;
    margin: 0;
  }

  .price {
    text-align: center;
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
