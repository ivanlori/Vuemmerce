<template>
  <nav class="breadcrumb" aria-label="breadcrumbs">
    <ul>
      <template v-for="(item, index) in items">
        <template v-if="index < items.length - 1">
          <li :key="index">
            <router-link :to="item.to" v-text="item.text"/>
          </li>
        </template>
        <template v-else>
          <li class="is-active" :key="index">
            <a href="javascript:void(0)" v-text="item.text"/>
          </li>
        </template>
      </template>
    </ul>
  </nav>
</template>
<script>
export default {
  name: 'breadcrumbs-component',
  props: {
    items: {
      type: Array,
      default: function () {
        return [{
          text: 'Home',
          to: { path: '/' }
        }]
      }
    }
  }
}
</script>

