<template>
  <div class="m-4 p-4 text-center">
    <VmSearch></VmSearch>
  </div>
</template>

<script>
  import VmSearch from '../search/Search';

  export default {
    name: 'VmSubheader',

    components: {
      VmSearch
    }
  }
</script>
