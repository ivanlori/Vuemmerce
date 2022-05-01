<template>
  <div>
    <VmHero />
    <VmSubheader />
    <VmProductsList />
  </div>
</template>

<script>
import VmProductsList from '@/components/products_list/ProductsListContainer';
import VmHero from '@/components/hero/Hero';
import VmSubheader from '@/components/subheader/Subheader'

export default {
  name: 'index',
  components: {
    VmProductsList,
    VmHero,
    VmSubheader
  }
};
</script>
