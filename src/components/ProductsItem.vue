<template>
  <div class="row">
    <div class="col-md-8 flex-center" v-for="product in productsList">
      <div class="image">
        <img :src="product.image" alt="" title="" />
      </div>
      <div class="description">
        <span><strong>{{ product.description }}</strong></span>
      </div>
      <div class="price">
        <span>&euro; {{ product.price }}</span>
      </div>
      <div class="ratings">

      </div>
      <div class="btn-action">
        <at-button type="primary">Add to Cart</at-button>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'products-item',
    data() {
      return {
        productsList: [
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 1',
            price: 50,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 2',
            price: 35,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 3',
            price: 110,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 4',
            price: 340,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 5',
            price: 10,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 6',
            price: 500,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 7',
            price: 340,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 8',
            price: 10,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 9',
            price: 500,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 10',
            price: 340,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 11',
            price: 10,
          },
          {
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 12',
            price: 500,
          },
        ],
      };
    },
  };
</script>

<style scoped>
  .col-md-8 {
    margin-bottom: 20px;
  }
</style>
