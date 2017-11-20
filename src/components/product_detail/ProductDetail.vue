<template>
  <div class="container">
    <div class="row">
      <div class="section-title">
        <h3><strong>{{ sectionTitle }}</strong></h3>
        <hr />
      </div>
      <div class="col-md-24">
        <div class="row">
          <div class="col-md-12 image">
            <img :src="product.image" alt="" title="" />
          </div>
          <div class="col-md-12 detail">
            <h2 class="title">{{ product.title }}</h2>
            <p class="description">{{ product.description }}</p>
            <span class="price"><strong>{{ product.price }}&euro;</strong></span>
            <br />
            <button type="primary">Add to Cart</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script src="./product-detail.js"></script>

<style lang="scss" scoped src="./product-detail.scss"></style>
