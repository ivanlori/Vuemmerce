<template>
  <div class="top-margin bottom-margin">
  
    <pagination-other-component :items="products">
      <template  slot="itemsOnPage"
                slot-scope="{ itemsOnPage: products }">
  
        <div class="columns is-centered is-multiline">
          <div class="card column is-one-quarter"
               v-for="product in products"
               :key="product.id">
            <products-component :product="product"></products-component>
          </div>
          <div class="section" v-if="products.length === 0">
            <p>{{ noProductLabel }}</p>
          </div>
        </div>
      </template>
    </pagination-other-component>
  </div>
</template>

<script>
import ProductsComponent from '../Products';

import PaginationOtherComponent from './PaginationOtherProduct'

export default {
  name: 'other-component',

  components: {
     ProductsComponent,
  
    'pagination-other-component': PaginationOtherComponent,
  
  },

  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  data () {
    return {
      noProductLabel: 'No product found in this category',
    };
  },

  computed: {
    category () {
      return this.$store.getters.getCategoryById(this.$route.params.id);
    },
    products () {
      return this.$store.state.products.filter(product => String(product.category) === String(this.$route.params.category) && String(product.id) != String(this.$route.params.id));
    },
    path () {
      return [
        {
          text: 'Home',
          to: { path: '/' }
        },
        {
           text: this.category.title,
        }
      ]
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