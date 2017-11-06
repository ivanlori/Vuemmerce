<template>
  <div class="row at-row no-gutter flex-center">
    <div class="col-md-8">
      <h1>Vuemmerce</h1>
    </div>
    <div class="col-md-8 search-container">
      <form>
        <at-select class="select" size="small">
          <at-option value="1">Shenzhen</at-option>
          <at-option value="2">Guangzhou</at-option>
          <at-option value="3">Shanghai</at-option>
          <at-option value="4">Beijing</at-option>
          <at-option value="5">chengdu</at-option>
        </at-select>
        <input class="search-input" placeholder="Search..."/>
        <i class="icon icon-search"></i>
      </form>
    </div>
    <div id="user-menu" class="col-md-8">
      <div id="account">
        <span>Welcome to Vuemmerce</span>
        <a href="#">Login/Register</a>
      </div>
      <div>
        <i class="icon icon-shopping-cart"></i>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'search-menu',
  };
</script>

<style scoped>
  .row {
    padding: 10px 0;
    background: #00b0ff;
  }
  h1 {
    color: #000;
    font-size: 27px;
    line-height: 62px;
  }
  .search-container {
    position: relative;
  }
  .search-input {
    width: 100%;
    height: 34px;
    position: absolute;
    left: 0;
    top: 12px;
    padding-left: 85px;
    padding-right: 35px;
    color: #3f536e;
    font-size: 12px;
    border: 1px solid #c5d9e8;
    border-radius: 4px;
    outline: none;
  }
  .select {
    position: absolute;
    left: 0;
    z-index: 1;
    top: 16px;
    width: 0;
  }
  .icon-search {
    position: absolute;
    top: 21px;
    right: 12px;
    font-size: 17px;
  }
</style>
