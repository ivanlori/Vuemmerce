<template>
  <div class="top-margin bottom-margin">
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
        <div class="is-pulled-left box1">
          <b-rate v-model="overallRating"
                  :icon-pack="packs"
                  :disabled="isDisabled"
                  size="is-small">
          </b-rate>
          <router-link class="rlink"
                       :to="{
                          name: 'product-reviews-component',
                          params: {
                            id: product.id
                          }
                       }">
            {{ textCountReviews }}
          </router-link>
        </div>
        <p class="is-pulled-right">
          <span class="title is-4"><strong>&euro; {{ product.price }}</strong></span>
        </p>
      </div>
      <div class="card-footer btn-actions">
        <div class="card-footer-item field is-grouped">
          <div class="buttons">
            <button class="button is-primary" v-if="!product.isAddedToCart" @click="addToCart(product.id, product.title)">{{ addToCartLabel }}</button>
            <button class="button is-text" v-if="product.isAddedToCart" @click="removeFromCart(product.id, false)">{{ removeFromCartLabel }}</button>
            <div>
              <button class="button is-small" :title="removeFromFavouriteLabel" v-show="product.isFavourite" @click="removeFromFavourite(product.id)">
                <span class="icon is-small">
                  <i class="fas fa-heart"></i>
                </span>
              </button>
              <button class="button is-small" :title="addToFavouriteLabel" v-show="!product.isFavourite" @click="saveToFavorite(product.id)">
                <span class="icon is-small">
                  <i class="far fa-heart"></i>
                </span>
              </button>
              <button class="button is-small" :title="addToCompareLabel" v-show="!product.isAddedToCompare" @click="addToCompare(product.id)">
                <span class="icon is-small">
                  <i class="far fa-chart-bar"></i>
                </span>
              </button>
              <button class="button is-small is-black" :title="removeFormCompareLabel"  v-show="product.isAddedToCompare" @click="removeFromCompare(product.id)">
                <span class="icon is-small">
                  <i class="fas fa-chart-bar"></i>
                </span>
              </button>
              <div class="select is-rounded is-small">
                <select @change="onSelectQuantity(product.id)" v-model="selected">
                  <option v-for="quantity in quantityArray" :value="quantity" :key="quantity">{{ quantity }}</option>
                </select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      class="details"
      :to="{
        path: '/product-detail',
        name: 'product-detail-component',
        params: {
          id: product.id,
          title: product.title,
          price: product.price,
          rating: product.ratings,
          reviews: product.reviews,
          category: product.category,
          isAddedBtn: product.isAddedBtn
        }
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'products-component',

  props: {
    product: {
      type: Object,
      required: true
    }
  },
  
  data () {
    return {
      addToCartLabel: 'Add to cart',
      viewDetailsLabel: 'Details',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      addToCompareLabel: 'Add to compare',
      removeFormCompareLabel: 'Remove from compare',
      addedToCart: 'added to cart',
      errorAddToCompare: 'only 4 or less products can add to compare',
      selected: 1,
      quantityArray: [],
      packs: 'fas',
      icons: 'star',
      isDisabled: true
    }
  },

  mounted () {
    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    if (this.$props.product.quantity > 1) {
      this.selected = this.$props.product.quantity;
    }
  },

  computed: {
    isUserLogged () {
      return this.$store.getters.isUserLoggedIn;
    },
    textCountReviews () {
      const count = this.$store.getters.getCountReviewsById(this.product.id);
      return count > 0 ? `${count} Reviews` : 'No product reviews';
    },
    overallRating () {
      return this.$store.getters.getOverallRatingProductById(this.product.id);
    },
    quantifyCompareItems () {
      return this.$store.getters.numbersOfCompareProducts
    }
  },

  methods: {
    addToCart (id, title) {
      let data = {
        id: id,
        status: true
      }
      this.$store.dispatch('addToCartAction', id).then(() => {
        this.$buefy.snackbar.open(`${title} ${this.addedToCart}`)
      })
    },
    removeFromCart (id) {
      let data = {
        id: id,
        status: false
      }
      this.$store.commit('removeFromCart', id);
      this.$store.commit('setAddedBtn', data);
    },
    saveToFavorite (id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit('addToFavourite', id);
      } else {
        this.$store.commit('showLoginModal', true);
      }
    },
    removeFromFavourite (id) {
      this.$store.commit('removeFromFavourite', id);
    },
    addToCompare (id) {
      if(this.quantifyCompareItems >= 4) {
        this.$buefy.snackbar.open(this.errorAddToCompare)
      }
      else {
        this.$store.commit('addProductToCompare', id);
      }
    },
    removeFromCompare (id) {
      this.$store.commit('removeProductFromCompare', id);
    },
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
    }
  }
}
</script>

<style lang="scss" scoped>
  .details {
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 1;

    &:hover {
      border: 1px solid #51bafc;
    }
  }
  .button,
  .select {
    z-index: 2;
  }
  
  .is-black {
    color: #fff;
    background-color: #000;
  }
  .select {
    position: absolute;
    right: 15px;
  }
  .box1 {
    position: relative;
    min-height: 50px;
  }
  .rlink,
  .rlinkk:hover,
  .rlink:focus,
  .rlink:active {
    padding: 0;
    background-color: transparent !important;
    position: absolute;
    top: 25px;
    left: 0;
    z-index: 1000;
    white-space: nowrap;
  }
</style>


