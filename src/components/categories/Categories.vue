<template>
  <div>
    <div class="card-image">
      <figure class="image is-4by3">
        <img :src="category.image" alt="Category image">
      </figure>
    </div>
    <div class="card-content">
      <div class="media">
        <div class="media-content">
          <p class="title is-4">{{ category.title }}</p>
        </div>
      </div>
      <div class="content is-clearfix">
        <p>{{ category.description }}</p>
      </div>
    </div>
    <router-link
      class="details"
      :to="{
        name: 'category-products-component',
        params: {
          id: category.id,
        }
      }"
    >
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'categories-component',
  props: {
    category: {
      type: Object,
      required: true
    }
  },
  
  data () {
    return {
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
 .select {
   position: absolute;
   right: 15px;
 }
</style>


