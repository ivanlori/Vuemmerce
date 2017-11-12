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
            <at-button type="primary">Add to Cart</at-button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'product-item-detail',
    props: ['id', 'img', 'price', 'description'],
    data() {
      return {
        sectionTitle: 'Product Detail',
        product: {
          title: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation',
          price: 50,
          image: 'https://placeimg.com/550/300/tech',
        },
      };
    },
  };
</script>

<style lang="scss" scoped>
  .row {
    margin-top: 20px;
  }
  .section-title {
    width: 100%;
  }
  .detail .title {
    font-size: 24px;
  }
  .detail .description {
    font-size: 20px;
  }
  .detail .price {
    font-size: 30px;
  }
</style>
