<template>
  <div>
    <header-component></header-component>
    <router-view></router-view>
    <footer-component></footer-component>
  </div>
</template>

<script>
  import Header from './components/header/Header';
  import Footer from './components/footer/Footer';

  export default {
    name: 'app',
    
    components: {
      'header-component': Header,
      'footer-component': Footer
    },
  };
</script>

<style lang="scss" src="./global-style.scss">

</style>
