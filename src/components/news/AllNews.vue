<template>
  <div class="section">
    <h3 class="title">{{title}}</h3>
    <ul>
      <li :key="newItem.id" v-for="newItem in news">
        <router-link :to='newsUrl(newItem.id)'>
          <span class="new-title">{{newItem.title}}</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>

export default {
  name: 'news-list',
  data () {
    return {
      title: this.$t("news.all")
    };
  },
  computed: {
    news() {
      return this.$store.state.news;
    },
  },
  methods: {
    newsUrl(id) {
      return `/news/${id}`;
    }
  },
  metaInfo: {
    title: 'Vuemmerce | News',
  },
}
</script>

<style lang="scss" scoped>
  .new-title {
    text-transform: capitalize;
  }
</style>


