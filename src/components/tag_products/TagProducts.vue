<template>
  <div ref="loader" class="top-margin bottom-margin">
    <h2 class="title pageTitle">{{ title }}</h2>
    <breadcrumbs-component :items="path"/>
    <pagination-component :items="products">
      <template
          slot="itemsOnPage"
          slot-scope="{ itemsOnPage: products }"
      >

        <div class="columns is-centered is-multiline">
          <div
              class="card column is-one-quarter"
              v-for="product in products"
              :key="product.id"
          >
            <products-component :product="product"></products-component>
          </div>
          <div class="section" v-if="products.length === 0">
            <p>{{ noProductLabel }}</p>
          </div>
        </div>
      </template>
    </pagination-component>
  </div>
</template>

<script>
import CategoryProductsFilter from '../categories/CategoryProductsFilter';
import ProductsComponent from '../Products';
import BreadcrumbsComponent from '../Breadcrumbs';
import PaginationComponent from '../pagination/Pagination';
import CategoriesNavigation from '../categories_nav/CategoriesNavigation';

export default {
  name: "TagProducts",

  components: {
    CategoryProductsFilter,
    ProductsComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    CategoriesNavigation,
  },

  props: {
    id: String,
    title: String,
  },

  data() {
    return {
      noProductLabel: 'No product found in this category',
      products: [],
    };
  },

  methods: {
    pseudoLoadingPage() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.loader
      })
      this.$store.dispatch('pseudoFetchProductsByTag', this.$route.params.id)
          .then(products => {
            this.products = products;
            loadingComponent.close();
          })
    }
  },

  computed: {
    title() {
      return this.$store.getters.getAllTags.find(item => item.id === this.$route.params.id).title
    },

    path() {
      return [
        {
          text: "Home",
          to: {path: "/"},
        },
        {
          text: this.title,
        },
      ];
    },
  },

  watch: {
    $route(to, from) {
      this.pseudoLoadingPage()
    }
  },

  mounted() {
    this.pseudoLoadingPage();
  }
}
</script>

<style lang="scss" scoped>
.top-margin {
  margin-top: 10px;
}

.bottom-margin {
  margin-bottom: 10px;
}

.card {
  margin: 10px;
}

.pageTitle {
  margin-left: 20px;
}
</style>
