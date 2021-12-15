<template>
  <router-link
      class="tag is-primary is-large tagItem"
      :to="{
        name: 'TagProducts',
        params: {
          id: id,
          title: title
        }
      }"
  >
    {{ title }}
  </router-link>
</template>

<script>
export default {
  name: 'tag',

  props: {
    title: String,
    id: String
  }
}
</script>

<style scoped>
.tagItem {
  margin: 0 5px;
}

.tagItem:hover {
  text-decoration: none;
}
</style>
