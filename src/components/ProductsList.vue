<template>
  <div class="row">
    <div class="col-md-7 product" v-for="product in productsList" :id="product.id">
      <div class="image">
        <img :src="product.image" alt="" title="" />
      </div>
      <div class="description">
        <span><strong>{{ product.description }}</strong></span>
      </div>
      <div class="price">
        <span><strong>&euro; {{ product.price }}</strong></span>
      </div>
      <div class="ratings">

      </div>
      <div class="btn-action">
        <at-button type="primary">Add to Cart</at-button>
        <router-link :to="{ path: '/product-detail', name: 'product-item-detail', params: { id: product.id } }">
          <at-button type="secondary">Details</at-button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src="./script/products-list.js"></script>

<style lang="scss" scoped src="./style/products-list.scss" />
