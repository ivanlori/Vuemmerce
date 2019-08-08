<template>
  <div class="container news">
   <h1 class="title">News</h1>
    <div class="news-list">
      <div class="card column is-one-quarter" v-for="n in news" :key="n.id">
        <VmNewItem :newItem="n"></VmNewItem>
      </div>
    </div>
    <div class="all-news">
      <router-link to="/news">
        All news
      </router-link>
    </div>
    

        
      
      
    
    
  </div>
</template>

<script>

import VmNewItem from './NewItem';

export default {
  name: 'newsList',
  
  components: { VmNewItem },
  
  data () {
    return {
      id: '',
      noProductLabel: 'No product found',
      productsFiltered: []
    };
  },

  computed: {
    news () {
      return this.$store.state.news.slice(0, 3);
    }
  },

  methods: {
    
  }

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
