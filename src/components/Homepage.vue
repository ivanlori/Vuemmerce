<template>
  <div class="container">
    <div class="row">
      <div class="section-title">
        <h3><strong>{{ sectionTitle }}</strong></h3>
        <hr />
      </div>
      <div class="container">
        <products-item></products-item>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductsItem from './ProductsItem';

  export default {
    name: 'homepage',
    components: {
      'products-item': ProductsItem,
    },
    data() {
      return {
        sectionTitle: 'Tech',
      };
    },
  };
</script>

<style scoped>
  .row {
    margin-top: 20px;
  }
  .section-title {
    width: 100%;
  }
</style>
