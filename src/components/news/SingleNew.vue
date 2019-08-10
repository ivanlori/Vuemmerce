<template>
  <section class="container newItem">
    <h1 class="title">{{newItem.title}}</h1>
    <p class="description">
      {{newItem.description}}
    </p>

  <social-sharing v-bind:url="currentUrl" inline-template>
    <div>
      <network network="facebook">
        <i class="fa fa-fw fa-facebook"></i> Facebook
      </network>
      <network network="googleplus">
        <i class="fa fa-fw fa-google-plus"></i> Google +
      </network>
      <network network="linkedin">
        <i class="fa fa-fw fa-linkedin"></i> LinkedIn
      </network>
      <network network="pinterest">
        <i class="fa fa-fw fa-pinterest"></i> Pinterest
      </network>
      <network network="reddit">
        <i class="fa fa-fw fa-reddit"></i> Reddit
      </network>
      <network network="twitter">
        <i class="fa fa-fw fa-twitter"></i> Twitter
      </network>
      <network network="vk">
        <i class="fa fa-vk"></i> VKontakte
      </network>
      <network network="weibo">
        <i class="fa fa-weibo"></i> Weibo
      </network>
      <network network="whatsapp">
        <i class="fa fa-fw fa-whatsapp"></i> Whatsapp
      </network>
    </div>
  </social-sharing>
    
  </section>
</template>

<script>

var SocialSharing = require('vue-social-sharing');


export default {
  name: 'news_detail-id',
  components: {
    SocialSharing
  },
  computed: {
    currentUrl() {
      return `${this.$store.state.url}${this.$route.path}`
    },
    newItem({params}) {
      return this.$store.getters.getNewsById(this.$route.params.id);
    }
  },
};
</script>

<style lang="scss" scoped>
  .title {
    text-transform: capitalize;
  }

  .newItem {
    margin-bottom: 40px;
  }

  .description {
    margin-bottom: 30px;
  }


</style>

