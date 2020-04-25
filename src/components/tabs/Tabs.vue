<template>
  <div class="tabs is-toggle">
    <ul class="_nomargin-left">
      <li 
        v-for="(tab, index) in tabs" 
        :key="index"
        :class="[{'is-active': index + 1 == selectedIndex }]"
        @click="raiseClick(index)"
      >
        <a>{{ tab.title }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "tabs",
  props: {
    tabs: Array,
    selectedIndex: Number
  },
  methods: {
    raiseClick(index) {
      this.$emit('click', index + 1)
    }
  }
};
</script>

<style scoped>
  ._nomargin-left {
    margin-left: 0;
  }
</style>