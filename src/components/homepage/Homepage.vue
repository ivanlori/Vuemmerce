<template>
  <div>
    <hero></hero>
    <products-list-container></products-list-container>
  </div>
</template>

<script>
import ProductsListContainer from '../products_list/ProductsListContainer';
import HeroSection from '../hero/Hero';

export default {
  name: 'homepage-component',
  components: {
    'products-list-container': ProductsListContainer,
    'hero': HeroSection
  }
};
</script>
