<template>
  <div ref="loader" class="top-margin bottom-margin">
    <breadcrumbs-component :items="path"/>
    <pagination-component :items="products">
      <template slot="itemsOnPage"
                slot-scope="{ itemsOnPage: products }">
        <div class='column is-2 is-pulled-left is-desktop is-narrow'>
          <categories-navigation   :id="id" />
          <category-products-filter />
        </div>

        <div class="columns is-centered is-multiline">
          <div class="card column is-one-quarter"
               v-for="product in products"
               :key="product.id">
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
import ProductsComponent from '../Products';
import BreadcrumbsComponent from '../Breadcrumbs'
import PaginationComponent from '../pagination/Pagination'
import CategoriesNavigation from '../categories_nav/CategoriesNavigation';
import CategoryProductsFilter from "./CategoryProductsFilter";
import brands from "../../store/modules/brands";

export default {
  name: 'products-list-component',

  components: {
    CategoryProductsFilter,
    ProductsComponent,
    BreadcrumbsComponent,
    PaginationComponent,
    CategoriesNavigation,
  },

  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },

  data () {
    return {
      noProductLabel: 'No product found in this category',
      products: []
    };
  },

  mounted() {
    this.pseudoLoadingPage()
  },

  computed: {
    category () {
      return this.$store.getters.getCategoryById(this.$route.params.id);
    },
    path () {
      return [
        {
          text: 'Home',
          to: { path: '/' }
        },
        {
          text: this.category.title,
        }
      ]
    }
  },

  watch: {
    $route(to, from) {
      this.pseudoLoadingPage()
    }
  },

  methods: {
    pseudoLoadingPage() {
      const loadingComponent = this.$buefy.loading.open({
        container: this.$refs.loader
      })

      this.$store.dispatch('pseudoFetchProductsWithFilter',
              {
                id: this.$route.params.id,
                priceFrom: this.$route.query.priceFrom,
                priceTo: this.$route.query.priceTo,
                brands: this.$route.query.brands
              }).then(products => {
        this.products = products;
        loadingComponent.close();
      });
    }
  },
  metaInfo() {
    let title = 'Category';
    if (this.category && this.category.title) {
      title = this.category.title;
    }
    return {
      title: `Vuemmerce | ${title}`,
    };
  },
};
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
</style>
