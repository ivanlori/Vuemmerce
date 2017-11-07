<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <div class="row">
          <div class="col-md-4">
            <ul>
              <li v-for="item in footerListOne">{{ item }}</li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul>
              <li v-for="item in footerListTwo">{{ item }}</li>
            </ul>
          </div>
          <div class="col-md-4">
            <ul>
              <li v-for="item in footerListThree">{{ item }}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'footer',
    data() {
      return {
        footerListOne: ['Link1', 'Link2', 'Link3'],
        footerListTwo: ['Link1', 'Link2', 'Link3'],
        footerListThree: ['Link1', 'Link2', 'Link3'],
      };
    },
  };
</script>

<style scoped>
  .container-fluid {
    border-top: 2px solid #000;
  }
</style>
