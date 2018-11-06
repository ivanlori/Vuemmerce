<template>
  <div>
    <hero></hero>
    <products-list></products-list>
  </div>
</template>

<script>
import ProductsList from '../product_list/ProductsList';
import HeroSection from '../hero/Hero';

export default {
  name: 'homepage-component',
  components: {
    'products-list': ProductsList,
    'hero': HeroSection
  },
  
  data() {
    return {
      
    };
  },

  methods: {
    
  }
};
</script>

<style lang="scss" scoped>
</style>
