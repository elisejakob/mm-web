<template>
  <section id="shop" class="shop">
    <h2 class="section-title">Shop</h2>
    <div class="shop-list">
      <a v-for="(shopItem, index) in shopItems" :key="index" href="https://mmstore.com/collections/all-products3/products/hoodie-18-black" target="_blank" class="shop-item">
        <img :src="shopItem.mainImage[0].productImage" alt="A black hoodie">
        <div class="shop-item-text">
          <h3>{{ shopItem.title }}</h3>
          <p class="details">{{ shopItem.details }}</p>
          <p class="price">{{ shopItem.price }}</p>
        </div>
      </a>
    </div>
    <a href="https://www.mmstore.com/" class="button glowy" target="_blank">Visit the MM Store</a>
  </section>
</template>

<script>
import gql from 'graphql-tag'

export default {
  computed: {
    shopItems: function() {
      return this.shop.splice(0, 4);
    }
  },
  apollo: {
    shop: gql`
    query {
      shop: entries(section:shop) {
    		... on Shop {
          title
          details
          price
          mainImage {
            productImage: url(transform: productImage)
          }
        }
      }
    }`
  }
}
</script>

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
      color: $color-theme-light;
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
