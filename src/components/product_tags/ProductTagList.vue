<template>
  <section class="tagList">
    <div v-for="tag in tags" :key="tag.id">
      <Tag :title="tag.title" :id="tag.id"/>
    </div>
  </section>
</template>

<script>
import Tag from './Tag.vue';

export default {
  name: 'ProductTagList',

  components: {
    Tag
  },

  props: {
    tags: {
      type: Array,
      default: () => [],
      required: true
    }
  }
}
</script>

<style scoped>
.tagList {
  display: flex;
  padding: 3rem 1.5rem;
}
</style>
