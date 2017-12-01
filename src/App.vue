<template>
  <div id="app">
    <header-menu></header-menu>
    <router-view />
    <footer-menu></footer-menu>
  </div>
</template>

<script>
  import HeaderMenu from './components/header/Header';
  import FooterMenu from './components/footer/Footer';

  export default {
    name: 'App',
    components: {
      'header-menu': HeaderMenu,
      'footer-menu': FooterMenu,
    },
  };
</script>
