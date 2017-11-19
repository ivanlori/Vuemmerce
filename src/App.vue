<template>
  <div id="app">
    <search-menu></search-menu>
    <router-view/>
    <footer-menu></footer-menu>
  </div>
</template>

<script>
  import SearchMenu from './components/header/Header';
  import Footer from './components/footer/Footer';

  export default {
    name: 'app',
    components: {
      'search-menu': SearchMenu,
      'footer-menu': Footer,
    },
  };
</script>

<style>

</style>
