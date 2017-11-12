<template>
  <div class="container">
    <div class="row">
      <div class="section-title">
        <h3><strong>{{ sectionTitle }}</strong></h3>
        <hr />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'tab-sell',
  data() {
    return {
      sectionTitle: 'Sell',
    };
  },
};
</script>

<style lang="scss" scoped>
  .row {
    margin-top: 20px;
  }
  .section-title {
    width: 100%;
  }
</style>
