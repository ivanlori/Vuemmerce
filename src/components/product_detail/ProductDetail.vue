<template>
  <div class="section">
    <div class="columns">
      <div class="column is-one-third">
        <figure class="levle-item image">
          <img src="https://placeimg.com/400/200/any">
        </figure>
      </div>
      <div class="column is-two-third">
        <h2 class="title is-4">{{ title }}</h2>
        <span class="title is-3"><strong>{{ price }}&euro;</strong></span>
        <div class="is-pulled-right">
          <button class="button is-primary" v-if="!isAddedBtn" @click="addToCart(id)">{{ addToCartLabel }}</button>
          <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(id)">{{ removeFromCartLabel }}</button>
        </div>
      </div>
    </div>
    <div class="box__details row">
      <div class="box__details__description">
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
          labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi
          ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum
          dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident,
          sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
      </div>
    </div>
  </div>
</template>l

<script>
export default {
  name: 'product-detail-component',
  props: ['id', 'title', 'price'],
  
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

<style lang="scss" scoped></style>
