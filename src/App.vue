<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view />
    <footer-menu></footer-menu>
  </div>
</template>

<script>
  import Header from './components/header/Header.vue';
  import Footer from './components/footer/Footer.vue';

  export default {
    name: 'app',
    components: {
      'header-menu': Header,
      'footer-menu': Footer,
    },
  };
</script>
