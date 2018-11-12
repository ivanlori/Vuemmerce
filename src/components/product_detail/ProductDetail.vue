<template>
  <div class="section">
    <div class="card is-clearfix columns">
        <figure class="card-image is-480x480 column is-one-thirds">
          <img src="https://bulma.io/images/placeholders/480x480.png">
        </figure>
        <div class="card-content column is-two-thirds">
          <h2 class="title is-4">{{ title }}</h2>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
            Ut enim ad minim veniam, quis nostrud</p>
          <div>
            <i v-if="rating === 1" class="fa fa-star"></i>
            <i v-if="rating === 2" class="fa fa-star"></i>
            <i v-if="rating === 2" class="fa fa-star"></i>
            <i v-if="rating === 3" class="fa fa-star"></i>
            <i v-if="rating === 3" class="fa fa-star"></i>
            <i v-if="rating === 3" class="fa fa-star"></i>
            <i v-if="rating === 4" class="fa fa-star"></i>
            <i v-if="rating === 4" class="fa fa-star"></i>
            <i v-if="rating === 4" class="fa fa-star"></i>
            <i v-if="rating === 4" class="fa fa-star"></i>
            <i v-if="rating === 5" class="fa fa-star"></i>
            <i v-if="rating === 5" class="fa fa-star"></i>
            <i v-if="rating === 5" class="fa fa-star"></i>
            <i v-if="rating === 5" class="fa fa-star"></i>
            <i v-if="rating === 5" class="fa fa-star"></i>
            <p>{{ reviews > 0 ? `${reviews} Reviews` : 'No reviews' }}</p>
          </div>
          <span class="title is-3"><strong>{{ price }}&euro;</strong></span>
          <div class="is-pulled-right">
            <button class="button is-primary" v-if="!isAddedBtn" @click="addToCart(id)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(id)">{{ removeFromCartLabel }}</button>
          </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'product-detail-component',
  props: ['id', 'title', 'price', 'rating', 'reviews'],
  
  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart'
    };
  },

  computed: {
    isAddedBtn () {
      let product = this.$store.getters.getProductById(this.$props.id)
      return product.isAddedBtn;
    }
  },

  methods: {
    addToCart (id) {
      let data = {
        id: id,
        status: true
      }
      this.$store.commit('addToCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    
  }
};
</script>
