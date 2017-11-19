<template>
  <div class="row">
    <div class="four product columns" v-for="product in productsList" :id="product.id">
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
        <button type="primary">Add to Cart</button>
        <router-link :to="{ path: '/product-detail', name: 'product-item-detail', params: { id: product.id } }">
          <button type="secondary">Details</button>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script src="./products-list.js"></script>

<style lang="scss" scoped src="./products-list.scss" />
