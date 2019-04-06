<template>
  <div class="section">
    <h3 class="title">{{ pageTitle }}</h3>
    <div class="columns is-centered is-multiline">
      <div class="card column is-one-quarter" v-for="product in productsInWishlist" :key="product.id">
        <products-component :product="product"></products-component>
      </div>
      <div class="section" v-if="productsInWishlist.length === 0">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>
import ProductsComponent from '../Products';
import { getByTitle } from '../../filters';

export default {
  name: 'wishlistPage',
  data () {
    return {
      pageTitle: 'Your Wishlist',
      noProductLabel: 'Your wishlist is empty'
    }
  },

  components: {
    'products-component': ProductsComponent
  },

  computed: {
    productsInWishlist () {
      if (this.$store.state.userInfo.hasSearched) {
        return this.getProductByTitle();
      } else {
        return this.$store.getters.productsAddedToFavourite;
      }
    }
  },

  methods: {
    getProductByTitle () {
      let listOfProducts = this.$store.getters.productsAddedToFavourite,
          titleSearched = this.$store.state.userInfo.productTitleSearched;
      
      return this.productsFiltered = getByTitle(listOfProducts, titleSearched);
    }
  }
}
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>


