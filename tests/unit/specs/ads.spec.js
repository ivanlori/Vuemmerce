import { shallowMount, mount } from "@vue/test-utils";
import component from "../../../src/components/ads/ads.vue";

const localVue = global.newVueInstance();

describe('ads.vue', async () => {
  it('mounts without error', () => {
    const wrapper = mount(component, { localVue });

    let element = wrapper.find('.hooper');
    expect(element).toBeTruthy();

    let slides = wrapper.findAll('.hooper-slide.is-active');
    expect(slides.length).toBe(3);
    
    let navigation = wrapper.findAll('.hooper-navigation');
    expect(navigation).toBeTruthy();

    expect(wrapper.vm.slides.length).toBe(4);
  });
});
