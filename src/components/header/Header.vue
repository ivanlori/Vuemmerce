<template>
  <header class="container-fluid">
    <div class="row">
      <div class="container box__header">
        <div class="box__header__logo two columns">
          <h1 class="text-center">
            <router-link to="/">Vuemmerce</router-link>
          </h1>
        </div>
        <div class="box__header__search text-center six columns">
          <form>
            <select>
              <option>All</option>
              <option>Cat 1</option>
              <option>Cat 2</option>
            </select>
            <input type="search" class="search-input u-full-width" placeholder="Search..."/>
            <i class="ion-ios-search"></i>
          </form>
        </div>
        <div class="box__header__menu four columns">
          <ul class="u-pull-right">
            <li>
              <span class="welcome-msg text-right">Welcome to Vuemmerce</span>
              <br />
              <router-link class="access-link text-right" to="/register">Login/Register</router-link>
            </li>
            <li class="text-center">
              <router-link to="/login"><i class="ion-ios-person"></i></router-link>
            </li>
            <li class="text-center">
              <router-link to="/cart"><i class="ion-ios-cart-outline"></i></router-link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </header>
</template>

<script src="./header.js"></script>

<style src="./header.scss" lang="scss" scoped></style>
