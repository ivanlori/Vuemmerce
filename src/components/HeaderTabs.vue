<template>
  <at-menu mode="horizontal" class="tabs">
    <at-menu-item name="1"><router-link to="deals">Deals</router-link></at-menu-item>
    <at-menu-item name="2"><router-link to="gift-cards">Gift Cards</router-link></at-menu-item>
    <at-menu-item name="4"><router-link to="sell">Sell</router-link></at-menu-item>
  </at-menu>
</template>

<script>
  export default {
    name: 'header-tabs',
  };
</script>

<style lang="scss" scoped>

</style>
