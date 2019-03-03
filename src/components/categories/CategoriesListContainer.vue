<template>
  <div class="columns is-centered is-multiline top-margin bottom-margin">
    <div class="card column is-one-quarter" v-for="category in categories" :key="category.id">
      <categories-component :category="category"></categories-component>
    </div>
    <div class="section" v-if="categories.length === 0">
      <p>{{ noCategoryLabel }}</p>
    </div>
  </div>
</template>

<script>
import CategoriesComponent from './Categories';

export default {
  name: 'categories-list-component',
  
  components: {
    'categories-component': CategoriesComponent
  },
  
  data () {
    return {
      noCategoryLabel: 'No category found',
    };
  },

  computed: {
    categories () {
      return this.$store.state.categories
    }
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
