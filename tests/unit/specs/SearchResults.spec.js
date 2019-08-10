import { shallowMount } from "@vue/test-utils";
import component from "../../../src/components/search_results/SearchResults";
import store from "../../../src/store";
import initialState from "../../../src/initial-state.json";
import router from "../../../src/router";

const localVue = global.newVueInstance();

describe('SearchResults.vue', async () => {
  it('mounts without error', () => {
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });

    let input = wrapper.find('breadcrumbs-component')
    expect(input).toBeTruthy()

    let productsList = wrapper.find('div.columns')
    expect(productsList).toBeTruthy()
  });

  it('display all products for empty search query', async () => {
    global.clearWishList(store)
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });
    
    wrapper.vm.$store.commit('setSearchParams', {query: '', searchInWishList: false})
    expect(wrapper.findAll('products-component-stub').length).toBe(9)

    wrapper.vm.$store.commit('setSearchParams', {query: '', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(0)

    store.state.products[0].isFavourite = true
    wrapper.vm.$store.commit('setSearchParams', {query: '', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(1)
  });


  it('display all products for common search query', async () => {
    global.clearWishList(store)
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });
    
    wrapper.vm.$store.commit('setSearchParams', {query: 'Product', searchInWishList: false})
    expect(wrapper.findAll('products-component-stub').length).toBe(9)

    wrapper.vm.$store.commit('setSearchParams', {query: 'Product', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(0)

    store.state.products[0].isFavourite = true
    wrapper.vm.$store.commit('setSearchParams', {query: 'Product', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(1)
  });

  it('display all products for query given product', async () => {
    global.clearWishList(store)
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });
    
    wrapper.vm.$store.commit('setSearchParams', {query: 'Product 1', searchInWishList: false})
    expect(wrapper.findAll('products-component-stub').length).toBe(1)

    wrapper.vm.$store.commit('setSearchParams', {query: 'Product 1', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(0)

    store.state.products[0].isFavourite = true
    wrapper.vm.$store.commit('setSearchParams', {query: 'Product 1', searchInWishList: true})
    expect(wrapper.findAll('products-component-stub').length).toBe(1)
  });

});