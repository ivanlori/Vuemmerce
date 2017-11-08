<template>
  <div class="row">
    <div class="col-md-7 product flex-center" v-for="product in productsList" :id="product.id">
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

<script>
  import ProductItemDetail from './ProductItemDetail';

  export default {
    name: 'products-item',
    components: {
      'product-item-detail': ProductItemDetail,
    },
    data() {
      return {
        id: '',
        productsList: [
          {
            id: 1,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 1',
            price: 50,
          },
          {
            id: 2,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 2',
            price: 35,
          },
          {
            id: 3,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 3',
            price: 110,
          },
          {
            id: 4,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 4',
            price: 340,
          },
          {
            id: 5,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 5',
            price: 10,
          },
          {
            id: 6,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 6',
            price: 500,
          },
          {
            id: 7,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 7',
            price: 340,
          },
          {
            id: 8,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 8',
            price: 10,
          },
          {
            id: 9,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 9',
            price: 500,
          },
          {
            id: 10,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 10',
            price: 340,
          },
          {
            id: 11,
            image: 'https://placeimg.com/300/150/tech',
            description: 'Product 11',
            price: 10,
          },
          {
            id: 12,
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
  .product {
    border: 1px solid #E7E7E7;
    width: 58px;
    padding-bottom: 10px;
    margin: 20px;
  }
  .description span {
    font-size: 20px;
  }
  .price span {
    font-size: 28px;
  }
</style>
