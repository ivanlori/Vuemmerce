<template>
  <div class="columns is-centered is-multiline">
      <div class="card column is-one-quarter" v-for="product in productsList" :key="product.id">
        <div class="card-image">
          <figure class="image is-4by3">
            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image">
          </figure>
        </div>
        <div class="card-content">
          <div class="media">
            <div class="media-content">
              <p class="title is-4">{{ product.title }}</p>
            </div>
          </div>
          <div class="content is-clearfix">
            <p>{{ product.description }}</p>
            <div class="is-pulled-left">
              <i v-if="product.ratings === 1" class="fa fa-star"></i>
              <i v-if="product.ratings === 2" class="fa fa-star"></i>
              <i v-if="product.ratings === 2" class="fa fa-star"></i>
              <i v-if="product.ratings === 3" class="fa fa-star"></i>
              <i v-if="product.ratings === 3" class="fa fa-star"></i>
              <i v-if="product.ratings === 3" class="fa fa-star"></i>
              <i v-if="product.ratings === 4" class="fa fa-star"></i>
              <i v-if="product.ratings === 4" class="fa fa-star"></i>
              <i v-if="product.ratings === 4" class="fa fa-star"></i>
              <i v-if="product.ratings === 4" class="fa fa-star"></i>
              <i v-if="product.ratings === 5" class="fa fa-star"></i>
              <i v-if="product.ratings === 5" class="fa fa-star"></i>
              <i v-if="product.ratings === 5" class="fa fa-star"></i>
              <i v-if="product.ratings === 5" class="fa fa-star"></i>
              <i v-if="product.ratings === 5" class="fa fa-star"></i>
              <p>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</p>
            </div>
            <p class="is-pulled-right"><span class="title is-4"><strong>&euro; {{ product.price }}</strong></span></p>
          </div>
          <div class="card-footer btn-actions">
            <div class="card-footer-item">
              <button class="button is-primary">Add to cart</button>
              <router-link :to="{ path: '/product-detail', name: 'product-detail', params: { id: product.id } }">
                <button class="button is-primary is-inverted">Details</button>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import ProductDetail from '../product_detail/ProductDetail';

export default {
  name: 'products-list',
  
  components: {
    'product-detail': ProductDetail
  },
  
  data() {
    return {
      id: '',
      categoryTitle: 'Phone',
      productsList: [
        {
          id: 1,
          title: 'Product 1',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 3,
          reviews: 5
        },
        {
          id: 2,
          title: 'Product 2',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 5,
          reviews: 10
        },
        {
          id: 3,
          title: 'Product 3',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 2,
          reviews: 3
        },
        {
          id: 4,
          title: 'Product 4',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 1,
          reviews: 0
        },
        {
          id: 5,
          title: 'Product 5',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 4,
          reviews: 2
        },
        {
          id: 6,
          title: 'Product 6',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 5,
          reviews: 1
        },
        {
          id: 7,
          title: 'Product 7',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 50,
          ratings: 5,
          reviews: 7
        },
        {
          id: 8,
          title: 'Product 8',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 35,
          ratings: 3,
          reviews: 0
        },
        {
          id: 9,
          title: 'Product 9',
          description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
          price: 110,
          ratings: 4,
          reviews: 2
        },
      ],
    };
  },

};
</script>

<style lang="scss" scoped>
  .card {
    margin: 10px;
  }
</style>
