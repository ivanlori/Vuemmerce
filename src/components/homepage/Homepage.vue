<template>
  <div>
    <VmHero></VmHero>
    <VmProductsList></VmProductsList>
  </div>
</template>

<script>
import VmProductsList from '../products_list/ProductsListContainer';
import VmHero from '../hero/Hero';

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero
  }
};
</script>
