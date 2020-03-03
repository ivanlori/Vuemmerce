<template>
  <div class = "field is-grouped">
    <div class="control has-icons-left">
      <input
        class="input is-rounded"
        type="text"
        v-model="query"
        :placeholder="placeholder"
        @keyup.enter="search"
      >
      <span class="icon is-small is-left">
        <i class="fas fa-search"></i>
      </span>
    </div>
    <b-checkbox class="is-small is-right" v-model="searchInWishList">In wishlist</b-checkbox>
  </div>
</template>

<script>
import { mapGetters, mapMutations } from 'vuex';

export default {
  name: 'search-component',

  data () {
    return {
      placeholder: 'Search...'
    }
  },

  computed: {
    query: {
      get () {
        return this.getSearchConrolsState().queryStringInputText
      },
      set (value) {
        this.setSearchConrolsStateQueryStringInputText(value)
      }
    },
    searchInWishList: {
      get () {
        return this.getSearchConrolsState().searchInWishListCheckboxValue
      },
      set (value) {
        this.setsearchConrolsStateSearchInWishListCheckboxValue(value)
      }
    }
  },

  methods: {
    ...mapGetters (['getSearchConrolsState']),
    ...mapMutations ([
      'setsearchConrolsStateSearchInWishListCheckboxValue',
      'setSearchConrolsStateQueryStringInputText',
      'setSearchParams'
    ]),
    search () {
      console.log({
        query: this.query,
        searchInWishList: this.searchInWishList
      });
      this.setSearchParams({
        query: this.query,
        searchInWishList: this.searchInWishList
      });
      this.$router.push({ path: '/search-results'});
    }
  }
}
</script>

