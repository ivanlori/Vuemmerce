<template>
  <div class="container">
    <div class="section">
      <div v-if="quantifyCompareItems < 1">
        <h1>{{hasNoProducts}}</h1>
      </div>
      <div v-else-if="quantifyCompareItems > 4">
        <h1>{{toMuchMoreCompare}}</h1>
      </div>
      <div v-else>
        <div class="info">
          <div class="compare-cols" >
            <div class="compare" v-for="product in products" :key="product.id">
              <div class="compare-img">
                <img :src="product.images[0].src" :alt="product.title">
              </div>
              <div class="compare-name">
                <router-link class="rlink"
                       :to="{
                          name: 'product-detail-component',
                          params: {
                            id: product.id
                          }
                       }">
                  {{product.title}}
                </router-link>
              </div>
              <div class="compare-price">
                {{product.price}} $
              </div>
              <div class="compare-desc">
                {{product.description}}
              </div>
              <div class="compare-rate">
                <b-rate
                        v-model="product.ratings"
                        :icon-pack="packs"
                        :disabled="isDisabled"
                        size="is-small"
                ></b-rate>
              </div>
               <div class="compare-cart">
                <button
                        class="button is-primary"
                        v-if="!product.isAddedToCart"
                        @click="addToCart(product.id, product.title)"
                >{{ addToCartLabel }}
                </button>
                <button
                        class="button is-text"
                        v-if="product.isAddedToCart"
                        @click="removeFromCart(product.id, false)"
                >{{ removeFromCartLabel }}
                </button>
              </div>
              <div class="compare-comp">
                <button class="button is-small is-black" :title="removeFormCompareLabel" v-show="product.isAddedToCompare" @click="removeFromCompare(product.id)">
                  <span class="icon is-small">
                    <i class="fas fa-chart-bar"></i>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: 'compare-component',

    data () {
      return {
        toMuchMoreCompare: 'only 4 or less products can add to compare',
        hasNoProducts: 'have not products to compare',
        removeFromCartLabel: 'Remove from cart',
        addedToCart: 'added to cart',
        addToCartLabel: 'Add to cart',
        removeFormCompareLabel: 'Remove from compare',
        isDisabled: true,
        packs: 'fas'
      }
    },

    computed: {
      quantifyCompareItems () {
        return this.$store.getters.numbersOfCompareProducts
      },
      products() {
        return this.$store.getters.getCompareProducts
      },
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
      removeFromCompare (id) {
        this.$store.commit('removeProductFromCompare', id);
      },
    }
  }
</script>

<style lang="scss" scoped>

  .compare-cols {
    display: flex;
    width: 100%;
    margin-left: -15px;
    margin-right: -15px;
  }

  .compare {
    width: 25%;
    padding: 0 15px;
    text-align: center;

    & > div {
      padding: 5px 0;
    }

    img {
      max-width: 100%;
      height: auto;
    }

    .rate {
      justify-content: center;
      margin-bottom: 10px;
    }

    &-name {
      font-size: 125%;
      font-weight: 700;
    }

    &-price {
      font-size: 110%;
    }

    &-desc {
      height: 85px;
      overflow: hidden;
    }
  }
</style>