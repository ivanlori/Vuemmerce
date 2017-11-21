<template>
  <div class="container">
    <div class="box__section__title row">
      <h3><strong>{{ sectionTitle }}</strong></h3>
    </div>
    <div class="box__product row">
      <div class="box__product__img four columns"></div>
      <div class="box__product__content eight columns">
        <h2>{{ product.title }}</h2>
        <p>{{ product.description }}</p>
        <span class="box__product__content__price"><strong>{{ product.price }}&euro;</strong></span>
        <br />
        <button class="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  </div>
</template>

<script src="./product-detail.js"></script>

<style lang="scss" scoped src="./product-detail.scss"></style>
