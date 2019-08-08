<template>
  <div>
    <router-link v-bind:to="link">
      <div class="news-header">{{newItem.title}}</div>
    </router-link>
    <div class="news-date">{{date}}</div>
    

    
  </div>
</template>

<script>
export default {
  name: "newItem",
  props: ["newItem"],

  data() {
    return {
    
    };
  },

  mounted() {
    
  },

  computed: {
    link() {
      return `/news/${this.newItem.id}`;
    },
    date() {
      var date = new Date(this.newItem.date);
      var dd = date.getDate();
      var mm = date.getMonth() + 1;
      var yyyy = date.getFullYear();

      if (dd < 10) {
        dd = '0' + dd;
      } 
      
      if (mm < 10) {
        mm = '0' + mm;
      } 
      return dd + '.' + mm + '.' + yyyy;
    }
  },

  methods: {

  }
};
</script>

<style lang="scss" scoped>
  .news-header {
    font-size: 16px;
    font-weight: 900;
    text-transform: capitalize;
    margin-bottom: 16px;
  }

  .news-date {
    font-size: 10px;
    color: rgba(0, 0, 0, 0.4);
  }

</style>


