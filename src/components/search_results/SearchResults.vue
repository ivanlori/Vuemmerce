<template>
  <div class="top-margin bottom-margin">
    <breadcrumbs-component :items="path" />
    <div class="columns is-centered is-multiline ">
      <div class="card column is-one-quarter" v-for="product in products" :key="product.id">
        <products-component :product="product"></products-component>
      </div>
      <div class="section" v-if="products.length === 0">
        <p>{{ noProductLabel }}</p>
      </div>
    </div>
  </div>
</template>

<script>

import ProductsComponent from '../Products';
import BreadcrumbsComponent from '../Breadcrumbs';
import {mapMutations, mapGetters} from 'vuex';

export default {
  name: 'search-results-component',
  
  components: {
    ProductsComponent,
    BreadcrumbsComponent
  },
  
  data () {
    return {
      noProductLabel: 'No products found for this query',
    };
  },

  methods: {
    ...mapGetters (['getSearchParams', 'getProductsList']),
  },

  computed: {
    seachString () {
        return this.getSearchParams().query
    },
    searchInWishList () {
        return this.getSearchParams().searchInWishList
    },
    products () {
      return this.getProductsList().filter(p => {
          const reg = new RegExp(this.seachString, 'gi');
          return (reg.test(p.title) || reg.test(p.description)) && (!this.searchInWishList || p.isFavourite)
        });
    },
    path () {
      let path = [
        {
          text: 'Home',
          to: { path: '/' }
        }]

        path.push({
          text: 'Search results ' + (this.searchInWishList? '(wishlist)': '') + ' [' + this.seachString + ']',
        })
      return path
    }
  }

};
</script>

<style lang="scss" scoped>
  .top-margin {
    margin-top: 10px;
  }
  .bottom-margin {
    margin-bottom: 10px;
  }
  .card {
    margin: 10px;
  }
</style>
