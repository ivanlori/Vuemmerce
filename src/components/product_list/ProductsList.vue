<template>
  <div class="row">
    <div class="four block__product text-center columns" v-for="product in productsList" :id="product.id">
      <div class="block__product__img"></div>
      <div class="block__product__content">
        <div class="block__product__content__description">
          <span>
            <strong>{{ product.description }}</strong>
          </span>
        </div>
        <div class="block__product__content__price">
          <span>
            <strong>&euro; {{ product.price }}</strong>
          </span>
        </div>
        <div class="block__product__content__actions">
          <button class="btn btn-primary">Add to Cart</button>
          <router-link :to="{ path: '/product-detail', name: 'product-detail', params: { id: product.id } }">
            <button btn btn-secondary>Details</button>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./products-list.js"></script>

<style src="./products-list.scss" lang="scss" scoped></style>
