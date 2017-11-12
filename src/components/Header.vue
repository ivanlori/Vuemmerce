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

<script src="./script/header.js"></script>

<style lang="scss" scoped src="./style/header.scss" />
