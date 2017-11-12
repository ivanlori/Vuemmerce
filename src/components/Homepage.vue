<template>
  <div class="container">
    <div class="row">
      <div class="section-title">
        <h3><strong>{{ sectionTitle }}</strong></h3>
        <hr />
      </div>
      <div class="container">
        <products-list></products-list>
      </div>
    </div>
  </div>
</template>

<script>
  import ProductsList from './ProductsList';

  export default {
    name: 'homepage',
    components: {
      'products-list': ProductsList,
    },
    data() {
      return {
        sectionTitle: 'Tech',
      };
    },
  };
</script>

<style lang="scss" scoped>
  .row {
    margin-top: 20px;
  }
  .section-title {
    width: 100%;
  }
</style>
