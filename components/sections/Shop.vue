<template>
  <section id="shop" class="shop">
    <h2 class="section-title">Shop</h2>
    <div class="shop-list">
      <div v-for="(shopItem, index) in shopItems" :key="index" class="shop-item">
        <a :href="shopItem.productUrl" target="_blank">
          <img :src="shopItem.mainImage[0].productImage" alt="A black hoodie">
          <div class="shop-item-text">
            <h3>{{ shopItem.title }}</h3>
            <!--<p class="details">{{ shopItem.details }}</p>-->
            <!--<p class="price">{{ shopItem.price }}</p>-->
          </div>
        </a>
      </div>
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
          productUrl
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

  a {
    text-decoration: none;
  }

  img {
    width: 100%;
    transition: box-shadow 0.1s ease-in-out;
  }

  h3 {
    font-size: 1rem;
    margin: 0 auto .5rem;
  }

  .details {
    text-align: center;
    font-size: $font-s;
    line-height: 1.2;
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
