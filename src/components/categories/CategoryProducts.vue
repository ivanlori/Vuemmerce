<template>
  <div class="top-margin bottom-margin">
    <nav class="breadcrumb" aria-label="breadcrumbs">
      <ul>
        <li><router-link :to="{name: 'homepage-component'}">Home</router-link></li>
        <li class="is-active"><a>{{ category.title }}</a></li>
      </ul>
    </nav>
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

export default {
  name: 'products-list-component',
  
  components: {
    'products-component': ProductsComponent
  },

  props: ['id'],
  
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
      return this.$store.state.products.filter(product => String(product.category) === String(this.$route.params.id));
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
