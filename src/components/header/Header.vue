<template>
  <div class="container-fluid">
    <div class="row">
      <div class="container box__header">
        <div class="box__header__logo two columns">
          <h1 class="text-center"><router-link to="/">Vuemmerce</router-link></h1>
        </div>
        <div class="box__header__search text-center six columns">
          <form>
            <select>
              <option>All</option>
              <option>Cat 1</option>
              <option>Cat 2</option>
            </select>
            <input class="search-input u-full-width"placeholder="Search..."/>
            <i class="ion-ios-search"></i>
          </form>
        </div>
        <div class="box__header__menu four columns">
          <ul>
            <li>
              <span class="welcome-msg">Welcome to Vuemmerce</span>
              <br />
              <a class="access-link" href="#">Login/Register</a>
            </li>
            <li class="text-center">
              <i class="ion-ios-person"></i>
            </li>
            <li class="text-center">
              <i class="ion-ios-cart-outline"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./header.js"></script>

<style lang="scss" scoped src="./header.scss" />
