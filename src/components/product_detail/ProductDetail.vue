<template>
  <div class="container">
    <div class="box__section__title row">
      <h3><strong>{{ sectionTitle }}</strong></h3>
    </div>
    <div class="box__preview row">
      <div class="box__preview__img four columns"></div>
      <div class="box__preview__content eight columns">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span class="box__preview__content__price"><strong>{{ product.price }}&euro;</strong></span>
        <div class="u-pull-right row">
          <button class="btn btn-primary">Add to Cart</button>
        </div>
      </div>
    </div>
    <div class="box__details row">
      <div class="box__details__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>

<script src="./product-detail.js"></script>

<style src="./product-detail.scss" lang="scss" scoped></style>
