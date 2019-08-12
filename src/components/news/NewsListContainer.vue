<template>
  <div class="container news">
   <h1 class="title">
     {{$t("news.title")}}
   </h1>
    <div class="news-list">
      <div class="card column is-one-quarter" v-for="n in news" :key="n.id">
        <VmNewItem :newItem="n"></VmNewItem>
      </div>
    </div>
    <div class="all-news">
      <router-link to="/news">
        {{$t("news.all")}}
      </router-link>
    </div>
  </div>
</template>

<script>

import VmNewItem from './NewItem';

export default {
  name: 'newsList',
  components: { VmNewItem },
  computed: {
    news () {
      const news = this.$store.state.news || [];
      return news && news.slice(0, 3);
    }
  },
};

</script>

<style lang="scss" scoped>
  .news {
    margin-bottom: 40px;
  }

  .news-list {
    display: flex;
    justify-content: space-between;
    
  }

  .title {
    text-align: center;
    margin-top: 20px;
  }
  .card {
    margin: 10px;
    
  }

  .all-news {
    margin-left: 10px;
  }
</style>
