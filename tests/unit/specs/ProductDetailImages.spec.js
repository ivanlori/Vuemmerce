import { shallowMount, mount } from "@vue/test-utils";
import { createRenderer } from 'vue-server-renderer'
import component from "../../../src/components/product_detail/ProductDetailImages.vue";
import store from "../../../src/store";
import router from "../../../src/router";

const localVue = global.newVueInstance();

describe('ProductDetailImages.vue', async () => {
  it('start mount', () => {
    const wrapper = mount(component, {
        localVue,
        router,
        store,
        propsData: { slides: [], productId: 1 }
    });

    let element = wrapper.find('.hooper');
    expect(element.is('section')).toBe(true);
  });

   it('loading images', () => {
     const wrapper = mount(component, {
         localVue,
         router,
         store,
         propsData: { slides: [], productId: 1 }
         });
     expect(wrapper.vm.slides.length).toBeGreaterThan(0);
   });

   it('snapshot renderer test', () => {
    const renderer = createRenderer()
    const wrapper = mount(component, {
       localVue,
       router,
       store,
       propsData: { slides: [], productId: 1 }
    });
    renderer.renderToString(wrapper.vm, (err, str) => {
      if (err) throw new Error(err)
      expect(str).toMatchSnapshot()
    });
  });
});
