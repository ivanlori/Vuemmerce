<template>
  <div>
    <hero></hero>
    <categories_list-container></categories_list-container>
  </div>
</template>

<script>
import CategoriesListContainer from '../categories/CategoriesListContainer';
import HeroSection from '../hero/Hero';

export default {
  name: 'homepage-component',
  components: {
    'categories_list-container': CategoriesListContainer,
    'hero': HeroSection
  }
};
</script>
