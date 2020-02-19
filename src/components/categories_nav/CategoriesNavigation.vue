<template>
  <b-menu>
    <b-menu-list label="Categories">
      <div v-for="category in categories" :key="category.id">
        <router-link class="details" :to="getComponentLink(category.id)">
          <b-menu-item
            icon="information-outline"
            :label="category.title"
            :active="category.id == id"
          ></b-menu-item>
        </router-link>
      </div>
    </b-menu-list>
  </b-menu>
</template>

<script>
export default {
  name: "categories_navigation",
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      isActive: true
    };
  },
  computed: {
    categories() {
      return this.$store.state.categories;
    }
  },
  methods: {
    getComponentLink(id) {
      return {
        name: "category-products-component",
        params: {
          id
        }
      };
    }
  }
};
</script>
z