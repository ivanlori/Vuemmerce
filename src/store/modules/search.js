const defaultSearchState = () => {
  return {
    searchParams: {
      query: '',
      searchInWishList: false
    },
    searchConrolsState: {
      queryStringInputText: '',
      searchInWishListCheckboxValue: false
    }
  }
};

const state = defaultSearchState();

const getters = {
  getSearchParams: state => state.searchParams,
  getSearchConrolsState: state => state.searchConrolsState
};

const mutations = {
  setSearchConrolsStateQueryStringInputText (state, payload) {
    state.searchConrolsState.queryStringInputText = payload;
  },

  setsearchConrolsStateSearchInWishListCheckboxValue (state, payload) {
    state.searchConrolsState.searchInWishListCheckboxValue = payload;
  },

  setSearchParams (state, payload) {
    state.searchParams = payload;
  },

  resetSearchState (state) {
    Object.assign(state, defaultSearchState());
  }
};

export default {
  state,
  getters,
  mutations
}
