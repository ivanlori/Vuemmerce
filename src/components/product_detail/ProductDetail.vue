<template>
  <section>
    <breadcrumbs-component :items="path" />
    <div class="skeleton" v-if="!isLoaded" ref="skeleton">Место для вашего красивого скелетона</div>
    <template v-else>
      <CategoriesNavigation
        class="class=column is-2 is-pulled-left is-desktop is-narrow"
        :id="category.id"
      ></CategoriesNavigation>
      <div class="section">
        <div class="card is-clearfix columns">
          <div class="columns column is-one-thirds is-multiline">
            <figure class="card-image is-480x480 column is-full">
              <img src="https://bulma.io/images/placeholders/480x480.png" />
            </figure>
            <div class="card-image is-480x480 column is-full">
              <product-detail-images-component v-bind:product-id="product.id"></product-detail-images-component>
            </div>
          </div>
          <div class="card-content column is-two-thirds">
            <div class="content">
              <div class="card-content__title">
                <h2 class="title is-4">{{ product.title }}</h2>
              </div>
              <div class="card-content__text">
                <p>{{ product.description}}</p>
              </div>
              <b-rate
                v-model="overallRating"
                :icon-pack="packs"
                :disabled="isDisabled"
                size="is-small"
              ></b-rate>
              <div class="card-content__reviews">
                <router-link
                  class="rlink"
                  :to="{
                              name: 'product-reviews-component',
                              params: {
                                id: product.id
                              }
                          }"
                >{{ textCountReviews }}</router-link>
              </div>
              <div class="card-content__price">
                <span class="title is-3">
                  <strong>{{ product.price }}&euro;</strong>
                </span>
              </div>
              <div class="btn-actions">
                <div class="field is-grouped">
                  <div class="buttons">
                    <button
                      class="button is-primary"
                      v-if="!product.isAddedToCart"
                      @click="addToCart(product.id, product.title)"
                    >{{ addToCartLabel }}</button>
                    <button
                      class="button is-text"
                      v-if="product.isAddedToCart"
                      @click="removeFromCart(product.id, false)"
                    >{{ removeFromCartLabel }}</button>
                    <div>
                      <button
                        class="button is-small"
                        :title="removeFromFavouriteLabel"
                        v-show="product.isFavourite"
                        @click="removeFromFavourite(product.id)"
                      >
                        <span class="icon is-small">
                          <i class="fas fa-heart"></i>
                        </span>
                      </button>
                      <button
                        class="button is-small"
                        :title="addToFavouriteLabel"
                        v-show="!product.isFavourite"
                        @click="saveToFavorite(product.id)"
                      >
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
                          <option
                            v-for="quantity in quantityArray"
                            :value="quantity"
                            :key="quantity"
                          >{{ quantity }}</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <template v-if="selectedTabIndex <= tabs.length && selectedTabIndex > 0">
                <tabs 
                  :tabs="tabs" 
                  :selectedIndex="selectedTabIndex" 
                  @click="tabChanged" />
                <div>{{ tabs[selectedTabIndex - 1].description }}</div>
              </template>
            </div>
          </div>
        </div>
      </div>

      <ProductTagList :tags="tags" />
      <div>
        <p class="title is-4" style="padding-left: 120px">Similar products:</p>
        <OtherProductComponent :category="product.category" />
      </div>
    </template>
  </section>
</template>

<script>
import BreadcrumbsComponent from "../Breadcrumbs";
import ProductDetailImagesComponent from "./ProductDetailImages";
import OtherProductComponent from "../other_product/OtherProduct";
import CategoriesNavigation from "../categories_nav/CategoriesNavigation";
import Tabs from "../tabs/Tabs";
import ProductTagList from '../product_tags/ProductTagList';

export default {
  name: "product-detail-component",

  components: {
    BreadcrumbsComponent,
    ProductDetailImagesComponent,
    OtherProductComponent,
    CategoriesNavigation,
    Tabs,
    ProductTagList,
  },

  data() {
    return {
      addToCartLabel: "Add to cart",
      removeFromCartLabel: "Remove from cart",
      addToFavouriteLabel: "Add to favourite",
      removeFromFavouriteLabel: "Remove from favourite",
      addedToCart: "added to cart",
      addToCompareLabel: 'Add to compare',
      removeFormCompareLabel: 'Remove from compare',
      errorAddToCompare: 'only 4 or less products can add to compare',
      product: {},
      tags:[],
      selected: 1,
      category: null,
      isLoaded: false,
      quantityArray: [],
      packs: "fas",
      icons: "star",
      isDisabled: true,
      tabs: [
        {
          title: "Description",
          description:
            "1Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          title: "Characteristics",
          description:
            "2Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        },
        {
          title: "Review",
          description:
            "3Lorem ipsum dolor sit amet, consectetur adipiscing elit"
        }
      ],
      selectedTabIndex: 0
    };
  },

  mounted() {
    let tabID = this.$route.params.tabid;

    if (typeof tabID != "undefined") {
      this.selectedTabIndex = parseInt(tabID);
    }

    for (let i = 1; i <= 20; i++) {
      this.quantityArray.push(i);
    }

    const loadingComponent = this.$buefy.loading.open({
      container: this.$refs.skeleton
    });

    this.$store
      .dispatch("pseudoFetchProduct", this.$route.params.id)
      .then(currentProduct => {
        this.product = currentProduct;
        this.selected = currentProduct.quantity;
        this.category = this.$store.getters.getCategoryById(
          currentProduct.category
        );
        this.tags = this.$store.getters.getTagsById(currentProduct.tags);
        this.isLoaded = true;

        loadingComponent.close();
      });
  },

  computed: {
    isAddedBtn() {
      return this.product.isAddedBtn;
    },
    path() {
      this.product = this.$store.getters.getProductById(this.$route.params.id);
      return [
        {
          text: "Home",
          to: { path: "/" }
        },
        {
          text: this.category ? this.category.title : "",
          to: {
            name: "category-products-component",
            params: {
              id: this.category ? this.category.id : 0
            }
          }
        },
        {
          text: this.product.title
        }
      ];
    },
    overallRating() {
      return this.$store.getters.getOverallRatingProductById(
        this.$route.params.id
      );
    },
    textCountReviews() {
      const count = this.$store.getters.getCountReviewsById(this.product.id);
      return count > 0 ? `${count} Reviews` : "No product reviews";
    },
    quantifyCompareItems () {
      return this.$store.getters.numbersOfCompareProducts
    }
  },

  methods: {
    addToCart(id, title) {
      let data = {
        id: id,
        status: true
      };
      this.$store.dispatch("addToCartAction", id).then(() => {
        this.$buefy.snackbar.open(`${title} ${this.addedToCart}`);
      });
    },
    removeFromCart(id) {
      let data = {
        id: id,
        status: false
      };
      this.$store.commit("removeFromCart", id);
      this.$store.commit("setAddedBtn", data);
    },
    onSelectQuantity(id) {
      let data = {
        id: id,
        quantity: this.selected
      };
      this.$store.commit("quantity", data);
    },
    saveToFavorite(id) {
      let isUserLogged = this.$store.state.userInfo.isLoggedIn;

      if (isUserLogged) {
        this.$store.commit("addToFavourite", id);
      } else {
        this.$store.commit("showLoginModal", true);
      }
    },
    removeFromFavourite(id) {
      this.$store.commit("removeFromFavourite", id);
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
    tabChanged(id) {
      this.selectedTabIndex = id;
      this.$router.push({
        name: "product-detail-component-tab",
        params: {
          id: this.$route.params.id,
          tabid: id
        }
      });
    }
  },
  metaInfo() {
    let title = 'Product';
    if (this.product && this.product.title) {
      title = this.product.title;
    }
    return {
      title: `Vuemmerce | ${this.product.title}`,
    };
  },
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

