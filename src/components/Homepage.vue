<template>
  <div class="container">
    <list-products></list-products>
  </div>
</template>

<script>
  import Products from './Products';

  export default {
    name: 'homepage',
    components: {
      'list-products': Products,
    },
  };
</script>

<style>

</style>
