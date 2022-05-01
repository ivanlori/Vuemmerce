<template>
  <div v-if="!isDetailPage" class="m-4 p-4 text-center">
    <VmSearch></VmSearch>
  </div>
</template>

<script>
  import VmSearch from '../search/Search';

  export default {
    name: 'VmSubheader',

    components: {
      VmSearch
    },

    data () {
      return {
        isDetailPage: false
      }
    },

    updated () {
      let pathonly = location.pathname.substr(0, location.pathname.lastIndexOf("/"))

      if (pathonly.split('/')[2] === 'product_detail') {
        console.log('entro')
        this.isDetailPage = true
      } else {
        this.isDetailPage = false
      }
    },
  }
</script>
