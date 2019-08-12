import { shallowMount } from "@vue/test-utils";
import component from "../../../src/components/search/Search";
import store from "../../../src/store";
import router from "../../../src/router";

const localVue = global.newVueInstance();


describe('Search.vue', async () => {
  it('mounts without error', () => {
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });

    let input = wrapper.find('input')
    expect(input).toBeTruthy()
    
    const checkbox = wrapper.find('b-checkbox-stub')
    expect(checkbox).toBeTruthy()
    expect(checkbox.text()).toBe('In wishlist')

    expect(wrapper.vm.$data.placeholder).toBe('Search...')
  });

  it('search() redirects to /search-results/ and expected store params assinged', async () => {
    const wrapper = shallowMount(component, {
      localVue,
      router,
      store
    });

    store.state.searchConrolsSate.queryStringInputText = 'Test'
    store.state.searchConrolsSate.searchInWishListCheckboxValue = true

    router.push({ name: "registerfinal" });
    expect(router.history.current.name).toBe("registerfinal");

    wrapper.vm.search();
    expect(router.history.current.name).toBe("search-results");
    expect(store.state.searchParams.query).toBe('Test')
    expect(store.state.searchParams.searchInWishList).toBe(true)

  });
});