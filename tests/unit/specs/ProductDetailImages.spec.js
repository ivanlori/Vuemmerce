import { shallowMount, mount } from "@vue/test-utils";
import component from "../../../src/components/product_detail/ProductDetailImages.vue";

const localVue = global.newVueInstance();

describe('ProductDetailImages.vue', async () => {
  it('start mount', () => {
    const wrapper = shallowMount(component, { localVue });

    let element = wrapper.find('.carousel-placeholder');
    expect(element.is('div')).toBe(true);
  });

  it('async loading images', done => {
    const wrapper = mount(component, { localVue });

    setTimeout(() => {
        wrapper.vm.$nextTick(() => {
            expect(wrapper.vm.slides.length).toBeGreaterThan(0);
            done();
        })
    }, 2000);

  });
});
