<template>
  <div>
    <hero></hero>
    <news></news>
    <categories_list-container></categories_list-container>
  </div>
</template>

<script>
import CategoriesListContainer from '../categories/CategoriesListContainer';
import HeroSection from '../hero/Hero';
import VmNewsList from "../news/NewsListContainer";

export default {
  name: 'homepage-component',
  components: {
    'categories_list-container': CategoriesListContainer,
    'hero': HeroSection,
    'news': VmNewsList
  }
};
</script>
