<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container">
        <div class="row flex-center no-gutter">
          <div class="col-md-4">
            <h1><router-link to="/">Vuemmerce</router-link></h1>
          </div>
          <div class="col-md-10 search-container">
            <form>
              <at-select class="select" v-model="selected" size="small">
                <at-option v-for="item in lists" :value="item.id">{{ item.category }}</at-option>
              </at-select>
              <input class="search-input" placeholder="Search..."/>
              <i class="icon icon-search"></i>
            </form>
          </div>
          <div id="user-menu" class="col-md-7 user-menu-container">
            <div id="account">
              <ul>
                <li>
                  <span class="welcome-msg">Welcome to Vuemmerce</span>
                  <br />
                  <a class="access-link" href="#">Login/Register</a>
                </li>
                <li>
                  <i class="icon icon-user"></i>
                </li>
                <li>
                  <at-badge :value="2">
                    <i class="icon icon-shopping-cart"></i>
                  </at-badge>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="container">
      <header-tabs></header-tabs>
    </div>
  </div>
</template>

<script>
  import HeaderTabs from './HeaderTabs';

  export default {
    name: 'search-menu',
    components: {
      'header-tabs': HeaderTabs,
    },
    data() {
      return {
        selected: 1,
        lists: [
          {
            id: 1,
            category: 'all',
          },
          {
            id: 2,
            category: 'Cat 1',
          },
          {
            id: 3,
            category: 'Cat 2',
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .row {
    padding: 10px 0;
    background: #339CDD;
  }
  h1 a {
    color: #fff;
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
    top: 15px;
    padding-left: 85px;
    padding-right: 35px;
    color: #3f536e;
    font-size: 12px;
    border: 1px solid #c5d9e8;
    border-radius: 20px;
    outline: none;
  }
  .user-menu-container li:nth-child(1) {
    float: left;
    display: inline;
    text-align: right;
    padding: 10px;
  }
  .user-menu-container li:nth-child(2) {
    border-right: 1px solid #fff;
    border-left: 1px solid #fff;
    width: 50px;
    display: inline;
    float: left;
    padding: 15px 0;
    margin: 0 10px;
    cursor: pointer;
  }
  .user-menu-container li:nth-child(3) {
    padding: 15px 0;
    margin: 0 20px;
    text-align: left;
    cursor: pointer;
  }
  .select {
    position: absolute;
    top: 20px;
    left: 5px;
    z-index: 1;
    border: 0;
    width: 0;
    color: #339CDD;
    font-weight: 600;
    font-size: 14px;
  }
  .welcome-msg,
  .access-link {
    color: #fff;
    text-align: right;
  }
  .access-link {
    font-weight: 600;
  }
  .icon {
    font-size: 27px;
  }
  .icon-search {
    position: absolute;
    top: 23px;
    right: 12px;
    font-size: 17px;
    font-weight: 600;
    color: #339CDD;
  }
  .icon-shopping-cart,
  .icon-user {
    color: #fff;
  }
</style>
