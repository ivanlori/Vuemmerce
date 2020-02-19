<template>
  <section>
    <breadcrumbs-component :items="path"/>
    <div class="skeleton" v-if="!isLoaded" ref="skeleton">Место для вашего красивого скелетона</div>
    <template v-else>
      <categories_navigation class="column is-2 is-pulled-left is-desktop is-narrow" :id='category.id'></categories_navigation>
      <div class="section">
        <div class="card is-clearfix columns">
          <div class="columns column is-one-thirds is-multiline">
            <figure class="card-image is-480x480 column is-full">
              <img src="https://bulma.io/images/placeholders/480x480.png">
            </figure>
              <div class="card-image is-480x480 column is-full">
                <product-detail-images-component v-bind:product-id="product.id"></product-detail-images-component>
              </div>
            </div>
            <div class="card-content column is-two-thirds">
              <div class="card-content__title">
                <h2 class="title is-4">{{ product.title }}
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
                </h2>
              </div>
              <div class="card-content__text">
                <p>{{ product.description}}</p>
              </div>
              <div class="card-content__ratings" v-if="product.rating === 1">
                <i class="fa fa-star"></i>
              </div>
              <div class="card-content__ratings" v-else-if="product.rating === 2">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="card-content__ratings" v-else-if="product.rating === 3">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="card-content__ratings" v-else-if="product.rating === 4">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="card-content__ratings" v-else-if="product.rating === 5">
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
                <i class="fa fa-star"></i>
              </div>
              <div class="card-content__reviews">
                <div class="is-pulled-left">
                  <p><strong>{{ product.reviews > 0 ? `${product.reviews} Reviews` : 'No reviews' }}</strong></p>
                </div>
                <div class="select is-rounded is-small is-pulled-right">
                  <select @change="onSelectQuantity(product.id)" v-model="selected">
                    <option
                      v-for="(quantity, index) in this.product.images"
                      :value="quantity"
                      :key="index"
                    >{{ quantity }}</option>
                  </select>
                </div>
              </div>
              <div class="card-content__price is-pulled-left">
                <span class="title is-3"><strong>{{ product.price }}&euro;</strong></span>
              </div>
              <div class="card-content__btn is-pulled-right">
                <button class="button is-primary" v-if="!isAddedBtn" @click="addToCart(product.id, product.title)">{{ addToCartLabel }}</button>
                <button class="button is-text" v-if="isAddedBtn" @click="removeFromCart(product.id)">{{ removeFromCartLabel }}</button>
              </div>
          </div>
        </div>
      </div>
    </template>
  </section>
</template>

<script>
import BreadcrumbsComponent from '../Breadcrumbs'
import ProductDetailImagesComponent from './ProductDetailImages'
import CategoriesNavigation from '../categories_nav/CategoriesNavigation';

export default {
  name: 'product-detail-component',
  components: {
    BreadcrumbsComponent,
    ProductDetailImagesComponent,
    'categories_navigation': CategoriesNavigation,
  },
  data () {
    return {
      addToCartLabel: 'Add to cart',
      removeFromCartLabel: 'Remove from cart',
      addToFavouriteLabel: 'Add to favourite',
      removeFromFavouriteLabel: 'Remove from favourite',
      addedToCart: 'added to cart',
      product: {},
      selected: 1,
      category: null,
      isLoaded: false
    };
  },

  mounted() {
    const loadingComponent = this.$buefy.loading.open({
      container: this.$refs.skeleton
    })

    this.$store.dispatch('pseudoFetchProduct', this.$route.params.id).then(currentProduct => {
      this.product = currentProduct;
      this.selected = currentProduct.quantity;
      this.category = this.$store.getters.getCategoryById(currentProduct.category);
      this.isLoaded = true;
      loadingComponent.close();
    });
  },

  computed: {
    isAddedBtn () {
      return this.product.isAddedBtn;
    },
    // category () {
    //   return this.$store.getters.getCategoryById(this.product.category);
    // },
    path () {
      return [
        {
          text: 'Home',
          to: { path: '/' }
        },
        {
          text: this.category ? this.category.title : '',
          to: { 
            name: 'category-products-component', 
            params: {
              id: this.category ? this.category.id : 0
            } 
          }
        },
        {
          text: this.product.title,
        }
      ]
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
    onSelectQuantity (id) {
      let data = {
        id: id,
        quantity: this.selected
      }
      this.$store.commit('quantity', data);
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
    }
  }
};
</script>

<style lang="scss" scoped>
  .card-content {
    padding: 15px 10px 15px 0;

    &__text {
      margin: 15px 0;
    }
    &__reviews {
      display: inline-block;
      width: 100%;
      margin-bottom: 10px;
    }
  }
  .skeleton {
    width: 100vw;
    height: 40vw;
  }
</style>

